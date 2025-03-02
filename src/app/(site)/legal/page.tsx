import Breadcrumb from "@/components/Common/Breadcrumb";
import LegalNotice from "@/components/Legal";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "特定商取引法に基づく表記 | プログラマのワンスアゲンをAIオートメーションで応援するアリザ・アイデアル",
  description: "",
};

const LegalNoticePage = () => {
  return (
    <>
      <Breadcrumb pageName="特定商取引法に基づく表記" />

      <LegalNotice />
    </>
  );
};

export default LegalNoticePage;
