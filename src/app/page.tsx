import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
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
      <Hero />
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
