/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ActivityCardProps } from '../types';

export default function ActivityCard({ id, number, title, children }: ActivityCardProps) {
  return (
    <section 
      id={id} 
      className="ele-card p-6 md:p-8 my-10 bg-white transition-all duration-300 relative overflow-hidden"
    >
      {/* Accent strip on top */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-primary-ele"></div>
      
      {/* Activity Header */}
      <div className="flex items-center gap-3 mb-6">
        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#F2F1EC] text-[#5A7D4D] font-display font-bold text-lg border border-[#D8D6CF]">
          {number}
        </span>
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-[#6B6F72] font-semibold block">
            Actividad {number}
          </span>
          <h2 className="text-xl md:text-2xl font-display font-bold text-[#5A7D4D] leading-tight">
            {title}
          </h2>
        </div>
      </div>

      {/* Activity Content */}
      <div className="text-gray-700 leading-relaxed">
        {children}
      </div>
    </section>
  );
}
