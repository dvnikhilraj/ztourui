export interface ActivityDetails {
  name: string;
  duration: string;
  displayCountryCityName: string;
  fromDate: string;
  toDate: string;
  minPrice: number;
  currency: string;
  images: Array<{ text: string }>;
  descriptions: Array<{
    type: string;
    text: string;
  }>;
  tours: Array<{
    name: string;
    availability: string;
    dates: string[];
    grossPrice: number;
  }>;
}