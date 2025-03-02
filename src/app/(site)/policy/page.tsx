import Breadcrumb from "@/components/Common/Breadcrumb";
import Policy from "@/components/Policy";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "個人情報保護方針 | プログラマのワンスアゲンをAIオートメーションで応援するアリザ・アイデアル",
  description: "アリザ・アイデアルにおける個人情報保護について",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb pageName="個人情報保護方針ページ" />

      <Policy />
    </>
  );
};

export default ContactPage;
