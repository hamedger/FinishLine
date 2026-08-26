import type { Metadata } from "next";
import Image from "next/image";
import { Hero } from "@/components/Hero";
import { CouponsStrip } from "@/components/CouponsStrip";
import { Services } from "@/components/Services";
import { Coupons } from "@/components/Coupons";
import { Testimonials } from "@/components/Testimonials";
import { ShopGallery } from "@/components/ShopGallery";
import { Fleet } from "@/components/Fleet";
import { Tips } from "@/components/Tips";
import { Contact } from "@/components/Contact";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    url: SITE_URL,
  },
};

export default function Home() {
  return (
    <>
      <CouponsStrip />
      <Hero />

      <section className="bg-white py-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/ase-certified-technicians.jpg"
              alt="Finish Line employs ASE Certified technicians — professional service you can trust, with certified professionals, quality repairs, honest service, and all makes and models serviced"
              width={1536}
              height={1024}
              className="h-auto w-full"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>
        </div>
      </section>

      <Services />
      <Coupons />
      <Testimonials />
      <ShopGallery />
      <Fleet />
      <Tips />
      <Contact />
      {/* Spacer for mobile sticky call bar */}
      <div className="h-20 sm:hidden" aria-hidden="true" />
    </>
  );
}
