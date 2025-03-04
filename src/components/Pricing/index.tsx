"use client";
import SectionTitle from "../Common/SectionTitle";
import PricingBox from "./PricingBox";
import { pricingData } from "@/stripe/pricingData";

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="relative z-20 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="mb-[60px]">
          <SectionTitle
            subtitle="サービス一覧"
            title="AI での自動化と事業化、そしてAI起業"
            paragraph="AIオートメーションと、仕事の生産性を向上させるエージェンシー事業、
                      そしてそれで起業するためのサービスと情報を提供しています。
                      今、AIオートメーションを導入する絶好のチャンス！"
            center
          />
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          {pricingData.map((product, i) => (
            <PricingBox key={i} product={product} />
          ))}     
        </div>
      </div>
    </section>
  );
};

export default Pricing;
