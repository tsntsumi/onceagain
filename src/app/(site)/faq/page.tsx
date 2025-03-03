import Faq from "@/components/Faq";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "FAQ | プログラマのワンスアゲンをAIオートメーションで応援するアリザ・アイデアル",
  description: "AI事業化についての質問と回答をまとめました。",
};

const FaqPage = () => {
  return (
    <main>
      <Breadcrumb pageName="AI事業化FAQ" />
      <Faq />
    </main>
  );
};

export default FaqPage;
