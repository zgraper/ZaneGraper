const experience = [
  {
    id: 1,
    company: 'CornBelt AI',
    role: 'Founder & Technical Lead',
    period: '2025–Present',
    bullets: [
      'Founded and deployed an AI agronomy advisory platform targeting corn and soybean producers',
      'Architected a RAG pipeline with FAISS vector search delivering citation-backed, domain-specific answers',
      'Integrated AWS Lambda, S3, DynamoDB, Cognito, and API Gateway in a serverless architecture',
      'Achieved sub-$20/month production hosting cost through infrastructure optimization',
      'Built a toggle-based routing system for Corn, Soybean, and General agronomy query domains',
    ],
    tools: ['Python', 'RAG', 'AWS', 'LangChain', 'FAISS'],
  },
  {
    id: 2,
    company: 'Asymmetrica Investments AG',
    role: 'AI Engineer & Project Manager',
    period: '2024–2025',
    bullets: [
      'Designed CrewAI + LangChain agent pipelines scaling weekly leads from 100 to 2,000 — a 12× productivity gain',
      'Reduced manual reporting time by 80%+ through end-to-end AI pipeline automation',
      'Led development of Agri-Xchange, a blockchain-based commodity trading platform MVP',
      'Built investor-facing Power BI dashboards for real-time portfolio and pipeline analytics',
    ],
    tools: ['Python', 'LangChain', 'CrewAI', 'AWS', 'Bubble.io', 'Power BI'],
  },
  {
    id: 3,
    company: 'Azteca Milling LP',
    role: 'Operations Manager',
    period: '2017–2022',
    bullets: [
      'Managed $6M annual procurement budget and $1.2M operations budget across production, maintenance, and quality',
      'Led a cross-functional team of 25+ employees, achieving continuous improvement targets year over year',
      'Implemented Lean Six Sigma initiatives reducing process waste and downtime by 15%+',
      'Oversaw HACCP, FDA, and SQF compliance at a high-volume corn masa flour manufacturing facility',
    ],
    tools: ['Excel', 'SAP', 'Statistical Process Control', 'Six Sigma'],
  },
  {
    id: 4,
    company: 'AmeriQual Foods, LLC',
    role: 'Thermal Process Engineer',
    period: '2022',
    bullets: [
      'Developed and validated thermal processing schedules for new packaged food product lines',
      'Conducted heat penetration studies and authored process documentation for FDA regulatory submission',
      'Ensured full compliance with FDA thermal validation requirements for retort processing',
    ],
    tools: ['Thermal Processing', 'FDA Compliance', 'R&D'],
  },
  {
    id: 5,
    company: 'Pioneer Hi-Bred International, Inc.',
    role: 'Research Associate',
    period: '2015–2016',
    bullets: [
      'Supported transgenic soybean trait characterization and statistical data analysis',
      'Managed field planting, harvesting, and laboratory workflows with USDA compliance documentation',
      'Contributed to multi-season trait performance studies for commercial variety development',
    ],
    tools: ['Analytical Software', 'Field Data Management', 'USDA Compliance'],
  },
  {
    id: 6,
    company: 'Azteca Milling LP',
    role: 'Field Representative Supervisor',
    period: '2017–2019',
    bullets: [
      'Supervised non-GMO stewardship program across a corn sourcing supply chain serving the plant',
      'Built and maintained relationships with 50+ local growers and grain elevator partners',
      'Enforced identity-preservation and quality compliance standards throughout procurement',
    ],
    tools: ['Supply Chain', 'Quality Assurance', 'Non-GMO Stewardship'],
  },
];

const education = [
  {
    id: 1,
    degree: 'Master of Science – Artificial Intelligence',
    school: 'University of the Cumberlands',
    location: 'Williamsburg, KY',
    period: 'Expected December 2025',
    gpa: '3.9',
    highlights: [
      'Neural Networks & Deep Learning',
      'Natural Language Processing',
      'Generative AI with LLMs',
      'AI in Risk Management',
      'Ethics in Artificial Intelligence',
    ],
  },
  {
    id: 2,
    degree: 'Master of Business Administration (MBA) – Project Management',
    school: 'University of Southern Indiana',
    location: 'Evansville, IN',
    period: '2023',
    gpa: '4.0',
    highlights: [
      'Strategic Management',
      'Financial Decision-Making',
      'Operations Management',
      'Risk Analysis',
      'Full Honors',
    ],
  },
  {
    id: 3,
    degree: 'Bachelor of Science – Biological and Food Process Engineering',
    school: 'Purdue University',
    location: 'West Lafayette, IN',
    period: '2014',
    gpa: null,
    highlights: [
      'Lilly Endowment Scholar',
      'Departmental Outstanding Freshman of the Year',
      'Study Abroad: EARTH University, Costa Rica',
      'Undergraduate Research Assistant',
    ],
  },
];

const certifications = [
  'Certified Associate in Project Management (CAPM®)',
  'AWS Certified Cloud Practitioner (AWS-CCP)',
  'Lean Six Sigma Black Belt (LSSBB)',
  'Artificial Intelligence Expert (CAIEC®)',
  'Scrum Master Professional Certification (SMPC®)',
  'Agile Leader Professional Certification (ALPC®)',
  'AI for Leaders Professional Certification (AIFL®)',
  'Responsive Web Design, JavaScript Algorithms, Front-End Libraries (freeCodeCamp)',
];

export { experience, education, certifications };
