import Signin from "@/components/Auth/SignIn";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "サインイン | プログラマのワンスアゲンをAIオートメーションで応援するアリザ・アイデアル",
};

const SigninPage = () => {
  return (
    <>
      <Breadcrumb pageName="サインインページ" />

      <Signin />
    </>
  );
};

export default SigninPage;
