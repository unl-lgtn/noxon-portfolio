// Mock data for the Noxon portfolio

export const mockProjects = [
  {
    id: 1,
    title: "Automated Workflow Orchestrator",
    description: "A full-stack automation platform integrating n8n with MongoDB to streamline recurring business processes and data workflows.",
    techStack: ["Next.js", "MongoDB", "n8n", "TailwindCSS", "Node.js"],
    category: "automation",
    image: "/api/placeholder/400/250",
    demoUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 2,
    title: "Containerized Portfolio System",
    description: "Docker-based portfolio deployment pipeline with automated CI/CD hooks and environment-specific configurations.",
    techStack: ["Docker", "React", "Node.js", "MongoDB", "GitHub Actions"],
    category: "fullstack",
    image: "/api/placeholder/400/250",
    demoUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 3,
    title: "Reactive Design Playground",
    description: "A Next.js experiment showcasing dynamic UI components with fluid animations and interactive design elements.",
    techStack: ["Next.js", "TailwindCSS", "Framer Motion", "React"],
    category: "frontend",
    image: "/api/placeholder/400/250",
    demoUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 4,
    title: "Data Visualization Dashboard",
    description: "Interactive analytics dashboard built with React and D3.js, featuring real-time data processing and custom visualizations.",
    techStack: ["React", "D3.js", "MongoDB", "Express", "Socket.io"],
    category: "fullstack",
    image: "/api/placeholder/400/250",
    demoUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    id: 5,
    title: "API Integration Toolkit",
    description: "Make (Integromat) powered solution for seamless third-party API integrations with visual workflow builder.",
    techStack: ["Make", "Vue.js", "Express", "MongoDB", "Webhooks"],
    category: "automation",
    image: "/api/placeholder/400/250",
    demoUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    id: 6,
    title: "Minimalist CMS",
    description: "Headless CMS built with modern technologies, focusing on developer experience and content flexibility.",
    techStack: ["Next.js", "MongoDB", "GraphQL", "TailwindCSS"],
    category: "fullstack",
    image: "/api/placeholder/400/250",
    demoUrl: "#",
    githubUrl: "#",
    featured: false
  }
];

export const mockSkills = [
  {
    category: "frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "Vue.js", level: 85 },
      { name: "TailwindCSS", level: 92 },
      { name: "TypeScript", level: 88 }
    ]
  },
  {
    category: "backend",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express", level: 85 },
      { name: "Python", level: 80 },
      { name: "FastAPI", level: 78 },
      { name: "GraphQL", level: 75 }
    ]
  },
  {
    category: "database",
    skills: [
      { name: "MongoDB", level: 92 },
      { name: "PostgreSQL", level: 80 },
      { name: "Redis", level: 75 },
      { name: "Firebase", level: 85 }
    ]
  },
  {
    category: "devops",
    skills: [
      { name: "Docker", level: 88 },
      { name: "AWS", level: 82 },
      { name: "Vercel", level: 90 },
      { name: "GitHub Actions", level: 85 },
      { name: "Nginx", level: 78 }
    ]
  },
  {
    category: "automation",
    skills: [
      { name: "n8n", level: 95 },
      { name: "Make (Integromat)", level: 92 },
      { name: "Zapier", level: 88 },
      { name: "Webhooks", level: 90 }
    ]
  },
  {
    category: "tools",
    skills: [
      { name: "Git", level: 95 },
      { name: "VS Code", level: 92 },
      { name: "Figma", level: 85 },
      { name: "Postman", level: 88 }
    ]
  }
];

export const mockAbout = {
  name: "Noxon",
  title: "Full-Stack Developer & Creative Technologist",
  bio: "I'm a passionate developer who thrives at the intersection of creativity and technology. With a deep love for clean code and intuitive design, I specialize in building scalable web applications that not only function flawlessly but also provide exceptional user experiences.",
  highlights: [
    "5+ years of experience in full-stack development",
    "Expert in React, Next.js, and modern web technologies",
    "Specialized in automation and workflow optimization",
    "Strong background in DevOps and containerization",
    "Passionate about clean, maintainable code"
  ],
  location: "Remote • Global",
  availability: "Available for freelance projects",
  interests: [
    "Web3 & Blockchain",
    "AI/ML Integration",
    "Design Systems",
    "Performance Optimization",
    "Open Source"
  ]
};

export const mockContact = {
  email: "hello@noxon.dev",
  social: {
    github: "https://github.com/noxon",
    linkedin: "https://linkedin.com/in/noxon",
    twitter: "https://twitter.com/noxon_dev"
  },
  availability: "Currently available for new projects",
  responseTime: "Usually responds within 24 hours"
};