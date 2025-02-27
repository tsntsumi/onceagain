import { TeamType } from "@/types/team";
import SectionTitle from "../Common/SectionTitle";
import SingleTeam from "./SingleTeam";

const teamData: TeamType[] = [
  {
    id: 1,
    name: "Alizza \"Ideal\"",
    designation: "上席セクレタリー",
    image: "/images/team/alizza-face.webp",
    facebookLink: "",
    twitterLink: "",
    instagramLink: "",
  },
  {
    id: 2,
    name: "堤 紀久夫",
    designation: "ファウンダー｜デベロッパー",
    image: "/images/team/kikuo-in-green.png",
    facebookLink: "",
    twitterLink: "",
    instagramLink: "",
  },
  {
    id: 3,
    name: 'Althea "Brilliant"',
    designation: "プロダクト・デザイナー",
    image: "/images/team/althea-ai.webp",
    facebookLink: "",
    twitterLink: "",
    instagramLink: "",
  },
  {
    id: 4,
    name: "Ayla \"Passionate\"",
    designation: "コンテンツ・ライター",
    image: "/images/team/ayla-ai.webp",
    facebookLink: "",
    twitterLink: "",
    instagramLink: "",
  },
];

const Team = () => {
  return (
    <section
      id="team"
      className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="mb-[60px]">
          <SectionTitle
            subtitle="私たちのチーム"
            title="私たちのチームを紹介します"
            paragraph="私たちは、AIとオートメーションの力でビジネスの効率化と成長を支援する専門チームです。最先端の技術と戦略を駆使し、企業の課題に最適なソリューションを提供します。AIをビジネスの味方にし、未来を共に創造しましょう。"
            width="640px"
            center
          />
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          {teamData.map((team, i) => (
            <SingleTeam key={i} team={team} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
