import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { 
  StatsSection, 
  ServicesSection, 
  ProcessSection, 
  CapabilitiesSection, 
  AIServicesSection,
  IndustriesSection, 
  CaseStudiesSection,
  TrustSection,
  TechStack,
  FAQSection,
  Footer 
} from './components/Sections';

export default function App() {
  return (
    <div className="min-h-screen bg-bg-dark selection:bg-brand/30 noise">
      <Header />
      <div className="relative z-10">
        <main>
          <Hero />
          <StatsSection />
          <ServicesSection />
          <ProcessSection />
          <CapabilitiesSection />
          <AIServicesSection />
          <TechStack />
          <IndustriesSection />
          <CaseStudiesSection />
          <TrustSection />
          <FAQSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}

