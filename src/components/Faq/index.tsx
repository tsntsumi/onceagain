import SectionTitle from "../Common/SectionTitle";
import SingleFaq from "./SingleFaq";

const Faq = () => {
  return (
    <section id="faq" className="relative z-20 overflow-hidden bg-white pb-8 pt-20 dark:bg-dark lg:pb-[50px] lg:pt-[120px]">
      <div className="container">
        <SectionTitle
          subtitle="FAQ"
          title="ご質問はありませんか？"
          paragraph="AI オートメーションに関するよくある質問をまとめました"
          width="640px"
          center
        />

        <div className="-mx-4 mt-[60px] flex flex-wrap lg:mt-20">
          <div className="w-full px-4 lg:w-1/2 2xl:w-1/3">
            <SingleFaq
              question="AI オートメーションとは何ですか？"
              answer="AIオートメーションとは、AIを活用して、業務プロセスやタスクを自動化することを指します。
                        これにより、効率性の向上や人的エラーの削減が期待できます。<br/>
                        【AIエージェンシーのベネフィット】: AIオートメーションのニーズは急速に拡大しており、
                        エージェンシーとしてこの分野に参入することで、
                        高い需要のある市場でサービスを提供できます。"
            />
            <SingleFaq
              question="AIオートメーションを導入するメリットは何ですか？"
              answer="業務の効率化、コスト削減、作業の正確性向上、そして従業員がより戦略的な業務に集中できるようになるといったメリットがあります。<br/>
                        【AIエージェンシーのベネフィット】: クライアントに対して明確なROI（投資対効果）を示すことができるため、契約の獲得がしやすくなります。"
            />
            <SingleFaq
              question="どのような業務がAIオートメーションに適していますか？"
              answer="定型的で繰り返し行われるタスクや、大量のデータ処理が必要な業務が適しています。<br/>
                        【AIエージェンシーのベネフィット】: 多くの業界で適用可能なため、
                        業種を問わずクライアントを獲得できるチャンスが広がります。"
            />
            <SingleFaq
              question="AIオートメーションの導入にはどのくらいの期間が必要ですか？"
              answer="プロジェクトの規模や複雑さによりますが、一般的には数週間から数ヶ月程度です。
                        【AIエージェンシーのベネフィット】: 比較的短期間で成果が見えるため、
                        成功事例を作りやすく、新規クライアントへの営業材料として活用できます。"
            />
            <SingleFaq
              question="AIオートメーションの導入コストはどのくらいですか？"
              answer="必要なソリューションの内容や規模によって異なります。
                        詳細な見積もりは専門家に相談することをおすすめします。<br/>
                        【AIエージェンシーのベネフィット】: 企業の規模やニーズに応じて
                        柔軟な価格設定が可能なため、利益率の高いビジネスモデルを構築できます。"
            />
          </div>

          <div className="w-full px-4 lg:w-1/2 2xl:w-1/3">
            <SingleFaq
              question="AIオートメーションエージェンシーとは何ですか？"
              answer="企業がAIを活用して業務プロセスを自動化する際の戦略立案や実装を支援する専門機関を指します。<br/>
                        【AIエージェンシーのベネフィット】: クライアントのビジネス成長に貢献できるため、長期的なパートナーシップを構築しやすくなります。"
            />
            <SingleFaq
              question="AIオートメーションエージェンシーの提供するサービスは何ですか？"
              answer="業務プロセスの分析、AIソリューションの設計・開発、導入後のサポートやトレーニングなど、多岐にわたります。<br/>
                        【エージェンシーのベネフィット】: サービスの幅を広げることで、継続的な収益モデル（コンサルティング、保守契約など）を構築できます。"
            />
            <SingleFaq
              question="AIオートメーション導入の際の注意点は何ですか？"
              answer="データの品質確保、従業員のトレーニング、そしてプライバシーや
                        セキュリティの確保が重要です。<br/>
                        【AIエージェンシーのベネフィット】: 導入後のフォローアップサービス
                        （トレーニング、保守契約）を提供することで、リピーターを獲得しやすくなります。"
            />
            <SingleFaq
              question="AIオートメーションは既存のシステムと連携できますか？"
              answer="多くの場合、既存のシステムと連携可能です。
                        ただし、具体的な連携方法や必要な調整については専門家に相談することが重要です。<br/>
                        【AIエージェンシーのベネフィット】: 企業のIT環境に応じたカスタマイズサービスを
                        提供することで、高単価な案件を受注しやすくなります。"
            />
            <SingleFaq
              question="AIオートメーションの導入事例を教えてください。"
              answer="例えば、カスタマーサポートにおけるチャットボットの導入や、
                        データ分析の自動化などが挙げられます。<br/>
                        【AIエージェンシーのベネフィット】: 成功事例を積み重ねることで、
                        AIエージェンシーの信頼性とブランド価値を高めることができます。"
            />
          </div>
          <div className="w-full px-4 lg:w-1/2 2xl:w-1/3">
            <SingleFaq
              question="AIエージェントとは何ですか？"
              answer="AIエージェントとは、特定のタスクを自動化・支援するために設計された AI システムのことです。チャットボット、仮想アシスタント、営業支援AIなど、さまざまな種類があります。<br/>
                        【AIエージェンシーのベネフィット】: AIエージェントの市場は急成長しており、企業のDX（デジタルトランスフォーメーション）支援として高い需要があります。"
            />
            <SingleFaq
              question="AIエージェントはどのような業務を自動化できますか？"
              answer="カスタマーサポート、営業活動のフォローアップ、スケジュール管理、データ分析、マーケティングオートメーションなど、多岐にわたります。<br/>
                        【AIエージェンシーのベネフィット】: 企業ごとにカスタマイズしたAIエージェントを提供することで、高単価のプロジェクトを獲得しやすくなります。"
            />
            <SingleFaq
              question="AIエージェントは従業員の仕事を奪うのではないですか？"
              answer="AIエージェントは、人間の仕事を奪うのではなく、繰り返しの多い業務を自動化し、従業員がより創造的な業務に集中できるようにするツールです。<br/>
                        【AIエージェンシーのベネフィット】: 企業に「AI＋人間の協働モデル」を提案することで、導入のハードルを下げ、継続的な契約につなげられます。"
            />
            <SingleFaq
              question="AIエージェントの導入にはどれくらいの時間がかかりますか？"
              answer="シンプルなチャットボットであれば数日～数週間、高度なカスタマイズを施す場合は数ヶ月かかることもあります。<br/>
                        【AIエージェンシーのベネフィット】: クイックな導入プランと高度なカスタマイズプランを提供することで、幅広い企業ニーズに対応でき、収益の多様化が可能になります。"
            />
            <SingleFaq
              question="AIエージェントのメンテナンスやアップデートは必要ですか？"
              answer="はい。AIエージェントは継続的な学習や最適化が必要です。新しいデータを学習させたり、ユーザーのフィードバックを元に改善したりすることで、より効果的な運用が可能になります。<br/>
                        【AIエージェンシーのベネフィット】: 定期的なメンテナンス契約やアップグレードサービスを提供することで、長期的な収益を確保できます。"
            />
          </div>
        </div>
      </div>

      <div>
        <span className="absolute left-4 top-4 -z-[1]">
          <svg
            width="48"
            height="134"
            viewBox="0 0 48 134"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="45.6673"
              cy="132"
              r="1.66667"
              transform="rotate(180 45.6673 132)"
              fill="#13C296"
            />
            <circle
              cx="45.6673"
              cy="117.333"
              r="1.66667"
              transform="rotate(180 45.6673 117.333)"
              fill="#13C296"
            />
            <circle
              cx="45.6673"
              cy="102.667"
              r="1.66667"
              transform="rotate(180 45.6673 102.667)"
              fill="#13C296"
            />
            <circle
              cx="45.6673"
              cy="88.0001"
              r="1.66667"
              transform="rotate(180 45.6673 88.0001)"
              fill="#13C296"
            />
            <circle
              cx="45.6673"
              cy="73.3335"
              r="1.66667"
              transform="rotate(180 45.6673 73.3335)"
              fill="#13C296"
            />
            <circle
              cx="45.6673"
              cy="45.0001"
              r="1.66667"
              transform="rotate(180 45.6673 45.0001)"
              fill="#13C296"
            />
            <circle
              cx="45.6673"
              cy="16.0001"
              r="1.66667"
              transform="rotate(180 45.6673 16.0001)"
              fill="#13C296"
            />
            <circle
              cx="45.6673"
              cy="59.0001"
              r="1.66667"
              transform="rotate(180 45.6673 59.0001)"
              fill="#13C296"
            />
            <circle
              cx="45.6673"
              cy="30.6668"
              r="1.66667"
              transform="rotate(180 45.6673 30.6668)"
              fill="#13C296"
            />
            <circle
              cx="45.6673"
              cy="1.66683"
              r="1.66667"
              transform="rotate(180 45.6673 1.66683)"
              fill="#13C296"
            />
            <circle
              cx="31.0013"
              cy="132"
              r="1.66667"
              transform="rotate(180 31.0013 132)"
              fill="#13C296"
            />
            <circle
              cx="31.0013"
              cy="117.333"
              r="1.66667"
              transform="rotate(180 31.0013 117.333)"
              fill="#13C296"
            />
            <circle
              cx="31.0013"
              cy="102.667"
              r="1.66667"
              transform="rotate(180 31.0013 102.667)"
              fill="#13C296"
            />
            <circle
              cx="31.0013"
              cy="88.0001"
              r="1.66667"
              transform="rotate(180 31.0013 88.0001)"
              fill="#13C296"
            />
            <circle
              cx="31.0013"
              cy="73.3335"
              r="1.66667"
              transform="rotate(180 31.0013 73.3335)"
              fill="#13C296"
            />
            <circle
              cx="31.0013"
              cy="45.0001"
              r="1.66667"
              transform="rotate(180 31.0013 45.0001)"
              fill="#13C296"
            />
            <circle
              cx="31.0013"
              cy="16.0001"
              r="1.66667"
              transform="rotate(180 31.0013 16.0001)"
              fill="#13C296"
            />
            <circle
              cx="31.0013"
              cy="59.0001"
              r="1.66667"
              transform="rotate(180 31.0013 59.0001)"
              fill="#13C296"
            />
            <circle
              cx="31.0013"
              cy="30.6668"
              r="1.66667"
              transform="rotate(180 31.0013 30.6668)"
              fill="#13C296"
            />
            <circle
              cx="31.0013"
              cy="1.66683"
              r="1.66667"
              transform="rotate(180 31.0013 1.66683)"
              fill="#13C296"
            />
            <circle
              cx="16.3333"
              cy="132"
              r="1.66667"
              transform="rotate(180 16.3333 132)"
              fill="#13C296"
            />
            <circle
              cx="16.3333"
              cy="117.333"
              r="1.66667"
              transform="rotate(180 16.3333 117.333)"
              fill="#13C296"
            />
            <circle
              cx="16.3333"
              cy="102.667"
              r="1.66667"
              transform="rotate(180 16.3333 102.667)"
              fill="#13C296"
            />
            <circle
              cx="16.3333"
              cy="88.0001"
              r="1.66667"
              transform="rotate(180 16.3333 88.0001)"
              fill="#13C296"
            />
            <circle
              cx="16.3333"
              cy="73.3335"
              r="1.66667"
              transform="rotate(180 16.3333 73.3335)"
              fill="#13C296"
            />
            <circle
              cx="16.3333"
              cy="45.0001"
              r="1.66667"
              transform="rotate(180 16.3333 45.0001)"
              fill="#13C296"
            />
            <circle
              cx="16.3333"
              cy="16.0001"
              r="1.66667"
              transform="rotate(180 16.3333 16.0001)"
              fill="#13C296"
            />
            <circle
              cx="16.3333"
              cy="59.0001"
              r="1.66667"
              transform="rotate(180 16.3333 59.0001)"
              fill="#13C296"
            />
            <circle
              cx="16.3333"
              cy="30.6668"
              r="1.66667"
              transform="rotate(180 16.3333 30.6668)"
              fill="#13C296"
            />
            <circle
              cx="16.3333"
              cy="1.66683"
              r="1.66667"
              transform="rotate(180 16.3333 1.66683)"
              fill="#13C296"
            />
            <circle
              cx="1.66732"
              cy="132"
              r="1.66667"
              transform="rotate(180 1.66732 132)"
              fill="#13C296"
            />
            <circle
              cx="1.66732"
              cy="117.333"
              r="1.66667"
              transform="rotate(180 1.66732 117.333)"
              fill="#13C296"
            />
            <circle
              cx="1.66732"
              cy="102.667"
              r="1.66667"
              transform="rotate(180 1.66732 102.667)"
              fill="#13C296"
            />
            <circle
              cx="1.66732"
              cy="88.0001"
              r="1.66667"
              transform="rotate(180 1.66732 88.0001)"
              fill="#13C296"
            />
            <circle
              cx="1.66732"
              cy="73.3335"
              r="1.66667"
              transform="rotate(180 1.66732 73.3335)"
              fill="#13C296"
            />
            <circle
              cx="1.66732"
              cy="45.0001"
              r="1.66667"
              transform="rotate(180 1.66732 45.0001)"
              fill="#13C296"
            />
            <circle
              cx="1.66732"
              cy="16.0001"
              r="1.66667"
              transform="rotate(180 1.66732 16.0001)"
              fill="#13C296"
            />
            <circle
              cx="1.66732"
              cy="59.0001"
              r="1.66667"
              transform="rotate(180 1.66732 59.0001)"
              fill="#13C296"
            />
            <circle
              cx="1.66732"
              cy="30.6668"
              r="1.66667"
              transform="rotate(180 1.66732 30.6668)"
              fill="#13C296"
            />
            <circle
              cx="1.66732"
              cy="1.66683"
              r="1.66667"
              transform="rotate(180 1.66732 1.66683)"
              fill="#13C296"
            />
          </svg>
        </span>
        <span className="absolute bottom-4 right-4 -z-[1]">
          <svg
            width="48"
            height="134"
            viewBox="0 0 48 134"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="45.6673"
              cy="132"
              r="1.66667"
              transform="rotate(180 45.6673 132)"
              fill="#3758F9"
            />
            <circle
              cx="45.6673"
              cy="117.333"
              r="1.66667"
              transform="rotate(180 45.6673 117.333)"
              fill="#3758F9"
            />
            <circle
              cx="45.6673"
              cy="102.667"
              r="1.66667"
              transform="rotate(180 45.6673 102.667)"
              fill="#3758F9"
            />
            <circle
              cx="45.6673"
              cy="88.0001"
              r="1.66667"
              transform="rotate(180 45.6673 88.0001)"
              fill="#3758F9"
            />
            <circle
              cx="45.6673"
              cy="73.3333"
              r="1.66667"
              transform="rotate(180 45.6673 73.3333)"
              fill="#3758F9"
            />
            <circle
              cx="45.6673"
              cy="45.0001"
              r="1.66667"
              transform="rotate(180 45.6673 45.0001)"
              fill="#3758F9"
            />
            <circle
              cx="45.6673"
              cy="16.0001"
              r="1.66667"
              transform="rotate(180 45.6673 16.0001)"
              fill="#3758F9"
            />
            <circle
              cx="45.6673"
              cy="59.0001"
              r="1.66667"
              transform="rotate(180 45.6673 59.0001)"
              fill="#3758F9"
            />
            <circle
              cx="45.6673"
              cy="30.6668"
              r="1.66667"
              transform="rotate(180 45.6673 30.6668)"
              fill="#3758F9"
            />
            <circle
              cx="45.6673"
              cy="1.66683"
              r="1.66667"
              transform="rotate(180 45.6673 1.66683)"
              fill="#3758F9"
            />
            <circle
              cx="31.0006"
              cy="132"
              r="1.66667"
              transform="rotate(180 31.0006 132)"
              fill="#3758F9"
            />
            <circle
              cx="31.0006"
              cy="117.333"
              r="1.66667"
              transform="rotate(180 31.0006 117.333)"
              fill="#3758F9"
            />
            <circle
              cx="31.0006"
              cy="102.667"
              r="1.66667"
              transform="rotate(180 31.0006 102.667)"
              fill="#3758F9"
            />
            <circle
              cx="31.0006"
              cy="88.0001"
              r="1.66667"
              transform="rotate(180 31.0006 88.0001)"
              fill="#3758F9"
            />
            <circle
              cx="31.0008"
              cy="73.3333"
              r="1.66667"
              transform="rotate(180 31.0008 73.3333)"
              fill="#3758F9"
            />
            <circle
              cx="31.0008"
              cy="45.0001"
              r="1.66667"
              transform="rotate(180 31.0008 45.0001)"
              fill="#3758F9"
            />
            <circle
              cx="31.0008"
              cy="16.0001"
              r="1.66667"
              transform="rotate(180 31.0008 16.0001)"
              fill="#3758F9"
            />
            <circle
              cx="31.0008"
              cy="59.0001"
              r="1.66667"
              transform="rotate(180 31.0008 59.0001)"
              fill="#3758F9"
            />
            <circle
              cx="31.0008"
              cy="30.6668"
              r="1.66667"
              transform="rotate(180 31.0008 30.6668)"
              fill="#3758F9"
            />
            <circle
              cx="31.0008"
              cy="1.66683"
              r="1.66667"
              transform="rotate(180 31.0008 1.66683)"
              fill="#3758F9"
            />
            <circle
              cx="16.3341"
              cy="132"
              r="1.66667"
              transform="rotate(180 16.3341 132)"
              fill="#3758F9"
            />
            <circle
              cx="16.3341"
              cy="117.333"
              r="1.66667"
              transform="rotate(180 16.3341 117.333)"
              fill="#3758F9"
            />
            <circle
              cx="16.3341"
              cy="102.667"
              r="1.66667"
              transform="rotate(180 16.3341 102.667)"
              fill="#3758F9"
            />
            <circle
              cx="16.3341"
              cy="88.0001"
              r="1.66667"
              transform="rotate(180 16.3341 88.0001)"
              fill="#3758F9"
            />
            <circle
              cx="16.3338"
              cy="73.3333"
              r="1.66667"
              transform="rotate(180 16.3338 73.3333)"
              fill="#3758F9"
            />
            <circle
              cx="16.3338"
              cy="45.0001"
              r="1.66667"
              transform="rotate(180 16.3338 45.0001)"
              fill="#3758F9"
            />
            <circle
              cx="16.3338"
              cy="16.0001"
              r="1.66667"
              transform="rotate(180 16.3338 16.0001)"
              fill="#3758F9"
            />
            <circle
              cx="16.3338"
              cy="59.0001"
              r="1.66667"
              transform="rotate(180 16.3338 59.0001)"
              fill="#3758F9"
            />
            <circle
              cx="16.3338"
              cy="30.6668"
              r="1.66667"
              transform="rotate(180 16.3338 30.6668)"
              fill="#3758F9"
            />
            <circle
              cx="16.3338"
              cy="1.66683"
              r="1.66667"
              transform="rotate(180 16.3338 1.66683)"
              fill="#3758F9"
            />
            <circle
              cx="1.66732"
              cy="132"
              r="1.66667"
              transform="rotate(180 1.66732 132)"
              fill="#3758F9"
            />
            <circle
              cx="1.66732"
              cy="117.333"
              r="1.66667"
              transform="rotate(180 1.66732 117.333)"
              fill="#3758F9"
            />
            <circle
              cx="1.66732"
              cy="102.667"
              r="1.66667"
              transform="rotate(180 1.66732 102.667)"
              fill="#3758F9"
            />
            <circle
              cx="1.66732"
              cy="88.0001"
              r="1.66667"
              transform="rotate(180 1.66732 88.0001)"
              fill="#3758F9"
            />
            <circle
              cx="1.66732"
              cy="73.3333"
              r="1.66667"
              transform="rotate(180 1.66732 73.3333)"
              fill="#3758F9"
            />
            <circle
              cx="1.66732"
              cy="45.0001"
              r="1.66667"
              transform="rotate(180 1.66732 45.0001)"
              fill="#3758F9"
            />
            <circle
              cx="1.66732"
              cy="16.0001"
              r="1.66667"
              transform="rotate(180 1.66732 16.0001)"
              fill="#3758F9"
            />
            <circle
              cx="1.66732"
              cy="59.0001"
              r="1.66667"
              transform="rotate(180 1.66732 59.0001)"
              fill="#3758F9"
            />
            <circle
              cx="1.66732"
              cy="30.6668"
              r="1.66667"
              transform="rotate(180 1.66732 30.6668)"
              fill="#3758F9"
            />
            <circle
              cx="1.66732"
              cy="1.66683"
              r="1.66667"
              transform="rotate(180 1.66732 1.66683)"
              fill="#3758F9"
            />
          </svg>
        </span>
      </div>
    </section>
  );
};

export default Faq;
