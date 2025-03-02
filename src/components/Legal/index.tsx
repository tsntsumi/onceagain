import Image from "next/image";
import Link from "next/link";

const LegalNotice = () => {
  return (
    <>
      <section id="legal-notice"
               className="bg-gray-1 pb-8 pt-20 dark:bg-dark-2 lg:pb-[70px] lg:pt-[120px]"
      >
        <div className="container blog-details">
          <div className="wow fadeInUp" data-wow-delay=".2s">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2">
                <div className="mb-12 max-w-[540px] lg:mb-0 mx-auto">
                  <h2>特定商取引法に基づく表記</h2>
                  <h3>販売業者</h3>
                  <p>堤　紀久夫　Alizza Ideal</p>
                  <h3>運営統括責任者</h3>
                  <p>堤　紀久夫</p>
                  <h3>所在地</h3>
                  <p>Purok 7 Hagad st. Central pob. Casiguran Sorsogon, PHILIPPINES</p>
                  <h3>連絡先</h3>
                  <div>
                    <dl className="mb-8">
                      <dt>メールアドレス</dt>
                      <dd>
                        <Link
                          href="mailto:info+inquiry@alizza-ideal.com"
                          className="font-mono underline"
                        >
                          mailto:info+inquiry@alizza-ideal.com
                        </Link>
                      </dd>
                      <dt>電話番号</dt>
                      <dd>
                        <Link href="tel:+639661623633" className="font-mono underline">
                          +63 966 162 3633
                        </Link>
                        <div className="underline decoration-wavy">
                          (＊お電話でのお問い合わせ、ご質問は承っておりません。)
                        </div>
                      </dd>
                    </dl>
                    <h3 id="other">その他について</h3>
                    <dl id="payment" className="">
                      <dt>販売価格</dt>
                      <dd>商品販売ページに表示</dd>
                      <dt>商品代金以外の必要金額</dt>
                      <dd>送料など</dd>
                      <dt>個人情報について</dt>
                      <dd className="text-md">
                        当社はお客様のプライバシーを第一に考え運営しております。詳細は弊サイト{" "}
                        <span className="link">
                          &lt;
                          <Link href="/policy/" className="text-sm underline">
                            個人情報保護方針
                          </Link>
                          &gt;{" "}
                        </span>
                        をご覧ください。
                      </dd>
                      <dt>受け付け可能な決済手段</dt>
                      <dd>クレジットカードまたは銀行振込。</dd>
                      <dt>決済期間</dt>
                      <dd>
                        クレジットカード決済の場合はただちに処理されますが、銀行振込の場合は注文から
                        3 日以内にお振り込みいただく必要があります。
                      </dd>
                      <dt>交換および返品</dt>
                      <dd>
                        商品が破損していた場合にのみ、ご購入代金を全額返金いたします。返品は承っておりません。
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
};

export default LegalNotice;
