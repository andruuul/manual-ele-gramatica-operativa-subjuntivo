/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import ActivityCard from './ActivityCard';
import InstructionBox from './InstructionBox';
import { SituationItem } from '../types';
import { CheckCircle2, AlertCircle, HelpCircle, Phone, FilePlus } from 'lucide-react';

export default function Activity3_Input() {
  const situations: SituationItem[] = [
    {
      id: 1,
      text: "Necesitamos hablar con la analista que conoce el sistema de facturación y puede preparar el informe antes del viernes.",
      correctOption: "specific",
      explanation: "El hablante declara cualidades de una persona específica que ya conoce y tiene plenamente identificada (usa indicativo: 'conoce', 'puede'). No es una vacante; es una colega concreta a la que podemos llamar por su nombre."
    },
    {
      id: 2,
      text: "Buscamos un analista que conozca el sistema de facturación y pueda preparar el informe antes del viernes.",
      correctOption: "profile",
      explanation: "El hablante no declara a un individuo concreto; está presentando los requisitos de un perfil deseado, todavía no identificado (usa subjuntivo: 'conozca', 'pueda'). La acción correspondiente es publicar una oferta de trabajo para encontrar a alguien con este perfil."
    },
    {
      id: 3,
      text: "Quiero reunirme con la diseñadora que domina las presentaciones para clientes internacionales.",
      correctOption: "specific",
      explanation: "Al usar indicativo ('domina'), se declara la existencia de una diseñadora particular de la empresa que ya tiene esa habilidad demostrada. Sabemos perfectamente quién es, por lo que debemos ponernos en contacto directo con ella."
    },
    {
      id: 4,
      text: "Estamos buscando una diseñadora que domine las presentaciones para clientes internacionales.",
      correctOption: "profile",
      explanation: "Se presenta el perfil de lo que se busca, sin declarar que se conozca a alguien específico con esas habilidades en este momento (usa subjuntivo: 'domine'). Como es una descripción de necesidades, la acción es buscar postulantes externos o internos abriendo una vacante."
    },
    {
      id: 5,
      text: "El director necesita hablar con el consultor que entiende el nuevo proceso de auditoría y ya ha trabajado con este cliente.",
      correctOption: "specific",
      explanation: "Se declaran hechos comprobados de un consultor identificado que ya está asignado o ha trabajado antes con el cliente (usa indicativo: 'entiende', 'ha trabajado'). No hay misterio ni búsqueda, simplemente hay que llamarlo por teléfono."
    }
  ];

  const [selections, setSelections] = useState<Record<number, 'specific' | 'profile' | null>>({
    1: null,
    2: null,
    3: null,
    4: null,
    5: null
  });

  const [checked, setChecked] = useState<boolean>(false);

  const handleSelect = (situationId: number, option: 'specific' | 'profile') => {
    if (checked) return; // Prevent change after checking
    setSelections(prev => ({ ...prev, [situationId]: option }));
  };

  const handleCheck = () => {
    setChecked(true);
  };

  const handleReset = () => {
    setSelections({ 1: null, 2: null, 3: null, 4: null, 5: null });
    setChecked(false);
  };

  const allAnswered = Object.values(selections).every(val => val !== null);

  return (
    <ActivityCard id="actividad-3" number={3} title="Input estructurado">
      <InstructionBox>
        <p>Lee cada una de las situaciones del jefe en la oficina. Después decide cuál es la acción más lógica según la información expresada.</p>
        <p className="mt-1 font-semibold text-[#5A7D4D]">Piensa primero en la persona: ¿ya tiene rostro, nombre y apellido en la empresa, o describe solamente el perfil que nos hace falta?</p>
      </InstructionBox>

      <div className="space-y-6 my-8">
        {situations.map((item) => {
          const userSel = selections[item.id];
          const isCorrect = userSel === item.correctOption;

          return (
            <div 
              key={item.id} 
              className={`p-5 md:p-6 rounded-lg border transition-all duration-300 bg-white ${
                checked
                  ? isCorrect
                    ? 'border-[#7A9E6E]/30 bg-[#7A9E6E]/10'
                    : 'border-[#C97C5D]/30 bg-[#C97C5D]/10'
                  : 'border-[#D8D6CF] hover:border-gray-300 shadow-none'
              }`}
            >
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#F2F1EC] border border-[#D8D6CF] text-xs font-bold text-gray-500 shrink-0 mt-0.5 font-mono">
                  {item.id}
                </span>
                <div className="flex-1">
                  <p className="text-[#2F3437] font-bold text-sm md:text-base leading-relaxed font-sans">
                    {item.text}
                  </p>

                  {/* Radio options container */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                    {/* Option Specific (Indicativo) - Oliva */}
                    <button
                      type="button"
                      onClick={() => handleSelect(item.id, 'specific')}
                      disabled={checked}
                      className={`px-4 py-3 rounded-lg border text-xs md:text-sm text-left flex items-center gap-3 transition-all duration-200 cursor-pointer ${
                        selections[item.id] === 'specific'
                          ? 'bg-[#5A7D4D] text-white border-[#5A7D4D]'
                          : 'bg-[#F2F1EC] text-gray-700 border-[#D8D6CF] hover:bg-gray-100 disabled:hover:bg-[#F2F1EC]'
                      }`}
                    >
                      <Phone size={16} strokeWidth={1.5} className={selections[item.id] === 'specific' ? 'text-white' : 'text-[#5A7D4D]'} />
                      <div className="flex-1">
                        <span className="font-bold block">Llamar a la persona específica</span>
                        <span className="text-[10px] opacity-80 block font-medium mt-0.5">Ya está en la empresa e identificada</span>
                      </div>
                    </button>

                    {/* Option Profile (Subjuntivo) - Terracota */}
                    <button
                      type="button"
                      onClick={() => handleSelect(item.id, 'profile')}
                      disabled={checked}
                      className={`px-4 py-3 rounded-lg border text-xs md:text-sm text-left flex items-center gap-3 transition-all duration-200 cursor-pointer ${
                        selections[item.id] === 'profile'
                          ? 'bg-[#C97C5D] text-white border-[#C97C5D]'
                          : 'bg-[#F2F1EC] text-gray-700 border-[#D8D6CF] hover:bg-gray-100 disabled:hover:bg-[#F2F1EC]'
                      }`}
                    >
                      <FilePlus size={16} strokeWidth={1.5} className={selections[item.id] === 'profile' ? 'text-white' : 'text-[#C97C5D]'} />
                      <div className="flex-1">
                        <span className="font-bold block">Publicar una oferta de trabajo</span>
                        <span className="text-[10px] opacity-80 block font-medium mt-0.5">Es un rol vacante o perfil deseado</span>
                      </div>
                    </button>
                  </div>

                  {/* Explanation Section */}
                  {checked && (
                    <div className={`mt-4 p-4 rounded-lg flex gap-3 text-xs md:text-sm border ${
                      isCorrect 
                        ? 'bg-[#FAF9F6] text-gray-800 border-[#7A9E6E]/20' 
                        : 'bg-[#FAF5E7] text-gray-800 border-[#C97C5D]/20'
                    }`}>
                      <div className="shrink-0 mt-0.5">
                        {isCorrect ? (
                          <CheckCircle2 size={16} strokeWidth={1.5} className="text-[#7A9E6E]" />
                        ) : (
                          <AlertCircle size={16} strokeWidth={1.5} className="text-[#C97C5D]" />
                        )}
                      </div>
                      <div className="font-medium">
                        <strong className="block mb-1 font-bold text-[#5A7D4D]">{isCorrect ? '¡Excelente análisis!' : 'Análisis alternativo:'}</strong>
                        <p className="text-gray-600 leading-relaxed text-xs">{item.explanation}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Control Buttons */}
      <div className="flex items-center gap-4 mt-8">
        {!checked ? (
          <button
            onClick={handleCheck}
            disabled={!allAnswered}
            className={`px-6 py-2.5 rounded-lg font-bold text-xs md:text-sm cursor-pointer shadow-none transition-all duration-200 ${
              allAnswered 
                ? 'bg-[#5A7D4D] text-white hover:bg-[#4B6840]' 
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            Comprobar decisiones
          </button>
        ) : (
          <button
            onClick={handleReset}
            className="px-6 py-2.5 rounded-lg font-bold text-xs md:text-sm cursor-pointer border border-[#5A7D4D] text-[#5A7D4D] hover:bg-[#5A7D4D]/10 transition-all duration-200"
          >
            Reiniciar actividad
          </button>
        )}
        {!allAnswered && !checked && (
          <span className="text-xs text-gray-400 italic font-medium flex items-center gap-1.5">
            <AlertCircle size={14} strokeWidth={1.5} className="text-gray-400" />
            Responde a las 5 situaciones para poder comprobarlas.
          </span>
        )}
      </div>
    </ActivityCard>
  );
}
