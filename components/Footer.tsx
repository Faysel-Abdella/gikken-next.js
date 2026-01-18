"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import LanguageSelect from "./LanguageSelect";

const apps = [
  {
    key: "iphone_ipad",
    helpCenterLink:
      "https://help.gikken.co/hc/en-us/categories/360002275580-Mate-for-iOS",
    releaseNotesLink: "https://gikken.co/mate-translate/release-notes/ios/",
    downloadLink: "https://gikken.co/mate-translate/ios/",
  },
  {
    key: "mac_safari",
    helpCenterLink:
      "https://help.gikken.co/hc/en-us/categories/360002300379-Mate-for-macOS",
    releaseNotesLink: "https://gikken.co/mate-translate/release-notes/mac/",
    downloadLink: "https://gikken.co/mate-translate/mac/",
  },
  {
    key: "google_chrome",
    helpCenterLink:
      "https://help.gikken.co/hc/en-us/categories/360002300399-Mate-for-Chrome-Opera-Firefox",

    downloadLink: "https://gikken.co/mate-translate/chrome/",
  },
  {
    key: "mozilla_firefox",
    helpCenterLink:
      "https://help.gikken.co/hc/en-us/categories/360002300399-Mate-for-Chrome-Opera-Firefox",

    downloadLink: "https://gikken.co/mate-translate/firefox/",
  },
  {
    key: "opera",
    helpCenterLink:
      "https://help.gikken.co/hc/en-us/categories/360002300399-Mate-for-Chrome-Opera-Firefox",

    downloadLink: "https://gikken.co/mate-translate/opera/",
  },
  {
    key: "microsoft_edge",
    helpCenterLink:
      "https://help.gikken.co/hc/en-us/categories/360002300399-Mate-for-Chrome-Opera-Firefox",

    downloadLink: "https://gikken.co/mate-translate/edge/",
  },
  {
    key: "arc_browser",
    helpCenterLink:
      "https://help.gikken.co/hc/en-us/categories/360002300399-Mate-for-Chrome-Opera-Firefox",

    downloadLink: "https://gikken.co/mate-translate/arc/",
  },
  {
    key: "brave_browser",
    helpCenterLink:
      "https://help.gikken.co/hc/en-us/categories/360002300399-Mate-for-Chrome-Opera-Firefox",

    downloadLink: "https://gikken.co/mate-translate/brave/",
  },
];

const supportLinks = [
  { key: "download", href: "https://gikken.co/mate-translate/download/" },
  { key: "help_center", href: "https://help.gikken.co/hc/en-us" },
  { key: "supported_languages", href: "https://help.gikken.co/hc/en-us" },
  {
    key: "request_refund",
    href: "https://help.gikken.co/hc/en-us/articles/360011292459-How-can-I-get-a-refund",
  },
  {
    key: "restore_password",
    href: "https://gikken.co/mate-translate/forgot-password/",
  },
  {
    key: "restore_serial_codes",
    href: "https://gikken.co/mate-translate/restore-serial-codes/",
  },
  { key: "privacy_policy", href: "https://gikken.co/mate-translate/privacy/" },
  {
    key: "student_discounts",
    href: "https://gikken.co/mate-translate/privacy/",
  },
];

const stayInTouch = [
  { key: "contact", href: "https://gikken.co/mate-translate/contact/" },
  { key: "twitter", href: "https://twitter.com/MateTranslate" },
  { key: "blog", href: "https://gikken.co/mate-translate/blog/" },
];
const freeServices = [
  {
    key: "web_translator",
    href: "https://gikken.co/mate-translate/translator/",
  },
  {
    key: "verb_conjugator",
    href: "https://gikken.co/mate-translate/conjugation/",
  },
  {
    key: "der_die_das_lookup",
    href: "https://gikken.co/mate-translate/der-die-das/",
  },
  {
    key: "usage_examples",
    href: "https://gikken.co/mate-translate/sentences/",
  },
];
export default function Footer() {
  const tFooterColumns = useTranslations("footer.columns");

  return (
    <div className="mt-[72px] p-[72px] w-full max-w-200 mx-auto bg-white/50 backdrop-blur-md md:rounded-lg flex flex-col md:flex-row md:flex-wrap gap-12 md:gap-0 box-border text-[19px]">
      {/* Column 1: Apps */}
      <div className="w-full md:w-[28%] md:mr-12 mb-12 md:mb-0 flex flex-col max-md:items-center">
        <div className="font-black uppercase mb-6">
          {tFooterColumns("apps.title")}
        </div>

        {apps.map((app) => (
          <div key={app.key} className="mb-6 flex flex-col max-md:items-center">
            <b className="block mb-2">
              {tFooterColumns(`apps.items.${app.key}`)}
            </b>
            <div className="text-sm flex flex-start  flex-wrap h-fit font-bold ">
              {app.helpCenterLink && (
                <Link
                  href={app.helpCenterLink}
                  className="underline mr-1 text-nowrap"
                >
                  {tFooterColumns("apps.links.help_center")}
                </Link>
              )}
              {app.releaseNotesLink && (
                <>
                  ,
                  <Link
                    href={app.releaseNotesLink}
                    className="underline mx-1 text-nowrap"
                  >
                    {tFooterColumns("apps.links.release_notes")}
                  </Link>
                </>
              )}

              {app.downloadLink && (
                <>
                  ,{" "}
                  <Link href={app.downloadLink} className="underline ">
                    {tFooterColumns("apps.links.download")}
                  </Link>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Column 2: Support */}
      <div className="w-full md:w-[28%] md:mr-12 mb-12 md:mb-0 flex flex-col max-md:items-center">
        <div className="font-black uppercase mb-6">
          {tFooterColumns("support.title")}
        </div>
        <div className="flex flex-col gap-2 max-md:items-center">
          {supportLinks.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className="underline text-[19px]"
            >
              {tFooterColumns(`support.items.${link.key}`)}
            </Link>
          ))}
        </div>
      </div>

      {/* Column 3: Stay in Touch & Free Services */}
      <div className="w-full md:w-[28%] flex flex-col flex flex-col max-md:items-center">
        <div className="font-black uppercase mb-6">
          {tFooterColumns("stay_in_touch.title")}
        </div>
        <div className="flex flex-col gap-2 max-md:items-center">
          {stayInTouch.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className="underline text-[19px]"
            >
              {tFooterColumns(`stay_in_touch.items.${link.key}`)}
            </Link>
          ))}
        </div>

        <div className="font-black uppercase mt-8 mb-6">
          {tFooterColumns("site_language.title")}
        </div>
        <LanguageSelect />

        <div className="font-black uppercase mb-6 mt-8">
          {tFooterColumns("free_services.title")}
        </div>
        <div className="flex flex-col gap-2 max-md:items-center">
          {freeServices.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className="underline text-[19px]"
            >
              {tFooterColumns(`free_services.items.${link.key}`)}
            </Link>
          ))}
        </div>
      </div>

      {/* Makers Logo */}
      <a
        href="https://gikken.co"
        className="block mt-16 opacity-70 hover:opacity-100 transition-opacity w-full"
      >
        <div className="w-[163px] h-[55px] bg-[url('/www_mate/img/elements/gikken-footer.png')] bg-contain bg-no-repeat mx-auto md:mx-0"></div>
      </a>
    </div>
  );
}
