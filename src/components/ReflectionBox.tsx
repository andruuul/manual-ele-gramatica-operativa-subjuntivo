/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { HelpCircle } from 'lucide-react';
import { ReflectionBoxProps } from '../types';

export default function ReflectionBox({ title = 'Reflexión operativa', children }: ReflectionBoxProps) {
  return (
    <div className="ele-reflection p-5 my-6 flex gap-4 text-[#2F3437] shadow-none bg-[#FAF5E7] border border-[#D8D6CF] border-l-4 border-l-[#C97C5D] rounded-r-lg">
      <div className="text-[#C97C5D] shrink-0 mt-0.5" id="reflection-icon">
        <HelpCircle size={20} strokeWidth={1.5} />
      </div>
      <div className="text-sm md:text-base font-sans leading-relaxed">
        <span className="text-[#C97C5D] font-display font-bold block mb-1 text-base">
          {title}
        </span>
        <div className="text-[#2F3437] font-medium">
          {children}
        </div>
      </div>
    </div>
  );
}
