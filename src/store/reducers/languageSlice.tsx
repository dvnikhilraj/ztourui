import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LanguageState {
  currentLanguage: {
    code: string;
    name: string;
  };
}

const initialState: LanguageState = {
  currentLanguage: {
    code: 'ro',
    name: 'Romanian'
  }
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<{ code: string; name: string }>) => {
      state.currentLanguage = action.payload;
    }
  }
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;