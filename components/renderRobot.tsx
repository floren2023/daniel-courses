'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Center } from '@react-three/drei';
import { Model } from '@/Robot';
// Importa el componente generado en el Paso 4 (ajusta la ruta según tu estructura)
// import { Model as Robot } from '@/components/Robot'; 

export default function Robot() {
  return (
    <main className="w-full h-full bg-[#faec93]">
      <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
        {/* Luz ambiental para iluminar el modelo */}
        <ambientLight intensity={0.2} />
        <directionalLight position={[1,2,1]} intensity={0.5} />

        {/* Suspense maneja la carga mientras se descarga el archivo pesadote */}
        <Suspense fallback={null}>
          <Center>
             <Model /> 
          
          </Center>
            {/* Si usaste gltfjsx, puedes renderizarlo aquí */}
           
          
          {/* Permite rotar la cámara con el ratón */}
          <OrbitControls autoRotate />
        </Suspense>
      </Canvas>
    </main>
  );
}