"use client";
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
import languageReducer from './reducers/languageSlice';
import currencyReducer from './reducers/currencySlice';
import companySettingsReducer from './reducers/companySettingsSlice';


const createNoopStorage = () => ({
  getItem: (_key: string) => Promise.resolve(null),
  setItem: (_key: string, value: any) => Promise.resolve(value),
  removeItem: (_key: string) => Promise.resolve(),
});


const storage = typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage();


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['language', 'currency','companySettings'],
};


const appReducer = combineReducers({
  language: languageReducer,
  currency: currencyReducer,
  companySettings: companySettingsReducer
});


const persistedReducer = persistReducer(persistConfig, appReducer);


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;