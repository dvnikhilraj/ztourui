import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface ChannelSetting {
  ChannelId: number;
  CompanyId: string;
  ChannelCode: string;
  ChannelName: string;
  TollFreeNo: string;
  ContactEmail: string;
  Address: string;
  Logo1: string;
  Logo2: string;
  BrandId: number;
  BrandName: string;
  IsAllowInstalment: boolean;
}

interface WebsiteSetting {
  WebsiteId: number;
  CompanyId: string;
  Domain: string;
  UrlType: string;
  CultureCode: string;
  CultureName: string;
}

interface CompanySettings {
  CompanyId: string;
  CompanyName: string;
  CSSBasePath: string;
  LanguageCode: string;
  CultureCode: string;
  CultureName: string;
  CompanyCurrency: string;
  DecimalPreference: number;
  IsMultiCurrencyBusiness: boolean;
  IsMultilingual: boolean;
  CompanyTimeZoneId: number;
  CompanyDateFormat: string;
  CompanyAddress: string;
  CompanyPhone1: string;
  CompanyEmail: string;
  CompanyWebsite: string;
  CompanyLogo: string;
  MultiLingualLanguages: string;
  ChannelSetting: ChannelSetting;
  WebsiteSetting: WebsiteSetting;
}

interface CompanySettingsState {
  data: CompanySettings | null;
  loading: boolean;
  error: string | null;
}

const initialState: CompanySettingsState = {
  data: null,
  loading: false,
  error: null
};

export const fetchCompanySettings = createAsyncThunk(
  'companySettings/fetch',
  async () => {
    try {
      const response = await fetch('https://uat.ztour-travel.ro/home/CommonCompSettings');
      if (!response.ok) {
        throw new Error('Failed to fetch company settings');
      }
      const data = await response.json();
      console.log("asdga"); 
      console.log(data);
      return data;
    } catch (error) {
      throw error;
    }
  }
);

const companySettingsSlice = createSlice({
  name: 'companySettings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCompanySettings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCompanySettings.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCompanySettings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred';
      });
  },
});

export default companySettingsSlice.reducer;