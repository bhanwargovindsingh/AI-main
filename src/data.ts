import { Stat, Service, ProcessPhase, Industry, CaseStudy } from './lib/utils';

export const STATS: Stat[] = [
  { value: '1K+', label: 'In-House AI/ML Engineers' },
  { value: '27K+', label: 'Projects Delivered' },
  { value: '50+', label: 'Countries Served' },
  { value: '98%', label: 'Client Satisfaction Rate' },
];

export const SERVICES: Service[] = [
  {
    title: 'Mobile AI Development',
    description: 'Native iOS and Android apps with embedded intelligence — on-device inference, computer vision, voice AI, and personalisation that works offline and at the edge.',
    icon: 'Smartphone',
    points: [
      'On-Device ML & Edge Inference',
      'Computer Vision & Object Detection',
      'Voice AI & NLP on Mobile',
      'AI-Powered iOS & Android Apps',
    ],
  },
  {
    title: 'Web AI Development',
    description: 'React and Next.js applications powered by AI backends — real-time dashboards, RAG-powered interfaces, and AI-augmented SaaS that deliver measurable outcomes.',
    icon: 'Globe',
    points: [
      'RAG-Powered Web Applications',
      'Real-Time AI Dashboards & Analytics',
      'AI-Augmented SaaS & Platforms',
      'Next.js + LLM Full-Stack Builds',
    ],
  },
  {
    title: 'AI-Centric Apps & Agents',
    description: 'Agents now control everything. We build AI-native applications where autonomous systems handle multi-step workflows, decisions, and execution — replacing traditional app logic entirely.',
    icon: 'Bot',
    points: [
      'Autonomous Multi-Agent Systems',
      'AI-Native Business Process Control',
      'LLM-Driven API Logic & Routing',
      '24/7 Autonomous Workflow Execution',
    ],
  },
];

export const PROCESS: ProcessPhase[] = [
  { phase: 'PHASE 01', title: 'AI Readiness Assessment', description: 'We start with an audit of your current state — data quality, infrastructure, workflows, and team maturity. If GenAI is a fit, we move forward. If not, we fix what matters first.' },
  { phase: 'PHASE 02', title: 'Use Case Definition', description: 'Working alongside your team, we identify where AI can actually move the needle. We don’t build models for the sake of it — only when they make sense.' },
  { phase: 'PHASE 03', title: 'Model Selection & Training', description: 'Whether it’s a custom-tuned LLM, a computer vision model, or classic supervised learning, we build what the problem calls for.' },
  { phase: 'PHASE 04', title: 'Testing & Validation', description: 'We check how the AI works under pressure, look for hidden issues, and make sure it follows all the rules.' },
  { phase: 'PHASE 05', title: 'Integration & Deployment', description: 'Our models don’t live in isolation. We integrate them through APIs, embed them in apps, and orchestrate across cloud-native workflows.' },
  { phase: 'PHASE 06', title: 'Monitoring & Iteration', description: 'We keep a close eye post-launch on performance, drift, user interactions, and shifting business needs.' },
];

export const CAPABILITIES = [
  'LLM Fine-Tuning & Prompt Engineering',
  'End-to-End MLOps & ModelOps',
  'Production-Grade ML Pipelines',
  'NLP Stack Development',
  'Computer Vision Systems',
  'Synthetic & Augmented Data',
  'AI-Native Application Architecture',
  'Inference Serving & Latency Tuning',
  'Secure DataOps & Compliance',
  'Monitoring, Observability & Tuning',
];

