/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import ActivityCard from './ActivityCard';
import InstructionBox from './InstructionBox';
import { ArrowDown, HelpCircle, RefreshCw } from 'lucide-react';

interface VerbAlgorithm {
  infinitive: string;
  yoForm: string;
  root: string;
  ending: string;
  subjunctive: string;
  meaning: string;
}

export default function Activity2_Algoritmo() {
  const verbs: VerbAlgorithm[] = [
    { infinitive: 'tener', yoForm: 'tengo', root: 'teng-', ending: 'a', subjunctive: 'tenga', meaning: 'to have' },
    { infinitive: 'hacer', yoForm: 'hago', root: 'hag-', ending: 'a', subjunctive: 'haga', meaning: 'to do / make' },
    { infinitive: 'conocer', yoForm: 'conozco', root: 'conozc-', ending: 'a', subjunctive: 'conozca', meaning: 'to know (person / place)' },
    { infinitive: 'decir', yoForm: 'digo', root: 'dig-', ending: 'a', subjunctive: 'diga', meaning: 'to say' },
    { infinitive: 'poner', yoForm: 'pongo', root: 'pong-', ending: 'a', subjunctive: 'ponga', meaning: 'to put' },
  ];

  const [activeVerbIndex, setActiveVerbIndex] = useState<number>(0);

  const activeVerb = verbs[activeVerbIndex];

  return (
    <ActivityCard id="actividad-2" number={2} title="El algoritmo de la forma">
      <InstructionBox>
        <p>Aprende cómo construir la forma del Presente de Subjuntivo de una manera lógica y sistemática.</p>
        <p className="mt-1">Haz clic en los diferentes verbos de abajo para ver paso a paso cómo se aplica el algoritmo desde la primera persona del presente de indicativo (el "YO").</p>
      </InstructionBox>

      {/* Interactive visual layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-8 items-stretch">
        
        {/* Left selector */}
        <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0">
          {verbs.map((v, idx) => (
            <button
              key={v.infinitive}
              onClick={() => setActiveVerbIndex(idx)}
              className={`flex-1 lg:flex-none text-left px-4 py-3 rounded-lg border text-sm md:text-base font-bold transition-all duration-200 cursor-pointer flex items-center justify-between min-w-[120px] lg:min-w-0 ${
                activeVerbIndex === idx
                  ? 'bg-[#5A7D4D] text-white border-[#5A7D4D] shadow-none'
                  : 'bg-[#F2F1EC] text-[#2F3437] border-[#D8D6CF] hover:bg-[#F2F1EC]/80'
              }`}
            >
              <span>{v.infinitive}</span>
              <span className={`text-[11px] font-mono px-2 py-0.5 rounded font-bold uppercase tracking-wider ${activeVerbIndex === idx ? 'bg-white/20 text-white' : 'bg-[#D8D6CF] text-[#6B6F72]'}`}>
                {v.subjunctive}
              </span>
            </button>
          ))}
        </div>

        {/* Right flowchart workspace */}
        <div className="lg:col-span-8 bg-white border border-[#D8D6CF] rounded-lg p-6 md:p-8 flex flex-col justify-between relative shadow-none">
          
          <div className="absolute top-4 right-4 text-[10px] font-mono text-gray-400 font-bold uppercase tracking-wider">
            Demo interactiva
          </div>

          <div className="text-center mb-6">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#5A7D4D] font-bold bg-[#F2F1EC] px-3 py-1 rounded-full border border-[#D8D6CF]">
              Paso a Paso: {activeVerb.infinitive.toUpperCase()}
            </span>
          </div>

          {/* Algorithm flowchart rendering */}
          <div className="flex flex-col items-center gap-4">
            
            {/* Step 1 */}
            <div className="w-full max-w-sm bg-[#F2F1EC]/45 border border-[#D8D6CF] rounded-lg p-3 text-center transition-all duration-300 transform scale-100 hover:scale-[1.01]">
              <span className="block text-[10px] text-gray-500 font-mono font-bold uppercase tracking-wide">PASO 1 • Encuentra el "YO" de indicativo</span>
              <strong className="text-base text-[#5A7D4D] font-mono block mt-1 font-bold">
                {activeVerb.infinitive} <span className="text-gray-400 font-sans font-normal">→</span> {activeVerb.yoForm}
              </strong>
            </div>

            <ArrowDown className="text-[#D8D6CF] animate-pulse" size={16} strokeWidth={1.5} />

            {/* Step 2 */}
            <div className="w-full max-w-sm bg-[#F2F1EC]/45 border border-[#D8D6CF] rounded-lg p-3 text-center transition-all duration-300 transform scale-100 hover:scale-[1.01]">
              <span className="block text-[10px] text-gray-500 font-mono font-bold uppercase tracking-wide">PASO 2 • Conserva la raíz (quita la "-o")</span>
              <strong className="text-base text-[#5A7D4D] font-mono block mt-1 font-bold">
                {activeVerb.root}
              </strong>
            </div>

            <ArrowDown className="text-[#D8D6CF] animate-pulse" size={16} strokeWidth={1.5} />

            {/* Step 3 */}
            <div className="w-full max-w-sm bg-[#5A7D4D]/10 border border-[#5A7D4D]/30 rounded-lg p-4 text-center transition-all duration-300 transform scale-100 hover:scale-[1.01]">
              <span className="block text-[10px] text-[#5A7D4D] font-mono font-bold uppercase tracking-wide">PASO 3 • Trueque Vocálico</span>
              <div className="flex justify-center items-center gap-4 mt-2 text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                <span className="bg-white px-2 py-0.5 rounded border border-[#D8D6CF]">AR → E</span>
                <span className="text-[#5A7D4D]">ER / IR → A</span>
              </div>
              <div className="text-xl font-display font-black text-[#2F3437] mt-3 font-mono">
                {activeVerb.root}
                <span className="text-[#D9A441] underline font-black">{activeVerb.ending}</span>
                <span className="text-gray-400 font-normal font-sans mx-2">→</span>
                <span className="bg-[#5A7D4D] text-white px-2.5 py-0.5 rounded-md text-base font-bold">{activeVerb.subjunctive}</span>
              </div>
            </div>

          </div>

          <div className="border-t border-[#D8D6CF]/60 pt-4 mt-6 text-xs text-gray-500 text-center flex items-center justify-center gap-1.5 font-medium">
            <RefreshCw size={12} strokeWidth={1.5} className="text-[#5A7D4D]" />
            <span>El trueque vocálico intercambia la vocal característica del verbo.</span>
          </div>

        </div>

      </div>

      {/* Consultation Guide Card */}
      <div className="bg-[#F2F1EC]/30 border border-[#D8D6CF] rounded-lg p-6 mt-8">
        <h3 className="text-base font-display font-bold text-[#5A7D4D] mb-3 flex items-center gap-1.5 border-b border-[#D8D6CF] pb-2">
          <HelpCircle size={16} strokeWidth={1.5} className="text-[#5A7D4D]" />
          Consulta rápida del Algoritmo
        </h3>
        <ol className="list-decimal list-inside space-y-2.5 text-xs md:text-sm text-gray-700 font-medium">
          <li><strong>Encuentra el YO:</strong> Conjuga el verbo en la primera persona del presente de indicativo (por ejemplo: <code className="bg-white px-1.5 py-0.5 rounded border border-[#D8D6CF] text-[#D9A441] font-mono font-bold">tengo</code>).</li>
          <li><strong>Conserva la raíz:</strong> Elimina la terminación <code className="bg-white px-1 py-0.5 rounded text-gray-500 font-mono border border-[#D8D6CF] font-bold">o</code> para aislar la raíz operativa de subjuntivo (por ejemplo: <code className="bg-white px-1.5 py-0.5 rounded border border-[#D8D6CF] font-mono text-[#5A7D4D] font-bold">teng-</code>).</li>
          <li><strong>Trueque vocálico:</strong> Añade la vocal opuesta. Si el verbo es <code className="text-[#5A7D4D] font-bold font-mono">AR</code>, añade <code className="text-[#D9A441] font-mono font-black">E</code>. Si es <code className="text-[#5A7D4D] font-bold font-mono">ER/IR</code>, añade <code className="text-[#D9A441] font-mono font-black">A</code> (por ejemplo: <code className="bg-[#5A7D4D]/10 text-[#5A7D4D] border border-[#5A7D4D]/20 font-mono px-2 py-0.5 rounded font-bold">tenga</code>).</li>
        </ol>
      </div>
    </ActivityCard>
  );
}
