import { mate_reviews } from "@/data/reviews";
import { useTranslations } from "next-intl";
import React from "react";

const Reviews = () => {
  const t = useTranslations("reviews");
  return (
    <div className="mt-18 leading-tight  px-8">
      <div className="w-full max-w-200 mx-auto">
        <h2 className="text-[40px]  mb-6  font-black font-circe">
          {t("headline")}
        </h2>
        <p className="text-[22px] mb-8">
          {t.rich("subheadline", {
            bold: (chunk) => <span className="font-bold">{chunk}</span>,
          })}
        </p>
        <p className="text-[22px] mb-8 font-bold">{t("proof")}</p>
      </div>
      <div className="overflow-auto px-20">
        <div className="columns-4  w-fit">
          {mate_reviews.map((review, index) => (
            <div
              key={index}
              className="bg-[#82F2F3] p-6 rounded-2xl min-w-80 h-fit row-span-1 break-inside-avoid mb-10"
            >
              <p className="text-[11px] text-neutral-700 font-bold">
                {review.platform}
              </p>

              <div className="mb-6 flex">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i} className="text-amber-500 text-3xl">
                    ★
                  </span>
                ))}
              </div>

              <p className="text-[19px] mb-2 font-bold">{review.title}</p>
              <p className="text-[17px] mb-4">{review.body}</p>

              <div className="text-neutral-700 flex gap-1 text-sm">
                <p>{review.author}</p>,
                <p className="underline">{review.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
