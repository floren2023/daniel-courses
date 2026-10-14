import CourseCard from "@/components/courses/courseCard";
export interface CardCourseProps {
  title: string;
  description: string;
  imageSrc: string;
  href: string;
  href1: string;
  modules?: string;
  duration?: string;
  badge?: string;
  destacado:boolean
}

export const coursesData: CardCourseProps[] = [
   {
    title: "Curso Basico de Animacion 3D",
    description: "Animacion de movimientos, andar y posturas.",
    imageSrc: "/cursos/animacion3d.jpg",
    href: "/courses",
    href1: "/enroll",
    modules: "10 módulos",
    duration: "350 horas",
    badge: "Certificado",
    destacado:true

  },
  {
    title: "Rigging Avanzado de Personajes",
    description: "Domina la creación de esqueletos complejos, controles faciales y restricciones avanzadas para animación fluida.",
    imageSrc: "/images/curso-1.jpg",
    href: "/courses/rigging-avanzado",
    href1: "/enroll/rigging-avanzado",
    modules: "10 módulos",
    duration: "35 horas",
    badge: "Certificado",
    destacado:false

  },
  {
    title: "Modelado 3D de Entornos Sci-Fi",
    description: "Aprende a diseñar escenarios futuristas de videojuegos con técnicas de modelado hard surface y texturizado PBR.",
    imageSrc: "/images/curso-2.jpg",
    href: "/courses/entornos-scifi",
    href1: "/enroll/entornos-scifi",
    modules: "12 módulos",
    duration: "45 horas",
    badge: "Certificado",
    destacado:true

  },
  {
    title: "Animación de Criaturas y Monstruos",
    description: "Estudia la anatomía y biomecánica de seres fantásticos para dotarlos de peso, realismo y expresividad única.",
    imageSrc: "/images/curso-3.jpg",
    href: "/courses/criaturas-3d",
    href1: "/enroll/criaturas-3d",
    modules: "8 módulos",
    duration: "30 horas",
    badge: "Certificado",
    destacado:false

  },
  {
    title: "Shading y Look Development",
    description: "Explora el motor de renderizado avanzado para conseguir acabados hiperrealistas en piel, metales y telas.",
    imageSrc: "/images/curso-4.jpg",
    href: "/courses/shading-dev",
    href1: "/enroll/shading-dev",
    modules: "9 módulos",
    duration: "25 horas",
    badge: "Certificado",
    destacado:false

  },
  {
    title: "Introducción a Unreal Engine para 3D",
    description: "Integra tus modelos y animaciones en un motor de videojuegos en tiempo real con iluminación Lumen y Nanite.",
    imageSrc: "/images/curso-5.jpg",
    href: "/courses/unreal-engine",
    href1: "/enroll/unreal-engine",
    modules: "14 módulos",
    duration: "50 horas",
    badge: "Certificado",
    destacado:false

  },
  {
    title: "Animación Facial con Blend Shapes",
    description: "Captura y estiliza expresiones faciales complejas para diálogos sincronizados en producciones de cine y juegos.",
    imageSrc: "/images/curso-6.jpg",
    href: "/courses/animacion-facial",
    href1: "/enroll/animacion-facial",
    modules: "7 módulos",
    duration: "20 horas",
    badge: "Certificado",
    destacado:false

  },
];
export default function Page() {

  
  return (
    <section className="mx-auto text-center mt-10 bg-black spline-sans-normal">
       <h1 className="spline-sans-bold text-3xl font-bold text-center text-amber-100  mb-8">
          Catálogo de Cursos 3D
        </h1>
        
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-16 min-h-screen">
        {coursesData.map((course, index) => (
        <CourseCard
        key={index}
          
          title={course.title}
              description={course.description}
              imageSrc={course.imageSrc}
              href={course.href}
               href1={course.href1}
              modules={course.modules}
              duration={course.duration}
              badge={course.badge}
        />
        ))}
      </div>
      
    
       </section>
   
  );
}