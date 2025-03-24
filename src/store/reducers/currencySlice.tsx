import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CurrencyState {
  currentCurrency: {
    code: string;
    name: string;
  };
}

const initialState: CurrencyState = {
  currentCurrency: {
    code: 'RON',
    name: 'Romanian Leu'
  }
};

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setCurrency: (state, action: PayloadAction<{ code: string; name: string }>) => {
      state.currentCurrency = action.payload;
    }
  }
});

export const { setCurrency } = currencySlice.actions;
export default currencySlice.reducer;