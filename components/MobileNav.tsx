"use client";
import { X } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { nav_apps } from "./Header";

interface MobileNavContainerProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
const MobileNav = ({ isOpen, setIsOpen }: MobileNavContainerProps) => {
  const t = useTranslations("header");

  return (
    isOpen && (
      <div
        className={
          "fixed inset-0 bg-black/75 text-white backdrop-blur-sm  overflow-y-auto h-full w-full flex flex-col  items-center   p-5 z-9999"
        }
      >
        <button
          onClick={() => setIsOpen(false)}
          className="px-4 py-2 text-white mt-5 "
        >
          <X size={24} />
        </button>
        <nav className="flex flex-col w-full  items-center gap-10 font-bold mt-16 text-[22px]">
          <Link href="/" className="">
            {t("mobile_navigation.home")}
          </Link>

          <div className="relative group flex flex-col items-center w-full gap-2">
            <div className=" cursor-default text-neutral-400 text-[19px]">
              {t("mobile_navigation.apps")}
            </div>

            {/* Dropdown */}
            <div className="flex flex-col text-center bg-neutral-500  rounded-md w-full  h-fit">
              {nav_apps.map((app) => (
                <Link
                  key={app.key}
                  href="#"
                  className="text-white text-[19px] w-full   px-4 py-3 border-b border-neutral-600 hover:bg-white/20 flex items-center justify-center  gap-3 "
                >
                  <Image
                    src={`https://gikken.co/www_mate/img/logos/${app.icon}`}
                    width={20}
                    height={20}
                    alt=""
                    className="w-5 h-5"
                  />
                  {t(`mobile_navigation.apps_list.${app.key}`)}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/blog" className="">
            {t("mobile_navigation.blog")}
          </Link>
          <Link href="/help" className="">
            {t("mobile_navigation.help_center")}
          </Link>
          <Link href="/contact" className=" md:mr-0">
            {t("mobile_navigation.contact")}
          </Link>
        </nav>
      </div>
    )
  );
};

export default MobileNav;
