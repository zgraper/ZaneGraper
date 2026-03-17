const projects = [
  {
    id: 1,
    title: 'CornBelt AI',
    flagship: true,
    description:
      'AI-powered agronomy advisory platform for corn and soybean producers. Uses a Retrieval-Augmented Generation (RAG) pipeline to deliver citation-backed answers sourced from domain-specific agronomic literature.',
    tags: ['Python', 'RAG', 'LangChain', 'FAISS', 'AWS', 'LLM'],
    category: 'Applications',
    liveLink: 'https://www.cornbeltai.com',
    repoLink: 'https://github.com/zgraper/CornbeltAI',
  },
  {
    id: 2,
    title: 'ZAG Quant Lab',
    description:
      'Quantitative finance research environment for portfolio analysis, statistical modeling, and systematic strategy backtesting. Built to explore alpha signals across equity and commodity markets.',
    tags: ['Python', 'Pandas', 'NumPy', 'Backtesting', 'Statistics', 'Finance'],
    category: 'AI / ML Systems',
    liveLink: 'https://zag-quant-lab.streamlit.app/',
    repoLink: 'https://github.com/zgraper/ZAG-Quant-Lab',
  },
  {
    id: 3,
    title: 'Regression Engine',
    description:
      'Modular machine learning engine for training, evaluating, and deploying regression models. Supports multiple model types with a clean API for feature engineering, cross-validation, and prediction export.',
    tags: ['Python', 'Scikit-learn', 'Machine Learning', 'Regression', 'Data Science'],
    category: 'AI / ML Systems',
    liveLink: 'https://regressionengine.streamlit.app/',
    repoLink: 'https://github.com/zgraper/Regression-Engine',
  },
  {
    id: 4,
    title: 'LinkedIn Article CrewAI',
    description:
      'Autonomous multi-agent pipeline built with CrewAI that researches a topic, drafts a professional LinkedIn article, and formats it for publishing — end to end with minimal human input.',
    tags: ['Python', 'CrewAI', 'LangChain', 'LLM', 'Automation', 'Agents'],
    category: 'Automation',
    liveLink: null,
    repoLink: 'https://github.com/zgraper/LinkedIn-Article-CrewAI',
  },
  {
    id: 5,
    title: 'RetroGPT-2',
    description:
      'A retro-styled Streamlit chatbot that lets users converse with GPT-2. Offers an accessible interface for exploring raw GPT-2 text generation in an interactive chat format.',
    tags: ['Python', 'GPT-2', 'NLP', 'Streamlit', 'Chatbot'],
    category: 'Applications',
    liveLink: 'https://retrogpt-2.streamlit.app/',
    repoLink: 'https://github.com/zgraper/RetroGPT-2',
  },
  {
    id: 6,
    title: 'PhonemeFix',
    description:
      'NLP utility for phoneme-level text correction and normalization. Cleans and standardizes inconsistent transcriptions to improve downstream speech and language model performance.',
    tags: ['Python', 'NLP', 'Phonetics', 'Text Processing'],
    category: 'Applications',
    liveLink: null,
    repoLink: 'https://github.com/zgraper/phonemefix',
  },
];

export default projects;
