import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { Hexagon, Cpu, Network, Database, Layers, Workflow, Bot, Share2, Binary } from 'lucide-react';

export function CodeBackground() {
  const codeLines = [
    'import { genAI } from "@google/generative-ai";',
    'const model = genAI.getGenerativeModel({ model: "gemini-pro" });',
    'async function run() {',
    '  const prompt = "Build me a future.";',
    '  const result = await model.generateContent(prompt);',
    '  console.log(result.response.text());',
    '}',
    'export class AIRobot extends Agent {',
    '  constructor() { super(); this.status = "ACTIVE"; }',
    '  async think(context) { return this.process(context); }',
    '}',
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none opacity-[0.03] font-mono text-[10px] leading-relaxed">
      <div className="absolute -top-20 -left-20 w-[150%] h-[150%] transform -rotate-12">
        {Array.from({ length: 40 }).map((_, i) => (
          <div key={i} className="flex gap-10 whitespace-nowrap mb-2">
            {Array.from({ length: 5 }).map((_, j) => (
              <span key={j}>{codeLines[(i + j) % codeLines.length]}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function NeuralMesh() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none opacity-20">
      <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <defs>
          <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F97316" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#F97316" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#F97316" stopOpacity="0" />
          </linearGradient>
        </defs>
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.line
            key={i}
            x1={Math.random() * 1000}
            y1={Math.random() * 1000}
            x2={Math.random() * 1000}
            y2={Math.random() * 1000}
            stroke="url(#line-grad)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 0], 
              opacity: [0, 0.5, 0],
              x1: [null, Math.random() * 1000],
              y1: [null, Math.random() * 1000],
            }}
            transition={{ 
              duration: 10 + Math.random() * 10, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export function DataFlowLines() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      <svg className="w-full h-full">
        {Array.from({ length: 6 }).map((_, i) => (
          <g key={i}>
            <path
              d={`M ${-100} ${100 + i * 150} Q ${400} ${50 + i * 150} ${1200} ${150 + i * 150}`}
              fill="none"
              stroke="#F97316"
              strokeWidth="0.5"
              strokeDasharray="4 4"
              className="opacity-20"
            />
            <motion.circle
              r="2"
              fill="#F97316"
              initial={{ offsetDistance: "0%" }}
              animate={{ offsetDistance: "100%" }}
              transition={{
                duration: 5 + i * 2,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ offsetPath: `path('M ${-100} ${100 + i * 150} Q ${400} ${50 + i * 150} ${1200} ${150 + i * 150}')` }}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}

export function TechGrid() {
  return (
    <div className="absolute inset-0 pointer-events-none opacity-[0.03] overflow-hidden">
      <div 
        className="absolute inset-0" 
        style={{ 
          backgroundImage: `linear-gradient(#F97316 1px, transparent 1px), linear-gradient(90deg, #F97316 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} 
      />
    </div>
  );
}

export function GlowingOrb({ className, color = "bg-brand" }: { className?: string, color?: string }) {
  return (
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={cn("absolute rounded-full blur-[120px] pointer-events-none", color, className)}
    />
  );
}

export function HexagonPattern() {
  return (
    <div className="absolute inset-0 pointer-events-none opacity-[0.03] overflow-hidden">
      <svg width="100%" height="100%">
        <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
          <path d="M25 0 L50 14.4 L50 43.4 L25 57.8 L0 43.4 L0 14.4 Z" fill="none" stroke="#F97316" strokeWidth="1" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#hexagons)" />
      </svg>
    </div>
  );
}

export function CircuitLines() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
      <svg className="w-full h-full" viewBox="0 0 1000 1000">
        <path d="M0 200 H200 V400 H400 V200 H600 V600 H800 V400 H1000" fill="none" stroke="#F97316" strokeWidth="0.5" />
        <path d="M0 800 H300 V600 H500 V800 H800 V1000" fill="none" stroke="#F97316" strokeWidth="0.5" />
        <circle cx="200" cy="200" r="2" fill="#F97316" />
        <circle cx="400" cy="400" r="2" fill="#F97316" />
        <circle cx="600" cy="200" r="2" fill="#F97316" />
        <circle cx="800" cy="600" r="2" fill="#F97316" />
      </svg>
    </div>
  );
}

export function WireframeSphere({ className }: { className?: string }) {
  return (
    <div className={cn("absolute pointer-events-none opacity-20", className)}>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="w-full h-full relative"
      >
        <div className="absolute inset-0 border border-brand/40 rounded-full" />
        <div className="absolute inset-0 border border-brand/20 rounded-full transform rotate-45" />
        <div className="absolute inset-0 border border-brand/20 rounded-full transform -rotate-45" />
        <div className="absolute inset-0 border border-brand/10 rounded-full transform rotate-90" />
      </motion.div>
    </div>
  );
}

export function FloatingIcons() {
  const icons = [Cpu, Network, Database, Layers, Workflow, Bot, Share2, Binary];
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 12 }).map((_, i) => {
        const Icon = icons[i % icons.length];
        return (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              opacity: 0 
            }}
            animate={{ 
              y: [null, "-=40", "+=40"],
              opacity: [0, 0.15, 0],
              scale: [0.8, 1, 0.8]
            }}
            transition={{ 
              duration: 10 + Math.random() * 10, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute text-brand"
          >
            <Icon size={24 + Math.random() * 20} strokeWidth={1} />
          </motion.div>
        );
      })}
    </div>
  );
}
