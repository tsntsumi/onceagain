import About from "@/components/About";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Team from "@/components/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "About Us | アリザ・アイデアルは AI オートメーション・エージェンシーです",
  description: "アリザ・アイデアルは、AI オートメーションであなたの生産性向上をお手伝いします。",
};

const AboutPage = () => {
  return (
    <main>
      <Breadcrumb pageName="About Us" />
      <About />
      <Team />
    </main>
  );
};

export default AboutPage;
