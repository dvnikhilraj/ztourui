export interface ActivityDetails {
  id : string;
  city : string;
  image : string;
  price : string;
  name: string;
  duration: string;
  displayCountryCityName: string;
  fromDate: string;
  minPrice: number;
  currency: string;
  images: string[];
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