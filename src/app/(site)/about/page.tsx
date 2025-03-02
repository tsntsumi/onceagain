import About from "@/components/About";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Team from "@/components/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "組織概要 | プログラマのワンスアゲンをAIオートメーションで応援するアリザ・アイデアル",
  description: "私たちアリザ・アイデアルについて",
};

const AboutPage = () => {
  return (
    <main>
      <Breadcrumb pageName="私たちについて" />
      <About />
      <Team />
    </main>
  );
};

export default AboutPage;
