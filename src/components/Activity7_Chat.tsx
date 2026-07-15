/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import ActivityCard from './ActivityCard';
import InstructionBox from './InstructionBox';
import { Send, User, MessageCircle, HelpCircle } from 'lucide-react';

export default function Activity7_Chat() {
  const [chatAnswers, setChatAnswers] = useState({
    sit1: '',
    sit2: '',
    sit3: '',
  });
  const [showFeedback, setShowFeedback] = useState(false);

  const handleTextChange = (key: 'sit1' | 'sit2' | 'sit3', val: string) => {
    setChatAnswers(prev => ({ ...prev, [key]: val }));
  };

  const handleToggleFeedback = () => {
    setShowFeedback(prev => !prev);
  };

  return (
    <ActivityCard id="actividad-7" number={7} title="La Expansión">
      
      <InstructionBox>
        <p>Participa en esta conversación interactiva sobre la expansión de la empresa.</p>
        <p className="mt-1">
          Tú eres el <strong>Gestor (Manager)</strong> de la oficina y hablas con el <strong>Inversionista (Investor)</strong>. Responde a sus preguntas basándote en la situación indicada y prestando atención a si las personas de las que hablas ya están identificadas o si son solo un perfil que buscas.
        </p>
      </InstructionBox>

      {/* Responsive Chat Window */}
      <div className="max-w-3xl mx-auto border border-[#D8D6CF] rounded-lg overflow-hidden bg-white my-8 shadow-none">
        
        {/* Chat Header */}
        <div className="bg-[#5A7D4D] text-white px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/15">
              <MessageCircle size={16} strokeWidth={1.5} className="text-[#E5C867]" />
            </span>
            <div>
              <h4 className="font-display font-bold text-sm md:text-base leading-none">Negociación de Expansión</h4>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-200 block mt-1">Canal Inversionista • En vivo</span>
            </div>
          </div>
          <span className="px-2.5 py-0.5 rounded-full bg-white/10 border border-white/20 text-[#FAF5E7] text-[9px] font-bold tracking-wider font-mono uppercase">Conexión Activa</span>
        </div>

        {/* Chat History Container */}
        <div className="p-4 md:p-6 space-y-6 max-h-[600px] overflow-y-auto bg-[#FAF9F6]">
          
          {/* --- SITUACIÓN 1 --- */}
          <div className="space-y-3">
            <div className="text-center">
              <span className="text-[9px] font-mono font-bold bg-[#F2F1EC] text-gray-600 px-2.5 py-0.5 rounded-full uppercase tracking-wider border border-[#D8D6CF]/30">Situación 1</span>
            </div>

            {/* Professor / Inversionista Message */}
            <div className="flex gap-2.5 items-start max-w-[85%]">
              <div className="w-8 h-8 rounded-full bg-[#F2F1EC] flex items-center justify-center shrink-0 text-[#2F3437] font-bold text-xs border border-[#D8D6CF]" title="Inversionista">
                Inv
              </div>
              <div className="bg-white p-3.5 rounded-lg border border-[#D8D6CF]/60 text-sm text-[#2F3437] shadow-none font-medium">
                <p className="font-bold text-xs text-[#5A7D4D] mb-1.5 uppercase font-mono tracking-wider">Inversionista:</p>
                Para abrir la nueva oficina, ¿ya tienen a la persona responsable de la logística o todavía la están buscando?
              </div>
            </div>

            {/* Resolved Example */}
            <div className="flex gap-2.5 items-start justify-end max-w-[85%] ml-auto">
              <div className="bg-[#F2F1EC]/40 p-3.5 rounded-lg text-sm text-[#2F3437]/70 italic border border-[#D8D6CF]/40 font-medium">
                <p className="font-bold text-xs text-[#5A7D4D]/60 mb-1.5 uppercase font-mono tracking-wider not-italic">Ejemplo de Respuesta (Ya identificado - Indicativo):</p>
                Tenemos un especialista que coordina toda la logística nacional.
              </div>
              <div className="w-8 h-8 rounded-full bg-[#5A7D4D] flex items-center justify-center shrink-0 text-white font-bold text-xs" title="Gestor">
                Ges
              </div>
            </div>

            {/* Student Response Area */}
            <div className="bg-white p-4 rounded-lg border border-dashed border-[#D8D6CF]">
              <label htmlFor="chat-sit1" className="block text-xs font-bold text-[#5A7D4D] mb-1.5 uppercase font-mono tracking-wider">Tu Respuesta Alternativa (E.g. Si aún lo buscas - Subjuntivo):</label>
              <div className="flex gap-2">
                <textarea
                  id="chat-sit1"
                  rows={2}
                  value={chatAnswers.sit1}
                  onChange={(e) => handleTextChange('sit1', e.target.value)}
                  className="flex-1 p-2 text-xs md:text-sm border border-[#D8D6CF] rounded-lg focus:border-[#5A7D4D] focus:outline-none bg-[#F2F1EC]/30 font-medium text-[#2F3437]"
                  placeholder="Escribe tu respuesta aquí (Ej. Estamos buscando a alguien que coordine...)"
                />
              </div>
            </div>
          </div>

          <hr className="border-[#D8D6CF]/40" />

          {/* --- SITUACIÓN 2 --- */}
          <div className="space-y-3">
            <div className="text-center">
              <span className="text-[9px] font-mono font-bold bg-[#F2F1EC] text-gray-600 px-2.5 py-0.5 rounded-full uppercase tracking-wider border border-[#D8D6CF]/30">Situación 2</span>
            </div>

            {/* Professor / Inversionista Message */}
            <div className="flex gap-2.5 items-start max-w-[85%]">
              <div className="w-8 h-8 rounded-full bg-[#F2F1EC] flex items-center justify-center shrink-0 text-[#2F3437] font-bold text-xs border border-[#D8D6CF]" title="Inversionista">
                Inv
              </div>
              <div className="bg-white p-3.5 rounded-lg border border-[#D8D6CF]/60 text-sm text-[#2F3437] shadow-none font-medium">
                <p className="font-bold text-xs text-[#5A7D4D] mb-1.5 uppercase font-mono tracking-wider">Inversionista:</p>
                Si apruebo la inversión hoy, ¿quién controlará el presupuesto?
              </div>
            </div>

            {/* Student Response Area with Placeholder */}
            <div className="bg-white p-4 rounded-lg border border-dashed border-[#D8D6CF]">
              <label htmlFor="chat-sit2" className="block text-xs font-bold text-[#5A7D4D] mb-1.5 uppercase font-mono tracking-wider">Tu Respuesta (Usa la idea propuesta):</label>
              <div className="mb-2 text-xs italic bg-[#FAF5E7] text-[#C97C5D] p-2 rounded-lg border border-[#C97C5D]/10 font-bold">
                Idea sugerida: "Necesitamos contratar a un contable que (llevar) las auditorías internacionales."
              </div>
              <textarea
                id="chat-sit2"
                rows={2}
                value={chatAnswers.sit2}
                onChange={(e) => handleTextChange('sit2', e.target.value)}
                className="w-full p-2 text-xs md:text-sm border border-[#D8D6CF] rounded-lg focus:border-[#C97C5D] focus:outline-none bg-[#FAF5E7]/10 font-medium text-[#2F3437]"
                placeholder="Escribe la respuesta conjugando correctamente el verbo propuesto en la idea sugerida..."
              />
            </div>
          </div>

          <hr className="border-[#D8D6CF]/40" />

          {/* --- SITUACIÓN 3 --- */}
          <div className="space-y-3">
            <div className="text-center">
              <span className="text-[9px] font-mono font-bold bg-[#F2F1EC] text-gray-600 px-2.5 py-0.5 rounded-full uppercase tracking-wider border border-[#D8D6CF]/30">Situación 3</span>
            </div>

            {/* Professor / Inversionista Message */}
            <div className="flex gap-2.5 items-start max-w-[85%]">
              <div className="w-8 h-8 rounded-full bg-[#F2F1EC] flex items-center justify-center shrink-0 text-[#2F3437] font-bold text-xs border border-[#D8D6CF]" title="Inversionista">
                Inv
              </div>
              <div className="bg-white p-3.5 rounded-lg border border-[#D8D6CF]/60 text-sm text-[#2F3437] shadow-none font-medium">
                <p className="font-bold text-xs text-[#5A7D4D] mb-1.5 uppercase font-mono tracking-wider">Inversionista:</p>
                ¿Quién diseñará toda la identidad visual de la empresa?
              </div>
            </div>

            {/* Student Response Area with Placeholder */}
            <div className="bg-white p-4 rounded-lg border border-dashed border-[#D8D6CF]">
              <label htmlFor="chat-sit3" className="block text-xs font-bold text-[#5A7D4D] mb-1.5 uppercase font-mono tracking-wider">Tu Respuesta (Usa la idea propuesta):</label>
              <div className="mb-2 text-xs italic bg-[#F2F1EC] text-[#7A9E6E] p-2 rounded-lg border border-[#7A9E6E]/10 font-bold">
                Idea sugerida: "María es la diseñadora que (dirigir) todos nuestros proyectos de marca."
              </div>
              <textarea
                id="chat-sit3"
                rows={2}
                value={chatAnswers.sit3}
                onChange={(e) => handleTextChange('sit3', e.target.value)}
                className="w-full p-2 text-xs md:text-sm border border-[#D8D6CF] rounded-lg focus:border-[#5A7D4D] focus:outline-none bg-[#F2F1EC]/20 font-medium text-[#2F3437]"
                placeholder="Escribe la respuesta conjugando correctamente el verbo propuesto en la idea sugerida..."
              />
            </div>
          </div>

        </div>

      </div>

      {/* Toggle Button for Feedback */}
      <div className="flex gap-4 mt-6">
        <button
          onClick={handleToggleFeedback}
          className="px-6 py-2.5 rounded-lg font-bold text-xs md:text-sm cursor-pointer shadow-none bg-[#5A7D4D] text-white hover:bg-[#4B6840] transition-all duration-200"
        >
          {showFeedback ? 'Ocultar respuestas' : 'Mostrar respuestas y retroalimentación'}
        </button>
      </div>

      {/* Conditional Feedback Area */}
      {showFeedback && (
        <div className="bg-[#FAF9F6] border border-[#7A9E6E]/20 p-4 rounded-lg text-xs md:text-sm text-[#2F3437] mt-6 flex items-start gap-2.5 font-medium animate-fadeIn">
          <HelpCircle size={16} strokeWidth={1.5} className="text-[#7A9E6E] shrink-0 mt-0.5" />
          <div>
            <strong className="text-[#5A7D4D] font-bold">Ayuda reflexiva:</strong>
            <p className="mt-1">
              En la <strong>Situación 2</strong>, como "necesitamos contratar" a un contable todavía no identificado (vacante abstracta), debes usar subjuntivo: <code className="font-mono text-xs font-bold text-[#C97C5D] bg-[#FAF5E7] border border-[#C97C5D]/20 px-1 rounded">lleve</code>.
            </p>
            <p className="mt-1">
              En la <strong>Situación 3</strong>, como declaras una persona con nombre propio ("María") que ya realiza la función de forma habitual y real, debes usar indicativo: <code className="font-mono text-xs font-bold text-[#5A7D4D] bg-[#F2F1EC] border border-[#D8D6CF] px-1 rounded">dirige</code>.
            </p>
          </div>
        </div>
      )}

    </ActivityCard>
  );
}
