const PHASES = [
  {
    id: 0,
    name: "Business Foundations & AI Strategy",
    status: "complete",
    color: "var(--accent-blue)",
    desc: "Understand how AI creates business value. ROI frameworks, use case identification, and strategic planning.",
    lessons: [
      { name: "AI Value Proposition", status: "complete", type: "Learn", lang: "—", summary: "Why AI matters for business and how to identify high-value opportunities." },
      { name: "ROI Frameworks for AI", status: "complete", type: "Build", lang: "Python", summary: "Build models to calculate return on investment for AI initiatives." },
      { name: "Use Case Prioritization Matrix", status: "complete", type: "Build", lang: "Python", summary: "Prioritize AI projects using impact vs feasibility analysis." },
      { name: "Data Strategy for Business", status: "complete", type: "Learn", lang: "—", summary: "How data assets drive AI value and what good data strategy looks like." },
      { name: "Building an AI Roadmap", status: "complete", type: "Build", lang: "—", summary: "From pilot to production: planning your AI journey." },
      { name: "Stakeholder Communication", status: "complete", type: "Learn", lang: "—", summary: "Speak the language of business when presenting AI solutions." },
    ]
  },
  {
    id: 1,
    name: "Python & Data Fundamentals",
    status: "complete",
    color: "var(--accent-coral)",
    desc: "Master Python for data work. NumPy, Pandas, and the foundations of data manipulation.",
    lessons: [
      { name: "Python Environment Setup", status: "complete", type: "Build", lang: "Shell", summary: "Set up a professional Python development environment." },
      { name: "NumPy Arrays & Operations", status: "complete", type: "Build", lang: "Python", summary: "The building blocks of numerical computing." },
      { name: "Pandas DataFrames", status: "complete", type: "Build", lang: "Python", summary: "Manipulate structured data like a pro." },
      { name: "Data Visualization Basics", status: "complete", type: "Build", lang: "Python", summary: "Tell stories with data using matplotlib and seaborn." },
      { name: "Working with Business Data", status: "complete", type: "Build", lang: "Python", summary: "Real datasets: sales, customers, finance." },
    ]
  },
  {
    id: 2,
    name: "Statistics for Business Decisions",
    status: "complete",
    color: "var(--accent-violet)",
    desc: "Statistical thinking for business. Hypothesis testing, distributions, and Bayesian inference.",
    lessons: [
      { name: "Descriptive Statistics", status: "complete", type: "Build", lang: "Python", summary: "Summarize data with meaning." },
      { name: "Probability Distributions", status: "complete", type: "Learn", lang: "Python", summary: "Normal, binomial, Poisson — and when to use each." },
      { name: "Hypothesis Testing", status: "complete", type: "Build", lang: "Python", summary: "A/B tests, confidence intervals, p-values explained." },
      { name: "Bayesian Thinking", status: "complete", type: "Build", lang: "Python", summary: "Update beliefs with evidence." },
      { name: "Correlation vs Causation", status: "complete", type: "Learn", lang: "—", summary: "The most important lesson in business analytics." },
    ]
  },
  {
    id: 3,
    name: "Machine Learning Fundamentals",
    status: "complete",
    color: "var(--accent-emerald)",
    desc: "Build ML models from scratch. Regression, classification, and the math behind gradient descent.",
    lessons: [
      { name: "Linear Regression from Scratch", status: "complete", type: "Build", lang: "Python", summary: "Implement gradient descent by hand." },
      { name: "Logistic Regression", status: "complete", type: "Build", lang: "Python", summary: "Classification with probabilistic thinking." },
      { name: "Decision Trees", status: "complete", type: "Build", lang: "Python", summary: "Split data to make decisions." },
      { name: "Cross-Validation & Metrics", status: "complete", type: "Build", lang: "Python", summary: "Evaluate models properly." },
      { name: "Feature Engineering", status: "complete", type: "Build", lang: "Python", summary: "Create features that make models shine." },
      { name: "Business Case: Customer Churn", status: "complete", type: "Capstone", lang: "Python", summary: "Predict and prevent customer churn." },
    ]
  },
  {
    id: 4,
    name: "Deep Learning Core",
    status: "in-progress",
    color: "var(--accent-amber)",
    desc: "Neural networks from the ground up. Backpropagation, activation functions, and modern architectures.",
    lessons: [
      { name: "Neural Network Basics", status: "complete", type: "Build", lang: "Python", summary: "Build a simple NN with numpy." },
      { name: "Backpropagation by Hand", status: "complete", type: "Build", lang: "Python", summary: "Derive gradients step by step." },
      { name: "Activation Functions", status: "complete", type: "Learn", lang: "Python", summary: "ReLU, sigmoid, tanh — what they do and why." },
      { name: "Intro to PyTorch", status: "complete", type: "Build", lang: "Python", summary: "Your first PyTorch model." },
      { name: "CNNs for Image Classification", status: "in-progress", type: "Build", lang: "Python", summary: "Convolution, pooling, feature maps." },
      { name: "RNNs for Sequence Data", status: "planned", type: "Build", lang: "Python", summary: "Process time series and text sequences." },
      { name: "Business Case: Fraud Detection", status: "planned", type: "Capstone", lang: "Python", summary: "Detect financial fraud with deep learning." },
    ]
  },
  {
    id: 5,
    name: "Natural Language Processing",
    status: "planned",
    color: "var(--accent-pink)",
    desc: "Text as data. Tokenization, embeddings, sentiment analysis, and text classification.",
    lessons: [
      { name: "Text Preprocessing Pipeline", status: "planned", type: "Build", lang: "Python", summary: "Clean, tokenize, normalize text data." },
      { name: "TF-IDF & Bag of Words", status: "planned", type: "Build", lang: "Python", summary: "Classic text representations that still work." },
      { name: "Word Embeddings", status: "planned", type: "Learn", lang: "Python", summary: "Word2Vec, GloVe, and the geometry of meaning." },
      { name: "Sentiment Analysis", status: "planned", type: "Build", lang: "Python", summary: "Classify customer opinions." },
      { name: "Named Entity Recognition", status: "planned", type: "Build", lang: "Python", summary: "Extract business entities from text." },
      { name: "Business Case: Support Ticket Routing", status: "planned", type: "Capstone", lang: "Python", summary: "Auto-route customer support with NLP." },
    ]
  },
  {
    id: 6,
    name: "Transformers & LLMs",
    status: "planned",
    color: "var(--accent-indigo)",
    desc: "The transformer revolution. Attention mechanisms, BERT, GPT, and fine-tuning for business tasks.",
    lessons: [
      { name: "Attention is All You Need", status: "planned", type: "Learn", lang: "—", summary: "Understand the paper that changed everything." },
      { name: "Self-Attention from Scratch", status: "planned", type: "Build", lang: "Python", summary: "Implement attention mechanisms." },
      { name: "BERT for Classification", status: "planned", type: "Build", lang: "Python", summary: "Fine-tune BERT for business tasks." },
      { name: "GPT & Text Generation", status: "planned", type: "Build", lang: "Python", summary: "Generate text with transformer models." },
      { name: "Prompt Engineering", status: "planned", type: "Learn", lang: "—", summary: "Craft prompts that get results." },
      { name: "Business Case: Document Summarization", status: "planned", type: "Capstone", lang: "Python", summary: "Summarize legal and financial documents." },
    ]
  },
  {
    id: 7,
    name: "MLOps & Production Systems",
    status: "planned",
    color: "var(--accent-teal)",
    desc: "Ship models to production. CI/CD, monitoring, model versioning, and deployment patterns.",
    lessons: [
      { name: "ML Pipeline Design", status: "planned", type: "Build", lang: "Python", summary: "Build reproducible ML pipelines." },
      { name: "Model Versioning with MLflow", status: "planned", type: "Build", lang: "Python", summary: "Track experiments and model versions." },
      { name: "Docker for ML", status: "planned", type: "Build", lang: "Docker", summary: "Containerize ML applications." },
      { name: "API Deployment with FastAPI", status: "planned", type: "Build", lang: "Python", summary: "Serve models via REST APIs." },
      { name: "Monitoring & Alerting", status: "planned", type: "Build", lang: "Python", summary: "Track model performance in production." },
      { name: "Business Case: Real-time Recommendation API", status: "planned", type: "Capstone", lang: "Python", summary: "Build a production recommendation system." },
    ]
  },
  {
    id: 8,
    name: "Cloud AI Platforms",
    status: "planned",
    color: "var(--accent-blue)",
    desc: "Leverage cloud for scale. AWS SageMaker, Azure ML, and GCP Vertex AI.",
    lessons: [
      { name: "Cloud ML Architecture", status: "planned", type: "Learn", lang: "—", summary: "Design ML systems for the cloud." },
      { name: "AWS SageMaker Basics", status: "planned", type: "Build", lang: "Python", summary: "Train and deploy on AWS." },
      { name: "Azure ML Workflows", status: "planned", type: "Build", lang: "Python", summary: "Microsoft's ML platform." },
      { name: "GCP Vertex AI", status: "planned", type: "Build", lang: "Python", summary: "Google's unified ML platform." },
      { name: "Cost Optimization", status: "planned", type: "Learn", lang: "—", summary: "Run ML without breaking the bank." },
    ]
  },
  {
    id: 9,
    name: "AI Agents & Automation",
    status: "planned",
    color: "var(--accent-coral)",
    desc: "Build autonomous AI agents. Tool use, reasoning, and multi-agent systems for business automation.",
    lessons: [
      { name: "Agent Architecture Patterns", status: "planned", type: "Learn", lang: "—", summary: "ReAct, reflection, and tool use patterns." },
      { name: "Building Your First Agent", status: "planned", type: "Build", lang: "Python", summary: "Create an agent that uses tools." },
      { name: "RAG for Business Data", status: "planned", type: "Build", lang: "Python", summary: "Retrieval-augmented generation with your data." },
      { name: "Multi-Agent Systems", status: "planned", type: "Build", lang: "Python", summary: "Teams of agents working together." },
      { name: "Business Case: Automated Report Generation", status: "planned", type: "Capstone", lang: "Python", summary: "Agents that write business reports." },
    ]
  },
  {
    id: 10,
    name: "Reinforcement Learning",
    status: "planned",
    color: "var(--accent-violet)",
    desc: "Learn through interaction. RL fundamentals and applications in business optimization.",
    lessons: [
      { name: "RL Fundamentals", status: "planned", type: "Learn", lang: "—", summary: "Agents, environments, rewards, and policies." },
      { name: "Q-Learning from Scratch", status: "planned", type: "Build", lang: "Python", summary: "Implement tabular Q-learning." },
      { name: "Deep Q Networks", status: "planned", type: "Build", lang: "Python", summary: "Combine RL with deep learning." },
      { name: "Business Case: Dynamic Pricing", status: "planned", type: "Capstone", lang: "Python", summary: "Optimize prices with RL." },
    ]
  },
  {
    id: 11,
    name: "Computer Vision for Business",
    status: "planned",
    color: "var(--accent-emerald)",
    desc: "See with AI. Object detection, OCR, and visual analytics for business applications.",
    lessons: [
      { name: "Image Classification Deep Dive", status: "planned", type: "Build", lang: "Python", summary: "Advanced CNN architectures." },
      { name: "Object Detection", status: "planned", type: "Build", lang: "Python", summary: "YOLO, R-CNN, and detection frameworks." },
      { name: "OCR & Document Understanding", status: "planned", type: "Build", lang: "Python", summary: "Extract text from images and documents." },
      { name: "Business Case: Quality Inspection", status: "planned", type: "Capstone", lang: "Python", summary: "Automated visual quality control." },
    ]
  },
  {
    id: 12,
    name: "Time Series & Forecasting",
    status: "planned",
    color: "var(--accent-amber)",
    desc: "Predict the future. ARIMA, Prophet, LSTM, and modern forecasting methods.",
    lessons: [
      { name: "Time Series Basics", status: "planned", type: "Build", lang: "Python", summary: "Trends, seasonality, and stationarity." },
      { name: "ARIMA Models", status: "planned", type: "Build", lang: "Python", summary: "Classical forecasting approach." },
      { name: "Prophet for Business", status: "planned", type: "Build", lang: "Python", summary: "Facebook's forecasting tool." },
      { name: "LSTM for Forecasting", status: "planned", type: "Build", lang: "Python", summary: "Deep learning for time series." },
      { name: "Business Case: Demand Forecasting", status: "planned", type: "Capstone", lang: "Python", summary: "Predict product demand." },
    ]
  },
  {
    id: 13,
    name: "Recommender Systems",
    status: "planned",
    color: "var(--accent-pink)",
    desc: "Personalize at scale. Collaborative filtering, content-based, and hybrid approaches.",
    lessons: [
      { name: "Collaborative Filtering", status: "planned", type: "Build", lang: "Python", summary: "User-user and item-item similarity." },
      { name: "Matrix Factorization", status: "planned", type: "Build", lang: "Python", summary: "SVD and latent factor models." },
      { name: "Deep Learning Recommendations", status: "planned", type: "Build", lang: "Python", summary: "Neural collaborative filtering." },
      { name: "Business Case: Product Recommendations", status: "planned", type: "Capstone", lang: "Python", summary: "Build a Netflix-style recommender." },
    ]
  },
  {
    id: 14,
    name: "Data Engineering for AI",
    status: "planned",
    color: "var(--accent-indigo)",
    desc: "Build data pipelines. ETL, feature stores, and data quality for ML systems.",
    lessons: [
      { name: "ETL Pipelines with Python", status: "planned", type: "Build", lang: "Python", summary: "Extract, transform, load patterns." },
      { name: "Apache Spark for Big Data", status: "planned", type: "Build", lang: "Python", summary: "Scale data processing." },
      { name: "Feature Stores", status: "planned", type: "Learn", lang: "—", summary: "Centralized feature management." },
      { name: "Data Quality & Validation", status: "planned", type: "Build", lang: "Python", summary: "Ensure data integrity for ML." },
    ]
  },
  {
    id: 15,
    name: "Generative AI & Creative Applications",
    status: "planned",
    color: "var(--accent-teal)",
    desc: "Create with AI. Diffusion models, GANs, and generative applications for business.",
    lessons: [
      { name: "GANs Fundamentals", status: "planned", type: "Build", lang: "Python", summary: "Generator vs discriminator game." },
      { name: "Diffusion Models", status: "planned", type: "Learn", lang: "—", summary: "How DALL-E and Stable Diffusion work." },
      { name: "Fine-tuning Generative Models", status: "planned", type: "Build", lang: "Python", summary: "Adapt models for your use case." },
      { name: "Business Case: Marketing Content Generation", status: "planned", type: "Capstone", lang: "Python", summary: "Generate marketing assets with AI." },
    ]
  },
  {
    id: 16,
    name: "AI Ethics & Responsible AI",
    status: "planned",
    color: "var(--accent-blue)",
    desc: "Build trustworthy AI. Fairness, transparency, privacy, and governance frameworks.",
    lessons: [
      { name: "AI Ethics Frameworks", status: "planned", type: "Learn", lang: "—", summary: "Principles and guidelines for responsible AI." },
      { name: "Bias Detection & Mitigation", status: "planned", type: "Build", lang: "Python", summary: "Find and fix bias in models." },
      { name: "Explainable AI", status: "planned", type: "Build", lang: "Python", summary: "Make models interpretable." },
      { name: "Privacy-Preserving ML", status: "planned", type: "Learn", lang: "—", summary: "Differential privacy and federated learning." },
      { name: "AI Governance", status: "planned", type: "Learn", lang: "—", summary: "Policies and processes for AI oversight." },
    ]
  },
  {
    id: 17,
    name: "Scaling & Performance",
    status: "planned",
    color: "var(--accent-coral)",
    desc: "Make AI fast and efficient. Optimization, quantization, and distributed training.",
    lessons: [
      { name: "Model Optimization Techniques", status: "planned", type: "Learn", lang: "—", summary: "Pruning, quantization, and distillation." },
      { name: "Distributed Training", status: "planned", type: "Build", lang: "Python", summary: "Train across multiple GPUs." },
      { name: "Inference Optimization", status: "planned", type: "Build", lang: "Python", summary: "Fast predictions at scale." },
      { name: "Business Case: Real-time Inference System", status: "planned", type: "Capstone", lang: "Python", summary: "Sub-millisecond predictions." },
    ]
  },
  {
    id: 18,
    name: "Advanced Topics",
    status: "planned",
    color: "var(--accent-violet)",
    desc: "Push boundaries. Multi-modal AI, graph neural networks, and emerging techniques.",
    lessons: [
      { name: "Multi-Modal AI", status: "planned", type: "Learn", lang: "—", summary: "Combining vision, text, and audio." },
      { name: "Graph Neural Networks", status: "planned", type: "Build", lang: "Python", summary: "AI for graph-structured data." },
      { name: "Neural Architecture Search", status: "planned", type: "Learn", lang: "—", summary: "AI designing AI." },
      { name: "Emerging Trends", status: "planned", type: "Learn", lang: "—", summary: "What's next in AI systems engineering." },
    ]
  },
  {
    id: 19,
    name: "Capstone: End-to-End AI System",
    status: "planned",
    color: "var(--accent-emerald)",
    desc: "Build a complete AI system from data collection to production deployment.",
    lessons: [
      { name: "Project Planning & Design", status: "planned", type: "Capstone", lang: "—", summary: "Design your capstone project." },
      { name: "Data Collection & Preparation", status: "planned", type: "Capstone", lang: "Python", summary: "Gather and prepare real business data." },
      { name: "Model Development", status: "planned", type: "Capstone", lang: "Python", summary: "Build and iterate on your model." },
      { name: "Production Deployment", status: "planned", type: "Capstone", lang: "Python", summary: "Deploy to production with monitoring." },
      { name: "Presentation & Documentation", status: "planned", type: "Capstone", lang: "—", summary: "Document and present your system." },
    ]
  }
];

