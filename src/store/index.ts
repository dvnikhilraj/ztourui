"use client";
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
import languageReducer from './reducers/languageSlice';

// Create noopStorage for SSR
const createNoopStorage = () => {
  return {
    getItem(_key: string) {
      return Promise.resolve(null);
    },
    setItem(_key: string, value: any) {
      return Promise.resolve(value);
    },
    removeItem(_key: string) {
      return Promise.resolve();
    },
  };
};

// Use actual storage if window is available, otherwise use noopStorage
const storage = typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage();

// Configure persist for language
const languagePersistConfig = {
  key: 'language',
  storage,
  whitelist: ['currentLanguage'],
};

// Create persisted reducers
const persistedLanguageReducer = persistReducer(languagePersistConfig, languageReducer);

// Combine all reducers
const rootReducer = combineReducers({
  language: persistedLanguageReducer,
  // Add other reducers here as needed
});

// Configure store
export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
      thunk: true,
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

// Create persistor
export const persistor = persistStore(store);

// Export types and hooks
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;