export const AI_ENGINEERING_SERVICES = [
  {
    id: 'generative-ai',
    tabLabel: 'Generative AI',
    subheading: 'GENERATIVE AI',
    title: 'Build intelligent apps powered by foundation models',
    description: 'Fine-tune and deploy LLMs tailored to your domain. RAG-based chatbots, document intelligence, AI copilots, and automated content pipelines — engineered for production scale, not just demos.',
    capabilities: [
      'RAG-based chatbots & knowledge bases',
      'LLM fine-tuning & prompt engineering',
      'Document Q&A & intelligent search',
      'AI copilots & writing assistants',
      'Multi-modal content generation pipelines'
    ],
    outcomes: [
      { label: 'reduction in support query volume', value: '80%' },
      { label: 'faster document processing throughput', value: '3x' },
      { label: 'increase in content production velocity', value: '60%' }
    ],
    techStack: ['GPT-4o', 'Claude', 'Gemini', 'LLaMA 3', 'LangChain', 'Pinecone']
  },
  {
    id: 'agentic-ai',
    tabLabel: 'Agentic AI',
    subheading: 'AGENTIC AI',
    title: 'Autonomous systems that execute complex workflows',
    description: 'Move beyond simple chat. We build autonomous agents that can plan, use tools, and execute multi-step business processes with minimal human intervention.',
    capabilities: [
      'Multi-agent orchestration systems',
      'Autonomous research & analysis agents',
      'AI-driven workflow automation',
      'Tool-use & API integration agents',
      'Self-correcting process loops'
    ],
    outcomes: [
      { label: 'reduction in manual process time', value: '90%' },
      { label: 'accuracy in complex decision tasks', value: '95%' },
      { label: 'operational cost savings', value: '40%' }
    ],
    techStack: ['AutoGPT', 'LangGraph', 'CrewAI', 'Python', 'Redis']
  },
  {
    id: 'ml-engineering',
    tabLabel: 'ML Engineering',
    subheading: 'ML ENGINEERING',
    title: 'Production-grade machine learning infrastructure',
    description: 'Reliable, scalable, and observable ML pipelines. We handle the "Ops" in MLOps so your models deliver consistent value in production.',
    capabilities: [
      'End-to-end MLOps pipelines',
      'Model versioning & drift detection',
      'Distributed training infrastructure',
      'High-performance inference serving',
      'Automated retraining workflows'
    ],
    outcomes: [
      { label: 'faster model deployment cycles', value: '5x' },
      { label: 'reduction in infrastructure costs', value: '30%' },
      { label: 'uptime for critical AI services', value: '99.9%' }
    ],
    techStack: ['Kubernetes', 'Kubeflow', 'MLflow', 'Triton', 'AWS/GCP/Azure']
  },
  {
    id: 'data-science',
    tabLabel: 'Data Science',
    subheading: 'DATA SCIENCE',
    title: 'Extracting actionable intelligence from raw data',
    description: 'Turn your data into a competitive advantage. We apply advanced statistical modeling and machine learning to solve your toughest business challenges.',
    capabilities: [
      'Predictive analytics & forecasting',
      'Customer segmentation & churn modeling',
      'Anomaly & fraud detection',
      'Recommendation engine development',
      'Optimization & simulation modeling'
    ],
    outcomes: [
      { label: 'improvement in forecast accuracy', value: '25%' },
      { label: 'reduction in customer churn', value: '15%' },
      { label: 'increase in conversion rates', value: '20%' }
    ],
    techStack: ['Scikit-learn', 'PyTorch', 'TensorFlow', 'Pandas', 'Databricks']
  },
  {
    id: 'ai-integration',
    tabLabel: 'AI Integration',
    subheading: 'AI INTEGRATION',
    title: 'Seamlessly embedding AI into your existing ecosystem',
    description: 'Don\'t replace your stack — augment it. We integrate state-of-the-art AI capabilities into your legacy systems and modern applications through robust API architectures.',
    capabilities: [
      'Legacy system AI augmentation',
      'Custom API & middleware development',
      'Enterprise software AI connectors',
      'Secure data bridge construction',
      'User experience AI design'
    ],
    outcomes: [
      { label: 'faster time-to-market for AI features', value: '2x' },
      { label: 'adoption rate of new AI tools', value: '85%' },
      { label: 'ROI on existing software investments', value: '50%' }
    ],
    techStack: ['FastAPI', 'Node.js', 'Docker', 'GraphQL', 'Zapier']
  }
];

