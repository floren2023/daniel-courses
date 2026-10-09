import  { useEffect, useState } from 'react'
import { HeroCarousel } from './heroCarousel'

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
    <HeroCarousel/>
  )
}

export default Hero