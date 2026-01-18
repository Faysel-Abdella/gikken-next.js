"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

const locales = [
  { code: "de", label: "Deutsch" },
  { code: "ru", label: "Русский" },
  { code: "uk", label: "Українська" },
  { code: "en", label: "English" },
  { code: "zh", label: "中文" },
  { code: "fr", label: "Français" },
  { code: "tr", label: "Türkçe" },
  { code: "es", label: "Español" },
];
export default function LanguageSelect() {
  const locale = useLocale();
  const router = useRouter();

  const changeLanguage = (newLocale: string) => {
    document.cookie = `locale=${newLocale};path=/;max-age=31536000`;
    router.refresh();
  };

  return (
    <div className=" flex items-center gap-2 text-sm  rounded-md">
      <select
        value={locale}
        onChange={(e) => changeLanguage(e.target.value)}
        className="
         rounded-sm
        w-full
        border
        border-gray-500
bg-white
          cursor-pointer
          pr-6
         
          
        "
      >
        {locales.map((loc) => (
          <option key={loc.code} value={loc.code} className="text-black">
            {loc.label}
          </option>
        ))}
      </select>
    </div>
  );
}
