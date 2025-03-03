import About from "@/components/About";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Team from "@/components/Team";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "組織概要 | プログラマのワンスアゲンをAIオートメーションで応援するアリザ・アイデアル",
  description: "私たちアリザ・アイデアルについて",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb pageName="私たちについて" />
      <About />
      <Team />
      <div className="container">
        <div className="w-full px-4 ">
          <div className="group mb-8 rounded-xl bg-white px-5 pb-10 pt-12 shadow-testimonial dark:bg-dark dark:shadow-none">
            <div className="relative z-10 mx-auto mb-5">

              <div className="-mx-4 flex flex-wrap items-center justify-center">
                ファウンダー堤紀久夫の
                <Link href="/blogs/strategy-of-skill-improvement" className="text-dark dark:text-white hover:opacity-70 underline">
                  プロフィール
                </Link>
                はこちら
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
