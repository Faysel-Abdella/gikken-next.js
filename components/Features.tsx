"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";

const featuresList = [
  { key: "accuracy", icon: "/assets/accuracy.webp" },
  {
    key: "languages",
    icon: "/assets/languages.webp",
    link: "https://gikken.co/mate-translate/languages/",
  },
  { key: "pronunciation", icon: "/assets/pronunciation.webp" },
  { key: "sync", icon: "/assets/sync.webp" },
  { key: "phrasebook", icon: "/assets/phrasebook.webp" },
  { key: "reference", icon: "/assets/reference.webp" },
  { key: "dark_mode", icon: "/assets/dark_mode.webp" },
];

export default function Features() {
  const t = useTranslations("features");

  return (
    <div className="mt-18 w-full max-w-200 mx-auto px-8">
      <h2 className="text-[40px] font-black mb-6 ">{t("title")}</h2>

      <div className="space-y-6">
        {featuresList.map((feature) => (
          <div
            key={feature.key}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            <div className="shrink-0 mb-2 md:mb-0">
              <Image
                src={feature.icon}
                alt={feature.key}
                width={64}
                height={64}
                className="w-16 h-16 md:w-16 md:h-16"
              />
            </div>
            <div className=" text-[22px] leading-tight ">
              <span className="font-bold">
                {t(`items.${feature.key}.title`)}
              </span>{" "}
              <span>
                {t.rich(`items.${feature.key}.description`, {
                  link: (chunk) => (
                    <a href={feature.link} className="underline">
                      {chunk}
                    </a>
                  ),
                })}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
