import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import { useTranslations } from "next-intl";
import Screenshots from "@/components/Screenshots";
import Reviews from "@/components/Reviews";

export default function Home() {
  const tAbout = useTranslations("about");
  const tBottomCta = useTranslations("bottom_cta");

  return (
    <main className=" ">
      <Header />

      <Hero />

      <Features />

      <div className="mt-[72px] w-full max-w-200 mx-auto px-8">
        <h2 className="text-[40px]  mb-6  font-black font-circe">
          {tAbout("title")}
        </h2>
        <div className=" text-[22px] flex flex-col gap-6">
          <p className="">
            {tAbout.rich("description_1", {
              bold: (chunk) => <span className="font-bold">{chunk}</span>,
            })}
          </p>
          <p className="">
            {tAbout.rich("description_2", {
              bold: (chunk) => <span className="font-bold">{chunk}</span>,
            })}
          </p>
          <p className="">
            {tAbout.rich("description_3", {
              bold: (chunk) => <span className="font-bold">{chunk}</span>,
            })}
          </p>
        </div>
      </div>

      <Screenshots />

      <Reviews />
      <div className="mt-18 leading-tight w-full max-w-200 mx-auto px-8 ">
        <h2 className="text-[40px]  mb-6  font-black font-circe">
          {tBottomCta("headline")}
        </h2>
        <p className="text-[22px] mb-8">
          {tBottomCta.rich("subheadline", {
            bold: (chunk) => <span className="font-bold">{chunk}</span>,
          })}
        </p>
        <a
          href="/download"
          className="inline-block bg-black text-[#00DBEF] text-center font-black text-[19px] max-md:w-full uppercase py-2.75 px-6 rounded-lg  hover:bg-black/85 transition-transform duration-200"
        >
          {tBottomCta("cta_button")}
        </a>
      </div>
      <Footer />
    </main>
  );
}
