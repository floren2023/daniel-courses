'use client';

import React, { useState } from 'react';

export interface SoftwareLogo {
  name: string;
  category: string;
  color: string;
  svg: React.ReactNode;
}

export const SOFTWARE_LOGOS: SoftwareLogo[] = [
  {
    name: "Maya",
    category: "3D Animation",
    color: "#06B6D4",
    svg: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.8L19.2 8 12 11.2 4.8 8 12 4.8zM4.5 9.8l6.75 3v6.9L4.5 16.3V9.8zm15 6.5l-6.75 3.4v-6.9l6.75-3v6.5z"/>
      </svg>
    )
  },
  {
    name: "Adobe Photoshop",
    category: "Raster Graphics",
    color: "#31A8FF",
    svg: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
        <rect x="2" y="2" width="20" height="20" rx="4" fill="#001E36"/>
        <path d="M6 16V8h3.5c1.4 0 2.5.8 2.5 2.1 0 1.4-1.1 2.2-2.5 2.2H7.8V16H6zm1.8-5.3h1.6c.6 0 1-.3 1-.8 0-.5-.4-.8-1-.8H7.8v1.6zm7.4 5.3c-1.3 0-2.2-.8-2.2-2.1h1.5c0 .5.3.8.8.8.4 0 .7-.2.7-.5 0-.9-2.8-.4-2.8-2.4 0-1.1.9-1.9 2.1-1.9 1.2 0 2 .7 2.1 1.9h-1.4c0-.4-.3-.7-.7-.7-.4 0-.6.2-.6.5 0 .9 2.8.4 2.8 2.4 0 1.2-.9 2-2.3 2z" fill="#31A8FF"/>
      </svg>
    )
  },
  {
    name: "ZBrush",
    category: "Digital Sculpting",
    color: "#F59E0B",
    svg: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
        <path d="M4 4h16v3.5L8.5 16.5H20V20H4v-3.5L15.5 7.5H4V4z"/>
      </svg>
    )
  },
  {
    name: "Houdini",
    category: "VFX & Procedural",
    color: "#FF6B00",
    svg: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
        <path d="M12 2L2 8.5v7L12 22l10-6.5v-7L12 2zm0 3.2l6.5 4.2-2.5 1.6-4-2.6-4 2.6-2.5-1.6L12 5.2zm-7 5.2l3.5 2.3V16l-3.5-2.3v-3.3zm8.5 8.4l-3.5-2.3v-3.3l3.5 2.3v3.3zm0-5.6l-3.5-2.3 3.5-2.3 3.5 2.3-3.5 2.3zm5 3.3l-3.5 2.3v-3.3l3.5-2.3v3.3z"/>
      </svg>
    )
  },
  {
    name: "Adobe Illustrator",
    category: "Vector Graphics",
    color: "#FF9A00",
    svg: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
        <rect x="2" y="2" width="20" height="20" rx="4" fill="#330000"/>
        <path d="M6 16l2.8-8h1.8l2.8 8h-1.6l-.7-2.1H8.3L7.6 16H6zm2.7-3.4h2L9.7 9.4l-1 3.2zm7.6 3.4V10h1.4v6h-1.4zm0-7.3V7.3h1.4v1.4h-1.4z" fill="#FF9A00"/>
      </svg>
    )
  },
  {
    name: "3ds Max",
    category: "3D Modeling",
    color: "#00C4B4",
    svg: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
        <path d="M3 5h4l3 5 3-5h4v14h-3.5V11L10.5 16h-1L6.5 11v8H3V5zm15 9h3v5h-3v-5zm0-9h3v6h-3V5z"/>
      </svg>
    )
  },
  {
    name: "Unity",
    category: "Game Engine",
    color: "#FFFFFF",
    svg: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
        <path d="M12 2l-7 4v3.5l3.5 2V8.5L12 6.5l3.5 2v3l3.5-2V6L12 2zm-8.5 8.5L2 12l1.5 1.5V17L7 19.5v-3.5l-2-1.2V12l2-1.2V7.3L3.5 10.5zm17 0L17 7.3v3.5l2 1.2V14.8l-2 1.2v3.5l3.5-2.5V13.5L22 12l-1.5-1.5zM12 11.5L8.5 13.5v3.5L12 19l3.5-2v-3.5L12 11.5z"/>
      </svg>
    )
  },
  {
    name: "Blender",
    category: "3D Suite",
    color: "#E87D0D",
    svg: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
        <path d="M12.5 3a2.5 2.5 0 00-2.3 3.5L3.6 10a5 5 0 102.3 8.3l3.8-3.8A7 7 0 1012.5 3zm0 4a3 3 0 110 6 3 3 0 010-6z"/>
      </svg>
    )
  },
  {
    name: "Unreal Engine",
    category: "Realtime 3D",
    color: "#0E86D4",
    svg: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8" fill="none"/>
        <path d="M12 6c-2.5 0-4.5 1.8-4.5 4.5 0 2.2 1.2 3.8 3 4.3v-2.2c-.8-.3-1.4-1.1-1.4-2.1 0-1.2 1.2-2.2 2.9-2.2s2.9 1 2.9 2.2c0 1-.6 1.8-1.4 2.1v2.2c1.8-.5 3-2.1 3-4.3C16.5 7.8 14.5 6 12 6zm-1 10h2v2h-2v-2z"/>
      </svg>
    )
  }
];

