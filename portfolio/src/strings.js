// src/strings.js

export const colorSchemes = ["aurora", "violet", "cyber", "sunset"];

export const brand = {
  initials: "RK",
  name: "Ryan Koch",
  homeAriaLabel: "Go to homepage",
};

export const navigation = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const hero = {
  eyebrow: "Open to React Native, mobile, and frontend engineering roles",
  title: "I build production-ready mobile apps with",
  titleHighlight: "React Native and TypeScript.",
  description:
    "I’m a mobile-focused engineer with experience building, debugging, and shipping cross-platform iOS and Android applications. I work across product features, UI implementation, release support, and the native issues that come with real mobile apps.",
  actions: [
    {
      label: "View Projects",
      href: "#projects",
      variant: "primary",
      external: false,
    },
    {
      label: "View Resume",
      href: "/resume.pdf",
      variant: "secondary",
      external: true,
    },
    {
      label: "Contact Me",
      href: "#contact",
      variant: "secondary",
      external: false,
    },
  ],
};

export const professionalHighlights = {
  ariaLabel: "Professional highlights",
  cardLabel: "What I Do Best",
  title: "Mobile engineering for real-world products",
  description:
    "React Native, TypeScript, native iOS/Android troubleshooting, reusable UI systems, release workflows, and production mobile features built for real users.",
  stats: [
    {
      value: "6+",
      label: "Years Building Software",
    },
    {
      value: "iOS",
      label: "Mobile Delivery",
    },
    {
      value: "Android",
      label: "Mobile Delivery",
    },
    {
      value: "UX",
      label: "Product-Focused Engineering",
    },
  ],
};

export const about = {
  title: "Looking for a mobile engineer who can help ship?",
  paragraphs: [
    "I’m a React Native Mobile Engineer focused on building reliable, production-ready iOS and Android applications. My work usually sits between product development, UI implementation, mobile architecture, release support, and cross-platform debugging.",
    "I like building software that feels simple on the surface and is maintainable underneath. Whether I’m improving an existing app, creating reusable components, tracking down a stubborn native issue, or taking a feature from idea to release, I care about making the end result useful, stable, and easy to work on.",
  ],
};

export const skillsSection = {
  title: "Technical toolkit",
  groups: [
    {
      category: "Mobile Engineering",
      items: [
        "React Native",
        "TypeScript",
        "iOS",
        "Android",
        "Expo",
        "App Store Releases",
        "Google Play Releases",
      ],
    },
    {
      category: "Frontend",
      items: ["React", "JavaScript", "HTML", "CSS", "Responsive UI"],
    },
    {
      category: "Native & Release Tooling",
      items: ["Xcode", "Android Studio", "CocoaPods", "Gradle", "CI/CD"],
    },
    {
      category: "Backend, Data & AI",
      items: ["APIs", "Supabase", "PostgreSQL", "Firebase", "OpenAI API"],
    },
  ],
};

export const projectsSection = {
  title: "Selected work",
  repositoryCta: "View repository →",
  projects: [
    {
      title: "Alliance Ops",
      description:
        "A collaborative React Native operations dashboard with shared member data, role-based workflows, event tracking, daily stats, and assignment history.",
      impact:
        "Built with real multi-user workflows, mobile-first screens, and Supabase-backed persistence",
      tech: ["React Native", "TypeScript", "Expo", "Supabase", "PostgreSQL"],
      link: "https://github.com/ryankoch13/last-war-tracker",
    },
    {
      title: "Ryn",
      description:
        "A cross-platform mobile chat app focused on clean onboarding, simple connection flows, and approachable messaging interactions.",
      impact:
        "Explores mobile UX, authentication flows, chat UI, and cross-platform product structure",
      tech: ["React Native", "TypeScript", "iOS", "Android"],
      link: "https://github.com/ryankoch13/ryn",
    },
    {
      title: "ChatGPT React Native",
      description:
        "A React Native starter project for building AI-powered mobile experiences with reusable UI patterns and OpenAI API integration.",
      impact:
        "Shows practical AI integration patterns for mobile apps without exposing API keys in the client",
      tech: ["React Native", "OpenAI API", "Express", "Next.js"],
      link: "https://github.com/ryankoch13/chatgpt-react-native",
    },
  ],
};

export const contact = {
  title: "Let’s build something useful.",
  description:
    "I’m open to React Native, mobile, and frontend engineering roles where I can help build reliable products, improve cross-platform experiences, and contribute quickly to production codebases.",
  actions: [
    {
      label: "Email Me",
      href: "mailto:ryan@ryankoch.me",
      variant: "primary",
      external: false,
    },
    {
      label: "View Resume",
      href: "/resume.pdf",
      variant: "secondary",
      external: true,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ryan-koch13/",
      variant: "secondary",
      external: true,
    },
    {
      label: "GitHub",
      href: "https://github.com/ryankoch13",
      variant: "secondary",
      external: true,
    },
  ],
};