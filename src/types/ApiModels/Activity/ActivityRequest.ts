interface SearchRequestRoom {
    Adult: string;
    Child: string;
    Infant: string;
    ChildAge: number[];
  }
  
  interface SearchRequestMaster {
    CountryCode: string;
    RegionCode: string;
    DateOfTravel: string;
    Duration: string;
    DepartureCity: string;
    Mode: string;
    Comp_Curr: string;
    Agent_Curr: string;
    Gross_Curr: string;
    LangCode: string;
    IsTour: boolean;
    IsFlight: boolean;
    IsBus: boolean;
    SingleDestination: string;
    MultipleDestination: string;
  }
  
  interface SearchRequestAuthentication {
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
  
  interface SearchRequest {
    Request: {
      Master: SearchRequestMaster;
      Authentication: SearchRequestAuthentication;
      RequestDetails: {
        Search: {
          Rooms: {
            Room: SearchRequestRoom[];
          };
        };
        Filter: {
          Type: string;
          Deals: number;
          Recomendation: number;
        };
      };
    };
  }