export type Price = {
  id: string;
  unit_amount: number;
  actual_amount: number;
  actual?: string | undefined;
  nickname: string;
  category: string;
  trial: number;
  recomend: string | undefined,
  term: "Month" | "Year" | "Lifetime";
  offers: string[];
  cta: string;
};