interface LogoCarouselProps {
  speed?: number; // In seconds per full rotation
  direction?: 'normal' | 'reverse';
  pauseOnHover?: boolean;
  className?: string;
}

export default function LogoCarousel({
  speed = 25,
  direction = 'normal',
  pauseOnHover = true,
  className = ''
}: LogoCarouselProps) {
  const [isPaused, setIsPaused] = useState(false);

  // Quadruple items to prevent gaps on wide viewport screens
  const doubledLogos = [
    ...SOFTWARE_LOGOS,
    ...SOFTWARE_LOGOS,
    ...SOFTWARE_LOGOS,
    ...SOFTWARE_LOGOS
  ];

  return (
    <div className={`relative w-full overflow-hidden bg-black py-10 border-y border-zinc-900 ${className}`}>
      {/* CSS Keyframes injected inline or keep in globals.css */}
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-infinite {
          display: flex;
          width: max-content;
          animation: marqueeScroll var(--marquee-speed) linear infinite;
          animation-direction: var(--marquee-dir);
        }
        .animate-marquee-paused {
          animation-play-state: paused !important;
        }
      `}</style>

      {/* Fade Gradients at edges */}
      <div className="absolute top-0 bottom-0 left-0 w-20 md:w-40 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-20 md:w-40 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      {/* Carousel Track */}
      <div 
        className="flex w-full overflow-hidden"
        onMouseEnter={() => pauseOnHover && setIsPaused(true)}
        onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      >
        <div 
          className={`animate-marquee-infinite ${isPaused ? 'animate-marquee-paused' : ''}`}
          style={{
            '--marquee-speed': `${speed}s`,
            '--marquee-dir': direction
          } as React.CSSProperties}
        >
          {doubledLogos.map((logo, idx) => (
            <div
              key={`${logo.name}-${idx}`}
              className="flex items-center gap-3.5 px-5 py-3.5 mx-3 bg-zinc-950/90 border border-zinc-800/80 rounded-xl transition-all duration-300 hover:scale-105 hover:border-zinc-700 hover:bg-zinc-900 cursor-pointer group shrink-0"
            >
              <div 
                className="transition-transform duration-300 group-hover:scale-110"
                style={{ color: logo.color }}
              >
                {logo.svg}
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-zinc-200 group-hover:text-white">
                  {logo.name}
                </span>
                <span className="text-xs text-zinc-500 font-medium">
                  {logo.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}