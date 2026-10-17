import { coursesData } from '@/app/courses/page'
import React from 'react'
import CourseCard from '../courses/courseCard'

const CursosDestacados = () => {
  
     const result=coursesData.filter(element=>element.destacado===true)
     console.log("result",result)
  return (
    
       
         <section className="mx-auto text-center mt-10 bg-black ">
              <div className=" mt-10 text-xl sm:text-2xl antonio-normal font-extrabold text-amber-200/70 tracking-wide uppercase">
           Cursos Destacados
          </div>
                
             {result!=undefined&&(
                        
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-16 ">

                         {
                        result.map((course, index) => (
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
              
                    )}
               </section>
    
  )
}

export default CursosDestacados
