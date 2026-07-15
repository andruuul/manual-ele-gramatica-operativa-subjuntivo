/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import ActivityCard from './ActivityCard';
import InstructionBox from './InstructionBox';
import { Users, UserPlus, HelpCircle, Briefcase, Plus, Trash2 } from 'lucide-react';

export default function Activity5_Organigrama() {
  const [equipoActual, setEquipoActual] = useState<string[]>([
    'Tenemos una analista que coordina los proyectos internacionales. (Ejemplo)',
    'Contamos con un programador que mantiene las bases de datos de clientes.',
  ]);

  const [equipoDeseado, setEquipoDeseado] = useState<string[]>([
    'Buscamos un especialista que gestione las redes sociales de la marca.',
    'Necesitamos un traductor que traduzca el software al japonés.',
  ]);

  const [proximaContratacion, setProximaContratacion] = useState<string>('');

  const [newActual, setNewActual] = useState('');
  const [newDeseado, setNewDeseado] = useState('');

  const addActual = () => {
    if (newActual.trim()) {
      setEquipoActual(prev => [...prev, newActual.trim()]);
      setNewActual('');
    }
  };

  const addDeseado = () => {
    if (newDeseado.trim()) {
      setEquipoDeseado(prev => [...prev, newDeseado.trim()]);
      setNewDeseado('');
    }
  };

  const removeActual = (index: number) => {
    setEquipoActual(prev => prev.filter((_, i) => i !== index));
  };

  const removeDeseado = (index: number) => {
    setEquipoDeseado(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <ActivityCard id="actividad-5" number={5} title="Organigrama del equipo">
      
      <InstructionBox>
        <p>Imagina que eres la persona responsable de Recursos Humanos de una tecnológica.</p>
        <p className="mt-1">
          Completa este organigrama escribiendo tus notas. En <strong>Equipo actual</strong> declara personas que ya trabajan en tu equipo (usa indicativo). En <strong>Equipo deseado</strong> escribe perfiles abstractos que necesitas incorporar (usa subjuntivo). En <strong>Próxima contratación</strong> describe el perfil ideal prioritario.
        </p>
      </InstructionBox>

      {/* Grid Organigrama */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-8 items-start">
        
        {/* Column 1: Equipo Actual */}
        <div className="border border-[#D8D6CF] rounded-lg bg-white overflow-hidden shadow-none">
          <div className="bg-[#5A7D4D] text-white p-4 flex items-center gap-2.5">
            <Users size={16} strokeWidth={1.5} className="text-[#7A9E6E]" />
            <div>
              <h3 className="font-display font-bold text-sm md:text-base leading-none">1. Equipo actual</h3>
              <span className="text-[9px] font-mono font-bold text-[#7A9E6E] bg-white/25 border border-white/30 px-1.5 py-0.5 rounded block mt-1">SER REAL / DECLARADO (Indicativo)</span>
            </div>
          </div>
          <div className="p-4 space-y-3">
            {equipoActual.map((item, idx) => (
              <div key={idx} className="bg-[#F2F1EC]/45 p-3 rounded-lg border border-[#D8D6CF]/60 text-xs md:text-sm text-[#2F3437] flex justify-between gap-2 items-start group font-medium">
                <p className="leading-relaxed">
                  {item.includes('(Ejemplo)') ? (
                    <span>
                      Tenemos una analista que <strong className="text-[#5A7D4D] underline decoration-wavy decoration-[#5A7D4D]/30 font-black">coordina</strong> los proyectos internacionales. <span className="text-[10px] text-gray-400 italic font-normal">(Ejemplo resuelto)</span>
                    </span>
                  ) : item}
                </p>
                {idx > 0 && (
                  <button 
                    onClick={() => removeActual(idx)}
                    className="text-gray-400 hover:text-[#C97C5D] transition-colors shrink-0 mt-0.5 cursor-pointer opacity-0 group-hover:opacity-100"
                    title="Eliminar"
                  >
                    <Trash2 size={13} strokeWidth={1.5} />
                  </button>
                )}
              </div>
            ))}

            {/* Input to add */}
            <div className="pt-2 border-t border-[#D8D6CF]/60 flex gap-2">
              <input
                type="text"
                placeholder="Ej. Tengo un diseñador que habla inglés..."
                value={newActual}
                onChange={(e) => setNewActual(e.target.value)}
                className="flex-1 p-2 border border-[#D8D6CF] rounded-lg text-xs focus:border-[#5A7D4D] focus:outline-none bg-[#F2F1EC]/30 font-medium text-[#2F3437]"
              />
              <button
                onClick={addActual}
                className="p-2 bg-[#5A7D4D] text-white rounded-lg hover:bg-[#4B6840] transition-colors cursor-pointer"
                title="Añadir empleado"
              >
                <Plus size={14} strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>

        {/* Column 2: Equipo Deseado */}
        <div className="border border-[#D8D6CF] rounded-lg bg-white overflow-hidden shadow-none">
          <div className="bg-[#5A7D4D] text-white p-4 flex items-center gap-2.5">
            <UserPlus size={16} strokeWidth={1.5} className="text-[#E5C867]" />
            <div>
              <h3 className="font-display font-bold text-sm md:text-base leading-none">2. Equipo deseado</h3>
              <span className="text-[9px] font-mono font-bold text-[#E5C867] bg-white/20 border border-white/25 px-1.5 py-0.5 rounded block mt-1">PERFIL IDEAL / NO DECLARADO (Subjuntivo)</span>
            </div>
          </div>
          <div className="p-4 space-y-3">
            {equipoDeseado.map((item, idx) => (
              <div key={idx} className="bg-[#F2F1EC]/45 p-3 rounded-lg border border-[#D8D6CF]/60 text-xs md:text-sm text-[#2F3437] flex justify-between gap-2 items-start group font-medium">
                <p className="leading-relaxed">{item}</p>
                {idx > 0 && (
                  <button 
                    onClick={() => removeDeseado(idx)}
                    className="text-gray-400 hover:text-[#C97C5D] transition-colors shrink-0 mt-0.5 cursor-pointer opacity-0 group-hover:opacity-100"
                    title="Eliminar"
                  >
                    <Trash2 size={13} strokeWidth={1.5} />
                  </button>
                )}
              </div>
            ))}

            {/* Input to add */}
            <div className="pt-2 border-t border-[#D8D6CF]/60 flex gap-2">
              <input
                type="text"
                placeholder="Ej. Busco un redactor que redacte en..."
                value={newDeseado}
                onChange={(e) => setNewDeseado(e.target.value)}
                className="flex-1 p-2 border border-[#D8D6CF] rounded-lg text-xs focus:border-[#C97C5D] focus:outline-none bg-[#F2F1EC]/30 font-medium text-[#2F3437]"
              />
              <button
                onClick={addDeseado}
                className="p-2 bg-[#5A7D4D] text-white rounded-lg hover:bg-[#4B6840] transition-colors cursor-pointer"
                title="Añadir puesto"
              >
                <Plus size={14} strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>

        {/* Column 3: Próxima Contratación */}
        <div className="border border-[#D8D6CF] rounded-lg bg-white overflow-hidden shadow-none">
          <div className="bg-[#5A7D4D] text-white p-4 flex items-center gap-2.5">
            <Briefcase size={16} strokeWidth={1.5} className="text-[#FAF5E7]" />
            <div>
              <h3 className="font-display font-bold text-sm md:text-base leading-none">3. Próxima contratación</h3>
              <span className="text-[9px] font-mono font-bold text-[#FAF5E7] bg-white/20 border border-white/25 px-1.5 py-0.5 rounded block mt-1">VACANTE PRIORITARIA (Subjuntivo)</span>
            </div>
          </div>
          <div className="p-4 space-y-3">
            {/* Template placeholder values */}
            <div className="bg-[#FAF5E7] p-3 rounded-lg border border-[#D8D6CF] text-xs md:text-sm text-gray-700 space-y-1 font-medium">
              <span className="font-bold block text-[#5A7D4D] not-italic mb-1">Buscamos una persona que...</span>
              <p>...coordine equipos multiculturales,</p>
              <p>...conozca herramientas de análisis de datos,</p>
              <p>...tenga experiencia internacional.</p>
            </div>

            {/* Editable text area for user priority recruitment */}
            <div className="pt-1">
              <label htmlFor="recruitment-note" className="block text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wider font-mono">
                Describe tu propia vacante urgente:
              </label>
              <textarea
                id="recruitment-note"
                rows={4}
                value={proximaContratacion}
                onChange={(e) => setProximaContratacion(e.target.value)}
                className="w-full p-2.5 border border-[#D8D6CF] rounded-lg text-xs md:text-sm focus:border-[#5A7D4D] focus:outline-none bg-[#F2F1EC]/30 text-[#2F3437] font-medium"
                placeholder="Ej. Buscamos un analista financiero que comprenda los mercados latinos y resuelva problemas de capital..."
              />
            </div>
          </div>
        </div>

      </div>

      <div className="bg-[#FAF9F6] border border-[#7A9E6E]/20 p-4 rounded-lg text-xs md:text-sm text-[#2F3437] mt-6 flex items-start gap-2.5 font-medium">
        <HelpCircle size={16} strokeWidth={1.5} className="text-[#7A9E6E] shrink-0 mt-0.5" />
        <div>
          <strong className="text-[#5A7D4D] font-bold">Consejo de Recursos Humanos:</strong> Al redactar una oferta laboral real (Equipo deseado) siempre vas a necesitar el <strong>Subjuntivo</strong> porque la persona no existe aún en tu plantilla; solo describes el perfil ideal. Al hablar de tu plantilla activa (Equipo actual), usas <strong>Indicativo</strong> para declarar lo que ya tienes plenamente identificado.
        </div>
      </div>
    </ActivityCard>
  );
}
