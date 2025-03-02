import axios from "axios";
import React from "react";
import OfferList from "./OfferList";
import { Price } from "@/types/price";

const PricingBox = ({ product }: { product: Price }) => {
  // POST request
  const handleSubscription = async (e: any) => {
    e.preventDefault();
    const { data } = await axios.post(
      "/api/payment",
      {
        priceId: product.id,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    window.location.assign(data);
  };
  const terms = {Month: "/ 月", Year: "/ 年", Anual: "/ 年", Lifetime: "" }

  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div
        className="relative z-10 mb-10 overflow-hidden rounded-xl bg-white px-8 py-10 shadow-[0px_0px_40px_0px_rgba(0,0,0,0.08)] dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-14"
        data-wow-delay=".1s"
      >
        {product.recomend && (
          <p className="absolute right-[-38px] top-[60px] inline-block -rotate-90 rounded-bl-md rounded-tl-md bg-secondary px-5 py-2 text-base font-medium text-dark">
            {product.recomend}
          </p>
        )}
        {product.category &&
         <span className="mb-2 block text-sm text-primary ">
           {product.category}
         </span>}
        <span className="mb-5 block text-xl font-medium text-dark dark:text-white">
          {product.nickname}
        </span>
        <h2 className="mb-11 text-4xl font-semibold text-dark dark:text-white xl:text-[42px] xl:leading-[1.21]">
          <span className="text-xl font-medium">¥ </span>
          <span className="-ml-1 -tracking-[2px]">
            {(product.unit_amount / 100).toLocaleString("ja-JP", {
              currency: "JPY",
            })}
          </span>
          <span className="text-base font-normal text-body-color dark:text-dark-6">
            {" "}
            {terms[product.term]}
          </span>
          <span className="text-xl font-medium whitespace-nowrap ml-6">
            {"  通常"} <s>{ "¥ " }
            {(product.actual_amount / 100).toLocaleString("ja-JP", {
              currency: "JPY",
            })}
            { product.actual }
            </s>
          </span>
        </h2>

        { product.trial > 0 &&
          <div className="mb-4">
            <h3 className="text-center mb-5 text-md font-bold text-dark dark:text-white">
              {product.trial} 日間　無料トライアル
            </h3>
          </div>}

        <div className="mb-[50px]">
          <h3 className="mb-5 text-lg font-medium text-dark dark:text-white">
            内容
          </h3>
          <div className="mb-10">
            {product?.offers.map((offer, i) => (
              <OfferList key={i} text={offer} />
            ))}
          </div>
        </div>
        <div className="w-full">
          <button
            onClick={handleSubscription}
            className="inline-block rounded-md bg-secondary px-7 py-3 text-center text-base font-medium text-dark transition duration-300 hover:bg-primary/90"
          >
            {product.cta}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingBox;
