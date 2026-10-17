import CharacterCanvas from '@/components/caracterCanvas';
import Robot from '@/components/renderRobot';
import { Card } from '@/components/ui/card';
import React from 'react';


export default function AboutPage() {
  return (
    <div className="min-h-screen   text-slate-100 font-sans relative overflow-x-hidden bg-linear-to-r from-[#000000] via-[#400040] to-[#000000]">
      
      {/* HEADER / NAVEGACIÓN */}
    
      {/* SECCIÓN HERO / ABOUT */}
      <section className="relative w-full min-h-screen flex items-center pt-24 pb-16 px-6 md:px-16 mt-20">
        
        {/* Contenedor principal de 2 columnas */}
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
           {/* Columna con el Canvas 3D Interactivo */}
          <div className="relative w-full h-full lg:h-127.5 flex items-center justify-center">
            {/* Efecto de brillo de fondo detrás del canvas */}
          {/*   <div className="absolute w-72 h-72 rounded-full blur-3xl pointer-events-none"></div> */}
            
            {/* Componente del Canvas 3D */}
            <Robot />
            
            {/* Tarjeta flotante superpuesta indicativa */}
            <div className="absolute bottom-4 left-4 rounded-2xl p-[2px] bg-gradient-to-r from-[rgb(154,36,235)] to-pink-500 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_35px_rgba(217,70,239,0.6)] backdrop-blur-md text-white px-4 py-2 rounded-xl text-xs font-medium shadow-lg pointer-events-none flex items-center gap-2 border border-purple-500/30">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
              Arrastra para rotar el personaje 3D
            </div>
          </div>

          {/* Columna de Texto / Glassmorphism */}
          <div className="bg-black rounded-xl  bg-gradient-to-r from-[rgb(154,36,235)] to-pink-500 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_1px_rgba(217,70,239,0.6)] backdrop-blur-md  md:p-1  shadow-xl flex flex-col justify-center ">
            <Card className="bg-gradient-to-r from-[#000000] via-[#400040] to-[#000000] text-white border-none rounded-2xl p-8 h-full flex flex-col justify-between overflow-hidden ">
            <div className="inline-block bg-[#781ebc] text-purple-100 text-xs font-bold uppercase px-3 py-1.5 rounded-full mb-6 w-max shadow-md">
              Academia Líder en Animación 3D
            </div>
            <h1 className="text-4xl md:text-2xl font-black text-purple-500 leading-tight mb-6">
              DA VIDA A TUS IDEAS EN <span className="text-white drop-shadow-md">3D</span>
            </h1>
            <p className="text-white/70 text-lg mb-8 leading-relaxed font-medium">
              En <strong className="text-[#9a24eb]">DANIEL'S 3D STUDIO</strong> fusionamos la creatividad artística con la potencia técnica. Creamos la próxima generación de artistas digitales especializados en rigging, modelado y animación avanzada.
            </p>
            <div className="flex flex-wrap gap-10 px-10">
              <button className="bg-[#9a24eb] hover:bg-[#a95de4] text-white  px-8 py-4 rounded-xl shadow-xl transition transform hover:-translate-y-0.5">
                Ver Cursos Disponibles
              </button>
              <button className="bg-transparent hover:bg-purple-500/60 text-amber-300 px-8 py-4 rounded-xl border border-white/60 transition">
                Conoce al Instructor
              </button>
            </div>
           </Card> 
         
          </div>
          </div>
</section>
        
        
    

      {/* SECCIÓN DE ESTADÍSTICAS / VALORES */}
      <section className="bg-purple-950 text-white py-16 px-6 md:px-16 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
            <h3 className="text-4xl font-black text-[#ff5fd0] mb-2">+1,500</h3>
            <p className="text-purple-200 font-medium">Estudiantes Graduados</p>
          </div>
          <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
            <h3 className="text-4xl font-black text-[#ff5fd0] mb-2">100%</h3>
            <p className="text-purple-200 font-medium">Enfoque Práctico y Profesional</p>
          </div>
          <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
            <h3 className="text-4xl font-black text-[#ff5fd0] mb-2">5+ Años</h3>
            <p className="text-purple-200 font-medium">Formando Artistas Digitales</p>
          </div>
        </div>
      </section>

    </div>
  );
}