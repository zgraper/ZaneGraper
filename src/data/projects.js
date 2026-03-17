const projects = [
  {
    id: 1,
    title: 'CornBelt AI – Agronomy Advisory Platform',
    period: '2025–Present',
    role: 'Founder & Technical Lead',
    description:
      'Architected and deployed a domain-specific LLM wrapper for corn and soybean agronomy using a Retrieval-Augmented Generation (RAG) framework.',
    highlights: [
      'Designed automated PDF ingestion pipeline for structured vector indexing',
      'Implemented vector search (FAISS / AWS-native) with citation support',
      'Integrated AWS Lambda, S3, DynamoDB, Cognito, and API Gateway',
      'Targeted <$20/month hosting cost for production deployment',
      'Built toggle-based query system for Corn / Soybean / Other domain routing',
    ],
    tags: ['Python', 'RAG', 'AWS', 'LLM', 'FAISS', 'LangChain'],
  },
  {
    id: 2,
    title: 'Agri-Xchange – AI + Blockchain Commodity Platform',
    period: '2024–2025',
    role: 'AI Engineer & PM at Asymmetrica Investments AG',
    description:
      'Led development of an AI and blockchain-based commodity trading platform MVP for sustainable agriculture, combining smart contracts with AI-driven analytics.',
    highlights: [
      'Designed end-to-end AI pipelines reducing manual reporting time by 80%+',
      'Built with Python, LangChain, CrewAI, and AWS infrastructure',
      'Integrated Power BI dashboards for investor analytics',
    ],
    tags: ['Blockchain', 'Python', 'LangChain', 'CrewAI', 'AWS', 'Power BI'],
  },
  {
    id: 3,
    title: 'AI Lead Generation Platform',
    period: '2024–2025',
    role: 'AI Engineer at Asymmetrica Investments AG',
    description:
      'Designed and implemented an AI-driven pipeline using CrewAI and LangChain, scaling weekly lead output from 100 to 2,000 — a 12× productivity gain.',
    highlights: [
      'Automated lead generation and data retrieval with CrewAI agents',
      'Built RAG pipelines to enhance AI output accuracy',
      'Deployed on AWS with Bubble.io front-end integration',
    ],
    tags: ['CrewAI', 'LangChain', 'Python', 'AWS', 'Bubble.io'],
  },
  {
    id: 4,
    title: 'GrowYourBusiness – Automation & Web Projects',
    period: '2024–2025',
    role: 'Project Manager',
    description:
      'Oversaw automation and web development projects using Bubble.io and Zapier integrations, streamlining client management processes.',
    highlights: [
      'Reduced manual administrative work by 25%',
      'Managed Bubble.io no-code web app development',
      'Implemented Zapier automation workflows',
    ],
    tags: ['Bubble.io', 'Zapier', 'Project Management', 'Automation'],
  },
  {
    id: 5,
    title: 'IVoT Financial Training – Power BI Dashboards',
    period: '2024',
    role: 'Product Development & Data Visualization Intern',
    description:
      'Built interactive Power BI dashboards for financial training programs, enabling non-technical users to engage with data visually.',
    highlights: [
      'Designed dashboards for educational finance programs',
      'Collaborated on AI-based financial simulation game prototypes',
    ],
    tags: ['Power BI', 'Data Visualization', 'Finance'],
  },
  {
    id: 6,
    title: 'Baby Blossom Market – E-Commerce Brand',
    period: '2023–2024',
    role: 'Founder',
    description:
      'Established an e-commerce brand from concept to execution, developing marketing campaigns, SEO strategies, and supply chain automation for baby apparel.',
    highlights: [
      'Built full online storefront and supply chain automation',
      'Developed SEO and digital marketing strategies',
    ],
    tags: ['E-Commerce', 'SEO', 'Marketing', 'Automation'],
  },
];

export default projects;
