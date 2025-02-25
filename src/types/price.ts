export type Price = {
  id: string;
  unit_amount: number;
  actual_amount: number;
  nickname: string;
  category: string;
  trial: number;
  recomend: boolean,
  term: "Month" | "Year" | "Lifetime";
  offers: string[];
  cta: string;
};
