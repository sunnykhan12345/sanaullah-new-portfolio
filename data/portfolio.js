export const profile = {
  name: "Sana Ullah",
  role: "Frontend Developer",
  headline:
    "Premium frontend engineering for dashboards, SaaS products, and business platforms.",
  intro:
    "I build responsive, high-performance frontend systems for SaaS products, admin dashboards, landing pages, booking platforms, CRM systems, and business workflow applications using React.js, Next.js, Tailwind CSS, and modern UI libraries.",
  email: "sunnykhansadda@gmail.com",
  phone: "+92 3085342445",
  location: "Pakistan - Available for Gulf, UAE, KSA, Qatar & Remote Projects",
  availability: "Available for freelance, remote, and relocation opportunities",
  education: "BSCS, Agriculture University Peshawar (AUP), 2024",
  cvUrl: "/assets/pakdev-cv.pdf",
  socials: [
    {
      name: "GitHub",
      href: "https://github.com/sunnykhan12345",
      icon: "github",
    },
    { name: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
    { name: "WhatsApp", href: "https://wa.me/923085342445", icon: "whatsapp" },
  ],
};

export const navLinks = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Services", href: "#services", id: "services" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export const stats = [
  {
    value: 15,
    suffix: "+",
    label: "Frontend Projects",
    description: "Business-ready UI systems",
  },
  {
    value: 10,
    suffix: "+",
    label: "Dashboard Systems",
    description: "CRM, admin, audit, lead flows",
  },
  // {
  //   value: 100,
  //   suffix: "%",
  //   label: "Responsive UI",
  //   description: "Mobile-first implementation",
  // },
  {
    value: 7,
    suffix: "+",
    label: "Landing Pages",
    description: "AI workflows and dashboards",
  },
  {
    value: 3,
    suffix: "+",
    label: "Years Professional Experience",
    // description: "English, French, Arabic-ready UI",
  },
];

export const aboutHighlights = [
  "Frontend development for scalable business platforms",
  "Enterprise dashboard UI and CRM workflow design",
  "Multilingual websites with clean localization patterns",
  "Responsive design for mobile, tablet, laptop, and 4K screens",
  "API-driven interfaces with strong loading and error states",
  "Performance optimization for fast, production-grade UX",
];

export const skillGroups = [
  {
    title: "Frontend",
    description: "Core web technologies and modern application frameworks.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Tailwind CSS",
      "React.js",
      "Next.js",
    ],
  },
  {
    title: "Libraries",
    description:
      "Reusable UI systems, accessible primitives, and animation tools.",
    skills: [
      "Tailwind CSS",
      "Shadcn UI",
      "Bootstrap",
      // "Radix UI",
      "Responsive Design",
      "Figma to Code",
      "Framer Motion",
      "Swiper",
      // "React Slick",
    ],
  },
  {
    title: "Tools",
    description: "Production workflows, integrations, and deployment tooling.",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Vercel",
      "Jira",
      "Trello",
      "MongoDB",
      "Compass",
      "APIs",
      "Figma",
      "swigger",
    ],
  },
];

export const projectFilters = [
  "All",
  "Dashboard",
  "SaaS",
  "Booking",
  "Landing Page",
  "AI",
  "Multilingual",
];

