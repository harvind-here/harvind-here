
import { asset } from '@/lib/utils';
import { Github, Linkedin, Mail, X, type LucideIcon, Cpu, BrainCircuit, Code2, Router, BarChartBig, Briefcase, Trophy, MessageSquare, Bot, Database } from 'lucide-react';

export interface LinkEntry {
  href: string;
  label: string;
  username?: string;
  icon?: LucideIcon;
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  professionalSummary: string;
  professionalSummaryShort: string;
  socialLinks: LinkEntry[];
}

export interface EducationEntry {
  institution: string;
  degree: string;
  period: string;
  cgpa?: string;
  location: string;
}

export interface ProjectEntry {
  id: string;
  title:string;
  subtitle?: string;
  description: string[];
  technologies: string[];
  imageUrl: string;
  imageHint: string;
  demoLink?: string;
  sourceLink?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface CertificationEntry {
  name: string;
  issuer: string;
  description?: string;
  link: string;
}

export interface ServiceEntry {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  icon: LucideIcon;
  relatedProjectIds: string[];
}

export interface CompetitionEntry {
    name: string;
    organizer: string;
    rank: string;
    description: string;
}

export const personalInfo: PersonalInfo = {
  name: 'HARVIND MUKHAL MUTHUKUMAR',
  title: 'AI/ML Engineer & Python Full-Stack Developer',
  email: 'harvindmukhal3@gmail.com',
  professionalSummary:
    'A diligent, innovative and tech-driven Engineering student with a strong foundation in AI/ML, LLMOps, and Python full-stack development. Proven experience in building and automating CI/CD pipelines for production-ready AI/ML applications, integrating Docker, GitHub Actions, and cloud deployments. Adept at developing LLM-based assistants, optimizing system performance, and deploying solutions at scale. Strong problem-solving abilities backed by hands-on certifications from Stanford, IBM, and Accenture, with a consistent academic record.',
  professionalSummaryShort: 'Innovative Engineering student passionate about AI/ML, LLMOps, and Python Full-Stack Development. Building scalable solutions with a focus on performance and automation.',
  socialLinks: [
    { href: 'mailto:harvindmukhal3@gmail.com', label: 'Email', icon: Mail },
    { href: 'https://www.linkedin.com/in/harvind-mukhal-muthukumar-47561a24a/', label: 'LinkedIn', username: 'Harvind Mukhal Muthukumar', icon: Linkedin },
    { href: 'https://github.com/harvind-here', label: 'GitHub', username: 'harvind-here', icon: Github },
    { href: 'https://x.com/harvind_here', label: 'X', username: 'harvind_here', icon: X },
  ],
};

export const educationHistory: EducationEntry[] = [
  {
    institution: 'SRM TRP Engineering College',
    degree: 'BE in Electronics and Communication',
    period: 'Nov 2022 - May 2026',
    cgpa: '8.6',
    location: 'IND',
  },
  {
    institution: 'Amrita Vidyalayam',
    degree: 'CBSE 10+2',
    period: 'Aug 2012 - May 2022',
    location: 'IND',
  },
];

export const projects: ProjectEntry[] = [
  {
    id: 'athen',
    title: 'ATHEN',
    subtitle: 'Assistant That Helps for Everyday Needs',
    description: [
      'Built a virtual assistant powered by LLM (Llama3.1 70B model using Groq api), using Flask and React, integrating Google Calendar via OAuth for users to plan their schedule and reminders.',
      'Reduced latency in voice call to less than a second, increased the success rate for tool calling.',
    ],
    technologies: ['Flask', 'React', 'LLM', 'Agents', 'Google Cloud', 'MongoDB', 'OAuth'],
    imageUrl: asset('/athen.png'),
    imageHint: 'virtual assistant',
    demoLink: 'https://athen.onrender.com',
  },
  {
    id: 'terraineye',
    title: 'TerrainEye',
    subtitle: 'Aerial Image Classification',
    description: [
      'An image classification model fine-tuned (ResNet50v2 DNN model) on an Aerial Imagery Dataset for terrain classification.',
      'Optimized for lightweight production and cloud deployment to serve flying objects such as drones.',
    ],
    technologies: ['Computer Vision', 'Finetuning', 'ResNet50v2', 'DNN', 'Cloud Deployment'],
    imageUrl: asset('/terrain_eye.png'),
    imageHint: 'neural network architecture',
    sourceLink: 'https://github.com/harvind-here/TerrainEye',
  },
  {
    id: 'posecapnet',
    title: 'PoseCapNet',
    subtitle: 'Vision-Language Understanding',
    description: [
      'Exploring a low-cost alternative to VLMs, this AI model focuses on image understanding and captioning.',
      'Actively under improvisation with ViTPose for human pose estimation, enhancing its ability to comprehend visual scenarios.',
      'Achieved MSE 0.102 for pose estimation and BLEU-1/4 scores of 0.35/0.19 for captioning through shared feature learning on COCO dataset.',
    ],
    technologies: ['Deep Learning', 'Fine tuning', 'ViTPose', 'Image Captioning', 'Pose Estimation'],
    imageUrl: asset('/posecapnet.png'),
    imageHint: 'ai vision',
  },
  {
    id: 'sindhanai-hackathon',
    title: "SindhanAI'25 Hackathon Website",
    subtitle: 'National Level Hackathon Platform',
    description: [
      "Designed an interactive, visually engaging website for National Level Hackathon - SindhanAI'25.",
      'Implemented end-to-end CI/CD pipeline (GitHub Actions → Vercel deploy).',
      'Managed DNS, deployment and optimized production build by 50% using CDNs.',
    ],
    technologies: ['Next.js', 'Vercel', 'DNS', 'CI/CD', 'GitHub Actions'],
    imageUrl: asset('/sindhanai.png'),
    imageHint: 'hackathon website',
    demoLink: 'https://sindhanai.in',
  },
  {
    id: 'enterprise-assistant',
    title: 'Enterprise Assistant',
    subtitle: 'Conversational AI for Internal Support',
    description: [
      'A conversational assistant that processes documents and assists clients, administrators, and employees, leveraging the company handbook to streamline internal IT support.',
      'Implemented Retrieval Augmented Generation for enterprise knowledge updation and bcrypt algorithm for security.',
    ],
    technologies: ['LLMs', 'RAG', 'Conversational AI', 'ChromaDB', 'Security'],
    imageUrl: asset('/enterprise.png'),
    imageHint: 'chatbot document',
    sourceLink: 'https://github.com/harvind-here/Enterprise-Assistant',
  },
];

export const services: ServiceEntry[] = [
  {
    id: 'llmops',
    name: 'LLMOps',
    description: 'Streamlining AI development with robust CI/CD and operational practices.',
    longDescription: 'Specializing in building and automating CI/CD pipelines for production-ready AI/ML applications, including Large Language Models. Expertise in Docker, GitHub Actions, cloud deployments (GCP, Vercel), model monitoring, and ensuring efficient model lifecycle management for scalable and reliable AI solutions.',
    icon: Cpu,
    relatedProjectIds: ['athen', 'enterprise-assistant', 'sindhanai-hackathon', 'terraineye'],
  },
  {
    id: 'machine-learning',
    name: 'ML Solutions',
    description: 'Crafting intelligent solutions with cutting-edge machine learning models.',
    longDescription: 'Experienced in developing, fine-tuning, and deploying various machine learning models. This includes Deep Neural Networks for image classification (ResNet50v2), vision-language models for tasks like pose estimation and image captioning (ViTPose), and building conversational AI agents.',
    icon: BrainCircuit,
    relatedProjectIds: ['terraineye', 'posecapnet', 'athen', 'enterprise-assistant'],
  },
  {
    id: 'python-full-stack',
    name: 'Python Full Stack',
    description: 'Building responsive and scalable web applications from front-end to back-end.',
    longDescription: 'Proficient in Python full-stack development using modern frameworks like React.js for frontend and Python (Flask) for backend. Experienced in API design and integration, database management (MongoDB), user authentication (OAuth), and deploying interactive web platforms.',
    icon: Code2,
    relatedProjectIds: ['athen', 'sindhanai-hackathon', 'enterprise-assistant'],
  },
  {
    id: 'custom-chatbot',
    name: 'Custom Chatbots',
    description: 'WhatsApp, Telegram, Website, App',
    longDescription: 'Building custom chatbots for various platforms including WhatsApp, Telegram, websites, and mobile apps to enhance user engagement and automate communication.',
    icon: MessageSquare,
    relatedProjectIds: ['athen', 'enterprise-assistant'],
  },
  {
    id: 'agentic-automation',
    name: 'Agentic Automation',
    description: 'Using agentic LLMs',
    longDescription: 'Developing intelligent automation solutions using agentic Large Language Models to streamline complex workflows and improve operational efficiency.',
    icon: Bot,
    relatedProjectIds: ['athen', 'enterprise-assistant'],
  },
  {
    id: 'data-preprocessing',
    name: 'Data Preprocessing',
    description: 'Image, Text, CSV',
    longDescription: 'Providing data preprocessing services for various data types including images, text, and CSV files to prepare high-quality data for machine learning models.',
    icon: Database,
    relatedProjectIds: ['terraineye', 'posecapnet'],
  }
];


export const skillCategories: SkillCategory[] = [
  {
    name: 'AI & ML',
    skills: ['Supervised', 'Unsupervised', 'Classification Algorithms', 'Frameworks: TensorFlow, PyTorch, Scikit-learn', 'LLMOps: Inferencing and building LLM applications (Agents, RAG, MCP)', 'Prompt Engineering', 'Tool usage'],
  },
  {
    name: 'Dev Tools & Frameworks',
    skills: ['Python', 'Flask', 'React.JS', 'API Integration and Management', 'Cloud LLM Providers (Groq/Openrouter/OpenAI)', 'Git', 'GitHub', 'Google Colab', 'VSCode', 'Jupyter', 'Anaconda'],
  },
  {
    name: 'Data Science',
    skills: ['Web Scraping', 'Data Preprocessing', 'Data Visualization'],
  },
  {
    name: 'Cloud & Deployment',
    skills: ['Google Cloud Platform (GCP)', 'Zeet', 'Vercel', 'Gradio'],
  },
  {
    name: 'Languages & Databases',
    skills: ['Python', 'C', 'C++', 'MongoDB', 'SQL'],
  },
  {
    name: 'Other Tools & Concepts',
    skills: ['Hugging Face', 'OpenRouter', 'Groq', 'Ollama', 'MATLAB', 'IoT', 'Fundamentals of Network & Security'],
  },
];

export const certifications: CertificationEntry[] = [
  {
    name: 'Machine Learning Specialization',
    issuer: 'Stanford University & DeepLearning.AI',
    description: 'Hands-on specialization.',
    link: 'https://www.coursera.org/account/accomplishments/specialization/362R74JV7SRB',
  },
  {
    name: 'Accenture Data Analytics Job Simulation',
    issuer: 'Accenture, North America',
    description: 'Job Simulation.',
    link: 'https://shorturl.at/GIWUc',
  },
  {
    name: 'Developing AI Applications with Python and Flask',
    issuer: 'IBM',
    description: 'Coursework.',
    link: 'https://www.coursera.org/account/accomplishments/verify/BM7UQWWYYULC',
  },
  {
    name: 'Guvi NM-AU TNCPL',
    issuer: 'Guvi',
    description: 'AI & ML Workshop.',
    link: 'https://www.guvi.in/verify-certificate?id=7plRN73b139199v206',
  },
  {
    name: 'Python for Data Science, AI and Development',
    issuer: 'IBM',
    description: 'Coursework.',
    link: 'https://www.coursera.org/account/accomplishments/certificate/KUXR9A3Q2DJR',
  },
];

export const competitions: CompetitionEntry[] = [
    {
        name: "Industry-Based Quiz",
        organizer: "Dept. of Science and Humanities & SRM Trichy Campus",
        rank: "Winner",
        description: "IT and Tech Quiz"
    },
    {
        name: "TEQ-A-THON",
        organizer: "T4TEQ Software Solutions",
        rank: "Third-place",
        description: "Coding, OOPs, Software Development"
    },
    {
        name: "AWS x Zelestra ML Ascend Challenge",
        organizer: "HackerEarth & AWSxZelestra",
        rank: "Top 175th position among 1000+",
        description: "ML models to forecast and optimize solar energy production"
    },
    {
        name: "EnviroSolvers Hackathon'23",
        organizer: "Tamil Nadu Pollution Control Board with G20 LiFE",
        rank: "Finalist",
        description: "Presented my ideation of Smart Water Distribution system"
    },
    {
        name: "BIT V-PRAYUKTI'23 - National level Hackathon",
        organizer: "BIT, TamilNadu",
        rank: "Participant",
        description: "IoT Hackathon"
    }
];
