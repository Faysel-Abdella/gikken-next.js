"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <div className="mt-15 text-left w-full max-w-200 mx-auto px-8">
      <h1 className="text-[40px] leading-tight font-black mb-6 ">
        {t("headline")}
      </h1>
      <p className="text-[22px] font-bold mb-8  leading-tight">
        {t("subheadline")}
      </p>

      <div className="mt-8 ">
        <a
          href="/download"
          className=" bg-black text-[#01ECA1] w-fit font-black text-[19px] uppercase py-2 px-6 rounded-lg  hover:bg-black/85 max-md:w-full flex justify-center"
        >
          {t("cta_button")}
        </a>
      </div>

      {/* Placeholder for the preview images described in CSS (mac-first, safari-first) */}
      <div className="relative mt-6  h-162.5 w-full  block">
        {/* These would be standard Next/Images positioned absolutely as per your CSS logic */}

        <Image
          alt="Hero Images Placeholder"
          src="/assets/hero-image-2.webp"
          width={508}
          height={400}
          className="absolute top-10 z-0"
        />
        <Image
          alt="Hero Images Placeholder"
          src="/assets/hero-image-3.webp"
          width={288}
          height={400}
          className="absolute right-0 z-0"
        />
        <Image
          alt="Hero Images Placeholder"
          src="/assets/hero-image-1.webp"
          width={480}
          height={400}
          className="absolute right-10 top-66 z-0"
        />
      </div>
    </div>
  );
}
