import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Coupons } from "@/components/Coupons";
import { Testimonials } from "@/components/Testimonials";
import { Fleet } from "@/components/Fleet";
import { Tips } from "@/components/Tips";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Coupons />
      <Testimonials />
      <Fleet />
      <Tips />
      <Contact />
      {/* Spacer for mobile sticky call bar */}
      <div className="h-20 sm:hidden" aria-hidden="true" />
    </>
  );
}
