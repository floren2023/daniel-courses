'use client';

import Link from 'next/link';
import {  Mail, Phone, MapPin } from 'lucide-react';
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#faec93] text-black py-12 px-4 sm:px-6 lg:px-8 border-t border-yellow-200 z-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-between">
        
        {/* Columna 1: Logo y eslogan */}
        <div className="space-y-3 text-center md:text-left">
          <Link 
            href="/" 
            className="text-2xl tracking-wider text-[rgb(154,36,235)] font-bold hover:opacity-80 transition-opacity"
          >
            Daniel's 3D
          </Link>
          <p className="text-sm text-zinc-800">
            Impulsa tu creatividad con nuestros cursos profesionales de animación y diseño 3D.
          </p>
        </div>

        {/* Columna 2: Redes Sociales */}
        <div className="flex flex-col items-center space-y-3">
          <span className="font-semibold text-sm uppercase tracking-wider text-zinc-900">
            Síguenos
          </span>
          <div className="flex space-x-4">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 bg-black text-[#faec93] rounded-full hover:bg-[rgb(154,36,235)] hover:text-white transition-colors duration-200 shadow-sm"
              aria-label="Instagram"
            >
              <FaInstagramSquare className="w-5 h-5" />
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 bg-black text-[#faec93] rounded-full hover:bg-[rgb(154,36,235)] hover:text-white transition-colors duration-200 shadow-sm"
              aria-label="YouTube"
            >
              <FaYoutube className="w-5 h-5" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 bg-black text-[#faec93] rounded-full hover:bg-[rgb(154,36,235)] hover:text-white transition-colors duration-200 shadow-sm"
              aria-label="Twitter"
            >
              <FaXTwitter className="w-5 h-5" />
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 bg-black text-[#faec93] rounded-full hover:bg-[rgb(154,36,235)] hover:text-white transition-colors duration-200 shadow-sm"
              aria-label="Facebook"
            >
              <FaFacebook className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Columna 3: Enlace Contáctanos y soporte */}
        <div className="flex flex-col items-center md:items-end space-y-3">
          <span className="font-semibold text-sm uppercase tracking-wider text-zinc-900">
            ¿Tienes dudas?
          </span>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl font-medium hover:bg-[rgb(154,36,235)] transition-colors duration-200 shadow-md"
          >
            <Mail className="w-4 h-4 text-[#faec93]" />
            Contáctanos
          </Link>
        </div>

      </div>

      {/* Línea divisoria inferior de derechos de autor */}
      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-yellow-300/60 text-center text-xs text-zinc-800">
        <p>&copy; {new Date().getFullYear()} Daniel's 3D. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}