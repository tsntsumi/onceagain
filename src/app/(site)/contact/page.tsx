import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "コンタクト | プログラマのワンスアゲンをAIオートメーションで応援するアリザ・アイデアル",
  description: "アリザ・アイデアルへの連絡先",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb pageName="コンタクトページ" />

      <Contact />
    </>
  );
};

export default ContactPage;
