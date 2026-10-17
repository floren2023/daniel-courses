"use client";

import LogoCarousel from "@/components/carouselLogo";
import CursosDestacados from "@/components/home/cursosDestacados";
import Hero from "@/components/home/hero";
import TestimonialSection from "@/components/home/testimonialSection";

const Page = () => {
  return (
    <>
      <Hero />

      <CursosDestacados />
      <div className=" bg-black">
        <LogoCarousel speed={20} pauseOnHover={true} />
      </div>
      <TestimonialSection />
    </>
  );
};

export default Page;
