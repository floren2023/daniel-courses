"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade"; // 1. Importar el plugin Fade

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

// Datos de los slides del Carousel
const SLIDES = [
  {
    id: 1,
    title: "Máster en Diseño 3D y Desarrollo de Videojuegos",
    title1: "Domina el pipeline de la industria",
    subtitle:
      "De cero a nivel profesional creando personajes, escenarios y assets 3D orientados a videojuegos y animación.",
   
    secondaryCtaText: "Explora cursos",
    secondaryCtaHref: "/courses",
    bgImage: "/home/portada4.jpg",
  },
  {
    id: 2,
    title: "Crea Mundos y personajes 3D",
    title1: "Transforma tu pasión por el anime y los videojuegos en tu profesión.",
    subtitle:
      "Te enseñamos las técnicas avanzadas de modelado, texturizado y renderizado 3D.",
    
    secondaryCtaText: "Contáctanos",
    secondaryCtaHref: "#contacto",
    bgImage: "/home/portada1.png",
  },
  {
    id: 3,
    title: "Crea Arte. Diseña.",
    title1: "Da alas a tu imaginación",
    subtitle:
      "Siempre habra un equipo a tu lado para ayudarte",
   
    secondaryCtaText: "Socializar",
    secondaryCtaHref: "/social",
    bgImage: "/home/portada3.jpg",
  },
];

export function HeroFade() {
  // Inicializar plugins de Autoplay y Fade
  const autoplay = useRef(Autoplay({ delay: 4000, stopOnInteraction: false }));
  const fade = useRef(Fade());

  return (
    <section className="relative w-full overflow-hidden bg-background ">
      <Carousel
        plugins={[autoplay.current, fade.current]}
        opts={{
          loop: true,
          duration: 30, // Controla la velocidad de la transición
        }}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        className="w-full"
      >
        <CarouselContent className="ml-0">
          {SLIDES.map((slide) => (
            <CarouselItem
              key={slide.id}
              className="pl-0 relative w-full h-[90vh] flex-[0_0_100%] min-w-0"
            >
              {/* Imagen de fondo con Overlay oscuro */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={slide.bgImage}
                  alt={slide.title}
                  fill
                  priority={slide.id === 1}
                  className="object-cover"
                />
                <div className="absolute inset-0 dark:bg-black/20 bg-pink-500/20" />
              </div>

              {/* Contenido principal del Hero */}
              <div className="relative mt-30 z-10 flex h-full items-center lg:w-1/2 md:w-full sm:w-full justify-start text-start  sm:px-16 md:px-10 lg:px-30 sm:h-full min-h-70 min-w-2xs">
                <div className=" space-y-6 bg-black/40 backdrop-blur-sm  rounded-xl border border-white/10 px-6 py-8">
                  <h1 className=" font-semibold tracking-wide text-[#ff5fd0] sm:text-4xl md:text-3xl lg:text-2xl ">
                    {slide.title}
                  </h1>
                  <h2 className=" text-start tracking-tight text-[#ff5fd0] sm:text-md md:text-md lg:text-xl">
                    {slide.title1}
                  </h2>
                  <p className=" lg:text-md text-white/80   text-start ">
                    {slide.subtitle}
                  </p>

                  {/* Botones Call to Action (CTA) */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                
                    {slide.secondaryCtaText && (
                      <Button
                        size="lg"
                        
                        className="w-full sm:w-auto text-base hover:text-[rgb(154,36,235)] transition-colors duration-500 hover:bg-black font-semibold px-8 py-6 bg-[rgb(154,36,235)]/80 text-black"
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

        {/* Botones de navegación */}
        <div className="hidden sm:block">
          <CarouselPrevious className="left-6 bg-white/20 hover:bg-white/40 text-white border-none" />
          <CarouselNext className="right-6 bg-white/20 hover:bg-white/40 text-white border-none" />
        </div>
      </Carousel>
    </section>
  );
}