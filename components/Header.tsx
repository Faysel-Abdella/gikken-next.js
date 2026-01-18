"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import MobileNav from "./MobileNav";
import { Menu } from "lucide-react";

export const nav_apps = [
  { key: "mac_safari", icon: "mac.png" },
  { key: "iphone_ipad", icon: "ios.png" },
  { key: "google_chrome", icon: "chrome.svg" },
  { key: "mozilla_firefox", icon: "firefox.png" },
  { key: "opera", icon: "mac.png" },
  { key: "microsoft_edge", icon: "ios.png" },
  { key: "arc_browser", icon: "chrome.svg" },
  { key: "brave_browser", icon: "firefox.png" },
];
export default function Header() {
  const t = useTranslations("header");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex items-center py-10 justify-between w-full max-w-200 mx-auto px-8">
      <Link href="/" aria-label="Mate homepage" className="">
        <Image
          src="/assets/logo.webp"
          width={150}
          height={40}
          alt="Mate Logo"
          className="w-19 h-auto"
        />
      </Link>

      {/* Navigation Menu */}
      <div className=" max-md:hidden">
        <nav className="flex flex-col md:flex-row items-center gap-5 font-bold text-[17px]">
          <Link href="/" className="nav-item">
            {t("navigation.home")}
          </Link>

          <div className="relative group flex flex-col items-center md:block">
            <div className="nav-item cursor-default">
              {t("navigation.apps")}
            </div>

            {/* Dropdown */}
            <div className="hidden group-hover:block md:absolute  md:left-1/2 md:-translate-x-1/2 md:w-[180px] bg-black/90 md:bg-black rounded-lg shadow-lg z-10 mt-2 md:mt-0">
              <div className="flex flex-col text-center md:text-left">
                {nav_apps.map((app) => (
                  <Link
                    key={app.key}
                    href="#"
                    className="text-white text-[19px] md:text-base px-4 py-3 border-b border-white/25 hover:bg-white/20 last:border-0 flex items-center justify-center md:justify-start gap-3 transition-colors"
                  >
                    <Image
                      src={`https://gikken.co/www_mate/img/logos/${app.icon}`}
                      width={20}
                      height={20}
                      alt=""
                      className="w-5 h-5"
                    />
                    {t(`navigation.apps_list.${app.key}`)}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/blog" className="nav-item">
            {t("navigation.blog")}
          </Link>
          <Link href="/help" className="nav-item">
            {t("navigation.help_center")}
          </Link>
          <Link href="/contact" className="nav-item md:mr-0">
            {t("navigation.contact")}
          </Link>
        </nav>
      </div>
      <button onClick={() => setIsOpen((prev) => !prev)} className="md:hidden">
        <Menu size={28} />
      </button>
      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
