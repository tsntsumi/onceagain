import SignUp from "@/components/Auth/SignUp";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "サインアップ | プログラマのワンスアゲンをAIオートメーションで応援するアリザ・アイデアル",
};

const SignupPage = () => {
  return (
    <>
      <Breadcrumb pageName="サインアップページ" />

      <SignUp />
    </>
  );
};

export default SignupPage;
