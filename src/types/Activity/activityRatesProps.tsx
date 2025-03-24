export interface ActivityRatesProps {
  tours: Array<{
    name: string;
    availability: string;
    dates: string[];
    grossPrice: number;
  }>;
  currency: string;
  onPolicyClick: () => void;
}
