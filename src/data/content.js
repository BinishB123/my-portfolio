/**
 * Single source of truth for all portfolio content.
 * Edit this file to personalize — no component changes needed.
 */

export const PROFILE = {
  name: "Your Name",
  role: "Associate Full Stack Developer",
  tagline:
    "I build fast, reliable web applications end to end — from clean React UIs to solid APIs and databases.",
  location: "Bengaluru, India",
  email: "hello@yourname.dev",
  phone: "+91 98765 43210", // ← your mobile number
  resumeUrl: "#",
  careerStart: "2023", // ← year you started — used to auto-calculate experience
  // Dummy image for preview. Replace with your own: drop a file in /public
  // (e.g. /me.jpg) and set photo: "/me.jpg". Set "" to show the code snippet.
  photo: "https://i.pravatar.cc/500?img=12",
  // hero status badge — set to null to hide
  status: "Open to opportunities",
  socials: [
    { label: "GitHub", icon: "GitHub", url: "#" },
    { label: "LinkedIn", icon: "LinkedIn", url: "#" },
    { label: "LeetCode", icon: "LeetCode", url: "https://leetcode.com/your-username" },
    { label: "Email", icon: "Mail", url: "mailto:hello@yourname.dev" },
  ],
};

export const ABOUT = {
  heading: "About me",
  paragraphs: [
    "I'm an Associate Full Stack Developer who enjoys turning ideas into working products. I work across the stack — building responsive front-ends with React and reliable back-ends with Node.js, REST APIs, and databases.",
    "With AI booming, I build using an AI-assisted workflow — leveraging tools like Cursor, Claude, ChatGPT, GitHub Copilot and Lovable to prototype faster, debug smarter, and ship quality features. I care about clean, readable code and I'm always learning new ways to build better.",
  ],
  highlights: [
    "End-to-end feature development (frontend + backend)",
    "REST API design & integration",
    "AI-assisted development for faster, smarter delivery",
    "Writing clean, maintainable, reusable code",
  ],
};

/**
 * Skills grouped by stack area — perfect for full-stack roles.
 */
export const SKILL_GROUPS = [
  {
    title: "Frontend",
    skills: ["React", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Redux"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "REST APIs", "JWT Auth", "Strapi"],
  },
  {
    title: "Database",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Prisma"],
  },
  {
    title: "Tools & DevOps",
    skills: ["Git & GitHub", "Postman", "Docker", "Vite", "Vercel"],
  },
  {
    title: "AI-Assisted Dev",
    skills: [
      "Cursor",
      "Claude",
      "ChatGPT (GPT-4o)",
      "GitHub Copilot",
      "Lovable",
      "v0 by Vercel",
      "Prompt Engineering",
    ],
  },
];

/** Flat list used for the scrolling tech marquee */
export const TECH_MARQUEE = [
  "React", "Node.js", "Express", "JavaScript", "Tailwind CSS",
  "MongoDB", "PostgreSQL", "REST APIs", "Git", "Docker", "Vite",
];

export const PROJECTS = [
  {
    title: "Task Management App",
    category: "Full Stack · MERN",
    description:
      "A team task tracker with auth, role-based access, and real-time updates. Built with React, Node/Express and MongoDB.",
    tags: ["React", "Node.js", "MongoDB", "JWT"],
    color: "from-sky-500 to-indigo-600",
    live: "#",
    code: "#",
  },
  {
    title: "E-commerce Platform",
    category: "Full Stack · Web",
    description:
      "Product catalog, cart, and checkout flow with a REST API backend and an admin dashboard.",
    tags: ["React", "Express", "PostgreSQL", "Stripe"],
    color: "from-emerald-500 to-teal-600",
    live: "#",
    code: "#",
  },
  {
    title: "Blog / CMS Website",
    category: "Frontend · Headless CMS",
    description:
      "A content-driven site consuming a Strapi CMS API, with clean SEO and responsive design.",
    tags: ["React", "Strapi", "REST API"],
    color: "from-fuchsia-500 to-purple-600",
    live: "#",
    code: "#",
  },
  {
    title: "Realtime Chat App",
    category: "Full Stack · WebSockets",
    description:
      "One-to-one and group chat with live messaging using Socket.IO, plus message history.",
    tags: ["React", "Socket.IO", "Node.js"],
    color: "from-orange-500 to-rose-600",
    live: "#",
    code: "#",
  },
];

/**
 * Mini / smaller projects — shown as a compact grid that scales to ANY number.
 * Add as many as you like; the grid grows automatically.
 */
export const MINI_PROJECTS = [
  {
    title: "Weather App",
    description: "Live weather with a clean UI, powered by a public REST API.",
    tags: ["React", "API"],
    live: "#",
    code: "#",
  },
  {
    title: "Expense Tracker",
    description: "Track income & expenses with charts and local storage.",
    tags: ["React", "Charts"],
    live: "#",
    code: "#",
  },
  {
    title: "URL Shortener",
    description: "Shorten and redirect links with a Node + MongoDB backend.",
    tags: ["Node.js", "MongoDB"],
    live: "#",
    code: "#",
  },
  {
    title: "Quiz App",
    description: "Timed multiple-choice quizzes with live score tracking.",
    tags: ["React"],
    live: "#",
    code: "#",
  },
  {
    title: "Notes REST API",
    description: "CRUD notes API with JWT authentication and validation.",
    tags: ["Express", "JWT"],
    live: "#",
    code: "#",
  },
  {
    title: "Portfolio Website",
    description: "This site — built with React, Vite and Tailwind CSS.",
    tags: ["React", "Tailwind"],
    live: "#",
    code: "#",
  },
];

/**
 * Experience timeline. Add/remove entries as needed.
 */
export const EXPERIENCE = [
  {
    role: "Associate Full Stack Developer",
    company: "Your Company",
    location: "City, Country", // e.g. "Bengaluru, India" or "Remote"
    period: "2024 – Present",
    points: [
      "Develop and maintain full-stack features across React front-ends and Node.js APIs.",
      "Integrate REST APIs and work with databases to deliver complete features.",
      "Collaborate with the team on code reviews, bug fixes, and improvements.",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Previous Company",
    location: "City, Country",
    period: "2023 – 2024",
    points: [
      "Built UI components and helped wire them to backend endpoints.",
      "Learned production workflows: Git, code reviews, and deployments.",
    ],
  },
];

export const NAV_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
