import React from "react";
import ForgotPassword from "@/components/Auth/ForgotPassword";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "パスワードを忘れたら | プログラマのワンスアゲンをAIオートメーションで応援するアリザ・アイデアル",
};

const ForgotPasswordPage = () => {
  return (
    <>
      <Breadcrumb pageName="パスワードを忘れた場合" />
      <ForgotPassword />
    </>
  );
};

export default ForgotPasswordPage;
