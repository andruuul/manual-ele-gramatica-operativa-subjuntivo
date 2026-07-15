/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import ActivityCard from './ActivityCard';
import InstructionBox from './InstructionBox';
import QuestionInput from './QuestionInput';
import { Eye, HelpCircle } from 'lucide-react';

export default function Activity1_Descubre() {
  const [answers, setAnswers] = useState({
    p1: '',
    p2: '',
    p3: '',
    p4: ''
  });

  const handleAnswerChange = (key: string, value: string) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
  };

  return (
    <ActivityCard id="actividad-1" number={1} title="Descubre la diferencia">
      <InstructionBox>
        <p>Lee las dos situaciones de abajo detenidamente.</p>
        <p className="mt-1">No pienses todavía en reglas gramaticales abstractas. Observa únicamente el escenario y la intención de quien habla. Después, reflexiona y responde las preguntas de análisis.</p>
      </InstructionBox>

      {/* Side by side comparison cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        {/* Card A */}
        <div className="border border-[#5A7D4D]/20 rounded-lg p-6 bg-white hover:border-[#5A7D4D]/40 transition-all duration-300 shadow-none">
          <div className="flex items-center justify-between mb-3 border-b border-[#D8D6CF] pb-2">
            <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase rounded bg-[#5A7D4D] text-white font-mono">
              Tarjeta A
            </span>
            <span className="text-[10px] font-mono text-gray-500 uppercase font-bold">Modo Declarativo (Indicativo)</span>
          </div>
          <blockquote className="text-base md:text-lg font-display font-semibold text-[#2F3437] leading-relaxed border-l-4 border-[#5A7D4D] pl-4 py-1 my-3 italic">
            "Tengo un asistente en Austin que <strong className="text-[#5A7D4D] text-lg underline decoration-wavy decoration-[#5A7D4D]/40">resuelve</strong> los problemas de logística."
          </blockquote>
          <p className="text-xs text-gray-600 mt-4 flex items-center gap-1.5 font-sans bg-[#F2F1EC] p-2 rounded-lg border border-[#D8D6CF]/60 font-medium">
            <Eye size={14} strokeWidth={1.5} className="text-[#5A7D4D] shrink-0" />
            La persona existe en mi realidad y la tengo identificada; la declaro.
          </p>
        </div>

        {/* Card B */}
        <div className="border border-[#C97C5D]/20 rounded-lg p-6 bg-white hover:border-[#C97C5D]/40 transition-all duration-300 shadow-none">
          <div className="flex items-center justify-between mb-3 border-b border-[#D8D6CF] pb-2">
            <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase rounded bg-[#C97C5D] text-white font-mono">
              Tarjeta B
            </span>
            <span className="text-[10px] font-mono text-gray-500 uppercase font-bold">Modo No Declarativo (Subjuntivo)</span>
          </div>
          <blockquote className="text-base md:text-lg font-display font-semibold text-[#2F3437] leading-relaxed border-l-4 border-[#C97C5D] pl-4 py-1 my-3 italic">
            "Busco un asistente en Austin que <strong className="text-[#C97C5D] text-lg underline decoration-wavy decoration-[#C97C5D]/40">resuelva</strong> los problemas de logística."
          </blockquote>
          <p className="text-xs text-gray-600 mt-4 flex items-center gap-1.5 font-sans bg-[#FAF5E7] p-2 rounded-lg border border-[#C97C5D]/10 font-medium">
            <HelpCircle size={14} strokeWidth={1.5} className="text-[#C97C5D] shrink-0" />
            No sé quién es, o no existe un individuo específico todavía; describo el perfil.
          </p>
        </div>
      </div>

      {/* Reflexive Questions with textareas */}
      <div className="bg-[#F2F1EC]/30 p-6 rounded-lg border border-[#D8D6CF] mt-6">
        <h3 className="text-base md:text-lg font-display font-bold text-[#5A7D4D] mb-4 flex items-center gap-2 border-b border-[#D8D6CF] pb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D9A441]"></span>
          Preguntas de reflexión operativa
        </h3>
        
        <QuestionInput
          id="descubre-p1"
          question="1. ¿En cuál de las dos tarjetas puedes señalar a una persona concreta (con nombre, apellido y rostro)? ¿Por qué?"
          value={answers.p1}
          onChange={(val) => handleAnswerChange('p1', val)}
          placeholder="E.g., En la tarjeta A porque la persona ya trabaja conmigo, en la B es solo una idea..."
        />

        <QuestionInput
          id="descubre-p2"
          question="2. ¿En cuál solamente puedes describir un perfil o un rol ideal?"
          value={answers.p2}
          onChange={(val) => handleAnswerChange('p2', val)}
          placeholder="E.g., En la tarjeta X, porque..."
        />

        <QuestionInput
          id="descubre-p3"
          question="3. Si tuvieras que tomar una decisión de gestión, ¿qué acción concreta realizarías en la situación A y cuál en la B?"
          value={answers.p3}
          onChange={(val) => handleAnswerChange('p3', val)}
          placeholder="E.g., En la tarjeta X, porque..."
        />

        <QuestionInput
          id="descubre-p4"
          question="4. Sin recurrir a explicaciones de 'realidad' o 'duda', ¿qué diferencia de significado operativo percibes entre ambas?"
          value={answers.p4}
          onChange={(val) => handleAnswerChange('p4', val)}
          placeholder="E.g., En la tarjeta X, porque..."
      </div>
    </ActivityCard>
  );
}
