import { useSelector, useDispatch } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import { RootState } from '../store';
import { setLanguage } from '../store/reducers/languageSlice';
import { useTranslation } from 'react-i18next';
import '../../i18n';

export const useLanguage = () => {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  const [initialized, setInitialized] = useState(i18n.isInitialized);
  const currentLanguage = useSelector((state: RootState) => state.language.currentLanguage);

  useEffect(() => {
    if (!initialized) {
      i18n.on('initialized', () => {
        setInitialized(true);
      });
    }
    return () => {
      i18n.off('initialized');
    };
  }, [i18n, initialized]);

  useEffect(() => {
    if (initialized && currentLanguage) {
      i18n.changeLanguage(currentLanguage.code);
    }
  }, [currentLanguage, i18n, initialized]);

  const handleLanguageChange = useCallback(async (code: string, name: string) => {
    try {
      if (initialized) {
        await i18n.changeLanguage(code);
        dispatch(setLanguage({ code, name }));
      }
    } catch (error) {
      console.error('Error changing language:', error);
    }
  }, [dispatch, i18n, initialized]);

  return {
    currentLanguage,
    handleLanguageChange,
    isInitialized: initialized
  };
};