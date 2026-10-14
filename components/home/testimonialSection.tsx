'use client';

import Image from 'next/image';
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  comment: string;
  imageSrc: string;
  rating: number;
}

const testimonialsData: Testimonial[] = [
  {
    name: 'Sofía Martínez',
    role: 'Estudiante de Animación 3D',
    comment: 'Los cursos son increíbles. Aprendí a dominar el rigging desde cero y ahora puedo crear personajes con movimientos súper fluidos.',
    imageSrc: '/images/avatar-1.jpg', // Reemplaza con tus rutas de imágenes reales
    rating: 5,
  },
  {
    name: 'Carlos Ruiz',
    role: 'Diseñador de Videojuegos',
    comment: 'La explicación de Unreal Engine y texturizado PBR superó totalmente mis expectativas. 100% recomendado.',
    imageSrc: '/images/avatar-2.jpg',
    rating: 5,
  },
  {
    name: 'Lucía Fernández',
    role: 'Artista 3D Junior',
    comment: 'El ambiente de aprendizaje y el nivel de detalle en cada módulo hacen que avanzar sea muy fácil y divertido.',
    imageSrc: '/images/avatar-3.jpg',
    rating: 5,
  },
  {
    name: 'Mateo Gómez',
    role: 'Animador Freelance',
    comment: 'Gracias a las técnicas de animación facial logré armar mi portafolio profesional y conseguir mis primeros clientes.',
    imageSrc: '/images/avatar-4.jpg',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="w-full bg-[#9a24eb] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Título de la sección */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-wide uppercase">
            Lo que dicen nuestros alumnos
          </h2>
          <p className="mt-2 text-pink-100 text-sm sm:text-base">
            Descubre cómo nuestros cursos han transformado la carrera de futuros profesionales en 3D.
          </p>
        </div>

        {/* Grid de 4 tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonialsData.map((item, index) => (
            <div
              key={index}
              className="bg-[#AC75EB] text-black/80 rounded-md p-6 flex flex-col justify-between shadow-xl shadow-[#cc8ff4] transition-transform duration-300 hover:-translate-y-1.5"
            >
              <div>
                {/* Estrellas de valoración en rosa */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-pink-500 text-pink-500"
                    />
                  ))}
                </div>

                {/* Comentario */}
                <p className="text-zinc-900 text-sm leading-relaxed mb-6">
                  &quot;{item.comment}&quot;
                </p>
              </div>

              {/* Información del alumno (Foto redonda y nombre) */}
              <div className="flex items-center space-x-3 pt-4 border-t border-yellow-300/60">
                <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 bg-zinc-300 border border-pink-400">
                  <Image
                    src={item.imageSrc}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-zinc-900">{item.name}</h4>
                  <p className="text-xs text-zinc-700">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}