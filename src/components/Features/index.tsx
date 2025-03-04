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
          paragraph="AI オートメーションは、仕事の生産性を向上させる、現代の OA です。
                    今や仕事で OA を使うのが、当たり前になったように、
                    AI オートメーションも仕事には必須となりつつあります。
                    <br/>
                    今はもう、地方の会社でも OA を利用していないところはありません。
                    過去 OA 導入に乗り遅れた会社は、もう同じ過ちをするまいと思うでしょう。"
          center={true}
        />

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
