"use client";
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
import languageReducer from './reducers/languageSlice';
import currencyReducer from './reducers/currencySlice';
import companySettingsReducer from './reducers/companySettingsSlice';

// Create noopStorage for SSR
const createNoopStorage = () => ({
  getItem: (_key: string) => Promise.resolve(null),
  setItem: (_key: string, value: any) => Promise.resolve(value),
  removeItem: (_key: string) => Promise.resolve(),
});

// Use actual storage if window is available, otherwise use noopStorage
const storage = typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage();

// Configure persist for language and currency
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['language', 'currency','companySettings'],
};

// Define the root reducer first
const appReducer = combineReducers({
  language: languageReducer,
  currency: currencyReducer,
  companySettings: companySettingsReducer
});

// Create the persisted reducer
const persistedReducer = persistReducer(persistConfig, appReducer);

// Configure store
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

// Export types and hooks
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;