'use client';

import Courses from '@/components/courses/pagina';
import  Hero from '@/components/home/hero';
import Navbar from '@/components/home/navbar';
import Navbar1 from '@/components/home/navBar1';

import { useState, useEffect } from 'react';


  
const Page = () => {

    

  
  return (
    <>
   

     <Hero/>
     <Courses/>
     <img src="/palete.png" alt="palete" />
   
    </>
    
  )
}

export default Page