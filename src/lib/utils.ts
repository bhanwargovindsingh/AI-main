import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface Stat {
  value: string;
  label: string;
  icon?: string;
}

export interface Service {
  title: string;
  description: string;
  points: string[];
  icon: string;
}

export interface ProcessPhase {
  phase: string;
  title: string;
  description: string;
}

export interface Capability {
  title: string;
}

export interface Industry {
  title: string;
  description: string;
  icon: string;
  stat?: {
    value: string;
    label: string;
  };
}

export interface CaseStudy {
  category: string;
  title: string;
  description: string;
  stats: { label: string; value: string }[];
  tags: string[];
}