const QUIZZES = [
  {
    question: "What is the PRIMARY business benefit of using AI for customer churn prediction?",
    options: [
      "Reducing computational costs",
      "Identifying at-risk customers before they leave",
      "Eliminating the need for customer service",
      "Increasing data storage requirements"
    ],
    correct: 1,
    explanation: "The main business value is proactive retention — identifying customers likely to churn so you can intervene with targeted offers or support."
  },
  {
    question: "In gradient descent, what does the 'learning rate' control?",
    options: [
      "The size of the training dataset",
      "The speed at which the model converges to a minimum",
      "The number of layers in a neural network",
      "The accuracy of the final model"
    ],
    correct: 1,
    explanation: "The learning rate determines how large each step is when updating model weights. Too high and you might overshoot; too low and training takes forever."
  },
  {
    question: "Which metric is MOST appropriate for evaluating a fraud detection model?",
    options: [
      "Accuracy",
      "Mean Squared Error",
      "F1-Score (balancing precision and recall)",
      "R-squared"
    ],
    correct: 2,
    explanation: "Fraud detection deals with imbalanced data (few fraud cases). F1-score balances precision (not flagging legitimate transactions) and recall (catching actual fraud)."
  },
  {
    question: "What does 'RAG' stand for in AI systems?",
    options: [
      "Random Access Generation",
      "Retrieval-Augmented Generation",
      "Recursive Algorithm Graph",
      "Reinforced Agent Governance"
    ],
    correct: 1,
    explanation: "Retrieval-Augmented Generation combines information retrieval with text generation, allowing LLMs to answer questions using your proprietary business data."
  },
  {
    question: "Why is Docker important for ML deployment?",
    options: [
      "It makes models run faster",
      "It ensures consistent environments across development and production",
      "It automatically tunes hyperparameters",
      "It replaces the need for cloud computing"
    ],
    correct: 1,
    explanation: "Docker containers package your entire application with dependencies, eliminating 'works on my machine' problems and ensuring reproducible deployments."
  }
];

const GLOSSARY = [
  { term: "Gradient Descent", definition: "An optimization algorithm that iteratively adjusts model parameters to minimize a loss function by following the negative gradient." },
  { term: "Backpropagation", definition: "The algorithm for computing gradients of the loss with respect to each parameter in a neural network, enabling efficient training." },
  { term: "Attention Mechanism", definition: "A technique allowing models to focus on relevant parts of input when producing output, revolutionizing sequence modeling." },
  { term: "Transfer Learning", definition: "Leveraging pre-trained models on large datasets and fine-tuning for specific tasks with smaller data." },
  { term: "MLOps", definition: "Practices for deploying and maintaining ML models in production reliably and efficiently." },
  { term: "RAG", definition: "Retrieval-Augmented Generation: combining external knowledge retrieval with LLM text generation." },
  { term: "Feature Engineering", definition: "The process of selecting, transforming, and creating input variables to improve model performance." },
  { term: "Cross-Validation", definition: "Resampling technique for assessing model generalization by partitioning data into training and validation sets multiple times." }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PHASES, QUIZZES, GLOSSARY };
}
