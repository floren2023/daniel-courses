"use client";


import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import {  useRef} from "react";

// Datos de los slides del Carousel
const SLIDES = [
  {
    id: 1,
    title: "Máster en Diseño 3D y Desarrollo de Videojuegos ",
    title1:" Domina el pipeline de la industria",
     
    subtitle: "De cero a nivel profesional creando personajes, escenarios y assets 3D orientados a videojuegos y animación.",
    ctaText: "Contactnos",
    ctaHref: "/contact",
    secondaryCtaText: "Explora cursos",
    secondaryCtaHref: "/courses",
    bgImage: "/home/portada4.jpg",
  },
  {
    id: 2,
    title: "Crea Mundos Increíbles, personajes y Enemigos 3D",
    title1:" Transforma tu pasión por el anime y los videojuegos en tu profesión.",
    subtitle:
      "Te enseñamos las técnicas avanzadas de modelado, texturizado y renderizado 3D para llevar tus ideas artísticas a la pantalla.",
    ctaText: "Ver Portafolio",
    ctaHref: "/portfolio",
    secondaryCtaText: "Contáctanos",
    secondaryCtaHref: "#contacto",
    bgImage: "/home/portada2.jpg",
  },
  {
    id: 3,
    title: "Diseño UI/UX Enfocado en la Conversión",
    title1:" 3D DESIGNER",
    subtitle:
      "Interfaces atractivas e intuitivas construidas con Shadcn UI y Tailwind CSS.",
    ctaText: "Agendar Llamada",
    ctaHref: "#agenda",
    secondaryCtaText: "Nuestros Servicios",
    secondaryCtaHref: "#servicios",
    bgImage: "/home/portada3.jpg",
  },
];

export function HeroCarousel() {
  
  // Plugin para auto-play opcional
 
 const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: false }));
  return (
    <section className="relative w-full overflow-hidden bg-background">
      <Carousel
        plugins={[plugin.current]}
        opts={{
          loop: true,
        }}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        className="w-full"
      >
        <CarouselContent>
          {SLIDES.map((slide) => (
            <CarouselItem key={slide.id} className="relative w-full h-[80vh] ">
              {/* Imagen de fondo con Overlay oscuro */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={slide.bgImage}
                  alt={slide.title}
                  fill
                  priority={slide.id === 1}
                  className="object-cover"
                />
                <div className="absolute inset-0  dark:bg-black/20 bg-pink-500/20" />
              </div>

              {/* Contenido principal del Hero */}
              <div className="relative z-10 flex h-full items-center justify-start  text-center px-4 sm:px-6 lg:px-10">
               
                <div className="max-w-2xl space-y-8 bg-black/40  p-8">
                  <h1 className="text-2xl  font-semibold tracking-wide text-[#ff5fd0] sm:text-2xl md:text-6xl lg:text-3xl px-10">
                    {slide.title}
                  </h1>
                  <h2 className="text-xl  text-center tracking-tight text-[#ff5fd0] sm:text-md md:text-md lg:text-xl">
                    {slide.title1}
                  </h2>
                  <p className="mx-auto lg:text-xl text-[#faec93] sm:text-sm md:text-md text-start px-10">
                    {slide.subtitle}
                  </p>

                  {/* Botones Call to Action (CTA) */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                    <Button 
                      size="lg"
                      className="w-full sm:w-auto text-base font-semibold text-[#faec93] px-8 py-6 transition-colors duration-500 hover:bg-slate-800"
                    >
                      <Link href={slide.ctaHref}>{slide.ctaText}</Link>
                    </Button>
                    {slide.secondaryCtaText && (
                      <Button
                        
                        size="lg"
                        className="w-full sm:w-auto text-base hover:text-[#ff5fd0] transition-colors duration-500 hover:bg-slate-800 font-semibold px-8 py-6    bg-[#faec93]/80 text-black" 
                      >
                        <Link href={slide.secondaryCtaHref}>
                          {slide.secondaryCtaText}
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Botones de navegación (anterior / siguiente) */}
        <div className="hidden sm:block">
          <CarouselPrevious className="left-6 bg-white/20 hover:bg-white/40 text-white border-none" />
          <CarouselNext className="right-6 bg-white/20 hover:bg-white/40 text-white border-none" />
        </div>
      </Carousel>
    </section>
  );
}
