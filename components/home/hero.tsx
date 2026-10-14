import  { useEffect, useState } from 'react'
import { HeroCarousel } from './heroCarousel'
import { HeroFade } from './heroFade';

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Mientras se carga en el servidor, no renderiza el carrusel o muestra un esqueleto/loader
  if (!isMounted) {
    return <div className="w-full h-[80vh] bg-background" />;
  }
  return (
    <HeroFade/>
  )
}

export default Hero