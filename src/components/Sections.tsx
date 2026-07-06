import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import * as Icons from 'lucide-react';
import { SERVICES, STATS, PROCESS, CAPABILITIES, INDUSTRIES, CASE_STUDIES, TRUST_REASONS, AI_ENGINEERING_SERVICES } from '../data';
import { cn } from '../lib/utils';

export function StatsSection() {
  return (
    <section className="py-20 border-y border-white/5 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
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
    <section id="services" className="py-40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between gap-10 mb-24">
          <div className="max-w-2xl">
            <div className="text-brand text-xs font-black tracking-[0.5em] uppercase mb-6">Execution Engines</div>
            <h2 className="text-5xl lg:text-7xl font-heading font-black leading-tight tracking-tighter">AI Engineering <br />for Every Scale</h2>
          </div>
          <p className="text-white/40 max-w-sm text-lg leading-relaxed font-medium">
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
                className="glass p-10 rounded-[3rem] hover:bg-white/[0.05] transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Icons.ArrowUpRight className="w-6 h-6 text-brand" />
                </div>
                
                <div className="w-16 h-16 bg-brand/10 rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <Icon className="w-8 h-8 text-brand" />
                </div>
                
                <h3 className="text-3xl font-heading font-black mb-6 tracking-tight">{service.title}</h3>
                <p className="text-white/40 text-sm mb-10 leading-relaxed font-medium">
                  {service.description}
                </p>
                
                <div className="space-y-4">
                  {service.points.map(point => (
                    <div key={point} className="flex items-center gap-4 text-xs font-bold text-white/60 group-hover:text-white transition-colors">
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
    <section id="methodology" className="py-40 bg-bg-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex justify-between items-end mb-20">
          <div>
            <div className="inline-block px-4 py-1.5 bg-brand/20 text-brand rounded-md text-[10px] font-black uppercase tracking-widest mb-6">
              Our Unique Workflow
            </div>
            <h2 className="text-5xl lg:text-7xl font-heading font-black tracking-tighter">
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
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
          <div>
            <div className="text-brand text-xs font-bold tracking-[0.3em] uppercase mb-4">Core AI Capabilities</div>
            <h2 className="text-4xl lg:text-5xl font-heading font-bold">What Our AI Engineers Build</h2>
          </div>
          <p className="text-white/40 text-lg leading-relaxed">
            Deep specialisation across the full AI/ML stack — from foundation model fine-tuning to production-grade MLOps infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {CAPABILITIES.map((cap) => (
            <div key={cap} className="bg-white/[0.03] border border-white/5 hover:border-white/10 p-6 rounded-2xl flex items-center justify-between group transition-all">
              <span className="font-medium text-white/80">{cap}</span>
              <Icons.ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-brand transition-colors" />
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
    <section className="py-40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between gap-10 mb-20">
          <div className="max-w-2xl">
            <div className="text-brand text-xs font-black tracking-[0.5em] uppercase mb-6">AI SERVICES</div>
            <h2 className="text-5xl lg:text-7xl font-heading font-black leading-tight tracking-tighter">End-to-End AI & <br />ML Engineering</h2>
          </div>
          <p className="text-white/40 max-w-sm text-lg leading-relaxed font-medium">
            From initial concept to production deployment — we handle the full AI development lifecycle across every domain.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {AI_ENGINEERING_SERVICES.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(service.id)}
              className={cn(
                "px-6 py-3 rounded-xl font-bold text-sm transition-all border",
                activeTab === service.id 
                  ? "bg-brand border-brand text-white shadow-lg shadow-brand/20" 
                  : "bg-white/[0.02] border-white/5 text-white/40 hover:text-white/60 hover:border-white/10"
              )}
            >
              {service.tabLabel}
            </button>
          ))}
        </div>

        {/* Content Card */}
        <div className="glass p-10 md:p-16 rounded-[3rem] border-white/10 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
            <Icons.Cpu className="w-64 h-64 text-brand" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 grid lg:grid-cols-2 gap-20"
            >
              <div>
                <div className="inline-block px-4 py-1.5 bg-brand/10 text-brand rounded-full text-[10px] font-black uppercase tracking-widest mb-8 border border-brand/20">
                  {activeService.subheading}
                </div>
                <h3 className="text-4xl lg:text-5xl font-heading font-black mb-8 tracking-tight leading-[1.1]">
                  {activeService.title}
                </h3>
                <p className="text-white/50 text-lg mb-12 leading-relaxed">
                  {activeService.description}
                </p>

                <div className="space-y-6">
                  <div className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">Capabilities</div>
                  <div className="grid gap-4">
                    {activeService.capabilities.map((cap) => (
                      <div key={cap} className="flex items-center gap-4 text-white/80 font-medium">
                        <div className="w-6 h-6 bg-brand/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Icons.Check className="w-3.5 h-3.5 text-brand" />
                        </div>
                        {cap}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between gap-12">
                <div className="space-y-8">
                  <div className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">Business Outcomes</div>
                  <div className="grid gap-4">
                    {activeService.outcomes.map((outcome) => (
                      <div key={outcome.label} className="bg-white/[0.03] border border-white/5 p-6 rounded-2xl group/item hover:bg-brand/5 hover:border-brand/20 transition-all border-l-2 border-l-brand">
                        <div className="text-3xl font-black mb-1">{outcome.value}</div>
                        <div className="text-xs font-bold text-white/40 group-hover/item:text-white/60 transition-colors uppercase tracking-widest">{outcome.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">Tech Stack</div>
                  <div className="flex flex-wrap gap-3">
                    {activeService.techStack.map((tech) => (
                      <div key={tech} className="px-4 py-2 bg-white/[0.05] border border-white/10 rounded-xl text-xs font-bold text-white/60 hover:text-white transition-all cursor-default">
                        {tech}
                      </div>
                    ))}
                  </div>

                  <button className="bg-brand hover:bg-brand/90 text-white px-10 py-5 rounded-2xl font-black text-lg transition-all hover:scale-105 brand-glow mt-8">
                    Discuss This Service →
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export function IndustriesSection() {
  return (
    <section className="py-40 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between gap-10 mb-24">
          <div className="max-w-2xl">
            <div className="text-brand text-xs font-black tracking-[0.5em] uppercase mb-6">Industries</div>
            <h2 className="text-5xl lg:text-7xl font-heading font-black leading-tight tracking-tighter">AI Solutions for AU <br />& UK Industries</h2>
          </div>
          <p className="text-white/40 max-w-sm text-lg leading-relaxed font-medium">
            Deep vertical expertise with proven deployments — locally relevant, globally scalable.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {INDUSTRIES.map((ind) => {
            const Icon = (Icons as any)[ind.icon];
            return (
              <div key={ind.title} className="glass p-8 rounded-[2.5rem] group hover:bg-white/[0.05] transition-all">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-all">
                  <Icon className="w-7 h-7 text-brand" />
                </div>
                <h3 className="text-2xl font-heading font-black mb-4 tracking-tight">{ind.title}</h3>
                <p className="text-white/40 text-sm mb-10 leading-relaxed font-medium">{ind.description}</p>
                {ind.stat && (
                  <div className="pt-8 border-t border-white/5 flex flex-col gap-1">
                    <div className="text-brand font-black text-2xl tracking-tighter">{ind.stat.value}</div>
                    <div className="text-[10px] text-white/30 uppercase font-black tracking-widest">{ind.stat.label}</div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
           <div className="text-brand text-xs font-bold tracking-[0.3em] uppercase mb-4">Proof of Work</div>
           <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">What We've Built for Clients</h2>
           <p className="text-white/50 text-lg">Real projects. Real outcomes. Measurable business impact you can verify.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CASE_STUDIES.map((cs) => (
            <div key={cs.title} className="bg-white/[0.03] border border-white/5 p-8 rounded-[2.5rem] flex flex-col group hover:bg-white/[0.05] transition-all">
              <div className="text-[10px] font-bold text-brand tracking-[0.2em] mb-8 uppercase">{cs.category}</div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-brand transition-colors">{cs.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed mb-10 flex-grow">{cs.description}</p>
              
              <div className="grid grid-cols-3 gap-4 mb-8">
                {cs.stats.map(s => (
                  <div key={s.label}>
                    <div className="text-lg font-bold">{s.value}</div>
                    <div className="text-[8px] text-white/30 uppercase font-bold">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {cs.tags.map(tag => (
                  <span key={tag} className="text-[10px] px-2 py-1 bg-white/5 rounded-md text-white/50">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TrustSection() {
  return (
    <section className="py-32 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="text-brand text-xs font-black tracking-[0.4em] uppercase mb-6">Why Dotsquares</div>
          <h2 className="text-4xl lg:text-6xl font-heading font-black mb-6">Why AU & UK Businesses <br /> Trust Our AI Team</h2>
          <p className="text-white/40 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            Production-grade AI shipped for global healthcare, financial institutions, and enterprise software companies — from our offices in Australia and the UK.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRUST_REASONS.map((reason, idx) => (
            <motion.div
              key={reason.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl group hover:border-brand/30 transition-all"
            >
              <div className="flex items-start gap-6">
                <div className="text-brand font-black text-lg opacity-40">{reason.id}</div>
                <div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-white transition-colors">{reason.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed font-medium">{reason.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TechStack() {
  const stacks = [
    { name: 'GPT-4o (OpenAI)', icon: 'Cpu' },
    { name: 'Claude 3.5 Sonnet', icon: 'Cpu' },
    { name: 'Gemini 2.0', icon: 'Cpu' },
    { name: 'LLaMA 3.1', icon: 'Cpu' },
    { name: 'DeepSeek V3', icon: 'Cpu' },
    { name: 'Mistral', icon: 'Cpu' },
    { name: 'Gemma 2', icon: 'Cpu' },
    { name: 'Phi-3 (Microsoft)', icon: 'Cpu' },
  ];

  return (
    <section id="technology" className="py-32">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="text-brand text-xs font-bold tracking-[0.3em] uppercase mb-4">Technology</div>
        <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">Our AI & ML Technology Arsenal</h2>
        <p className="text-white/50 text-lg mb-20">We match the right tools to each problem — not a one-size-fits-all stack.</p>

        <div className="flex flex-wrap justify-center gap-4">
          {stacks.map((s) => (
            <div key={s.name} className="bg-white/[0.03] border border-white/5 px-8 py-4 rounded-xl font-bold text-white/70 hover:text-white hover:border-brand/30 transition-all cursor-default">
              {s.name}
            </div>
          ))}
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
    <section id="faq" className="py-32 bg-white/[0.01]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="text-brand text-xs font-bold tracking-[0.3em] uppercase mb-4">FAQ</div>
          <h2 className="text-4xl font-heading font-bold">Common Questions</h2>
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
    <footer className="pt-32 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="mb-20">
          <div className="text-brand text-xs font-bold tracking-[0.3em] uppercase mb-6">Available Across Australia & UK</div>
          <h2 className="text-4xl lg:text-7xl font-heading font-bold mb-10">Ready to Build Your AI System?</h2>
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
