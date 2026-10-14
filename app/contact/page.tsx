'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FaInstagram} from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import {
  Send,
  Sparkles,
  MessageSquare,
  Clock,
  Layers,
  CheckCircle,
  HelpCircle,
  ChevronDown,
  
  
  Paperclip,
  X,
  Mail,
  MapPin,
  Phone,
  Box,
  Palette,
  Film
} from 'lucide-react';

// ==========================================
// 1. DEFINICIÓN DE INTERFACES Y TIPOS
// ==========================================

export interface FormDataState {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
  file: File | null;
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface ServiceItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}

// ==========================================
// 2. COMPONENTE PRINCIPAL
// ==========================================

export default function ContactPage(): React.ReactElement {
  // --- Estados ---
  const [formData, setFormData] = useState<FormDataState>({
    name: '',
    email: '',
    company: '',
    projectType: '3d-animation',
    budget: '5k-10k',
    timeline: '1-2-months',
    message: '',
    file: null,
  });

  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // --- Efecto del Canvas 3D de Partículas ---
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = (): void => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Tipado de Partícula
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
    }

    const particles: Particle[] = [];
    const particleCount = Math.min(Math.floor(width / 15), 80);
    const colors: string[] = ['#9333ea', '#db2777', '#fcd34d', '#7e22ce'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        size: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e: MouseEvent): void => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const render = (): void => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
      ctx.fillRect(0, 0, width, height);

      particles.forEach((p, index) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.fill();

        for (let j = index + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(147, 51, 234, ${0.2 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }

        const dxMouse = p.x - mouseX;
        const dyMouse = p.y - mouseY;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        if (distMouse < 150) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.strokeStyle = `rgba(252, 211, 77, ${0.3 * (1 - distMouse / 150)})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // ==========================================
  // 3. MANEJA DORES DE EVENTOS (EVENT HANDLERS)
  // ==========================================

  // Manejador para inputs de texto y selects
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Manejador para subida de archivos
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({
        ...prev,
        file: e.target.files![0],
      }));
    }
  };

  // Eliminar archivo cargado
  const handleRemoveFile = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    e.preventDefault();
    setFormData((prev) => ({ ...prev, file: null }));
  };

  // Envío del formulario
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setShowModal(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: '3d-animation',
        budget: '5k-10k',
        timeline: '1-2-months',
        message: '',
        file: null,
      });
    }, 1200);
  };

  // Alternar acordeón FAQ
  const toggleFaq = (index: number): void => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Cierre de modal
  const closeModal = (): void => {
    setShowModal(false);
  };

  // ==========================================
  // 4. DATOS ESTÁTICOS
  // ==========================================

  const faqs: FAQItem[] = [
    {
      q: '¿Cuál es el tiempo estimado de entrega para un proyecto 3D?',
      a: 'Depende de la complejidad. Un render de producto o animación corta toma entre 1 y 3 semanas. Producciones más complejas o spots publicitarios pueden tomar entre 4 y 8 semanas.',
    },
    {
      q: '¿Con qué softwares y motores trabaja Daniel\'s Estudio?',
      a: 'Utilizamos Blender, Maya, Houdini, ZBrush, Cinema 4D y Unreal Engine 5 para renderizado en tiempo real de alta fidelidad, además de After Effects y Nuke para postproducción.',
    },
    {
      q: '¿Cómo funciona el proceso de entrega de archivos de avance?',
      a: 'Trabajamos por hitos: 1) Blocking / Storyboard 3D, 2) Modelado e Iluminación, 3) Animación preliminar (Playblast), y 4) Renders finales y Compositing. Recibirás avances continuos.',
    },
    {
      q: '¿Aceptan proyectos internacionales?',
      a: '¡Sí! Trabajamos con clientes de todo el mundo. Nos adaptamos a diferentes zonas horarias y gestionamos pagos internacionales en USD o EUR.',
    },
  ];

  const services: ServiceItem[] = [
    {
      icon: Box,
      title: 'Modelado y Rendering 3D',
      desc: 'Asset 3D hiperrealistas o estilizados para productos, arquitectura e industria.',
    },
    {
      icon: Film,
      title: 'Animación 3D & VFX',
      desc: 'Personajes, dinámicas de fluidos, simulación de telas y comerciales de alto impacto.',
    },
    {
      icon: Palette,
      title: 'Arte Conceptual & Rigging',
      desc: 'Diseño de personajes desde el boceto inicial hasta esqueletos complejos para animación.',
    },
  ];

  // ==========================================
  // 5. RENDERIZADO DEL COMPONENTE
  // ==========================================

  return (
    <div className="relative  bg-black text-slate-100 font-sans overflow-x-hidden selection:bg-pink-600 selection:text-white">
      {/* Fondo interactivo Canvas */}
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />

      {/* Gradientes decorativos de fondo */}
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-900/30 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-pink-600/20 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="fixed top-[40%] right-[20%] w-[350px] h-[350px] bg-amber-300/10 rounded-full blur-[160px] pointer-events-none z-0" />

      {/* Contenido Principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        
        {/* Encabezado Principal */}
        <header className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-950/80 border border-purple-500/40 text-amber-300 text-sm font-medium mb-6 shadow-lg shadow-purple-950/50 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
            <span>Daniel's Estudio — Animación & Diseño 3D</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-amber-300">
            Hagamos realidad tu visión tridimensional.
          </h1>

          <p className="text-lg text-zinc-400 leading-relaxed">
            ¿Tienes una idea para un comercial, videojuego, render de producto o experiencia interactiva?
            Escríbenos y transformemos conceptos en realidad digital.
          </p>
        </header>

        {/* Rejilla Principal: Formulario e Información */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start ">
          
          {/* COLUMNA IZQUIERDA: Formulario */}
          <section className="lg:col-span-7 bg-zinc-950/80 backdrop-blur-xl border border-purple-900/40 p-6 sm:p-10 rounded-3xl shadow-2xl shadow-purple-950/30 relative">
            <div className="absolute top-0 shadow-[0_0_15px_#db2777]" />

            <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-white flex items-center gap-3">
              <MessageSquare className="w-7 h-7 text-pink-500" />
              Inicia tu Proyecto
            </h2>
            <p className="text-zinc-400 mb-8 text-sm sm:text-base">
              Completa el formulario y te responderemos en menos de 24 horas laborables.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nombre y Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-amber-300 mb-2">
                    Tu Nombre *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Ej. Sofía Martínez"
                    className="w-full bg-zinc-900/90 border border-purple-900/50 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-amber-300 mb-2">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="sofia@estudio.com"
                    className="w-full bg-zinc-900/90 border border-purple-900/50 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all text-sm"
                  />
                </div>
              </div>

              {/* Empresa y Tipo de Proyecto */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-xs font-semibold uppercase tracking-wider text-amber-300 mb-2">
                    Empresa / Marca
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Ej. CyberStudio Inc."
                    className="w-full bg-zinc-900/90 border border-purple-900/50 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-xs font-semibold uppercase tracking-wider text-amber-300 mb-2">
                    Tipo de Proyecto *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full bg-zinc-900/90 border border-purple-900/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all text-sm cursor-pointer"
                  >
                    <option value="3d-animation">Animación 3D Comercial</option>
                    <option value="product-render">Renderizado de Producto</option>
                    <option value="character">Diseño / Rigging de Personajes</option>
                    <option value="vfx">Efectos Visuales (VFX)</option>
                    <option value="realtime-unreal">Unreal Engine / Tiempo Real</option>
                    <option value="other">Otro Servicio</option>
                  </select>
                </div>
              </div>

              {/* Presupuesto y Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="budget" className="block text-xs font-semibold uppercase tracking-wider text-amber-300 mb-2">
                    Presupuesto Estimado (USD) *
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full bg-zinc-900/90 border border-purple-900/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all text-sm cursor-pointer"
                  >
                    <option value="2k-5k">$2,000 - $5,000</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k+">$25,000+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-xs font-semibold uppercase tracking-wider text-amber-300 mb-2">
                    Plazo de Entrega *
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full bg-zinc-900/90 border border-purple-900/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all text-sm cursor-pointer"
                  >
                    <option value="urgent">Urgente (&lt; 2 semanas)</option>
                    <option value="1-2-months">1 a 2 Meses</option>
                    <option value="3+-months">3+ Meses</option>
                    <option value="flexible">Flexible / Sin prisa</option>
                  </select>
                </div>
              </div>

              {/* Mensaje */}
              <div>
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-amber-300 mb-2">
                  Detalles del Proyecto *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Cuéntanos la idea, objetivos, referencias estéticas o requerimientos técnicos..."
                  className="w-full bg-zinc-900/90 border border-purple-900/50 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all text-sm resize-none"
                />
              </div>

              {/* Input de archivo adjunto */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-amber-300 mb-2">
                  Adjuntar Brief o Referencias (Opcional)
                </label>
                <div className="relative">
                  <input
                    type="file"
                    id="file-upload"
                    onChange={handleFileChange}
                    className="hidden"
                    accept=".pdf,.png,.jpg,.jpeg,.zip,.rar"
                  />
                  <label
                    htmlFor="file-upload"
                    className="flex items-center justify-between w-full bg-zinc-900/60 border border-dashed border-purple-800 rounded-xl px-4 py-3 text-zinc-400 hover:border-pink-500 hover:text-white transition-all cursor-pointer text-sm"
                  >
                    <span className="flex items-center gap-2 truncate">
                      <Paperclip className="w-4 h-4 text-pink-500 flex-shrink-0" />
                      {formData.file ? formData.file.name : 'Subir archivo (PDF, PNG, ZIP - Máx 25MB)'}
                    </span>

                    {formData.file && (
                      <button
                        type="button"
                        onClick={handleRemoveFile}
                        className="p-1 hover:bg-zinc-800 rounded-full text-zinc-400 hover:text-pink-500 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </label>
                </div>
              </div>

              {/* Botón de envío */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-black bg-gradient-to-r from-amber-300 via-pink-500 to-purple-500 hover:from-amber-400 hover:to-purple-600 transition-all shadow-lg shadow-pink-600/30 hover:shadow-pink-600/50 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2 text-zinc-950 font-black tracking-wide uppercase text-sm">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      Enviando propuesta...
                    </>
                  ) : (
                    <>
                      Enviar Propuesta
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </span>
              </button>
            </form>
          </section>

          {/* COLUMNA DERECHA: Datos de Contacto y Servicios */}
          <aside className="lg:col-span-5 space-y-8">
            
            {/* Tarjeta de Información Directa */}
            <div className="bg-zinc-950/80 backdrop-blur-xl border border-purple-900/40 p-6 sm:p-8 rounded-3xl space-y-6">
              <h3 className="text-xl font-bold text-white border-b border-purple-900/50 pb-4">
                Contacto Directo
              </h3>

              <div className="space-y-4">
                <a
                  href="mailto:contacto@danielsestudio.com"
                  className="flex items-center gap-4 p-3 rounded-xl bg-zinc-900/50 hover:bg-purple-950/40 border border-purple-900/30 hover:border-pink-500/50 transition-all group"
                >
                  <div className="p-3 rounded-lg bg-purple-900/30 text-pink-500 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 uppercase tracking-wider font-medium">Email Directo</p>
                    <p className="text-sm font-semibold text-zinc-200 group-hover:text-amber-300 transition-colors">
                      contacto@danielsestudio.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+34900000000"
                  className="flex items-center gap-4 p-3 rounded-xl bg-zinc-900/50 hover:bg-purple-950/40 border border-purple-900/30 hover:border-pink-500/50 transition-all group"
                >
                  <div className="p-3 rounded-lg bg-purple-900/30 text-amber-300 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 uppercase tracking-wider font-medium">Teléfono / WhatsApp</p>
                    <p className="text-sm font-semibold text-zinc-200 group-hover:text-amber-300 transition-colors">
                      +34 600 000 000
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3 rounded-xl bg-zinc-900/50 border border-purple-900/30">
                  <div className="p-3 rounded-lg bg-purple-900/30 text-purple-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 uppercase tracking-wider font-medium">Ubicación HQ</p>
                    <p className="text-sm font-semibold text-zinc-200">
                      Madrid, España & Remote Worldwide
                    </p>
                  </div>
                </div>
              </div>

              {/* Redes sociales */}
              <div className="pt-4 border-t border-purple-900/50">
                <p className="text-xs text-zinc-400 mb-3 font-semibold uppercase tracking-wider">
                  Sigue Nuestro Portafolio
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-zinc-900 border border-purple-900/40 text-zinc-400 hover:text-pink-500 hover:border-pink-500/50 hover:bg-purple-950/30 transition-all"
                  >
                    <FaInstagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-zinc-900 border border-purple-900/40 text-zinc-400 hover:text-amber-300 hover:border-amber-300/50 hover:bg-purple-950/30 transition-all"
                  >
                    <FaLinkedinIn className="w-5 h-5" />
                  </a>
                  <a
                    href="https://artstation.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-zinc-900 border border-purple-900/40 text-zinc-400 hover:text-purple-400 hover:border-purple-500/50 hover:bg-purple-950/30 transition-all flex items-center justify-center font-bold text-xs"
                  >
                    ArtStation
                  </a>
                </div>
              </div>
            </div>

            {/* Tarjeta de Servicios Breves */}
            <div className="bg-zinc-950/80 backdrop-blur-xl border border-purple-900/40 p-6 sm:p-8 rounded-3xl space-y-4">
              <h3 className="text-lg font-bold text-white mb-2">Especialidades</h3>
              <div className="space-y-4">
                {services.map((serv, i) => {
                  const Icon = serv.icon;
                  return (
                    <div key={i} className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-pink-600/10 text-pink-500 mt-1">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-zinc-200">{serv.title}</h4>
                        <p className="text-xs text-zinc-500">{serv.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </aside>
        </div>

        {/* SECCIÓN FAQ */}
        <section className="mt-24 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center justify-center gap-2">
              <HelpCircle className="w-6 h-6 text-amber-300" />
              Preguntas Frecuentes
            </h2>
            <p className="text-zinc-400 text-sm">
              Todo lo que necesitas saber antes de arrancar la producción con Daniel's Estudio.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-zinc-950/60 border border-purple-900/40 rounded-2xl overflow-hidden backdrop-blur-md transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-purple-950/20 transition-colors"
                >
                  <span className="font-semibold text-zinc-200 text-sm sm:text-base">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-300 transition-transform duration-300 ${
                      activeFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {activeFaq === index && (
                  <div className="px-6 pb-5 pt-1 text-zinc-400 text-sm leading-relaxed border-t border-purple-900/20">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* MODAL DE CONFIRMACIÓN DE ENVÍO */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-zinc-950 border border-purple-500/50 p-8 rounded-3xl max-w-md w-full text-center space-y-6 shadow-2xl shadow-pink-600/20 relative animate-in fade-in zoom-in duration-200">
            <div className="w-16 h-16 bg-pink-600/20 border border-pink-500 text-amber-300 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-2">¡Mensaje Recibido!</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Gracias por ponerte en contacto con <strong className="text-amber-300">Daniel's Estudio</strong>.
                Nuestro equipo de diseño y animación 3D revisará tu proyecto y responderá en menos de 24 horas.
              </p>
            </div>

            <button
              type="button"
              onClick={closeModal}
              className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold hover:opacity-90 transition-opacity text-sm"
            >
              Entendido
            </button>
          </div>
        </div>
      )}
    </div>
  );
}