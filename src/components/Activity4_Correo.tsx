/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import ActivityCard from './ActivityCard';
import InstructionBox from './InstructionBox';
import ReflectionBox from './ReflectionBox';
import { Mail, Check, AlertTriangle, Eye, HelpCircle } from 'lucide-react';

export default function Activity4_Correo() {
  const [inputs, setInputs] = useState({
    gap1: '', // ofrece
    gap2: '', // ofrezca
    gap3: '', // conoce
    gap4: '', // conozca
    gap5: '', // tenga
    gap6: '', // coordina
  });

  const [showAnswers, setShowAnswers] = useState<boolean>(false);

  const handleInputChange = (gap: string, val: string) => {
    setInputs(prev => ({ ...prev, [gap]: val }));
  };

  const correctAnswers = {
    gap1: 'ofrece',
    gap2: 'ofrezca',
    gap3: 'conoce',
    gap4: 'conozca',
    gap5: 'tenga',
    gap6: 'coordina'
  };

  // Check if each input is correct (ignoring accents, case, and surrounding spaces)
  const isCorrect = (gapKey: keyof typeof correctAnswers) => {
    const userVal = inputs[gapKey].trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const correctVal = correctAnswers[gapKey].normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return userVal === correctVal;
  };

  const handleToggleAnswers = () => {
    setShowAnswers(!showAnswers);
  };

  const getInputClassName = (gapKey: keyof typeof correctAnswers) => {
    const base = "border-b-2 font-mono text-center w-28 focus:outline-none px-1 font-bold transition-all text-sm md:text-base";
    if (showAnswers) {
      if (isCorrect(gapKey)) {
        return `${base} border-[#7A9E6E] bg-[#7A9E6E]/10 text-[#5A7D4D]`;
      } else {
        return `${base} border-[#C97C5D] bg-[#C97C5D]/10 text-[#C97C5D]`;
      }
    }
    return `${base} border-gray-300 text-[#2F3437] focus:border-[#5A7D4D]`;
  };

  return (
    <ActivityCard id="actividad-4" number={4} title="Correo profesional">
      
      <InstructionBox>
        <p>Lee el correo electrónico que Carlos le envía a Laura sobre el proyecto Phoenix.</p>
        <p className="mt-1">Escribe en cada espacio el verbo entre paréntesis en la forma correcta del presente (indicativo o subjuntivo). Analiza si el referente está ya **identificado** o si es solo un **perfil deseado**.</p>
      </InstructionBox>

      <ReflectionBox title="Antes de escribir, hazte esta pregunta fundamental:">
        <blockquote className="text-base md:text-lg text-[#2F3437] font-semibold italic border-l-2 border-[#C97C5D] pl-3">
          "¿La persona o entidad de la que hablo ya tiene un nombre y un apellido concretos dentro de la empresa, o representa únicamente un perfil abstracto que necesitamos encontrar?"
        </blockquote>
      </ReflectionBox>

      {/* Real-looking Email Window */}
      <div className="border border-[#D8D6CF] rounded-lg overflow-hidden my-8 shadow-none bg-white">
        {/* Email Header bar */}
        <div className="bg-[#F2F1EC] px-4 py-3 border-b border-[#D8D6CF] flex items-center gap-2">
          <Mail size={16} strokeWidth={1.5} className="text-[#5A7D4D]" />
          <span className="text-[10px] font-mono text-gray-500 font-bold uppercase tracking-wider">Cliente de Correo • Borrador</span>
        </div>

        {/* Fields */}
        <div className="p-4 bg-[#F2F1EC]/40 border-b border-[#D8D6CF] text-xs md:text-sm space-y-2 font-medium">
          <div className="flex items-center">
            <span className="w-16 text-gray-400 font-mono font-bold uppercase text-[10px]">De:</span>
            <span className="text-[#2F3437]">Carlos Gómez (carlos.gomez@empresa.com)</span>
          </div>
          <div className="flex items-center">
            <span className="w-16 text-gray-400 font-mono font-bold uppercase text-[10px]">Para:</span>
            <span className="text-[#2F3437]">Laura Ruiz (laura.ruiz@empresa.com)</span>
          </div>
          <div className="flex items-center">
            <span className="w-16 text-gray-400 font-mono font-bold uppercase text-[10px]">Asunto:</span>
            <span className="text-[#5A7D4D] font-bold">Seguimiento del Proyecto Phoenix</span>
          </div>
        </div>

        {/* Email Body */}
        <div className="p-6 md:p-8 bg-white text-sm md:text-base leading-relaxed text-[#2F3437] space-y-4">
          <p>Hola, Laura:</p>
          
          <p>Estamos organizando la siguiente fase del proyecto y necesitamos tomar algunas decisiones esta semana.</p>
          
          <p>
            Primero, necesitamos contactar al proveedor que{' '}
            <span className="inline-flex items-center gap-1">
              <input
                type="text"
                placeholder="(ofrecer)"
                value={inputs.gap1}
                onChange={(e) => handleInputChange('gap1', e.target.value)}
                className={getInputClassName('gap1')}
              />
              {showAnswers && (
                isCorrect('gap1') ? (
                  <span className="text-[#7A9E6E] font-bold text-xs">✓</span>
                ) : (
                  <span className="text-[#C97C5D] font-bold text-xs" title="Correcto: ofrece">ofrece</span>
                )
              )}
            </span>{' '}
            soporte técnico las 24 horas, porque queremos revisar el cronograma con él antes del viernes.
          </p>

          <p>
            Además, seguimos buscando un proveedor que{' '}
            <span className="inline-flex items-center gap-1">
              <input
                type="text"
                placeholder="(ofrecer)"
                value={inputs.gap2}
                onChange={(e) => handleInputChange('gap2', e.target.value)}
                className={getInputClassName('gap2')}
              />
              {showAnswers && (
                isCorrect('gap2') ? (
                  <span className="text-[#7A9E6E] font-bold text-xs">✓</span>
                ) : (
                  <span className="text-[#C97C5D] font-bold text-xs" title="Correcto: ofrezca">ofrezca</span>
                )
              )}
            </span>{' '}
            integración con nuestro sistema de inventario, ya que todavía no hemos encontrado uno que cumpla todos los requisitos.
          </p>

          <p>
            Por otra parte, Recursos Humanos quiere entrevistar al analista que{' '}
            <span className="inline-flex items-center gap-1">
              <input
                type="text"
                placeholder="(conocer)"
                value={inputs.gap3}
                onChange={(e) => handleInputChange('gap3', e.target.value)}
                className={getInputClassName('gap3')}
              />
              {showAnswers && (
                isCorrect('gap3') ? (
                  <span className="text-[#7A9E6E] font-bold text-xs">✓</span>
                ) : (
                  <span className="text-[#C97C5D] font-bold text-xs" title="Correcto: conoce">conoce</span>
                )
              )}
            </span>{' '}
            el proceso de auditoría interna y ya ha colaborado con el departamento financiero.
          </p>

          <p>
            También estamos buscando un analista que{' '}
            <span className="inline-flex items-center gap-1">
              <input
                type="text"
                placeholder="(conocer)"
                value={inputs.gap4}
                onChange={(e) => handleInputChange('gap4', e.target.value)}
                className={getInputClassName('gap4')}
              />
              {showAnswers && (
                isCorrect('gap4') ? (
                  <span className="text-[#7A9E6E] font-bold text-xs">✓</span>
                ) : (
                  <span className="text-[#C97C5D] font-bold text-xs" title="Correcto: conozca">conozca</span>
                )
              )}
            </span>{' '}
            herramientas de análisis de datos y{' '}
            <span className="inline-flex items-center gap-1">
              <input
                type="text"
                placeholder="(tener)"
                value={inputs.gap5}
                onChange={(e) => handleInputChange('gap5', e.target.value)}
                className={getInputClassName('gap5')}
              />
              {showAnswers && (
                isCorrect('gap5') ? (
                  <span className="text-[#7A9E6E] font-bold text-xs">✓</span>
                ) : (
                  <span className="text-[#C97C5D] font-bold text-xs" title="Correcto: tenga">tenga</span>
                )
              )}
            </span>{' '}
            experiencia en gestión de proyectos internacionales.
          </p>

          <p>
            Finalmente, cuando confirmemos el presupuesto, avisaremos al consultor que{' '}
            <span className="inline-flex items-center gap-1">
              <input
                type="text"
                placeholder="(coordinar)"
                value={inputs.gap6}
                onChange={(e) => handleInputChange('gap6', e.target.value)}
                className={getInputClassName('gap6')}
              />
              {showAnswers && (
                isCorrect('gap6') ? (
                  <span className="text-[#7A9E6E] font-bold text-xs">✓</span>
                ) : (
                  <span className="text-[#C97C5D] font-bold text-xs" title="Correcto: coordina">coordina</span>
                )
              )}
            </span>{' '}
            la implementación del nuevo sistema para organizar la reunión inicial.
          </p>

          <p>Quedo pendiente de tus comentarios.</p>
          <p>Saludos,</p>
          <p className="font-bold text-[#5A7D4D]">Carlos Gómez</p>
        </div>
      </div>

      {/* Feedback & Semantic Explanations */}
      {showAnswers && (
        <div className="bg-[#FAF9F6] border border-[#D8D6CF] rounded-lg p-6 mt-6 space-y-4">
          <h3 className="font-display font-bold text-[#5A7D4D] text-base md:text-lg flex items-center gap-2 border-b border-[#D8D6CF] pb-2">
            <span className="w-1.5 h-1.5 bg-[#7A9E6E] rounded-full"></span>
            Explicaciones Semánticas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm">
            <div className="p-3 bg-white border border-[#D8D6CF]/60 rounded-lg font-medium">
              <strong className="text-[#5A7D4D] block mb-1 font-bold">1. ...el proveedor que ofrece</strong>
              <p className="text-gray-500 text-xs leading-relaxed">
                Se usa <code className="text-[#5A7D4D] bg-[#F2F1EC] font-mono border border-[#D8D6CF] px-1 rounded font-bold">ofrece</code> (indicativo) porque Carlos ya sabe exactamente quién es ese proveedor e incluso especifica que quieren "revisar el cronograma con él". Declara un ente identificado.
              </p>
            </div>
            <div className="p-3 bg-white border border-[#D8D6CF]/60 rounded-lg font-medium">
              <strong className="text-[#5A7D4D] block mb-1 font-bold">2. ...un proveedor que ofrezca</strong>
              <p className="text-gray-500 text-xs leading-relaxed">
                Se usa <code className="text-[#C97C5D] bg-[#FAF5E7] font-mono border border-[#C97C5D]/20 px-1 rounded font-bold">ofrezca</code> (subjuntivo) porque "seguimos buscando" y "todavía no hemos encontrado uno". No hay un proveedor identificado; solo se describe el perfil deseado.
              </p>
            </div>
            <div className="p-3 bg-white border border-[#D8D6CF]/60 rounded-lg font-medium">
              <strong className="text-[#5A7D4D] block mb-1 font-bold">3. ...el analista que conoce</strong>
              <p className="text-gray-500 text-xs leading-relaxed">
                Se usa <code className="text-[#5A7D4D] bg-[#F2F1EC] font-mono border border-[#D8D6CF] px-1 rounded font-bold">conoce</code> (indicativo) porque se añade que "ya ha colaborado con el departamento". Es una persona con nombre y apellido bien identificada dentro de la plantilla.
              </p>
            </div>
            <div className="p-3 bg-white border border-[#D8D6CF]/60 rounded-lg font-medium">
              <strong className="text-[#5A7D4D] block mb-1 font-bold">4 & 5. ...un analista que conozca ... y tenga</strong>
              <p className="text-gray-500 text-xs leading-relaxed">
                Se usan <code className="text-[#C97C5D] bg-[#FAF5E7] font-mono border border-[#C97C5D]/20 px-1 rounded font-bold">conozca</code> y <code className="text-[#C97C5D] bg-[#FAF5E7] font-mono border border-[#C97C5D]/20 px-1 rounded font-bold">tenga</code> (subjuntivo) porque "estamos buscando" cualquier analista con esas destrezas. No se declara a nadie existente aún.
              </p>
            </div>
            <div className="p-3 bg-white border border-[#D8D6CF]/60 rounded-lg md:col-span-2 font-medium">
              <strong className="text-[#5A7D4D] block mb-1 font-bold">6. ...al consultor que coordina</strong>
              <p className="text-gray-500 text-xs leading-relaxed">
                Se usa <code className="text-[#5A7D4D] bg-[#F2F1EC] font-mono border border-[#D8D6CF] px-1 rounded font-bold">coordina</code> (indicativo) porque se refiere a la persona asignada de antemano que realiza esa función en la empresa. El puesto y la identidad de esa persona ya están identificados en el equipo de trabajo.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Check Button */}
      <div className="mt-6 flex gap-4">
        <button
          onClick={handleToggleAnswers}
          className="px-6 py-2.5 rounded-lg font-bold text-xs md:text-sm cursor-pointer shadow-none bg-[#5A7D4D] text-white hover:bg-[#4B6840] transition-all duration-200"
        >
          {showAnswers ? 'Ocultar respuestas' : 'Mostrar respuestas y retroalimentación'}
        </button>
      </div>

    </ActivityCard>
  );
}
