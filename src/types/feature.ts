import type { JSX } from "react";

export type Feature = {
  id: number;
  icon: JSX.Element;
  title: string;
  paragraph: string | string[];
  btn: string;
  btnLink: string;
};
