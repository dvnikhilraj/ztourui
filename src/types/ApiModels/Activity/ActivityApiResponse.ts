interface Component {
    ComponentName: string;
    ImagePath: string;
    ImageTag: string;
    Available: boolean;
  }
  
  interface ValidDay {
    DayName: string;
    IsValid: boolean;
  }
  
  interface ComponentDetail {
    Component: Component[];
  }
  
  interface Package {
    Idx: number;
    Provider: number;
    SupCode: string;
    PackageId: string;
    Name: string;
    DisplayName: string | null;
    PackageType: string;
    RegionId: string;
    RegionName: string;
    CountryId: string;
    CountryName: string;
    NoOfDays: string;
    Thumbnail: string;
    BigImage: string;
    GrossPrice: string;
    CompNet: string;
    CompGross: string;
    ShortDesc: string;
    ComponentCode: string;
    ComponentDetail: ComponentDetail;
    ValidDays: ValidDay[];
    Available: boolean;
    DefaultCity: string;
    SupplierEmail: string;
  }
  
  interface PackagesSearch {
    Currency: string;
    Total: number;
    Package: Package[];
  }
  
  interface SearchDetails {
    Error: null | string;
    Search: {
      Packages: PackagesSearch;
    };
  }
  
  interface Master {
    CountryCode: string;
    RegionCode: string;
    DateOfTravel: string;
    Duration: string;
    DepartureCity: string;
    Comp_Curr: string;
    LangCode: string;
    SessionId: string;
  }
  
  interface Authentication {
    AuthenticationKey: string;
    Channel: string;
    OnBehalfBooking: string;
    CompanyId: string;
    ServiceType: string;
    SubAgent: {
      Id: number;
      UserId: number;
      BranchId: number;
      SaBranchId: number;
    };
  }
  
  interface SearchResponse {
    Response: {
      Master: Master;
      Authentication: Authentication;
      ResponseDetails: SearchDetails;
    };
  }
  
  export type { SearchResponse, Package, Component, ValidDay };