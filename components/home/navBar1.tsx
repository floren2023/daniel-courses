'use client';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar1() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },  
    { name: 'Cursos', href: '/courses' },
    { name: 'Recursos', href: '/resources' },
    { name: 'Sobre nosotros', href: '/about' },
    { name: 'Contacto', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 flex w-full bg-transparent backdrop-blur-md -mt-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 justify-between w-full">
        <div className="flex items-center justify-between ">
          
          {/* Logo a la izquierda */}
          <div className="shrink-0 ">
            <Link 
              href="/" 
              
            >
             <Image src="/logo.png" width={240} height={70} alt="Logo"/>
            </Link>
          </div>

          {/* Menú y Botón Sign In para Escritorio (Pantallas medianas y grandes) */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-amber-300 hover:text-black p-1 albert-normal rounded-md hover:bg-[#faec93]/80 font-semibold text-md transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Botón Sign In para Escritorio */}
            <Link
              href="/signin"
              className="bg-[rgb(154,36,235)] text-white px-2 py-1 rounded-md font-medium albert-normal hover:bg-black hover:text-[rgb(154,36,235)] transition-colors duration-200 shadow-sm"
            >
              Sign In
            </Link>
          </div>

          {/* Botón de Menú Hamburguesa para Móviles */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-yellow-400 hover:text-pink-500 focus:outline-none p-2 rounded-md"
              aria-label="Toggle Menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  /* Icono para cerrar (X) */
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  /* Icono de hamburguesa */
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menú Desplegable para Dispositivos Móviles */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black border-t border-zinc-800 px-4 pt-2 pb-4 space-y-2">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-[#faec93] hover:text-black hover:bg-[#faec93]/80 px-3 py-2 rounded-md font-medium transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Botón Sign In para Móvil al final */}
          <div className="pt-2 ">
            <Link
              href="/signin"
              onClick={() => setIsOpen(false)}
              className="block text-center bg-[rgb(154,36,235)] text-white w-full py-1 rounded-md font-medium hover:bg-black hover:text-[rgb(154,36,235)] transition-colors duration-200"
            >
              Sign In
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}