export const INDUSTRIES: Industry[] = [
  { 
    title: 'Healthcare & Life Sciences', 
    description: 'Medical imaging AI, clinical NLP, diagnostic decision support, drug discovery, patient risk prediction systems.', 
    icon: 'Stethoscope',
    stat: { value: '45+', label: 'Projects Delivered' }
  },
  { 
    title: 'Finance & Banking', 
    description: 'Fraud detection systems, credit scoring, algorithmic trading, regulatory compliance monitoring and reporting AI.', 
    icon: 'Building2',
    stat: { value: '99.2%', label: 'Detection Accuracy' }
  },
  { 
    title: 'Retail & E-commerce', 
    description: 'Recommendation engines, dynamic pricing, demand forecasting, customer lifetime value and churn prediction.', 
    icon: 'ShoppingCart',
    stat: { value: '35%', label: 'Revenue Uplift' }
  },
  { 
    title: 'Manufacturing & Industry 4.0', 
    description: 'Predictive maintenance, quality control vision systems, supply chain AI, IoT sensor analytics, digital twins.', 
    icon: 'Factory',
    stat: { value: '60%', label: 'Downtime Reduction' }
  },
  { 
    title: 'Legal Tech', 
    description: 'Contract analysis and comparison, legal research automation, compliance monitoring, eDiscovery AI systems.', 
    icon: 'Scale',
    stat: { value: '80%', label: 'Research Time Saved' }
  },
  { 
    title: 'Media & EdTech', 
    description: 'Content recommendation engines, personalised learning paths, audience analytics, content moderation at scale.', 
    icon: 'Video',
    stat: { value: '3x', label: 'Engagement Growth' }
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    category: 'CONTENT INTELLIGENCE',
    title: 'Discursia — AI-Powered Content Platform',
    description: 'AI content curation system with ML-driven trend analysis, proximity filtering, and engagement scoring across 200+ daily articles.',
    stats: [
      { label: 'ENGAGEMENT LIFT', value: '40%' },
      { label: 'FILTER ACCURACY', value: '98.7%' },
      { label: 'PROCESSING SPEED', value: '3x' }
    ],
    tags: ['Python', 'Gemini', 'Flask', 'Sentiment AI']
  },
  {
    category: 'HEALTHCARE AI',
    title: 'Clinical Imaging Diagnostic Assistant',
    description: 'Deep learning pipeline for radiological image analysis — pneumonia and fracture detection at clinical-grade accuracy with full HIPAA compliance.',
    stats: [
      { label: 'DIAGNOSTIC ACCURACY', value: '94.3%' },
      { label: 'FASTER DIAGNOSIS', value: '70%' },
      { label: 'COMPLIANCE ISSUES', value: '0' }
    ],
    tags: ['PyTorch', 'MONAI', 'Docker', 'FHIR']
  }
];

export const TRUST_REASONS = [
  {
    id: '01',
    title: 'Production-Grade Engineering, Not Demos',
    description: 'We build systems that handle millions of real production requests with MLOps, monitoring, and CI/CD pipelines from day one — not proof-of-concepts left on a shelf.'
  },
  {
    id: '02',
    title: 'Claude Certified Architects on Every Project',
    description: 'Every AI engagement is led by a Claude Certified Architect — specialists in building with advanced AI models, personally accountable to your outcomes and timelines.'
  },
  {
    id: '03',
    title: 'Domain-Specific Model Training',
    description: 'We fine-tune models on your proprietary data — not just wrappers around APIs. Real models, real differentiation, and you retain full intellectual property ownership.'
  },
  {
    id: '04',
    title: 'GDPR, APP & ISO 27001 Compliant',
    description: 'End-to-end encryption, access controls, audit trails, and full compliance with GDPR (UK), Australian Privacy Principles (AU), and ISO 27001 across every engagement.'
  },
  {
    id: '05',
    title: 'Local AU & UK Teams, Global Delivery',
    description: 'Dedicated local account management in Sydney and London, backed by 1000+ in-house AI engineers available across AEST and GMT/BST time zones.'
  },
  {
    id: '06',
    title: 'MLOps-First from Day One',
    description: 'CI/CD for ML, model versioning, drift detection, and automated retraining are built in from the start — not bolted on as an afterthought months later.'
  }
];

export const FAQS = [
  { question: 'What AI & ML development services does Dotsquares offer in Australia and the UK?', answer: 'We offer a full spectrum of services including custom LLM development, MLOps, computer vision, and autonomous agent systems tailored for both markets.' },
  { question: 'How long does an AI development project typically take?', answer: 'Timelines vary from 4 weeks for a PoC to 6+ months for production-grade enterprise systems.' },
  { question: 'Do you work with businesses that already have data and existing systems?', answer: 'Yes, we specialize in integrating AI into existing legacy systems and data pipelines.' },
];
