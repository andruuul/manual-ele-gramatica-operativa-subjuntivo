/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export interface ActivityCardProps {
  id: string;
  number: number;
  title: string;
  children: React.ReactNode;
}

export interface InstructionBoxProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export interface ReflectionBoxProps {
  title?: string;
  children: React.ReactNode;
}

export interface QuestionInputProps {
  id: string;
  question: string;
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
}

export interface SituationItem {
  id: number;
  text: string;
  correctOption: 'specific' | 'profile';
  explanation: string;
}

export interface EmailGapState {
  gap1: string; // ofrece / ofrezca
  gap2: string; // ofrece / ofrezca
  gap3: string; // conoce / conozca
  gap4: string; // conoce / conozca
  gap5: string; // tiene / tenga
  gap6: string; // coordina / coordine
}

export interface OrganigramaState {
  equipoActual: string[];
  equipoDeseado: string[];
  proximaContratacion: string;
}

export interface TrueFalseItem {
  id: number;
  text: string;
  question: string;
  answer: boolean; // true = yes (specific/identified), false = no (not identified)
  explanation: string;
}

export interface ChatMessage {
  id: string;
  sender: 'professor' | 'student';
  text: string;
  isExample?: boolean;
}

export interface ChatState {
  respuesta1: string;
  respuesta2: string;
  respuesta3: string;
}

export interface MirrorItem {
  id: number;
  frase: string;
  preguntas: string[];
  respuestaUsuario: string;
}
