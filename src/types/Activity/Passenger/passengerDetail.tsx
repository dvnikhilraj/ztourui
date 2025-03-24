export interface PassengerDetail {
  title: string;
  firstName: string;
  lastName: string;
  age: string;
  type: "adult" | "child";
}
export interface FareDetails {
  totalAmount: number;
  currency: string;
  adultCount: number;
  childCount: number;
  activityName: string;
  activityDate: string;
}
export interface FareDetailsProps {
  fareDetails: {
    totalAmount: number;
    currency: string;
    adultCount: number;
    childCount: number;
    activityName: string;
    activityDate: string;
  };
}

export interface PolicyDetailsProps {
  policy: {
    dateFrom: string;
    dateTo: string;
    amount: number;
    currency: string;
  }[];
}

export interface PolicyDetail {
  dateFrom: string;
  dateTo: string;
  amount: number;
  currency: string;
  notes?: string[];
  isRefundable: boolean;
}

export interface ActivityPolicyDetailsProps {
  policy: PolicyDetail[];
  cancellationPolicy: {
    Policy: {
      DateFrom: string;
      DateTo: string;
      Gross_Price: number;
    }[];
  };
  grossCurrency: string;
  grossROE: number;
}
