'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar1() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Sobre nosotros', href: '/sobre-nosotros' },
    { name: 'Explora', href: '/explora' },
    { name: 'Contacto', href: '/contacto' },
  ];

  return (
    <header className="sticky top-0  z-50 flex w-full bg-black/60 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 justify-between w-full">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo a la izquierda */}
          <div className="shrink-0">
            <Link 
              href="/" 
              className="text-2xl  tracking-wider text-[rgb(154,36,235)] font-bold hover:text-purple-500 transition-colors duration-200"
            >
              Daniel's 3D
            </Link>
          </div>

          {/* Menú para Escritorio (Pantallas medianas y grandes) */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[#faec93] hover:text-[#ff5fd0] py-2 px-4 rounded-md hover:bg-slate-800 font-medium transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </nav>

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
        <nav className="md:hidden bg-black border-t border-zinc-800 px-4 pt-2 pb-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-yellow-400 hover:text-pink-500 font-medium py-2 transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}