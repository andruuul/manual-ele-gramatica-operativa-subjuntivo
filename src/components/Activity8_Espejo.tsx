/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import ActivityCard from './ActivityCard';
import InstructionBox from './InstructionBox';
import { RefreshCw, HelpCircle, Eye, AlertCircle, Sparkles } from 'lucide-react';

interface MirrorCardProps {
  id: number;
  originalPhrase: string;
  questions: string[];
  placeholder: string;
  explanation: string;
  proposedCorrection: string;
}

export default function Activity8_Espejo() {
  const [inputs, setInputs] = useState<Record<number, string>>({
    1: '',
    2: '',
    3: '',
  });

  const [revealed, setRevealed] = useState<Record<number, boolean>>({
    1: false,
    2: false,
    3: false,
  });

  const handleInputChange = (id: number, val: string) => {
    setInputs(prev => ({ ...prev, [id]: val }));
  };

  const toggleReveal = (id: number) => {
    setRevealed(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const items: MirrorCardProps[] = [
    {
      id: 1,
      originalPhrase: "Buscamos un ingeniero que conoce nuestro software.",
      questions: [
        "¿La empresa ya sabe quién es ese ingeniero concreto?",
        "¿Era esa la idea que querías comunicar al usar el indicativo?"
      ],
      placeholder: "Escribe tu reescritura lógica aquí...",
      proposedCorrection: "Buscamos un ingeniero que conozca nuestro software.",
      explanation: "Al usar 'Buscamos' (búsqueda de un perfil no identificado), el uso lógico es el subjuntivo 'conozca'. Si utilizas el indicativo 'conoce', estás declarando que ese ingeniero ya es alguien real e identificado, lo cual choca con la idea de que lo estás buscando todavía."
    },
    {
      id: 2,
      originalPhrase: "Tenemos una consultora que coordine el proyecto.",
      questions: [
        "¿Esa consultora ya trabaja activamente en la empresa?",
        "¿Era esa tu verdadera intención al usar la forma del subjuntivo?"
      ],
      placeholder: "Escribe tu reescritura lógica aquí...",
      proposedCorrection: "Tenemos una consultora que coordina el proyecto.",
      explanation: "El verbo 'Tenemos' declara que ya posees un miembro real en el equipo (identificado). Por ende, requiere el indicativo 'coordina'. Usar el subjuntivo 'coordine' crea un conflicto, ya que se refiere a un perfil ideal o hipotético no existente en tu plantilla."
    },
    {
      id: 3,
      originalPhrase: "Queremos contratar al proveedor que ofrece soporte en japonés.",
      questions: [
        "¿Ya decidieron formalmente qué proveedor va a ser?",
        "¿O solamente están describiendo el tipo de proveedor que les hace falta?"
      ],
      placeholder: "Escribe tu reescritura lógica aquí...",
      proposedCorrection: "Opción A (Si ya lo identificaron): 'Queremos contratar al proveedor que ofrece soporte en japonés.'\nOpción B (Si solo es un perfil general): 'Queremos contratar a un proveedor que ofrezca soporte en japonés.'",
      explanation: "Al usar el artículo definido 'al proveedor' y el indicativo 'ofrece', declaras que hay un proveedor único en el mercado identificado con quien vas a firmar. Si aún no lo conoces y solo describes una necesidad genérica, deberías usar el indefinido 'a un proveedor' más el subjuntivo 'ofrezca'."
    }
  ];

  return (
    <ActivityCard id="actividad-8" number={8} title="El Espejo del Significado">
      
      <InstructionBox>
        <p>Analiza el 'reflejo' de estas tres frases problemáticas. El modo verbal incorrecto produce choques de significado.</p>
        <p className="mt-1">
          Lee la frase, reflexiona sobre las dos preguntas operativas de control, e intenta **reescribir la frase** de manera que exprese una intención empresarial coherente. Después, haz clic en el botón para consultar la explicación.
        </p>
      </InstructionBox>

      <div className="space-y-8 my-8">
        {items.map((item) => (
          <div 
            key={item.id} 
            className="border border-[#D8D6CF] rounded-lg bg-white overflow-hidden shadow-none hover:border-gray-400 transition-all duration-300"
          >
            {/* Header banner */}
            <div className="bg-[#F2F1EC] px-5 py-3 border-b border-[#D8D6CF] flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest">
                Frase de Estudio #{item.id}
              </span>
              <span className="text-[9px] bg-[#FAF5E7] text-[#C97C5D] font-bold px-2 py-0.5 rounded-lg border border-[#C97C5D]/20 flex items-center gap-1 font-mono uppercase">
                <AlertCircle size={11} strokeWidth={2} /> Conflicto operativo
              </span>
            </div>

            {/* Content Body */}
            <div className="p-6 md:p-8 space-y-6">
              
              {/* Faulty Phrase */}
              <div className="bg-[#FAF5E7]/30 p-4 rounded-lg border-l-4 border-[#C97C5D] border-t border-r border-b border-[#D8D6CF]/30">
                <span className="text-[10px] text-[#C97C5D] block font-bold mb-1 uppercase font-mono tracking-wider">Frase problemática original:</span>
                <p className="text-base md:text-lg font-display font-semibold text-[#2F3437] italic">
                  "{item.originalPhrase}"
                </p>
              </div>

              {/* Reflection Questions */}
              <div className="bg-[#FAF9F6] p-4 rounded-lg border border-[#D8D6CF]/80">
                <span className="text-xs text-[#5A7D4D] block font-bold mb-2.5 uppercase font-mono tracking-wider flex items-center gap-1.5">
                  <HelpCircle size={14} strokeWidth={1.8} className="text-[#5A7D4D]" /> Preguntas de control reflexivo:
                </span>
                <ul className="list-disc list-inside space-y-1.5 text-xs md:text-sm text-[#2F3437] font-medium">
                  {item.questions.map((q, idx) => (
                    <li key={idx} className="leading-relaxed">{q}</li>
                  ))}
                </ul>
              </div>

              {/* Student Rewrite input */}
              <div>
                <label htmlFor={`rewrite-${item.id}`} className="block text-[10px] font-bold text-gray-500 mb-1.5 uppercase font-mono tracking-wider">
                  Tu propuesta de reescritura coherente:
                </label>
                <textarea
                  id={`rewrite-${item.id}`}
                  rows={2}
                  value={inputs[item.id]}
                  onChange={(e) => handleInputChange(item.id, e.target.value)}
                  className="w-full p-3 border border-[#D8D6CF] rounded-lg focus:border-[#5A7D4D] focus:outline-none bg-[#F2F1EC]/20 text-[#2F3437] text-xs md:text-sm font-mono font-medium"
                  placeholder={item.placeholder}
                />
              </div>

              {/* Toggle Answers / Explanations */}
              <div>
                <button
                  onClick={() => toggleReveal(item.id)}
                  className="text-xs font-display font-bold text-[#5A7D4D] hover:text-[#4B6840] cursor-pointer flex items-center gap-1.5 transition-colors"
                >
                  <RefreshCw size={13} strokeWidth={2} className={revealed[item.id] ? 'rotate-180 transition-transform duration-300 text-[#5A7D4D]' : 'transition-transform duration-300 text-[#5A7D4D]'} />
                  {revealed[item.id] ? 'Ocultar explicación y propuestas' : 'Mostrar explicación semántica y correcciones sugeridas'}
                </button>

                {revealed[item.id] && (
                  <div className="mt-4 p-5 rounded-lg bg-[#FAF9F6] border border-[#7A9E6E]/20 text-xs md:text-sm text-[#2F3437] space-y-3 font-medium">
                    <div>
                      <strong className="text-[#5A7D4D] block mb-1 font-bold">Reescrituras lógicas propuestas:</strong>
                      <p className="whitespace-pre-line font-mono bg-white p-3 rounded-lg border border-[#7A9E6E]/15 text-[#5A7D4D] font-bold leading-relaxed text-xs">
                        {item.proposedCorrection}
                      </p>
                    </div>
                    <div>
                      <strong className="text-[#5A7D4D] block mb-1 flex items-center gap-1.5 font-bold">
                        <Eye size={14} strokeWidth={1.8} className="text-[#7A9E6E]" /> Explicación de la Gramática Operativa:
                      </strong>
                      <p className="text-gray-600 leading-relaxed text-xs">
                        {item.explanation}
                      </p>
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#5A7D4D] text-white p-6 rounded-lg border-l-4 border-[#E5C867] mt-8 flex flex-col md:flex-row gap-4 items-center">
        <Sparkles size={28} strokeWidth={1.5} className="text-[#E5C867] shrink-0" />
        <div>
          <h4 className="font-display font-bold text-base md:text-lg mb-1">Conclusión de la Unidad</h4>
          <p className="text-xs md:text-sm text-[#FAF5E7] leading-relaxed font-medium">
            La gramática no es un conjunto de reglas rígidas basadas en "certeza contra duda". Todo reside en tu **decisión como hablante**: ¿quieres **declarar** algo que posees o conoces de forma identificada (Indicativo), o deseas presentar una descripción libre de compromisos de existencia para un perfil que todavía no identificas (Subjuntivo)? ¡Tú tienes el control operativo!
          </p>
        </div>
      </div>

    </ActivityCard>
  );
}
