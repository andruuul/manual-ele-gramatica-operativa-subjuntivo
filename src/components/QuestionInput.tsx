/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { QuestionInputProps } from '../types';

export default function QuestionInput({ id, question, value, onChange, placeholder = 'Escribe tu respuesta aquí...' }: QuestionInputProps) {
  return (
    <div className="my-5 font-sans">
      <label htmlFor={id} className="block text-sm md:text-base font-bold text-[#2F3437] mb-2">
        {question}
      </label>
      <textarea
        id={id}
        rows={3}
        className="w-full p-3 border border-[#D8D6CF] rounded-lg focus:outline-none focus:border-[#5A7D4D] transition-all duration-200 bg-[#F2F1EC]/20 text-[#2F3437] text-sm md:text-base resize-y shadow-none font-medium"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