export const projects = [
  {
    title: "CRM Dashboard",
    category: "Dashboard",
    image: "/assets/projects/crm-dashboard.svg",
    description:
      "A premium CRM dashboard with lead tracking, status pipelines, responsive tables, actionable cards, and enterprise analytics UI.",
    stack: ["Next.js", "Tailwind", "Shadcn UI", "APIs"],
    liveUrl: "#contact",
    githubUrl: "https://github.com/pakdevstudios",
  },
  {
    title: "Lead Management System",
    category: "SaaS",
    image: "/assets/projects/lead-management.svg",
    description:
      "A structured lead workflow platform from new lead to closed deal with filters, stages, detail pages, and role-based UI patterns.",
    stack: ["React", "Next.js", "Framer Motion", "Tailwind"],
    liveUrl: "#contact",
    githubUrl: "https://github.com/pakdevstudios",
  },
  {
    title: "AI Audit Dashboard",
    category: "AI",
    image: "/assets/projects/ai-audit-dashboard.svg",
    description:
      "AI-powered audit interface with scorecards, progress steps, report previews, document flows, and responsive decision panels.",
    stack: ["Next.js", "AI UI", "Shadcn", "Charts"],
    liveUrl: "#contact",
    githubUrl: "https://github.com/pakdevstudios",
  },
  {
    title: "Appointment Booking System",
    category: "Booking",
    image: "/assets/projects/appointment-booking.svg",
    description:
      "Modern booking interface with available slots, status badges, calendar logic, mobile-friendly cards, and clear appointment grouping.",
    stack: ["React", "APIs", "Tailwind", "UX"],
    liveUrl: "#contact",
    githubUrl: "https://github.com/pakdevstudios",
  },
  {
    title: "Admin Panel",
    category: "SaaS",
    image: "/assets/projects/admin-panel.svg",
    description:
      "Enterprise admin panel with user management, audit logs, data tables, permission-aware navigation, and clean dark UI patterns.",
    stack: ["Next.js", "Shadcn UI", "Radix", "Vercel"],
    liveUrl: "#contact",
    githubUrl: "https://github.com/pakdevstudios",
  },
  {
    title: "Travel / Umrah Website",
    category: "Landing Page",
    image: "/assets/projects/travel-umrah.svg",
    description:
      "Premium travel website concept with strong visual hierarchy, package sections, CTA flows, and conversion-focused responsive design.",
    stack: ["Next.js", "Tailwind", "SEO", "Motion"],
    liveUrl: "#contact",
    githubUrl: "https://github.com/pakdevstudios",
  },
  {
    title: "Multilingual Platform",
    category: "Multilingual",
    image: "/assets/projects/multilingual-platform.svg",
    description:
      "Business platform prepared for multilingual UX, localized labels, language-safe layouts, and scalable translation structures.",
    stack: ["Next.js", "i18n", "React", "Tailwind"],
    liveUrl: "#contact",
    githubUrl: "https://github.com/pakdevstudios",
  },
];

export const caseStudies = [
  {
    title: "Business Dashboard Simplification",
    problem:
      "Complex CRM screens were overloaded with dense data, unclear actions, and weak mobile usability.",
    solution:
      "Designed clear cards, responsive data tables, sticky action zones, filter states, and role-specific dashboard flows.",
    outcome:
      "Cleaner workflows, faster scanning, and better decision-making for managers and operations teams.",
  },
  {
    title: "Responsive SaaS Interface",
    problem:
      "Dashboard content worked on desktop but became crowded on tablets and mobile devices.",
    solution:
      "Created adaptive grids, mobile cards, consistent spacing, horizontal table strategies, and touch-friendly controls.",
    outcome:
      "A consistent enterprise experience across mobile, tablet, laptop, and large displays.",
  },
  {
    title: "Multilingual Platform UI",
    problem:
      "English-first interfaces broke layout when translated to French or other longer languages.",
    solution:
      "Implemented translation-safe components, flexible labels, reusable text keys, and layout patterns that tolerate content growth.",
    outcome:
      "A scalable UI foundation for international business platforms and Gulf-market websites.",
  },
  {
    title: "Performance and UX Optimization",
    problem:
      "Users experienced slow sections, layout shifts, and unclear feedback during API loading states.",
    solution:
      "Added skeleton loaders, optimized images, reusable state components, reduced animation noise, and improved interaction feedback.",
    outcome:
      "Faster perceived performance, smoother navigation, and more professional product experience.",
  },
];

export const services = [
  {
    title: "Frontend Development",
    description:
      "Production-ready React and Next.js frontend development with clean, reusable components.",
    icon: "code",
  },
  {
    title: "Dashboard UI",
    description:
      "Premium admin dashboards, CRM screens, metrics pages, forms, tables, and role-based workflows.",
    icon: "dashboard",
  },
  {
    title: "SaaS Applications",
    description:
      "Modern SaaS product interfaces with onboarding, billing-ready layouts, settings, and responsive flows.",
    icon: "saas",
  },
  {
    title: "Responsive Design",
    description:
      "Mobile-first layouts that work cleanly across phones, tablets, laptops, ultrawide, and 4K screens.",
    icon: "responsive",
  },
  {
    title: "API Integration",
    description:
      "Frontend API integration with loading states, validation, errors, filters, pagination, and secure flows.",
    icon: "api",
  },
  {
    title: "AI Interface Design",
    description:
      "AI dashboards, audit reports, prompt-driven workflows, status screens, and intelligent UI experiences.",
    icon: "ai",
  },
  {
    title: "Admin Panels",
    description:
      "Clean admin systems for users, projects, documents, appointments, leads, and business operations.",
    icon: "panel",
  },
];

