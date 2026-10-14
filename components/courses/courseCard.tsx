'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Award } from 'lucide-react';

interface CardCourseProps {
  title: string;
  description: string;
  imageSrc: string;
  href: string;
  href1: string;
  modules?: string;
  duration?: string;
  badge?: string;
}

export default function CardCourse({
  title,
  description,
  imageSrc,
  href,
  href1,
  modules = '12 módulos',
  duration = '40 horas',
  badge = 'Certificado',
}: CardCourseProps) {
  return (
    <div className="group relative rounded-2xl p-[2px] bg-gradient-to-r from-[rgb(154,36,235)] to-pink-500 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_35px_rgba(217,70,239,0.6)]">
   
      <Card className="bg-gradient-to-r from-[#000000] via-[#400040] to-[#000000] text-white border-none rounded-2xl p-6 h-full flex flex-col justify-between overflow-hidden">
        
          {/* Cabecera con título en degradado e imagen */}
          <CardHeader className="flex flex-col-reverse sm:flex-row gap-4 items-center justify-between pb-3">
            <div className="space-y-1">
              <CardTitle className="text-xl font-semibold tracking-normal normal-case bg-gradient-to-r from-[rgb(154,36,235)] to-pink-500 bg-clip-text text-transparent">
                {title}
              </CardTitle>
            </div>

            {/* Imagen del curso */}
            <div className="relative  sm:w-30 sm:h-30 h-30 w-30 shrink-0 rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800">
              <Image
                src={imageSrc}
                alt={title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </CardHeader>

          {/* Contenido / Descripción */}
          <CardContent className="space-y-4 ">
            <CardDescription className="text-white/80 text-sm leading-relaxed">
              {description}
            </CardDescription>

            {/* Metadatos (Módulos, Horas, Certificado) */}
            <div className="flex items-center justify-center text-xs text-white/80  gap-3 pt-3 ">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-pink-500" />
                <span>{modules}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-pink-500" />
                <span>{duration}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-pink-500" />
                <span>{badge}</span>
              </div>
            </div>
          </CardContent>
        

        {/* Botones de acción sin línea de separación */}
        <CardFooter className="   flex gap-10 justify-center bg-transparent border-0 p-4">
          {/* Botón Ver Curso: Rosa con hover Violeta */}
          <Button
         
            
            className="border-0 hover:bg-amber-200  text-pink-500 bg-transparent font-medium rounded-xl shadow-lg transition-all duration-200"
          >
            <Link href={href1}>Ver curso</Link>
          </Button>
          
          {/* Botón Apuntar: Gradiente Violeta a Rosa */}
          <Button
            
            className="bg-[#9a24eb]  hover:bg-pink-400 text-white font-medium rounded-xl shadow-lg transition-all duration-200"
          >
            <Link href={href}>Apuntar</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}