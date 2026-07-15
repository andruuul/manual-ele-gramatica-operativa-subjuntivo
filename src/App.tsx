/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { BookOpen, Calendar, Clock, ChevronUp, ChevronDown, List, Settings, Info, Menu, X, CheckSquare } from 'lucide-react';
import Activity1_Descubre from './components/Activity1_Descubre';
import Activity2_Algoritmo from './components/Activity2_Algoritmo';
import Activity3_Input from './components/Activity3_Input';
import Activity4_Correo from './components/Activity4_Correo';
import Activity5_Organigrama from './components/Activity5_Organigrama';
import Activity6_VerdaderoFalso from './components/Activity6_VerdaderoFalso';
import Activity7_Chat from './components/Activity7_Chat';
import Activity8_Espejo from './components/Activity8_Espejo';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('introduccion');
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  const mainContentRef = useRef<HTMLDivElement>(null);

  // List of navigation items for high density sidebar
  const menuItems = [
    { id: 'introduccion', label: '00 • Filosofía Operativa', icon: '⚡' },
    { id: 'actividad-1', label: '01 • Descubre la diferencia', icon: '🔍' },
    { id: 'actividad-2', label: '02 • Algoritmo de la forma', icon: '⚙️' },
    { id: 'actividad-3', label: '03 • Input estructurado', icon: '📝' },
    { id: 'actividad-4', label: '04 • Correo profesional', icon: '✉️' },
    { id: 'actividad-5', label: '05 • Organigrama del equipo', icon: '👥' },
    { id: 'actividad-6', label: '06 • Verdadero o Falso', icon: '❓' },
    { id: 'actividad-7', label: '07 • La Expansión (Chat)', icon: '💬' },
    { id: 'actividad-8', label: '08 • El Espejo del Significado', icon: '🪞' },
  ];

  // Monitor scroll in the scrollable content container
  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = mainContentRef.current;
      if (!scrollContainer) return;

      const scrollPosition = scrollContainer.scrollTop + 180; // offset for sticky section tracking

      for (const item of menuItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    const container = mainContentRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    const container = mainContentRef.current;
    if (element && container) {
      container.scrollTo({
        top: element.offsetTop - 20,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="flex flex-col w-full h-screen bg-[#FAF9F6] font-sans text-[#2F3437] overflow-hidden">
      
      {/* High Density Header Section */}
      <header className="flex items-center justify-between px-4 md:px-8 py-3 bg-white border-b border-[#D8D6CF] z-10 shrink-0">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1.5 hover:bg-[#F2F1EC] rounded-md text-gray-500 md:hidden"
            title="Toggle Sidebar"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <div className="flex flex-col">
            <h1 className="text-xl md:text-2xl font-black text-[#5A7D4D] tracking-tight leading-none">
              Indicativo y Subjuntivo
            </h1>
            <span className="text-xs uppercase tracking-widest font-semibold text-[#5A7D4D]/75 mt-1 block">
              Gramática Operativa
            </span>
          </div>
        </div>

        {/* Quick Session Selectors */}
        <nav className="hidden md:flex gap-1 bg-[#FAF9F6] p-1 rounded-lg border border-[#D8D6CF] text-xs">
          <button
            onClick={() => handleScrollTo('introduccion')}
            className={`px-3 py-1.5 rounded-md font-bold transition-all cursor-pointer ${
              activeSection === 'introduccion'
                ? 'bg-[#5A7D4D] text-white'
                : 'text-gray-500 hover:text-[#5A7D4D]'
            }`}
          >
            Introducción
          </button>
          <button
            onClick={() => handleScrollTo('actividad-1')}
            className={`px-3 py-1.5 rounded-md font-bold transition-all cursor-pointer ${
              ['actividad-1', 'actividad-2', 'actividad-3', 'actividad-4', 'actividad-5'].includes(activeSection)
                ? 'bg-[#5A7D4D] text-white'
                : 'text-gray-500 hover:text-[#5A7D4D]'
            }`}
          >
            Sesión 1
          </button>
          <button
            onClick={() => handleScrollTo('actividad-6')}
            className={`px-3 py-1.5 rounded-md font-bold transition-all cursor-pointer ${
              ['actividad-6', 'actividad-7', 'actividad-8'].includes(activeSection)
                ? 'bg-[#5A7D4D] text-white'
                : 'text-gray-500 hover:text-[#5A7D4D]'
            }`}
          >
            Sesión 2
          </button>
        </nav>

        {/* Level Badges */}
        <div className="text-right">
          <div className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Manual Digital ELE</div>
          <div className="text-sm font-black text-[#5A7D4D]">Nivel B1</div>
        </div>
      </header>

      {/* Main Content Area: Sidebar + Scroll Pane */}
      <main className="flex flex-1 overflow-hidden relative">
        
        {/* Left Sidebar Navigation */}
        <aside 
          className={`absolute md:relative top-0 bottom-0 left-0 w-72 bg-white border-r border-[#D8D6CF] flex flex-col z-20 transition-transform duration-300 md:transform-none ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
          }`}
        >
          <div className="p-5 flex-1 overflow-y-auto">
            <h3 className="text-[10px] uppercase tracking-widest text-gray-400 font-extrabold mb-4 italic">
              Índice de Actividades
            </h3>
            
            <ul className="space-y-1">
              {menuItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => {
                        handleScrollTo(item.id);
                        if (window.innerWidth < 768) {
                          setSidebarOpen(false);
                        }
                      }}
                      className={`w-full flex items-center gap-3 p-2.5 rounded-lg text-left text-xs md:text-sm font-medium transition-all cursor-pointer border ${
                        isActive
                          ? 'bg-[#FAF5E7] text-[#5A7D4D] font-bold border-[#D8D6CF]'
                          : 'text-gray-600 hover:bg-[#F2F1EC]/40 border-transparent'
                      }`}
                    >
                      <span className={`w-6 h-6 flex items-center justify-center rounded-full text-[10px] shrink-0 ${
                        isActive ? 'bg-[#5A7D4D] text-white' : 'border border-[#D8D6CF] bg-[#FAF9F6] text-gray-500'
                      }`}>
                        {item.icon}
                      </span>
                      <span className="truncate">{item.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Reflected UX Tip Box inside Sidebar */}
          <div className="p-5 bg-[#FAF9F6] border-t border-[#D8D6CF] shrink-0">
            <div className="text-xs leading-relaxed text-gray-600">
              <strong className="block text-[#5A7D4D] mb-1 italic flex items-center gap-1">
                <Info size={14} strokeWidth={1.5} /> Enfoque Práctico
              </strong>
              Decide basándote en la realidad. ¿Tengo identificada a la persona o describo un perfil?
            </div>
          </div>
        </aside>

        {/* Right side background backdrop for mobile layout */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/20 z-10 md:hidden"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}

        {/* Scrollable Main Area */}
        <section 
          ref={mainContentRef}
          className="flex-1 p-4 md:p-8 overflow-y-auto bg-[#FAF9F6]"
          style={{ scrollBehavior: 'smooth' }}
        >
          <div className="max-w-4xl mx-auto pb-12">
            
            {/* Textbook Cover Banner */}
            <div className="bg-white border border-[#D8D6CF] rounded-lg p-6 md:p-8 mb-8 shadow-none relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#F2F1EC]/40 rounded-full blur-2xl -mr-10 -mt-10"></div>
              
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="bg-[#5A7D4D] text-white text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-wider font-mono">
                  Nivel B1
                </span>
                <span className="bg-[#FAF5E7] text-[#C97C5D] border border-[#C97C5D]/20 text-[10px] font-bold px-2.5 py-1 rounded flex items-center gap-1 font-mono">
                  <Clock size={10} strokeWidth={1.5} /> 2 Sesiones (100 min)
                </span>
                <span className="bg-[#F2F1EC] text-[#2F3437] border border-[#D8D6CF]/60 text-[10px] font-bold px-2.5 py-1 rounded flex items-center gap-1 font-mono">
                  <BookOpen size={10} strokeWidth={1.5} /> ELE Corporativo
                </span>
              </div>

              <h2 className="text-2xl md:text-4xl font-display font-black text-[#5A7D4D] tracking-tight leading-none mb-2">
                El poder de la decisión
              </h2>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed max-w-2xl">
                Cuaderno digital interactivo de Español como Lengua Extranjera. Explora el contraste gramatical de forma práctica a través de la toma de decisiones lingüísticas y operativas en contextos de oficina.
              </p>
            </div>

            {/* SECTION: INTRODUCCIÓN */}
            <div id="introduccion" className="scroll-mt-6 mb-12">
              <div className="border-b border-[#D8D6CF] pb-2 mb-6">
                <h3 className="text-lg md:text-xl font-display font-bold text-[#5A7D4D] flex items-center gap-2">
                  <span className="block w-1 h-5 bg-[#5A7D4D]"></span>
                  Introducción y Filosofía Operativa
                </h3>
              </div>
              
              {/* Main Key Formula Frame */}
              <div className="bg-white border border-[#D8D6CF] rounded-lg p-6 md:p-8 my-6 shadow-none text-center">
                <span className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest block mb-4">
                  Idea Clave de la Unidad
                </span>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch justify-center">
                  
                  {/* Indicativo */}
                  <div className="p-5 rounded-lg bg-white border border-[#D8D6CF] border-l-8 border-[#5A7D4D] text-left transition-all">
                    <span className="text-[10px] uppercase font-mono font-bold text-[#5A7D4D] bg-[#F2F1EC] px-2 py-0.5 rounded border border-[#D8D6CF]">
                      Indicativo
                    </span>
                    <p className="text-xl font-display font-black text-[#5A7D4D] mt-3 leading-tight">
                      Declaro
                    </p>
                    <p className="text-xs md:text-sm text-gray-600 mt-1.5 italic font-medium">
                      "El hablante declara una entidad identificada."
                    </p>
                  </div>

                  {/* Subjuntivo */}
                  <div className="p-5 rounded-lg bg-[#FAF5E7] border border-[#C97C5D]/20 border-l-8 border-[#C97C5D] text-left transition-all">
                    <span className="text-[10px] uppercase font-mono font-bold text-[#C97C5D] bg-white px-2 py-0.5 rounded border border-[#C97C5D]/20">
                      Subjuntivo
                    </span>
                    <p className="text-xl font-display font-black text-[#5A7D4D] mt-3 leading-tight">
                      No declaro
                    </p>
                    <p className="text-xs md:text-sm text-gray-600 mt-1.5 italic font-medium">
                      "El hablante no declara esa entidad; presenta un perfil ideal."
                    </p>
                  </div>

                </div>
              </div>
            </div>

            {/* SECTION: SESIÓN 1 */}
            <div className="border-t border-[#D8D6CF] pt-8 my-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-[#5A7D4D] font-bold uppercase bg-[#F2F1EC] border border-[#D8D6CF]/60 px-2 py-0.5 rounded">
                  Sesión 1: El Diagnóstico
                </span>
                <span className="text-[10px] text-gray-400 font-mono">DURACIÓN: 50 MIN</span>
              </div>

              <div id="actividad-1" className="scroll-mt-6"><Activity1_Descubre /></div>
              <div id="actividad-2" className="scroll-mt-6"><Activity2_Algoritmo /></div>
              <div id="actividad-3" className="scroll-mt-6"><Activity3_Input /></div>
              <div id="actividad-4" className="scroll-mt-6"><Activity4_Correo /></div>
              <div id="actividad-5" className="scroll-mt-6"><Activity5_Organigrama /></div>
            </div>

            {/* SECTION: SESIÓN 2 */}
            <div className="border-t border-[#D8D6CF] pt-8 my-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-[#C97C5D] font-bold uppercase bg-[#FAF5E7] border border-[#C97C5D]/10 px-2 py-0.5 rounded">
                  Sesión 2: La Aplicación
                </span>
                <span className="text-[10px] text-gray-400 font-mono">DURACIÓN: 50 MIN</span>
              </div>

              <div id="actividad-6" className="scroll-mt-6"><Activity6_VerdaderoFalso /></div>
              <div id="actividad-7" className="scroll-mt-6"><Activity7_Chat /></div>
              <div id="actividad-8" className="scroll-mt-6"><Activity8_Espejo /></div>
            </div>

          </div>
        </section>

      </main>

      {/* Footer Stats/Progress Bar as requested by High Density theme */}
      <footer className="h-12 bg-white border-t border-[#D8D6CF] px-4 md:px-8 flex items-center justify-between text-[11px] font-bold text-gray-400 shrink-0 select-none">
        <div className="flex items-center gap-2 md:gap-4 truncate">
          <span>PÁGINA 12 / 48</span>
          <span className="w-px h-3 bg-gray-200 hidden sm:inline"></span>
          <span className="hidden sm:inline uppercase">UNIDAD 4: EL PERFIL PROFESIONAL</span>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-[#5A7D4D]">
            <span className="block w-2 h-2 rounded-full bg-[#5A7D4D]"></span>
            <span>AUTOCONTENIDO</span>
          </div>
          <div className="flex items-center gap-2 text-[#C97C5D]">
            <span className="block w-2 h-2 rounded-full bg-[#C97C5D]"></span>
            <span>INTERACTIVO</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