export const experiences = [
  {
    period: "Jan 2026 - Present",
    title: "Frontend Developer",
    company: "Pak Dev Studio",

    description:
      "Working as a frontend developer on enterprise-level dashboards, CRM systems, SaaS platforms, and marketplace applications with modern UI/UX practices.",

    points: [
      "Developed scalable dashboards (CRM, admin, analytics systems)",
      "Built booking and appointment management interfaces",
      "Created reusable component-based architecture in React/Next.js",
      "Integrated REST APIs with authentication and dynamic data flows",
      "Improved performance and responsiveness across devices",
      "Collaborated with backend and design teams for production-ready features",
    ],
  },

  {
    period: "Jan 2024 - Dec 2025",
    title: "Frontend Developer",
    company: "Marvellex Software Solutions",

    description:
      "Worked on enterprise web applications, dashboards, and MERN-based frontend systems with focus on responsive UI and API integration.",

    points: [
      "Built responsive admin dashboards and business web applications",
      "Developed reusable UI components using React.js and Next.js",
      "Integrated REST APIs for dynamic workflows and authentication",
      "Worked on CRM-style systems and internal business tools",
      "Implemented clean UI/UX with Tailwind CSS and Bootstrap",
    ],
  },

  {
    period: "Apr 2024 - Jun 2024",
    title: "Frontend Developer Intern",
    company: "Marvellex Software Solutions",

    description:
      "Internship focused on frontend development, UI implementation, and real-world project exposure in a professional environment.",

    points: [
      "Converted Figma designs into responsive React components",
      "Assisted in building small dashboard features and UI modules",
      "Learned API integration and state management basics",
      "Improved responsive design and component structuring skills",
    ],
  },

  {
    period: "2020 - 2024",
    title: "Bachelor of Science in Computer Science (BSCS)",
    company: "Agriculture University Peshawar (AUP)",

    description:
      "Completed degree in Computer Science with focus on software engineering, databases, and web development.",

    points: [
      "Software engineering fundamentals",
      "Database systems (SQL, DB design)",
      "Web development projects",
      "Final year frontend-based project work",
    ],
  },
];

export const testimonials = [
  {
    name: "Ahmed Al-Farsi",
    role: "Operations Manager",
    company: "Gulf Business Group",
    image: "/assets/testimonials/client-1.svg",
    feedback:
      "The dashboard UI felt premium, structured, and very easy for our team to use. The responsive behavior was especially strong.",
  },
  {
    name: "Sara Khan",
    role: "Product Lead",
    company: "CRM Startup",
    image: "/assets/testimonials/client-2.svg",
    feedback:
      "PakDev converted complex workflows into a clean product interface with strong attention to detail and production quality.",
  },
  {
    name: "Omar Nadeem",
    role: "Founder",
    company: "Travel Platform",
    image: "/assets/testimonials/client-3.svg",
    feedback:
      "The website design looked modern and professional for our market. The spacing, CTA flow, and mobile design were excellent.",
  },
];

export const contactItems = [
  {
    label: "Email",
    value: "pakdevstudios@gmail.com",
    href: "mailto:pakdevstudios@gmail.com",
    icon: "mail",
  },
  {
    label: "WhatsApp",
    value: "+92 300 0000000",
    href: "https://wa.me/923000000000",
    icon: "whatsapp",
  },
  {
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: "https://linkedin.com",
    icon: "linkedin",
  },
  {
    label: "GitHub",
    value: "github.com/pakdevstudios",
    href: "https://github.com/pakdevstudios",
    icon: "github",
  },
  {
    label: "Location",
    value: "Pakistan - Gulf remote ready",
    href: "#contact",
    icon: "location",
  },
  {
    label: "Availability",
    value: "Open to remote and relocation",
    href: "#contact",
    icon: "availability",
  },
];
