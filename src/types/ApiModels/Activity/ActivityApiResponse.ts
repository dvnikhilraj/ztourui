interface Master {
  CityCode: string;
  CountryCode: string;
  FromDate: string;
  ToDate: string;
  Nationality: string;
  ResponseMode: string;
  Mode: string;
  AdditionalMarkup: string;
  CityName: string;
  CountryName: string;
  LanguageCode: string;
  LangCode: string;
}

interface Authentication {
  AuthenticationKey: string;
  Channel: string;
  OnBehalfBooking: string;
  SubAgent: {
    Id: string;
    UserId: string;
    BranchId: string;
    SaBranchId: string;
  };
  CompanyId: string;
  ServiceType: string;
}

interface Tour {
  IsAPI: boolean;
  Id: string;
  Code: string;
  Name: string;
  DisplayName: string;
  TypeCode: string;
  Duration: string;
  DurationHours: string;
  Avl: string;
  ROE: string;
  SuppPrice: string;
  SuppCurrency: string;
  CompNet: string;
  CompGross: string;
  EPDNet: string;
  EPDGross: string;
  AGNet: string;
  AGGross: string;
  SANet: string;
  SAGross: string;
  GrossPrice: string;
  ProcessToken: string;
  DateList: {
    Date: Array<{ Text: string }>;
  };
  CID: string;
  LoyaltyPoints: string;
}

interface SightSeeing {
  SightId: number;
  Code: string;
  Name: string;
  DisplayName: string;
  CityCode: string;
  CityName: string;
  Desc: string;
  Duration: string;
  DurationHours: string;
  Image: string;
  Type: string;
  Category: string;
  MinP: string;
  Token: string;
  Provider: string;
  CID: string;
  TrackingId: string;
  Tours: {
    Tour: Tour[];
  };
  LoyaltyPoints: string;
}

interface ActivityApiSearchResponse {
  SearchResponse: {
    Master: Master;
    Authentication: Authentication;
    SightSeeings: {
      SightSeeing: SightSeeing[];
      Currency: string;
      Total: number;
      TrackingId: string;
    };
  };
}

export type { ActivityApiSearchResponse, SightSeeing, Tour, Master, Authentication };