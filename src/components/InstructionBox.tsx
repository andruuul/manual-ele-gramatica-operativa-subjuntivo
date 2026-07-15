/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Info, Loader2, Globe } from 'lucide-react';
import { InstructionBoxProps } from '../types';

const LANGUAGES = [
  { code: 'fr', name: 'Francés' },
  { code: 'de', name: 'Alemán' },
  { code: 'it', name: 'Italiano' },
  { code: 'pt', name: 'Portugués' },
  { code: 'zh-CN', name: 'Chino (Simplificado)' },
  { code: 'ja', name: 'Japonés' },
  { code: 'ko', name: 'Coreano' },
  { code: 'ru', name: 'Ruso' },
  { code: 'ar', name: 'Árabe' },
  { code: 'hi', name: 'Hindi' },
  { code: 'tr', name: 'Turco' },
  { code: 'nl', name: 'Neerlandés' },
  { code: 'pl', name: 'Polaco' },
  { code: 'sv', name: 'Sueco' },
  { code: 'vi', name: 'Vietnamita' },
];

function extractText(node: React.ReactNode): string {
  if (!node) return '';
  if (typeof node === 'string') return node;
  if (typeof node === 'number') return String(node);
  if (Array.isArray(node)) {
    return node.map(extractText).join('\n');
  }
  if (React.isValidElement(node)) {
    return extractText(node.props.children);
  }
  return '';
}

async function translateText(text: string, targetLang: string): Promise<string> {
  if (!text.trim()) return '';
  try {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=es&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    if (data && data[0]) {
      return data[0].map((item: any) => item[0] || '').join('');
    }
    return text;
  } catch (error) {
    console.error('Translation error:', error);
    return text;
  }
}

export default function InstructionBox({ children, icon }: InstructionBoxProps) {
  const [currentLang, setCurrentLang] = useState<string>('es');
  const [translations, setTranslations] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Extract pure text for translation
  const originalText = useMemo(() => extractText(children), [children]);

  const handleLanguageChange = async (lang: string) => {
    if (lang === 'es') {
      setCurrentLang('es');
      return;
    }

    // Check cache
    if (translations[lang]) {
      setCurrentLang(lang);
      return;
    }

    setIsLoading(true);
    setCurrentLang(lang);

    try {
      const translated = await translateText(originalText, lang);
      setTranslations((prev) => ({ ...prev, [lang]: translated }));
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const renderTranslatedContent = (text: string) => {
    return text.split('\n').map((line, idx) => (
      <p key={idx} className={idx > 0 ? 'mt-1' : ''}>
        {line}
      </p>
    ));
  };

  return (
    <div className="ele-instruction p-4 md:p-5 my-6 flex flex-col gap-3 text-[#2F3437] shadow-none border border-[#D8D6CF] bg-[#F2F1EC] border-l-4 border-[#5A7D4D] rounded-r-lg">
      {/* Dynamic Translation Header Row */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#D8D6CF] pb-2.5 shrink-0">
        <div className="flex items-center gap-2">
          <div className="text-[#5A7D4D] shrink-0">
            {icon || <Info size={16} strokeWidth={1.5} />}
          </div>
          <strong className="text-[#5A7D4D] font-display font-bold text-sm md:text-base">
            Instrucciones
          </strong>
        </div>

        {/* Translation Buttons Toolbar */}
        <div className="flex items-center gap-1.5 text-xs select-none">
          {/* Spanish Button */}
          <button
            type="button"
            onClick={() => handleLanguageChange('es')}
            className={`px-2.5 py-1 rounded font-bold transition-all cursor-pointer ${
              currentLang === 'es'
                ? 'bg-[#5A7D4D] text-white shadow-xs'
                : 'bg-white text-gray-600 hover:bg-gray-100 border border-[#D8D6CF]'
            }`}
          >
            ES
          </button>

          {/* English Button */}
          <button
            type="button"
            onClick={() => handleLanguageChange('en')}
            className={`px-2.5 py-1 rounded font-bold transition-all cursor-pointer ${
              currentLang === 'en'
                ? 'bg-[#5A7D4D] text-white shadow-xs'
                : 'bg-white text-gray-600 hover:bg-gray-100 border border-[#D8D6CF]'
            }`}
          >
            EN
          </button>

          {/* Other Languages Select */}
          <div className="relative inline-block">
            <select
              value={currentLang !== 'es' && currentLang !== 'en' ? currentLang : ''}
              onChange={(e) => {
                const lang = e.target.value;
                if (lang) {
                  handleLanguageChange(lang);
                }
              }}
              className={`px-2 py-1 pr-6 rounded font-bold transition-all cursor-pointer appearance-none bg-white text-gray-600 hover:bg-gray-100 border border-[#D8D6CF] outline-none text-xs ${
                currentLang !== 'es' && currentLang !== 'en'
                  ? 'bg-[#5A7D4D] text-white shadow-xs hover:bg-[#4B6840]'
                  : ''
              }`}
              style={{
                backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='${
                  currentLang !== 'es' && currentLang !== 'en' ? '%23FFFFFF' : '%234B5563'
                }' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m6 8 4 4 4-4'/%3E%3C/svg%3E")`,
                backgroundPosition: 'right 0.25rem center',
                backgroundSize: '1rem 1rem',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <option value="" disabled className="text-gray-400 bg-white">
                🌐 {currentLang !== 'es' && currentLang !== 'en' ? LANGUAGES.find(l => l.code === currentLang)?.name : 'Otro'}
              </option>
              {LANGUAGES.map((lang) => (
                <option key={lang.code} value={lang.code} className="text-[#2F3437] bg-white font-semibold">
                  {lang.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="text-sm md:text-base font-sans leading-relaxed text-[#2F3437]">
        {isLoading ? (
          <div className="flex items-center gap-2 text-gray-400 py-2">
            <Loader2 size={16} className="animate-spin text-[#5A7D4D]" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider">Traduciendo...</span>
          </div>
        ) : currentLang === 'es' ? (
          children
        ) : (
          <div className="italic font-medium text-gray-600">
            {renderTranslatedContent(translations[currentLang] || originalText)}
          </div>
        )}
      </div>
    </div>
  );
}
