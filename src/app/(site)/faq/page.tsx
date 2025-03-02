import Faq from "@/components/Faq";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "FAQ | プログラマのワンスアゲンをAIオートメーションで応援するアリザ・アイデアル",
  description: "AIオートメーションについての質問と回答をまとめました。",
};

const FaqPage = () => {
  return (
    <main>
      <Breadcrumb pageName="AIオートメーションFAQ" />
      <Faq />
    </main>
  );
};

export default FaqPage;
