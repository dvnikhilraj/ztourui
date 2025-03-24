export interface ActivityHeaderProps {
    activity: {
      name: string;
      duration: string;
      displayCountryCityName: string;
      fromDate: string;
      toDate: string;
      minPrice: number;
      currency: string;
    };
    onGotoElement: (elementId: string) => void;
    activeSection: string;
  }