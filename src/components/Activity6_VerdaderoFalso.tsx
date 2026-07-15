/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import ActivityCard from './ActivityCard';
import InstructionBox from './InstructionBox';
import { TrueFalseItem } from '../types';
import { CheckCircle2, XCircle, AlertCircle, HelpCircle } from 'lucide-react';

export default function Activity6_VerdaderoFalso() {
  const quizItems: TrueFalseItem[] = [
    {
      id: 1,
      text: "Necesito al técnico que conoce mi base de datos.",
      question: "¿Es alguien específico?",
      answer: true, // Sí
      explanation: "Sí, es alguien específico. El uso del indicativo ('conoce') declara que el hablante tiene identificado a un técnico particular en mente que ya ha trabajado con su base de datos."
    },
    {
      id: 2,
      text: "Necesito un técnico que conozca mi base de datos.",
      question: "¿Ya sabe quién es?",
      answer: false, // No
      explanation: "No sabe quién es todavía. Al usar el subjuntivo ('conozca'), define una necesidad y describe las cualidades de un perfil profesional ideal, pero no tiene una persona identificada."
    },
    {
      id: 3,
      text: "Quiero reunirme con la consultora que coordina el proyecto.",
      question: "¿Está identificada?",
      answer: true, // Sí
      explanation: "Sí, está identificada. El indicativo ('coordina') declara que ya se conoce a la persona encargada de esa tarea; es un puesto con nombre y apellido asignado en la organización."
    },
    {
      id: 4,
      text: "Buscamos una consultora que coordine el proyecto.",
      question: "¿Ya podemos llamarla?",
      answer: false, // No
      explanation: "No podemos llamarla todavía porque no está identificada. El subjuntivo ('coordine') muestra que estamos perfilando una búsqueda activa de talento laboral."
    },
    {
      id: 5,
      text: "Invitaremos al proveedor que ofrece soporte las 24 horas.",
      question: "¿Está identificado?",
      answer: true, // Sí
      explanation: "Sí, está identificado. Quien habla declara a un proveedor concreto que brinda ese servicio específico de soporte integral de 24 horas (usa indicativo: 'ofrece')."
    }
  ];

  const [userAnswers, setUserAnswers] = useState<Record<number, boolean | null>>({
    1: null,
    2: null,
    3: null,
    4: null,
    5: null
  });

  const handleSelectAnswer = (id: number, val: boolean) => {
    setUserAnswers(prev => ({ ...prev, [id]: val }));
  };

  const handleReset = () => {
    setUserAnswers({ 1: null, 2: null, 3: null, 4: null, 5: null });
  };

  const allCompleted = Object.values(userAnswers).every(val => val !== null);

  return (
    <ActivityCard id="actividad-6" number={6} title="Verdadero o Falso: Decisiones rápidas">
      
      <InstructionBox>
        <p>Lee cada situación empresarial. Responde lo más rápido posible a la pregunta de control haciendo clic en <strong>SÍ</strong> o <strong>NO</strong>.</p>
        <p className="mt-1">Observa cómo cambia el significado de la frase según el modo verbal seleccionado por el hablante.</p>
      </InstructionBox>

      <div className="space-y-6 my-8">
        {quizItems.map((item) => {
          const userAns = userAnswers[item.id];
          const isSelected = userAns !== null;
          const isCorrect = userAns === item.answer;

          return (
            <div 
              key={item.id}
              className={`p-5 rounded-lg border transition-all duration-300 bg-white ${
                isSelected 
                  ? isCorrect 
                    ? 'border-[#7A9E6E] bg-[#7A9E6E]/10'
                    : 'border-[#C97C5D] bg-[#C97C5D]/10'
                  : 'border-[#D8D6CF]'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                
                {/* Situation text */}
                <div className="flex-1">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-gray-400 block mb-1 font-bold">
                    Caso {item.id}
                  </span>
                  <p className="text-[#2F3437] font-semibold text-sm md:text-base italic leading-relaxed">
                    "{item.text}"
                  </p>
                  <p className="text-[#5A7D4D] font-display font-bold text-xs md:text-sm mt-2.5 flex items-center gap-1.5">
                    <HelpCircle size={15} strokeWidth={1.8} className="text-[#5A7D4D]" />
                    {item.question}
                  </p>
                </div>

                {/* Yes / No buttons */}
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => handleSelectAnswer(item.id, true)}
                    className={`px-5 py-2.5 rounded-lg text-xs md:text-sm font-bold cursor-pointer transition-all ${
                      userAns === true
                        ? 'bg-[#7A9E6E] text-white shadow-none'
                        : 'bg-[#F2F1EC] hover:bg-[#FAF9F6] text-[#2F3437] border border-[#D8D6CF]/60'
                    }`}
                  >
                    SÍ
                  </button>
                  <button
                    onClick={() => handleSelectAnswer(item.id, false)}
                    className={`px-5 py-2.5 rounded-lg text-xs md:text-sm font-bold cursor-pointer transition-all ${
                      userAns === false
                        ? 'bg-[#C97C5D] text-white shadow-none'
                        : 'bg-[#F2F1EC] hover:bg-[#FAF9F6] text-[#2F3437] border border-[#D8D6CF]/60'
                    }`}
                  >
                    NO
                  </button>
                </div>

              </div>

              {/* Immediate Explanation Card */}
              {isSelected && (
                <div className={`mt-4 p-4 rounded-lg flex gap-3 text-xs md:text-sm font-medium ${
                  isCorrect 
                    ? 'bg-[#FAF9F6] text-[#2F3437] border border-[#7A9E6E]/20' 
                    : 'bg-[#FAF5E7] text-[#2F3437] border border-[#C97C5D]/20'
                }`}>
                  <div className="shrink-0 mt-0.5">
                    {isCorrect ? (
                      <CheckCircle2 size={16} className="text-[#7A9E6E]" />
                    ) : (
                      <XCircle size={16} className="text-[#C97C5D]" />
                    )}
                  </div>
                  <div>
                    <strong className={`block mb-0.5 ${isCorrect ? 'text-[#7A9E6E]' : 'text-[#C97C5D]'}`}>
                      {isCorrect ? '¡Correcto!' : '¡Oops! Fíjate bien:'}
                    </strong>
                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{item.explanation}</p>
                  </div>
                </div>
              )}

            </div>
          );
        })}
      </div>

      {allCompleted && (
        <div className="flex justify-end">
          <button
            onClick={handleReset}
            className="px-5 py-2 rounded-lg border border-[#5A7D4D] text-[#5A7D4D] hover:bg-[#5A7D4D]/10 font-bold text-xs md:text-sm transition-colors cursor-pointer"
          >
            Volver a intentar
          </button>
        </div>
      )}

    </ActivityCard>
  );
}
