"use client";
import { useTranslations } from "next-intl";
import React, { useState } from "react";

const iosScreenshots = [
  "/assets/screenshots/ios-1.webp",
  "/assets/screenshots/ios-2.webp",
  "/assets/screenshots/ios-3.webp",
  "/assets/screenshots/ios-4.webp",
  "/assets/screenshots/ios-5.webp",
  "/assets/screenshots/ios-6.webp",
];
const macScreenshots = [
  "/assets/screenshots/mac-1.webp",
  "/assets/screenshots/mac-2.webp",
];
const Screenshots = () => {
  const t = useTranslations("screenshots");
  const [activeView, setActive] = useState<"ios" | "mac">("ios");
  return (
    <div className="mt-18 px-8">
      <div className="w-full max-w-200 mx-auto mb-6">
        <h2 className="text-[40px]  mb-6  font-black font-circe">
          {t("title")}
        </h2>
        <div className="text-[17px] font-bold text-white flex  gap-2">
          <button
            className={`mr-4  bg-black px-6 py-1.75 cursor-pointer rounded-full  ${
              activeView === "ios"
                ? "outline-4 outline-black/40"
                : "border-b-2 border-transparent"
            }`}
            onClick={() => setActive("ios")}
          >
            {t("ios")}
          </button>
          <button
            className={`mr-4  bg-black px-6 py-1.75 cursor-pointer rounded-full  ${
              activeView === "mac"
                ? "outline-4 outline-black/40"
                : "border-b-2 border-transparent"
            }`}
            onClick={() => setActive("mac")}
          >
            {t("mac")}
          </button>
        </div>
      </div>

      <div className="text-[22px] flex flex-col gap-6 relative">
        {activeView === "ios" && (
          <div className="mt-6 w-full overflow-x-auto pb-6">
            <div className="flex flex-nowrap gap-4 overflow-visible px-20">
              {iosScreenshots.map((src, index) => (
                <div key={index} className="h-115 flex-shrink-0">
                  <img
                    src={src}
                    alt={`iOS screenshot ${index + 1}`}
                    className="h-full w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
        {activeView === "mac" && (
          <div className="mt-6 w-full overflow-x-auto">
            <div className="flex flex-nowrap gap-4 overflow-visible px-20">
              {macScreenshots.map((src, index) => (
                <div key={index} className="h-115 flex-shrink-0">
                  <img
                    src={src}
                    alt={`macOS screenshot ${index + 1}`}
                    className="h-full w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Screenshots;
