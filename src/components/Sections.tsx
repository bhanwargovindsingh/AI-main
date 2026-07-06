import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import * as Icons from 'lucide-react';
import { SERVICES, STATS, PROCESS, CAPABILITIES, INDUSTRIES, CASE_STUDIES, TRUST_REASONS, AI_ENGINEERING_SERVICES } from '../data';
import { cn } from '../lib/utils';
import { CircuitLines, HexagonPattern, WireframeSphere, GlowingOrb, TechGrid, NeuralMesh } from './AIElements';

export function StatsSection() {
  return (
    <section className="py-20 border-y border-white/5 bg-white/[0.02] relative overflow-hidden">
      <TechGrid />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl font-bold font-heading text-brand mb-2">{stat.value}</div>
              <div className="text-sm text-white/50 font-medium uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Client Logos Placeholder */}
        <div className="mt-20 flex flex-wrap justify-center items-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
           {['Monash University', 'Red Rooster', 'JSDMedia', 'Saint-Gobain', 'Honda', 'Yankee Candle'].map(name => (
             <span key={name} className="text-xl font-heading font-bold">{name}</span>
           ))}
        </div>
      </div>
    </section>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="py-40 bg-white relative overflow-hidden">
      <TechGrid />
      <CircuitLines />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between gap-10 mb-24">
          <div className="max-w-2xl">
            <div className="text-brand text-xs font-black tracking-[0.5em] uppercase mb-6">Execution Engines</div>
            <h2 className="text-4xl lg:text-5xl font-heading font-black leading-tight tracking-tighter text-gray-900">AI Engineering <br />for Every Scale</h2>
          </div>
          <p className="text-gray-500 max-w-sm text-lg leading-relaxed font-medium">
            Deploying intelligent systems across mobile, web, and enterprise infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {SERVICES.map((service, idx) => {
            const Icon = (Icons as any)[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="bg-gray-50 border border-gray-100 p-10 rounded-[3rem] hover:bg-gray-100 transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Icons.ArrowUpRight className="w-6 h-6 text-brand" />
                </div>
                
                <div className="w-16 h-16 bg-brand/10 rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <Icon className="w-8 h-8 text-brand" />
                </div>
                
                <h3 className="text-3xl font-heading font-black mb-6 tracking-tight text-gray-900">{service.title}</h3>
                <p className="text-gray-500 text-sm mb-10 leading-relaxed font-medium">
                  {service.description}
                </p>
                
                <div className="space-y-4">
                  {service.points.map(point => (
                    <div key={point} className="flex items-center gap-4 text-xs font-bold text-gray-600 group-hover:text-gray-900 transition-colors">
                      <div className="w-1.5 h-1.5 bg-brand rounded-full shadow-[0_0_8px_rgba(249,115,22,0.5)]" />
                      {point}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  const [activePhase, setActivePhase] = useState(0);

  return (
    <section id="methodology" className="py-40 bg-bg-dark relative overflow-hidden">
      <HexagonPattern />
      <GlowingOrb className="top-1/4 right-0 w-[40%] h-[40%] bg-brand/5" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex justify-between items-end mb-20">
          <div>
            <div className="inline-block px-4 py-1.5 bg-brand/20 text-brand rounded-md text-[10px] font-black uppercase tracking-widest mb-6">
              Our Unique Workflow
            </div>
            <h2 className="text-4xl lg:text-5xl font-heading font-black tracking-tighter">
              From Discovery To <br />
              <span className="text-brand">AI Production</span>
            </h2>
          </div>
          <div className="hidden md:block">
            <div className="w-16 h-16 border border-white/10 rounded-full flex items-center justify-center group hover:border-brand transition-colors cursor-pointer">
              <Icons.ArrowUpRight className="w-6 h-6 text-white group-hover:text-brand transition-colors" />
            </div>
          </div>
        </div>

        {/* Main Split Layout */}
        <div className="grid lg:grid-cols-12 gap-20">
          {/* Left: List of Phases */}
          <div className="lg:col-span-5 flex flex-col">
            {PROCESS.map((phase, idx) => (
              <div
                key={phase.phase}
                onMouseEnter={() => setActivePhase(idx)}
                className={cn(
                  "py-10 border-t border-white/5 group cursor-pointer transition-all",
                  activePhase === idx ? "opacity-100" : "opacity-40 hover:opacity-70"
                )}
              >
                <div className="flex justify-between items-start gap-8">
                  <div className="flex-grow">
                    <h3 className="text-2xl font-heading font-black mb-4 tracking-tight group-hover:text-white transition-colors">
                      {phase.title}
                    </h3>
                    <p className="text-sm text-white/40 leading-relaxed font-medium max-w-sm">
                      {phase.description}
                    </p>
                  </div>
                  <div className="text-3xl font-heading font-black text-white/10 group-hover:text-brand/40 transition-colors">
                    {phase.phase.split(' ')[1]}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Featured Visual */}
          <div className="lg:col-span-7 relative">
            <div className="sticky top-40 aspect-[4/5] lg:aspect-auto lg:h-[800px] bg-white/[0.02] border border-white/10 rounded-[2rem] overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-brand/10 via-transparent to-transparent opacity-50" />
              
              {/* Dynamic Content based on active phase */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePhase}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 flex items-center justify-center p-20"
                >
                  <div className="relative w-full h-full border border-white/5 rounded-3xl overflow-hidden glass shadow-2xl">
                     <div className="absolute inset-0 bg-brand/5 backdrop-blur-3xl" />
                     <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
                        <div className="text-brand/20 font-black text-[12rem] leading-none select-none mb-4">
                          {PROCESS[activePhase].phase.split(' ')[1]}
                        </div>
                        <h4 className="text-3xl font-heading font-black mb-6">{PROCESS[activePhase].title}</h4>
                        <div className="w-12 h-1 bg-brand rounded-full mb-8 shadow-[0_0_15px_rgba(249,115,22,0.8)]" />
                        <div className="flex gap-4">
                           <div className="w-3 h-3 rounded-full bg-white/20" />
                           <div className="w-3 h-3 rounded-full bg-white/10" />
                           <div className="w-3 h-3 rounded-full bg-white/5" />
                        </div>
                     </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Decorative Elements */}
              <div className="absolute bottom-10 right-10 flex flex-col items-end">
                <div className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em] mb-2">Phase Control</div>
                <div className="flex gap-2">
                  {PROCESS.map((_, i) => (
                    <div 
                      key={i} 
                      className={cn(
                        "w-2 h-2 rounded-full transition-all duration-300",
                        activePhase === i ? "w-8 bg-brand" : "bg-white/20"
                      )} 
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Meta */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-white/40 text-sm font-medium max-w-md">
            Our methodology is designed for rapid iteration while maintaining strict engineering standards.
          </p>
          <button className="bg-brand text-white px-10 py-4 rounded-full font-black text-sm hover:scale-105 transition-all brand-glow">
            View Detailed Methodology
          </button>
        </div>
      </div>
    </section>
  );
}

export function CapabilitiesSection() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <TechGrid />
      <WireframeSphere className="top-20 right-20 w-64 h-64 opacity-5" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
          <div>
            <div className="text-brand text-xs font-bold tracking-[0.3em] uppercase mb-4">Core AI Capabilities</div>
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-gray-900">What Our AI Engineers Build</h2>
          </div>
          <p className="text-gray-500 text-lg leading-relaxed">
            Deep specialisation across the full AI/ML stack — from foundation model fine-tuning to production-grade MLOps infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {CAPABILITIES.map((cap) => (
            <div key={cap} className="bg-gray-50 border border-gray-100 hover:border-brand/20 p-6 rounded-2xl flex items-center justify-between group transition-all">
              <span className="font-medium text-gray-800">{cap}</span>
              <Icons.ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-brand transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AIServicesSection() {
  const [activeTab, setActiveTab] = useState(AI_ENGINEERING_SERVICES[0].id);
  const activeService = AI_ENGINEERING_SERVICES.find(s => s.id === activeTab)!;

  return (
    <section className="py-40 relative overflow-hidden bg-[#050505]">
      <TechGrid />
      <NeuralMesh />
      <GlowingOrb className="top-0 right-[-10%] w-[70%] h-[70%] bg-brand/10 opacity-30" />
      <GlowingOrb className="bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand/20 opacity-20" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-16 mb-32">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="h-px w-12 bg-brand/50" />
              <div className="text-brand text-xs font-black tracking-[0.6em] uppercase">Engineering Excellence</div>
            </motion.div>
            <h2 className="text-6xl lg:text-7xl font-heading font-black leading-[0.85] tracking-tighter text-white">
              End-to-End <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-brand/80 to-brand/40">AI & ML Engineering</span>
            </h2>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:max-w-md"
          >
            <p className="text-white/40 text-xl leading-relaxed font-medium border-l-2 border-brand/30 pl-10 italic">
              "We don't just build models; we engineer complete, scalable AI ecosystems that redefine the boundaries of what's possible."
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Navigation - High Tech Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-3">
              {AI_ENGINEERING_SERVICES.map((service, idx) => (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={cn(
                    "w-full text-left p-6 rounded-2xl transition-all relative group overflow-hidden border",
                    activeTab === service.id 
                      ? "bg-white/[0.05] border-brand/40 shadow-[0_0_30px_rgba(249,115,22,0.1)]" 
                      : "bg-transparent border-white/5 hover:border-white/20 hover:bg-white/[0.02]"
                  )}
                >
                  {/* Scanning line for active item */}
                  {activeTab === service.id && (
                    <motion.div 
                      layoutId="scanning-line"
                      className="absolute inset-0 z-0"
                    >
                      <motion.div 
                        animate={{ top: ['-100%', '200%'] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-x-0 h-[100%] bg-gradient-to-b from-transparent via-brand/10 to-transparent pointer-events-none"
                      />
                    </motion.div>
                  )}
                  
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-5">
                      <div className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500",
                        activeTab === service.id 
                          ? "bg-brand text-white shadow-[0_0_20px_rgba(249,115,22,0.5)] rotate-0" 
                          : "bg-white/5 text-white/30 group-hover:text-white/60 -rotate-12"
                      )}>
                        <Icons.Cpu size={22} />
                      </div>
                      <div>
                        <div className={cn(
                          "text-[9px] font-black uppercase tracking-[0.3em] mb-1 transition-colors",
                          activeTab === service.id ? "text-brand" : "text-white/20"
                        )}>
                          Phase {String(idx + 1).padStart(2, '0')}
                        </div>
                        <h4 className={cn(
                          "text-xl font-black font-heading transition-colors",
                          activeTab === service.id ? "text-white" : "text-white/40 group-hover:text-white/70"
                        )}>
                          {service.tabLabel}
                        </h4>
                      </div>
                    </div>
                    
                    <div className={cn(
                      "transition-all duration-500",
                      activeTab === service.id ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                    )}>
                      <Icons.ChevronRight className="text-brand w-5 h-5" />
                    </div>
                  </div>
                </button>
              ))}
            </div>
            
            {/* Visual Decorative Box */}
            <div className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] relative overflow-hidden group hidden lg:block">
              <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                <TechGrid />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">System Status: Optimal</span>
                </div>
                <div className="space-y-4">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="flex gap-2">
                      <div className="h-1 flex-1 bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          animate={{ x: ['-100%', '100%'] }}
                          transition={{ duration: 2 + i, repeat: Infinity, ease: "linear" }}
                          className="h-full w-1/3 bg-brand/30"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Display Area - High Tech Terminal */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.98, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 1.02, filter: 'blur(10px)' }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                {/* Main Control Panel */}
                <div className="bg-[#0A0A0A] border border-white/10 rounded-[3rem] p-10 md:p-16 relative overflow-hidden backdrop-blur-3xl shadow-2xl">
                  {/* Decorative corner accents */}
                  <div className="absolute top-0 left-0 w-24 h-24 border-t border-l border-brand/40 rounded-tl-[3rem] pointer-events-none" />
                  <div className="absolute bottom-0 right-0 w-24 h-24 border-b border-r border-brand/40 rounded-br-[3rem] pointer-events-none" />
                  
                  {/* Background tech visual */}
                  <div className="absolute top-0 right-0 p-20 opacity-[0.05] pointer-events-none group-hover:scale-110 transition-transform duration-1000">
                    <Icons.Binary className="w-96 h-96 text-brand" />
                  </div>

                  <div className="relative z-10 grid gap-16">
                    {/* Header Section */}
                    <div>
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-3 px-4 py-2 bg-brand/10 border border-brand/20 rounded-full text-brand text-[10px] font-black uppercase tracking-[0.3em] mb-10"
                      >
                        <Icons.Zap size={12} className="animate-pulse" />
                        {activeService.subheading}
                      </motion.div>
                      <h3 className="text-5xl lg:text-7xl font-heading font-black mb-8 tracking-tighter text-white leading-[0.9]">
                        {activeService.title}
                      </h3>
                      <p className="text-white/50 text-2xl leading-relaxed max-w-3xl font-medium">
                        {activeService.description}
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-start">
                      {/* Left: Capabilities */}
                      <div className="space-y-8">
                        <div className="flex items-center gap-4">
                          <h5 className="text-[11px] font-black text-white/30 uppercase tracking-[0.4em]">Core Capabilities</h5>
                          <div className="flex-1 h-px bg-white/5" />
                        </div>
                        <div className="grid gap-4">
                          {activeService.capabilities.map((cap, i) => (
                            <motion.div 
                              key={cap}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 + i * 0.1 }}
                              className="group/cap flex items-center gap-6 p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-brand/30 hover:bg-brand/5 transition-all cursor-default"
                            >
                              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover/cap:bg-brand group-hover/cap:text-white transition-all">
                                <Icons.Check size={18} className="text-brand group-hover/cap:text-white" />
                              </div>
                              <span className="text-lg font-bold text-white/70 group-hover/cap:text-white transition-colors">{cap}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Right: Architecture & Outcomes */}
                      <div className="space-y-12">
                        {/* Architecture */}
                        <div className="space-y-8">
                          <div className="flex items-center gap-4">
                            <h5 className="text-[11px] font-black text-white/30 uppercase tracking-[0.4em]">Architectural Stack</h5>
                            <div className="flex-1 h-px bg-white/5" />
                          </div>
                          <div className="flex flex-wrap gap-3">
                            {activeService.techStack.map((tech, i) => (
                              <motion.span 
                                key={tech}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 + i * 0.05 }}
                                className="px-5 py-2.5 bg-white/[0.05] border border-white/10 rounded-xl text-xs font-black text-white/40 hover:text-white hover:bg-brand/20 hover:border-brand/40 transition-all cursor-default uppercase tracking-widest"
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>

                        {/* Outcomes */}
                        <div className="space-y-8">
                          <div className="flex items-center gap-4">
                            <h5 className="text-[11px] font-black text-white/30 uppercase tracking-[0.4em]">Impact Metrics</h5>
                            <div className="flex-1 h-px bg-white/5" />
                          </div>
                          <div className="grid grid-cols-1 gap-4">
                            {activeService.outcomes.map((outcome, i) => (
                              <motion.div 
                                key={outcome.label}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + i * 0.1 }}
                                className="flex items-center justify-between p-6 rounded-3xl bg-brand/5 border border-brand/10 group/item hover:bg-brand/10 transition-all"
                              >
                                <div>
                                  <div className="text-[9px] font-black text-white/30 uppercase tracking-widest mb-1">{outcome.label}</div>
                                  <div className="text-3xl font-black text-white tracking-tighter group-hover/item:text-brand transition-colors">{outcome.value}</div>
                                </div>
                                <div className="w-12 h-12 rounded-full border border-brand/20 flex items-center justify-center opacity-0 group-hover/item:opacity-100 transition-opacity">
                                  <Icons.TrendingUp className="text-brand w-6 h-6" />
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Action Bar */}
                    <div className="pt-12 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-10">
                      <div className="flex items-center gap-6">
                        <div className="flex -space-x-3">
                          {[1, 2, 3, 4].map(i => (
                            <div key={i} className="w-12 h-12 rounded-full border-4 border-[#0A0A0A] bg-white/10 flex items-center justify-center overflow-hidden">
                              <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=ai${i}`} alt="Engineer" className="w-full h-full object-cover" />
                            </div>
                          ))}
                        </div>
                        <div>
                          <div className="text-white font-bold">Expert AI Squad</div>
                          <div className="text-white/40 text-xs">Ready to initialize your project</div>
                        </div>
                      </div>
                      <button className="group relative w-full sm:w-auto px-12 py-6 bg-brand text-white font-black text-lg rounded-2xl transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(249,115,22,0.4)] overflow-hidden">
                        <span className="relative z-10 flex items-center justify-center gap-3">
                          Initialize Service <Icons.ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                        </span>
                        <motion.div 
                          initial={{ x: '-100%' }}
                          whileHover={{ x: '100%' }}
                          transition={{ duration: 0.6, ease: "easeInOut" }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

export function IndustriesSection() {
  return (
    <section className="py-40 relative overflow-hidden bg-[#050505]">
      <TechGrid />
      <HexagonPattern />
      <GlowingOrb className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-brand/5 opacity-20" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-16 mb-32">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="h-px w-12 bg-brand/50" />
              <div className="text-brand text-xs font-black tracking-[0.6em] uppercase">Industry Verticals</div>
            </motion.div>
            <h2 className="text-6xl lg:text-7xl font-heading font-black leading-[0.85] tracking-tighter text-white">
              AI Solutions for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-brand/80 to-brand/40">AU & UK Industries</span>
            </h2>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:max-w-md"
          >
            <p className="text-white/40 text-xl leading-relaxed font-medium border-l-2 border-brand/30 pl-10 italic">
              "Deep vertical expertise with proven deployments — locally relevant, globally scalable AI systems built for your specific market needs."
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRIES.map((ind, idx) => {
            const Icon = (Icons as any)[ind.icon];
            return (
              <motion.div
                key={ind.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* High-tech Card Container */}
                <div className="h-full bg-white/[0.03] border border-white/5 p-10 rounded-[2.5rem] transition-all duration-500 hover:bg-brand/[0.02] hover:border-brand/30 hover:-translate-y-2 overflow-hidden flex flex-col shadow-2xl backdrop-blur-sm">
                  
                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity">
                    <Icons.Zap size={80} className="text-brand" />
                  </div>

                  {/* Icon Wrapper */}
                  <div className="mb-10 relative">
                    <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:bg-brand group-hover:text-white group-hover:shadow-[0_0_20px_rgba(249,115,22,0.5)]">
                      <Icon className="w-8 h-8 text-brand group-hover:text-white" />
                    </div>
                    {/* Floating Pulse */}
                    <div className="absolute -inset-2 bg-brand/20 rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                  </div>

                  <h3 className="text-2xl font-heading font-black mb-6 tracking-tight text-white leading-tight group-hover:text-brand transition-colors">
                    {ind.title}
                  </h3>
                  
                  <p className="text-white/40 text-sm mb-12 leading-relaxed font-medium flex-grow">
                    {ind.description}
                  </p>

                  {ind.stat && (
                    <div className="pt-10 border-t border-white/5 flex flex-col gap-2 relative">
                      {/* Scanning Line */}
                      <motion.div 
                        animate={{ top: ['0%', '100%'] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute left-0 right-0 h-px bg-brand/20 pointer-events-none opacity-0 group-hover:opacity-100"
                      />
                      
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                          <div className="text-3xl font-black text-brand tracking-tighter shadow-brand/20 group-hover:drop-shadow-[0_0_10px_rgba(249,115,22,0.4)]">
                            {ind.stat.value}
                          </div>
                          <div className="text-[10px] text-white/30 uppercase font-black tracking-widest mt-1">
                            {ind.stat.label}
                          </div>
                        </div>
                        <div className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center group-hover:border-brand/20 transition-all">
                          <Icons.ArrowUpRight size={16} className="text-white/20 group-hover:text-brand" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function CaseStudiesSection() {
  const getIcon = (category: string) => {
    switch (category) {
      case 'CONTENT INTELLIGENCE': return Icons.Bot;
      case 'HEALTHCARE AI': return Icons.Microscope;
      case 'FINTECH ML': return Icons.BarChart3;
      default: return Icons.Cpu;
    }
  };

  return (
    <section id="case-studies" className="py-40 relative overflow-hidden bg-white">
      {/* Dynamic Background Elements for Light Mode */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <TechGrid />
      </div>
      <div className="absolute top-0 left-1/4 w-px h-full bg-gray-100" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-gray-100" />
      
      <GlowingOrb className="top-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand/5 opacity-40" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-16 mb-32">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="h-px w-12 bg-brand/50" />
              <div className="text-brand text-xs font-black tracking-[0.6em] uppercase">Portfolio</div>
            </motion.div>
            <h2 className="text-6xl lg:text-7xl font-heading font-black leading-[0.85] tracking-tighter text-gray-900">
              What We've Built <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-brand/80 to-brand/40">for Clients</span>
            </h2>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:max-w-md"
          >
            <p className="text-gray-500 text-xl leading-relaxed font-medium border-l-2 border-brand/30 pl-10">
              Real projects. Real outcomes. Measurable business impact verified by local Australian and UK enterprises.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
          {CASE_STUDIES.map((cs, idx) => {
            const Icon = getIcon(cs.category);
            return (
              <motion.div
                key={cs.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Case Study Card */}
                <div className="h-full bg-gray-50 border border-gray-100 p-10 rounded-[3rem] transition-all duration-500 hover:bg-white hover:border-brand/20 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08)] flex flex-col relative overflow-hidden">
                  
                  {/* Subtle Blueprint Grid Pattern */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none">
                    <TechGrid />
                  </div>

                  {/* Scanning Animation on Hover */}
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand to-transparent opacity-0 group-hover:opacity-100 -translate-y-full group-hover:translate-y-[800%] transition-all duration-[3s] ease-linear" />

                  <div className="flex items-center justify-between mb-12">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center border border-gray-100 group-hover:border-brand/20 transition-all shadow-sm group-hover:shadow-brand/10">
                      <Icon className="w-8 h-8 text-brand" />
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="text-[10px] font-black text-gray-400 tracking-[0.3em] uppercase group-hover:text-brand transition-colors">{cs.category}</div>
                      <div className="h-px w-8 bg-gray-200 mt-2 group-hover:w-full group-hover:bg-brand/30 transition-all duration-500" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-black font-heading mb-6 tracking-tight text-gray-900 leading-tight group-hover:text-brand transition-colors">
                    {cs.title}
                  </h3>
                  
                  <p className="text-sm text-gray-500 leading-relaxed mb-12 font-medium flex-grow">
                    {cs.description}
                  </p>

                  <div className="grid grid-cols-3 gap-6 mb-12 border-t border-b border-gray-100 py-10 relative">
                    {cs.stats.map(s => (
                      <div key={s.label} className="flex flex-col gap-1">
                        <div className="text-2xl font-black text-gray-900 group-hover:text-brand tracking-tighter transition-colors">{s.value}</div>
                        <div className="text-[8px] text-gray-400 uppercase font-black tracking-widest leading-tight">{s.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {cs.tags.map(tag => (
                      <span key={tag} className="text-[9px] px-3 py-1.5 bg-white border border-gray-100 rounded-lg text-gray-400 font-black uppercase tracking-wider group-hover:border-brand/10 group-hover:text-gray-600 transition-all">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="flex justify-center">
          <button className="group relative px-12 py-6 bg-gray-900 text-white font-black text-lg rounded-2xl transition-all hover:bg-brand hover:shadow-[0_20px_40px_rgba(249,115,22,0.3)] hover:scale-105 overflow-hidden">
            <span className="relative z-10 flex items-center gap-3">
              View All Case Studies <Icons.ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity translate-y-full group-hover:translate-y-0 duration-500" />
          </button>
        </div>
      </div>
    </section>
  );
}

export function TrustSection() {
  return (
    <section className="py-40 relative overflow-hidden bg-[#050505]">
      <TechGrid />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-brand/5 to-[#050505]" />
      <GlowingOrb className="top-0 left-[-10%] w-[60%] h-[60%] bg-brand/10 opacity-20" />
      <GlowingOrb className="bottom-0 right-[-10%] w-[50%] h-[50%] bg-brand/20 opacity-10" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-16 mb-32">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="h-px w-12 bg-brand/50" />
              <div className="text-brand text-xs font-black tracking-[0.6em] uppercase">The Trust Matrix</div>
            </motion.div>
            <h2 className="text-6xl lg:text-7xl font-heading font-black leading-[0.85] tracking-tighter text-white">
              Why AU & UK Enterprises <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-brand/80 to-brand/40">Trust Our AI Squad</span>
            </h2>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:max-w-md"
          >
            <p className="text-white/40 text-xl leading-relaxed font-medium border-l-2 border-brand/30 pl-10 italic">
              "We've shipped production AI systems for global healthcare, finance, and enterprise leaders — managed locally from our Sydney and London hubs."
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-8 items-stretch">
          {TRUST_REASONS.map((reason, idx) => {
            // Creative grid spanning
            const spanClass = idx === 0 || idx === 3 ? 'lg:col-span-7' : 'lg:col-span-5';
            
            return (
              <motion.div
                key={reason.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={cn(
                  "group relative rounded-[3rem] p-10 md:p-14 overflow-hidden border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500",
                  spanClass
                )}
              >
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:opacity-10 transition-opacity pointer-events-none">
                  <Icons.ShieldCheck size={200} className="text-brand" />
                </div>

                {/* Animated Scanner */}
                <div className="absolute left-0 top-0 w-full h-1 bg-gradient-to-r from-transparent via-brand/30 to-transparent opacity-0 group-hover:opacity-100 -translate-y-full group-hover:translate-y-[800px] transition-all duration-[4s] ease-linear pointer-events-none" />

                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-12">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-brand/10 border border-brand/20 flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-all duration-500 shadow-[0_0_20px_rgba(249,115,22,0.1)]">
                        <Icons.Zap size={24} className="text-brand group-hover:text-white" />
                      </div>
                      <div className="text-[11px] font-black text-brand uppercase tracking-[0.4em]">Protocol {reason.id}</div>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-brand/40 animate-pulse" />
                  </div>
                  
                  <h3 className="text-3xl lg:text-4xl font-heading font-black mb-8 tracking-tighter text-white leading-tight group-hover:text-brand transition-colors">
                    {reason.title}
                  </h3>
                  
                  <p className="text-white/40 text-lg leading-relaxed font-medium mb-12 max-w-xl">
                    {reason.description}
                  </p>

                  <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex gap-1">
                        {[1, 2, 3].map(i => (
                          <div key={i} className="w-1.5 h-1.5 rounded-full bg-brand/20" />
                        ))}
                      </div>
                      <span className="text-[9px] font-black text-white/20 uppercase tracking-widest">Verified Logic System</span>
                    </div>
                    <Icons.ArrowUpRight size={20} className="text-white/10 group-hover:text-brand transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function TechStack() {
  const categories = [
    { id: 'foundation', name: 'Models', icon: Icons.Brain },
    { id: 'frameworks', name: 'Frameworks', icon: Icons.Code2 },
    { id: 'mlops', name: 'MLOps', icon: Icons.Settings2 },
    { id: 'data', name: 'Data', icon: Icons.Database },
    { id: 'cloud', name: 'Infrastructure', icon: Icons.Cloud }
  ];

  const techItems = {
    foundation: ['GPT-4o', 'Claude 3.5 Sonnet', 'Gemini 2.0', 'LLaMA 3.1', 'DeepSeek V3', 'Mistral Large', 'Gemma 2', 'Phi-3'],
    frameworks: ['PyTorch', 'TensorFlow', 'JAX', 'Scikit-Learn', 'Hugging Face', 'LangChain', 'LlamaIndex', 'AutoGPT'],
    mlops: ['MLflow', 'Weights & Biases', 'Kubeflow', 'DVC', 'Bentoml', 'ClearML', 'ZenML', 'Argo CD'],
    data: ['Apache Spark', 'Databricks', 'Snowflake', 'dbt', 'Airflow', 'Kafka', 'Pinecone', 'Weaviate'],
    cloud: ['AWS SageMaker', 'Google Vertex AI', 'Azure ML', 'Docker', 'Kubernetes', 'Terraform', 'Modal', 'Runpod']
  };

  const [activeTab, setActiveTab] = useState('foundation');

  return (
    <section id="technology" className="py-40 relative overflow-hidden bg-white">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <TechGrid />
      </div>
      <NeuralMesh />
      <GlowingOrb className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-brand/5 opacity-40" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-16 mb-24">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="h-px w-12 bg-brand/50" />
              <div className="text-brand text-xs font-black tracking-[0.6em] uppercase">The Tech Stack</div>
            </motion.div>
            <h2 className="text-6xl lg:text-7xl font-heading font-black leading-[0.85] tracking-tighter text-gray-900">
              Our AI & ML <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-brand/80 to-brand/40">Technology Arsenal</span>
            </h2>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:max-w-md"
          >
            <p className="text-gray-500 text-xl leading-relaxed font-medium border-l-2 border-brand/30 pl-10 italic">
              "We match the right tools to each problem — not a one-size-fits-all stack. We engineer solutions using the most advanced tools in the global AI ecosystem."
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Enhanced Category Selector */}
          <div className="lg:col-span-3 space-y-3">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={cn(
                    "w-full flex items-center justify-between p-6 rounded-2xl transition-all duration-300 border group relative overflow-hidden",
                    activeTab === cat.id 
                      ? "bg-gray-50 border-brand/40 shadow-[0_10px_30px_rgba(0,0,0,0.05)]" 
                      : "bg-transparent border-gray-100 hover:border-gray-200 hover:bg-gray-50/50"
                  )}
                >
                  {activeTab === cat.id && (
                    <motion.div 
                      layoutId="active-arsenal-tab"
                      className="absolute inset-0 bg-gradient-to-r from-brand/5 to-transparent z-0"
                    />
                  )}
                  <div className="relative z-10 flex items-center gap-4">
                    <div className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center transition-all",
                      activeTab === cat.id ? "bg-brand text-white shadow-brand/20" : "bg-gray-100 text-gray-400"
                    )}>
                      <Icon size={18} />
                    </div>
                    <span className={cn(
                      "font-bold tracking-tight transition-colors",
                      activeTab === cat.id ? "text-gray-900" : "text-gray-400 group-hover:text-gray-600"
                    )}>
                      {cat.name}
                    </span>
                  </div>
                  <div className={cn(
                    "w-1.5 h-1.5 rounded-full transition-all relative z-10",
                    activeTab === cat.id ? "bg-brand scale-125 shadow-[0_0_8px_rgba(249,115,22,1)]" : "bg-gray-200"
                  )} />
                </button>
              );
            })}
          </div>

          {/* High-Tech Terminal Display */}
          <div className="lg:col-span-9">
            <div className="bg-gray-50 border border-gray-100 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden min-h-[500px] shadow-xl">
              <div className="absolute top-0 right-0 p-12 opacity-[0.02] pointer-events-none text-gray-900">
                <Icons.Cpu size={400} />
              </div>
              
              {/* Terminal Header */}
              <div className="flex items-center justify-between mb-12 border-b border-gray-200 pb-8">
                <div className="flex items-center gap-6">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
                  </div>
                  <div className="h-4 w-px bg-gray-200" />
                  <div className="text-[10px] font-mono text-gray-400 uppercase tracking-[0.3em]">
                    System://arsenal/{activeTab}_stack.v8
                  </div>
                </div>
                <div className="text-[10px] font-mono text-brand animate-pulse uppercase tracking-widest font-black">
                  Ready State: Optimal
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="contents"
                  >
                    {techItems[activeTab as keyof typeof techItems].map((item, idx) => (
                      <motion.div
                        key={`${activeTab}-${item}`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className="group relative"
                      >
                        <div className="bg-white border border-gray-100 p-6 rounded-2xl flex flex-col gap-4 hover:bg-white hover:border-brand/20 hover:shadow-lg transition-all cursor-default overflow-hidden relative shadow-sm">
                          <div className="absolute -right-4 -bottom-4 opacity-[0.05] group-hover:scale-110 transition-transform text-brand">
                            <Icons.Zap size={64} />
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="text-[9px] font-mono text-gray-300 uppercase tracking-widest">Index: {idx.toString().padStart(2, '0')}</div>
                            <div className="w-1.5 h-1.5 rounded-full bg-gray-200 group-hover:bg-brand transition-colors" />
                          </div>
                          <div className="text-xl font-black font-heading text-gray-900 tracking-tight group-hover:text-brand transition-colors">
                            {item}
                          </div>
                          <div className="h-0.5 w-0 group-hover:w-full bg-brand transition-all duration-500 mt-2" />
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Bottom Decorative Element */}
              <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex gap-4">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-16 h-1 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div 
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 2 + i, repeat: Infinity, ease: "linear" }}
                        className="h-full w-1/3 bg-brand/20"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-[10px] font-mono text-gray-400 uppercase tracking-[0.2em] font-black">
                  Integrated Assets: {techItems[activeTab as keyof typeof techItems].length} Modules Active
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FAQSection() {
  const faqs = [
    { q: 'What AI & ML development services does Dotsquares offer?', a: 'We provide full-stack AI development including custom LLMs, RAG-based systems, MLOps, and autonomous agents for mobile and web.' },
    { q: 'How long does an AI development project typically take?', a: 'Projects range from 4-week Proof of Concepts to multi-month enterprise-grade production rollouts.' },
    { q: 'Do you work with businesses that have existing data?', a: 'Absolutely. We specialize in integrating AI into existing infrastructure and leveraging proprietary data for fine-tuning.' },
    { q: 'How do you ensure data privacy and security?', a: 'We follow industry-standard compliance protocols (GDPR, HIPAA) and can deploy models on-premise or in private clouds.' },
  ];

  return (
    <section id="faq" className="py-32 bg-white/[0.01] relative overflow-hidden">
      <CircuitLines />
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="text-brand text-xs font-bold tracking-[0.3em] uppercase mb-4">FAQ</div>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold">Common Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="glass p-6 rounded-2xl group cursor-pointer hover:border-brand/30 transition-all">
              <div className="flex items-center justify-between gap-4">
                <h4 className="font-bold text-lg">{f.q}</h4>
                <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center text-white/50 group-hover:text-brand transition-colors">+</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-white/40 mb-6 text-sm">Can't find your answer? Our AI & UK teams are ready to help.</p>
          <button className="bg-brand text-white px-8 py-3 rounded-full font-bold text-sm shadow-lg shadow-brand/20">Ask Our Team</button>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="pt-32 pb-12 border-t border-white/5 relative overflow-hidden">
      <GlowingOrb className="bottom-0 left-0 w-[40%] h-[40%] bg-brand/5" />
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <div className="mb-20">
          <div className="text-brand text-xs font-bold tracking-[0.3em] uppercase mb-6">Available Across Australia & UK</div>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-10">Ready to Build Your AI System?</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="bg-brand text-white px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition-all shadow-2xl shadow-brand/20">
              Book Free AI Review
            </button>
            <div className="text-xl font-bold">+44 208 090 1119</div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-left pt-20 border-t border-white/5 mb-20">
          <div>
             <div className="font-heading font-bold text-xl mb-6 flex items-center gap-2">
               <div className="w-6 h-6 bg-brand rounded flex items-center justify-center text-xs">D</div>
               Dotsquares
             </div>
             <p className="text-sm text-white/40 leading-relaxed max-w-xs">
               Claude Certified Architects & AI Powered Engineers building the next generation of autonomous systems.
             </p>
          </div>
          <div>
            <h4 className="text-sm font-bold mb-6 uppercase tracking-widest text-brand">Solutions</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li>Mobile AI</li>
              <li>Web Intelligence</li>
              <li>Autonomous Agents</li>
              <li>MLOps Infrastructure</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold mb-6 uppercase tracking-widest text-brand">Company</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li>About Us</li>
              <li>Case Studies</li>
              <li>Methodology</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold mb-6 uppercase tracking-widest text-brand">Offices</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li>Sydney, Melbourne</li>
              <li>Brisbane, London</li>
              <li>Manchester, Edinburgh</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] text-white/20 uppercase font-bold tracking-widest">
           <div>© 2026 Dotsquares Ltd. All rights reserved. AI & ML Development — Australia & United Kingdom.</div>
           <div className="flex gap-8">
             <a href="#">Privacy Policy</a>
             <a href="#">Terms of Service</a>
             <a href="#">Claude Certified Architects</a>
           </div>
        </div>
      </div>
    </footer>
  );
}
