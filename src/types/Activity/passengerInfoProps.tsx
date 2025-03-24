export interface CancellationPolicy {
  Policy: Array<{
    DateFrom: string;
    DateTo: string;
    Gross_Price: number;
  }>;
}

export interface ActivityInfo {
  Activity_Booking_RQ: [
    {
      SightSeeing: {
        CancellationPolicy: {
          Policy: CancellationPolicy[];
        };
      };
    }
  ];
}

export interface PassengerInfoProps {
  activityInfo: ActivityInfo;
  isRefundable: boolean;
  grossCurrency: string;
  grossROE: number;
}
