import Breadcrumb from "@/components/Common/Breadcrumb";
import Faq from "@/components/Faq";
import Pricing from "@/components/Pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "サービス一覧 | アリザ・アイデアルは AI オートメーション・エージェンシーです",
  description: "アリザ・アイデアルが提供するサービス・製品の一覧です",
};

const PricingPage = () => {
  return (
    <>
      <Breadcrumb pageName="サービス一覧" />
      <Pricing />
      <Faq />
    </>
  );
};

export default PricingPage;
