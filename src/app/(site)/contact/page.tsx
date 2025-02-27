import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "ご連絡ページ | アリザ・アイデアルは AI オートメーション・エージェンシーです",
  description: "アリザ・アイデアルとのコンタクト情報",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb pageName="ご連絡ページ" />

      <Contact />
    </>
  );
};

export default ContactPage;
