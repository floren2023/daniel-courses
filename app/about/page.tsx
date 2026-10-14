import CharacterCanvas from '@/components/caracterCanvas';
import React from 'react';


export default function AboutPage() {
  return (
    <div className="min-h-screen  bg-[#ff5fd0] text-slate-900 font-sans relative overflow-x-hidden selection:bg-purple-600 selection:text-white">
      
      {/* HEADER / NAVEGACIÓN */}
   
      {/* SECCIÓN HERO / ABOUT */}
      <section className="relative w-full min-h-screen flex items-center pt-24 pb-16 px-6 md:px-16 mt-2">
        
        {/* Contenedor principal de 2 columnas */}
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
          
          {/* Columna de Texto / Glassmorphism */}
          <div className="bg-white/20 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/40 shadow-2xl flex flex-col justify-center">
            <div className="inline-block bg-[#781ebc] text-purple-100 text-xs font-bold uppercase px-3 py-1.5 rounded-full mb-6 w-max shadow-md">
              Academia Líder en Animación 3D
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-purple-500 leading-tight mb-6">
              DA VIDA A TUS IDEAS EN <span className="text-white drop-shadow-md">3D</span>
            </h1>
            <p className="text-purple-950/80 text-lg mb-8 leading-relaxed font-medium">
              En <strong className="text-purple-950">DANIEL'S 3D STUDIO</strong> fusionamos la creatividad artística con la potencia técnica. Creamos la próxima generación de artistas digitales especializados en rigging, modelado y animación avanzada.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#2e1065] hover:bg-[#3b0764] text-white font-bold px-8 py-4 rounded-xl shadow-xl transition transform hover:-translate-y-0.5">
                Ver Cursos Disponibles
              </button>
              <button className="bg-white/40 hover:bg-white/60 text-purple-950 font-bold px-8 py-4 rounded-xl border border-white/60 transition">
                Conoce al Instructor
              </button>
            </div>
          </div>

          {/* Columna con el Canvas 3D Interactivo */}
          <div className="relative w-full h-[450px] lg:h-[600px] flex items-center justify-center">
            {/* Efecto de brillo de fondo detrás del canvas */}
            <div className="absolute w-72 h-72 bg-purple-900/20 rounded-full blur-3xl pointer-events-none"></div>
            
            {/* Componente del Canvas 3D */}
            <CharacterCanvas />
            
            {/* Tarjeta flotante superpuesta indicativa */}
            <div className="absolute bottom-4 left-4 bg-purple-950/80 backdrop-blur-md text-white px-4 py-2 rounded-xl text-xs font-medium shadow-lg pointer-events-none flex items-center gap-2 border border-purple-500/30">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
              Arrastra para rotar el personaje 3D
            </div>
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