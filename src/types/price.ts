export type Price = {
  id: string;
  unit_amount: number;
  actual_amount: number;
  actual: string;
  nickname: string;
  category: string;
  trial: number;
  guarantee: number;
  recomend: string,
  subscription: "Month" | "Year" | "Lifetime";
  offers: string[];
  cta: string;
};
