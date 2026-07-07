import { motion } from 'motion/react';
import { ChevronRight, PlayCircle, Zap, ShieldCheck, Activity, Cpu, Wifi, Box } from 'lucide-react';
import * as Icons from 'lucide-react';
import { CodeBackground, NeuralMesh, TechGrid, GlowingOrb, FloatingIcons, DataFlowLines } from './AIElements';

export function Hero() {
  return (
    <section className="relative pt-40 pb-32 overflow-hidden min-h-screen bg-bg-dark">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-40 scale-105"
        >
          <source src="https://cdn.pixabay.com/video/2023/10/20/185790-876359573_large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/40 to-[#050505] z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505] z-10" />
      </div>

      <TechGrid />
      <CodeBackground />
      <NeuralMesh />
      <FloatingIcons />
      <DataFlowLines />
      
      {/* Decorative Orbs */}
      <GlowingOrb className="top-[10%] -left-[10%] w-[50%] h-[50%] bg-brand/10 z-20" />
      <GlowingOrb className="bottom-[10%] -right-[10%] w-[60%] h-[60%] bg-brand/5 z-20" />
      <GlowingOrb className="top-[40%] right-[20%] w-[30%] h-[30%] bg-brand/5 z-20" />


      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-3 mb-10 px-4 py-2 bg-brand/10 border border-brand/20 rounded-full group cursor-default">
              <div className="w-2 h-2 bg-brand rounded-full animate-pulse shadow-[0_0_8px_rgba(249,115,22,1)]" />
              <span className="text-brand text-[10px] font-black tracking-[0.3em] uppercase">Enterprise Agent Infrastructure</span>
              <div className="h-4 w-[1px] bg-brand/20 mx-2" />
              <div className="flex items-center gap-1.5 text-[9px] font-bold text-white uppercase">
                <Wifi className="w-3 h-3 text-brand/60" />
                <span>Status: Optimal</span>
              </div>
            </div>
            
            <h1 className="relative text-5xl lg:text-6xl font-heading font-black leading-[1.05] mb-8 tracking-tight">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-white block mb-2 font-medium"
              >
                AI-Powered
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="block mb-2 text-brand relative inline-block group"
              >
                AI-Native Agents
                <span className="absolute -inset-x-6 inset-y-0 bg-brand/5 -skew-x-12 rounded-2xl -z-10 group-hover:bg-brand/10 transition-colors" />
              </motion.span> <br />
              <span className="text-white relative">
                Built for Production
                <div className="absolute -bottom-4 left-0 w-32 h-1 bg-brand/30 rounded-full" />
              </span>
            </h1>
            
            <p className="text-xl text-white mb-12 max-w-xl leading-relaxed font-medium">
              We deploy <span className="text-white font-bold">Autonomous Agents</span> that reason, plan, and execute complex workflows at scale. Engineered for reliability and vertical performance.
            </p>

            <div className="flex flex-wrap items-center gap-8 mb-20">
              <button className="bg-brand hover:bg-brand/90 text-white px-10 py-5 rounded-2xl font-black text-lg flex items-center gap-3 transition-all hover:scale-105 brand-glow group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                Start Your AI Project
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="flex items-center gap-4 text-white/40 hover:text-white transition-all font-black group uppercase text-xs tracking-[0.2em]">
                <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:border-brand/40 group-hover:bg-brand/5 transition-all relative">
                  <div className="absolute inset-0 border border-brand/20 rounded-full scale-110 opacity-0 group-hover:opacity-100 animate-ping duration-1000" />
                  <PlayCircle className="w-6 h-6 text-brand" />
                </div>
                View Performance
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-10 border-t border-white/5">
              {[
                { label: 'Latency', value: '<200ms', icon: Zap },
                { label: 'Uptime', value: '99.99%', icon: ShieldCheck },
                { label: 'Deployments', value: '27K+', icon: Activity },
                { label: 'Architecture', value: 'v2.4', icon: Cpu },
              ].map((stat) => (
                <div key={stat.label} className="group cursor-default">
                  <div className="flex items-center gap-2 mb-2">
                    <stat.icon className="w-3.5 h-3.5 text-brand/40 group-hover:text-brand transition-colors" />
                    <span className="text-[9px] text-white uppercase font-black tracking-widest leading-none">{stat.label}</span>
                  </div>
                  <div className="text-2xl font-black font-heading tracking-tighter text-white transition-colors">{stat.value}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* HUD Corner Accents */}
            <div className="absolute -top-6 -right-6 w-16 h-16 border-t-2 border-r-2 border-brand/20 rounded-tr-3xl hidden xl:block" />
            <div className="absolute -bottom-6 -left-6 w-16 h-16 border-b-2 border-l-2 border-brand/20 rounded-bl-3xl hidden xl:block" />
            
            <div className="bg-white p-10 md:p-12 rounded-[3.5rem] shadow-[0_0_80px_rgba(0,0,0,0.4)] relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-20">
                <Box className="w-10 h-10 text-[#1A1A1A]" />
              </div>

              <div className="mb-10 relative">
                <div className="text-[10px] font-black text-brand uppercase tracking-widest mb-3">Onboarding Protocol</div>
                <h3 className="text-[#1A1A1A] text-3xl lg:text-4xl font-heading font-black mb-3 tracking-tight leading-none">Get Your Free <br />AI Consultation</h3>
                <p className="text-[#1A1A1A]/50 font-bold text-sm">Secure your slot with our architecture team</p>
              </div>

              <form className="space-y-6 relative" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#1A1A1A]/40 ml-1">Identity *</label>
                    <input 
                      type="text" 
                      placeholder="Full Name" 
                      className="w-full bg-[#F8F8F8] border-none rounded-xl px-5 py-4 text-[#1A1A1A] focus:ring-2 focus:ring-brand/20 transition-all placeholder:text-[#1A1A1A]/20 font-bold text-sm" 
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#1A1A1A]/40 ml-1">Email *</label>
                    <input 
                      type="email" 
                      placeholder="Work Email" 
                      className="w-full bg-[#F8F8F8] border-none rounded-xl px-5 py-4 text-[#1A1A1A] focus:ring-2 focus:ring-brand/20 transition-all placeholder:text-[#1A1A1A]/20 font-bold text-sm" 
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-widest text-[#1A1A1A]/40 ml-1">Company</label>
                  <input 
                    type="text" 
                    placeholder="Organization Name" 
                    className="w-full bg-[#F8F8F8] border-none rounded-xl px-5 py-4 text-[#1A1A1A] focus:ring-2 focus:ring-brand/20 transition-all placeholder:text-[#1A1A1A]/20 font-bold text-sm" 
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-widest text-[#1A1A1A]/40 ml-1">Core Requirement *</label>
                  <div className="relative">
                    <select className="w-full bg-[#F8F8F8] border-none rounded-xl px-5 py-4 text-[#1A1A1A] focus:ring-2 focus:ring-brand/20 transition-all appearance-none font-bold text-sm cursor-pointer">
                      <option>Vertical AI Integration</option>
                      <option>Autonomous Agent Fleet</option>
                      <option>LLM Custom Training</option>
                      <option>AI-Native Infrastructure</option>
                    </select>
                    <ChevronRight className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1A1A1A]/40 rotate-90" />
                  </div>
                </div>

                <button className="w-full bg-brand hover:bg-brand/90 text-white font-black py-6 rounded-2xl shadow-xl transition-all active:scale-[0.98] text-lg mt-4 flex items-center justify-center gap-3 group">
                  Initialize Protocol
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="flex justify-between items-center pt-6 border-t border-[#1A1A1A]/5">
                  <div className="flex gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                    <div className="w-1.5 h-1.5 rounded-full bg-brand/20" />
                    <div className="w-1.5 h-1.5 rounded-full bg-brand/20" />
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#1A1A1A]/30 flex items-center gap-2">
                    <ShieldCheck className="w-3 h-3" />
                    Encrypted Pipeline
                  </span>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* System Status Footbar */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/5 bg-white/[0.01] backdrop-blur-md z-20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-8">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
              <span className="text-[9px] font-black text-white uppercase tracking-widest">Network Live</span>
            </div>
            <div className="hidden sm:flex items-center gap-4">
              {['AWS-01: ACTIVE', 'GPT-4: 98ms', 'NODE-X: STABLE'].map((node) => (
                <div key={node} className="text-[8px] font-mono text-white/40 uppercase tracking-[0.2em] px-2 py-1 border border-white/5 rounded bg-white/[0.02]">
                  {node}
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-12">
            <div className="flex flex-col items-end">
              <span className="text-[8px] font-black text-white/40 uppercase tracking-widest mb-1">Inference Rate</span>
              <span className="text-xs font-mono text-brand font-bold">14.2K t/s</span>
            </div>
            <div className="w-[1px] h-6 bg-white/10 hidden md:block" />
            <div className="flex flex-col items-end">
              <span className="text-[8px] font-black text-white/40 uppercase tracking-widest mb-1">Active Agents</span>
              <span className="text-xs font-mono text-white font-bold">412,094</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
