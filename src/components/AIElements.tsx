import { motion } from 'motion/react';
import { cn } from '../lib/utils';

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

export function FloatingDataNode({ className }: { className?: string }) {
  return (
    <motion.div
      animate={{
        y: [-10, 10, -10],
        rotate: [0, 5, 0],
      }}
      transition={{
        duration: 5 + Math.random() * 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={cn("absolute z-20", className)}
    >
      <div className="glass p-3 rounded-xl border border-brand/20 flex items-center gap-3 backdrop-blur-md">
        <div className="w-2 h-2 bg-brand rounded-full animate-pulse" />
        <div className="flex flex-col">
          <span className="text-[8px] font-mono text-brand/60 uppercase tracking-widest leading-none mb-1">Processing</span>
          <span className="text-[10px] font-black text-white/80 leading-none">NEURAL_TASK_821</span>
        </div>
      </div>
    </motion.div>
  );
}
export function AIRobotElement() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Outer Glow */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-64 h-64 bg-brand/20 blur-3xl rounded-full"
      />
      
      {/* Robot Core */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10"
      >
        <div className="w-48 h-48 border-2 border-brand/30 rounded-[2rem] flex items-center justify-center p-8 glass relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent" />
          
          {/* Animated Scanning Line */}
          <motion.div
            animate={{ top: ['0%', '100%', '0%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 right-0 h-[1px] bg-brand/50 shadow-[0_0_10px_rgba(249,115,22,0.8)] z-20"
          />

          {/* Abstract Robot Face / Circuitry */}
          <div className="grid grid-cols-3 gap-2 w-full">
            <div className="h-2 bg-brand/40 rounded-full" />
            <div className="h-2 bg-brand/20 rounded-full" />
            <div className="h-2 bg-brand/60 rounded-full" />
            <div className="col-span-2 h-12 border border-brand/20 rounded-xl flex items-center justify-around px-4">
              <div className="w-3 h-3 bg-brand rounded-full animate-pulse shadow-[0_0_8px_#F97316]" />
              <div className="w-3 h-3 bg-brand rounded-full animate-pulse shadow-[0_0_8px_#F97316]" />
            </div>
            <div className="h-12 border border-brand/20 rounded-xl flex items-center justify-center">
               <div className="w-4 h-1 bg-brand/40 rounded-full" />
            </div>
            <div className="col-span-3 h-4 bg-brand/10 border border-brand/10 rounded-lg" />
          </div>
        </div>

        {/* Floating Particles */}
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [-10, 10, -10],
              x: [-10, 10, -10],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            className="absolute w-1 h-1 bg-brand rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}
