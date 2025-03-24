interface ActivitySearchMaster {
  CityCode: string;
  CountryCode: string;
  FromDate: string;
  ToDate: string;
  Nationality: string;
  ResponseMode: string;
  Mode: string;
  CityName: string;
  CountryName: string;
  DisplayCountryCityName: string;
  LangCode: string;
  LanguageCode: string;
}

interface ActivitySearchAuthentication {
  AuthenticationKey: string;
  Channel: string;
  OnBehalfBooking: boolean;
  SubAgent: {
    Id: number;
    UserId: number;
    BranchId: number;
    SaBranchId: number;
  };
  CompanyId: string;
  ServiceType: string;
}

export interface ActivitySearchRequest {
  SearchRequest: {
    Master: ActivitySearchMaster;
    IP: string;
    UserAgent: string;
    Authentication: ActivitySearchAuthentication;
    Filter: {
      Name: string;
      IncludeTours: boolean;
      OnRequest: boolean;
      NoOfResults: string;
      Desc: boolean;
    };
    Adult: string;
    Child: string | null;
  };
}