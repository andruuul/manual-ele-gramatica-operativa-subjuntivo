/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import ActivityCard from './ActivityCard';
import InstructionBox from './InstructionBox';
import { RefreshCw, HelpCircle, Eye, AlertCircle, Sparkles } from 'lucide-react';

interface ScenarioCard {
  id: number;
  originalPhrase: string;
  context: string;
  correctAnswer: boolean;
  correction?: string;
  explanation: string;
}

export default function Activity8_Interpretar() {
  const [answers, setAnswers] = useState<Record<number, boolean | null>>({
    1: null,
    2: null,
    3: null,
  });

  const [rewrites, setRewrites] = useState<Record<number, string>>({
    1: '',
    2: '',
    3: '',
  });

  const [revealed, setRevealed] = useState<Record<number, boolean>>({
    1: false,
    2: false,
    3: false,
  });

  const handleRewriteChange = (id: number, value: string) => {
    setRewrites(prev => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleAnswerChange = (
    id: number,
    value: boolean
  ) => {
    setAnswers(prev => ({
      ...prev,
      [id]: value,
    }));
  };

  const toggleReveal = (id: number) => {
    setRevealed(prev => ({ ...prev, [id]: !prev[id] }));
  };

const items: ScenarioCard[] = [

  {
    id: 1,
    originalPhrase:
      "Buscamos un ingeniero que conoce nuestro software.",
    context:
      "La empresa está publicando una oferta de empleo. Todavía no ha encontrado al ingeniero; solo sabe qué perfil necesita.",
    correctAnswer: false,
    correction:
      "Buscamos un ingeniero que conozca nuestro software.",
    explanation:
      "El contexto describe un perfil que todavía no está identificado. La frase usa indicativo ('conoce'), que presenta una 'foto': un ingeniero ya conocido. Para expresar un perfil todavía no identificado necesitamos un 'sketch': 'conozca'."
  },

  {
    id: 2,
    originalPhrase:
      "Tenemos una consultora que coordine el proyecto.",
    context:
      "La empresa trabaja desde hace dos años con una consultora que actualmente coordina todos los proyectos internacionales.",
    correctAnswer: false,
    correction:
      "Tenemos una consultora que coordina el proyecto.",
    explanation:
      "Aquí la consultora ya existe y está perfectamente identificada. El indicativo presenta una 'foto' de esa realidad. El subjuntivo crea un conflicto porque presenta un perfil todavía no identificado."
  },

  {
    id: 3,
    originalPhrase:
      "Queremos contratar a un proveedor que ofrezca soporte en japonés.",
    context:
      "Todavía estamos comparando distintas empresas y no hemos decidido cuál contratar.",
    correctAnswer: true,
    explanation:
      "Muy bien. Como el proveedor todavía no está identificado, el subjuntivo presenta un 'sketch' del perfil que buscamos."
  }

  ];

  return (
    <ActivityCard id="actividad-8" number={8} title="Interpretar el contexto">
      
      <InstructionBox>
        <p>
          Lee cada frase junto con su contexto.
        </p>

        <p className="mt-2">
          Decide si ambos son coherentes según el significado del modo verbal. Si detectas un conflicto, reescribe la frase para que represente correctamente la situación. Después, consulta la explicación.
        </p>
      </InstructionBox>

      <div className="space-y-8 my-8">
        {items.map((item) => (

          <div
            key={item.id}
            className="border border-[#D8D6CF] rounded-lg bg-white overflow-hidden shadow-none"
          >

            {/* Header */}

            <div className="bg-[#F2F1EC] px-5 py-3 border-b border-[#D8D6CF] flex items-center justify-between">

              <span className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest">
                Escenario {item.id}
              </span>

            </div>

            <div className="p-6 space-y-6">

              {/* Frase */}

              <div className="bg-[#FAF5E7]/30 p-4 rounded-lg border-l-4 border-[#C97C5D]">

                <span className="text-[10px] uppercase tracking-wider font-mono font-bold text-[#C97C5D]">
                  Frase
                </span>

                <p className="mt-2 text-lg font-display italic text-[#2F3437]">
                  "{item.originalPhrase}"
                </p>

              </div>

              {/* Contexto */}

              <div className="bg-[#F2F1EC]/30 p-4 rounded-lg border border-[#D8D6CF]">

                <span className="text-[10px] uppercase tracking-wider font-mono font-bold text-[#5A7D4D]">
                  Contexto
                </span>

                <p className="mt-2 text-sm leading-relaxed text-[#2F3437]">
                  {item.context}
                </p>

              </div>

              {/* Pregunta */}

              <div>

                <p className="font-display font-bold text-[#2F3437] mb-4">
                  ¿La frase representa correctamente este contexto?
                </p>

                <div className="space-y-3">

                  <label className="flex items-center gap-3 cursor-pointer">

                    <input
                      type="radio"
                      name={`scenario-${item.id}`}
                      checked={answers[item.id] === true}
                      onChange={() => handleAnswerChange(item.id, true)}
                    />

                    <span>
                      Sí, la frase representa correctamente el contexto.
                    </span>

                  </label>

                  <label className="flex items-center gap-3 cursor-pointer">

                    <input
                      type="radio"
                      name={`scenario-${item.id}`}
                      checked={answers[item.id] === false}
                      onChange={() => handleAnswerChange(item.id, false)}
                    />

                    <span>
                      No, la frase entra en conflicto con el contexto.
                    </span>

                  </label>

                </div>

              </div>

              {/* Reescritura */}

              {answers[item.id] === false && (

                <div>

                  <label
                    htmlFor={`rewrite-${item.id}`}
                    className="block text-[10px] uppercase tracking-wider font-mono font-bold text-gray-500 mb-2"
                  >
                    Reescribe la frase para que coincida con el contexto
                  </label>

                  <textarea
                    id={`rewrite-${item.id}`}
                    rows={2}
                    value={rewrites[item.id]}
                    onChange={(e) =>
                      handleRewriteChange(item.id, e.target.value)
                    }
                    className="w-full rounded-lg border border-[#D8D6CF] p-3 focus:border-[#5A7D4D] focus:outline-none"
                  />

                </div>

              )}

              {/* Botón */}

              <button
                onClick={() => toggleReveal(item.id)}
                className="inline-flex items-center gap-2 rounded-lg bg-[#5A7D4D] px-4 py-2 text-sm font-display font-bold text-white hover:bg-[#4B6840] transition-colors" >
                  <>
                    <RefreshCw
                      size={15}
                      className={revealed[item.id] ? "rotate-180 transition-transform" : "transition-transform"}
                    />

                    {revealed[item.id]
                      ? "Ocultar explicación"
                      : "Ver explicación"}
                 </>
              </button>

              {/* Explicación */}

              {revealed[item.id] && (

                <div className="rounded-lg border border-[#D8D6CF] bg-[#FAF9F6] p-5 space-y-4">

                  {item.correctAnswer ? (

                    <>

                      <h4 className="font-display font-bold text-[#5A7D4D]">
                        ✔ Correcto: la frase representa exactamente ese contexto.
                      </h4>

                    </>

                  ) : (

                    <>

                      <h4 className="font-display font-bold text-[#C97C5D]">
                        ✏️ Hay un conflicto de significado.
                      </h4>

                      <p className="text-sm">
                        Una forma coherente de expresarlo sería:
                      </p>

                      <div className="rounded-lg bg-white border border-[#D8D6CF] p-3 font-mono font-bold text-[#5A7D4D]">
                        {item.correction}
                      </div>

                    </>

                  )}

                  <div>

                    <h5 className="font-display font-bold text-[#5A7D4D] mb-2">
                      ¿Por qué?
                    </h5>

                    <p className="text-sm leading-relaxed">
                      {item.explanation}
                    </p>

                  </div>

                </div>

              )}

            </div>

          </div>

        ))}
      </div>

      <div className="bg-[#5A7D4D] text-white p-6 rounded-lg border-l-4 border-[#E5C867] mt-8">

        <h4 className="font-display font-bold text-lg mb-3">
          Idea final
        </h4>

        <p className="text-sm leading-relaxed text-[#FAF5E7]">
          El indicativo y el subjuntivo no expresan simplemente "realidad" o "duda".
          <br /><br />
          Cada uno representa una manera distinta de presentar una entidad.
          <br /><br />
          El <strong>indicativo</strong> presenta una <strong>foto</strong>: una entidad ya identificada.
          <br /><br />
          El <strong>subjuntivo</strong> presenta un <strong>sketch</strong>: el perfil o la idea de una entidad que todavía no puedes identificar.
        </p>

      </div>

    </ActivityCard>
  );
}
