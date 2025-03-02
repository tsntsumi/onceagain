import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <section id="features" className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]">
      <div className="container">
        <SectionTitle
          subtitle="あなたが受け取る武器：AIオートメーション"
          title="なぜ今、AI オートメーションなのか？"
          paragraph="AI オートメーションは、ビジネスの生産性を向上させる、現代の OA です。今現在、ビジネスには必須となりつつあります。"
        />

        <div className="text-dark">
        <p className="my-2 text-justify">
          その市場規模は、全世界で150兆円と言われています。
          ということは、この波に乗ろうと多くの競合が参入してきます。
          早く始めましょう。
        </p>
        <p className="my-2 text-justify">
          規模が大きくて、競合が少ない市場。
          規模が小さくて、競合が多い市場。
          どちらの市場にチャンスがあるでしょうか？
        </p>
        </div>

        <div className="-mx-4 mt-12 flex flex-wrap lg:mt-20">
          {featuresData.map((feature, i) => (
            <SingleFeature key={i} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
