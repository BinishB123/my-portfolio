/**
 * Single source of truth for all portfolio content.
 * Edit this file to personalize — no component changes needed.
 */

import image from '../assets/ChatGPT Image Jun 20, 2026, 12_20_29 AM.png'
import cv from '../assets/binish_b_associate_fullstack_engineer (1).pdf'

export const PROFILE = {
  name: "Binish B",
  role: "Associate Full Stack Developer",
  tagline:
    "I build fast, reliable web applications end to end — from clean React UIs to solid APIs and databases.",
  location: "Kerala, India",
  currentLocation:"Mumbai, India",
  email: "binishb2018@gmail.com",
  phone: "+91 8156800421", // ← your mobile number
  resumeUrl: cv,
  careerStart: "2023", // ← year you started — used to auto-calculate experience
  // Dummy image for preview. Replace with your own: drop a file in /public
  // (e.g. /me.jpg) and set photo: "/me.jpg". Set "" to show the code snippet.
  photo: image,
  // hero status badge — set to null to hide
  status: "Open to opportunities",
  socials: [
    { label: "GitHub", icon: "GitHub", url: "https://github.com/BinishB123?tab=repositories" },
    { label: "LinkedIn", icon: "LinkedIn", url: "#" },
    { label: "LeetCode", icon: "LeetCode", url: "https://leetcode.com/u/binish1905/" },
    { label: "Email", icon: "Mail", url: "mailto:binishb2018@gmail.com" },
  ],
};

export const ABOUT = {
  heading: "About me",
 paragraphs: [
  "Experienced Full Stack Software Engineer specializing in building scalable, high-performance web applications using modern JavaScript technologies. Proficient in both front-end and back-end development, with experience translating wireframes and designs into responsive, user-friendly applications. Skilled at writing clean, maintainable code, debugging complex issues, and collaborating effectively within cross-functional teams to deliver reliable solutions.",

  "I embrace an AI-assisted development workflow, leveraging tools such as Cursor, Claude, ChatGPT, GitHub Copilot, and Lovable to accelerate prototyping, streamline debugging, and improve productivity. Passionate about clean architecture, readable code, and continuous learning, I constantly explore new technologies and best practices to build better software."
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
    skills: ["React", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Redux","Next js"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express" ,"REST APIs", "JWT Auth", "Strapi"],
  },
  {
    title: "Database",
    skills: ["MongoDB", "PostgreSQL", "MySQL"],
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
      "Lovable",
      "v0 by Vercel",
      // "Prompt Engineering",
    ],
  },
];

/** Flat list used for the scrolling tech marquee */
export const TECH_MARQUEE = [
  "React", "Node.js", "Express", "JavaScript", "Tailwind CSS",
  "MongoDB", "PostgreSQL", "REST APIs", "Git", "Docker", "Vite","Next js ","Strapi"
];

export const PROJECTS = [
 {
  title: "Mahindra Manulife Mutual Fund Website Rebuild",
  category: "Full Stack · React.js",
  description:
    "Rebuilt a legacy mutual fund platform into a modern role-based single-page application with complex financial transaction workflows, onboarding processes, third-party integrations, and scalable architecture serving multiple user types.",
  tags: [
    "React.js",
    "Tailwind CSS",
    "Vite",
    "Redux",
    "React Router",
    "Axios",
    "Node.js",
    "MySQL",
    "JWT",
  ],
  color: "from-sky-500 to-indigo-600",
  live: "#",
  code: "#",

  points: [
    "Rebuilt a legacy platform into a modern role-based SPA serving multiple user types with a unified codebase",
    "Developed complex financial transaction workflows including SIP, Lumpsum, Switch, Redeem, STP, and SWP",
    "Built dynamic multi-step onboarding workflows with robust validation and document upload support",
    "Integrated third-party services for KYC, PAN-Aadhaar verification, payment processing, and bank validation",
    "Designed scalable architecture using custom hooks, context-based state management, and service layer abstraction",
    "Implemented secure data handling with JWT authentication and encrypted API communication",
    "Developed search, filter, pagination, and dashboard features for efficient data handling",
    "Built and maintained reusable components across 200+ screens",
    "Ensured WCAG accessibility compliance and responsive design across devices",
  ],
},
 {
  title: "Solar Mining Services",
  category: "Frontend · React.js",
  description:
    "Developed a responsive, CMS-driven corporate website with dynamic content management, product catalogs, career portal functionality, and optimized user experiences powered by Strapi APIs.",

  tags: [
    "React 19",
    "Vite",
    "Tailwind CSS v4",
    "Strapi CMS",
    "React Router v7",
    "REST API",
  ],

  color: "from-emerald-500 to-teal-600",

  live: "https://solarminingservices.com/",
  code: "#",

  points: [
    "Developed a responsive CMS-driven corporate website with dynamic product catalog, career portal with resume uploads, and CSR activity pages using Strapi REST APIs",
    "Architected scalable component structures using custom React hooks, shared utility modules, and the Container/Presentational pattern",
    "Implemented security-hardened forms with XSS sanitization, SQL injection prevention, disposable email blocking, and rate limiting",
    "Optimized performance using debounced scroll listeners, lazy-loaded iframes, and abortable fetch requests",
    "Built engaging user experiences with advanced UI interactions, including Lottie animations and Swiper sliders",
    "Ensured responsive design and maintainable code across all pages and components",
  ],
},
  {
  title: "FixitHub Car & Bike Service Booking Platform",

  category: "Full Stack · MERN",

  description:
    "Built a full-stack vehicle service booking platform connecting users with nearby workshops, featuring real-time communication, location-based services, online payments, and role-based management tools.",

  tags: [
    "MongoDB",
    "Express.js",
    "React",
    "TypeScript",
    "Redux",
    "Node.js",
    "Socket.IO",
    "WebRTC",
    "Mapbox",
    "Stripe",
    "Cloudinary",
    "JWT",
  ],

  color: "from-orange-500 to-red-600",

  live: "#",
  code: "#",

  points: [
    "Implemented secure JWT authentication with role-based access control for users and service providers",
    "Added real-time chat and audio calling using Socket.IO and WebRTC for customer-provider communication",
    "Integrated Mapbox for workshop discovery and roadside emergency assistance with location-based services",
    "Enabled Stripe payments and Cloudinary image storage for seamless transactions and media management",
    "Developed management tools for service providers, bookings, and user data administration",
    "Built a review and rating system to collect user feedback and improve service quality",
  ],
},
 {
  title: "SoleLuxury E-commerce Footwear Platform",

  category: "Full Stack · Node.js",

  description:
    "Built a full-stack e-commerce platform for footwear shopping with secure authentication, payment integration, product management, and a seamless shopping experience for users and administrators.",

  tags: [
    "MongoDB",
    "Express.js",
    "EJS",
    "Node.js",
    "Razorpay",
    "Nodemailer",
    "Multer",
  ],

  color: "from-purple-500 to-pink-600",

  live: "#",
  code: "#",

  points: [
    "Implemented authentication, email verification, and password reset workflows using Nodemailer",
    "Developed cart and wishlist management with real-time updates for a seamless shopping experience",
    "Built an admin panel for product, category, and inventory management with full CRUD operations",
    "Added advanced product search, filters, offers, and category-based discount management",
    "Integrated Razorpay payments with a wallet management system for refunds and future purchases",
    "Used Multer for efficient image uploads and media storage management across the platform",
  ],
},
];

/**
 * Mini / smaller projects — shown as a compact grid that scales to ANY number.
 * Add as many as you like; the grid grows automatically.
 */
export const MINI_PROJECTS = [
  {
  title: "FullStack Visualized",
  description:
    "An interactive, beginner-friendly web application that visualizes how the modern web stack works under the hood — from JavaScript engine internals and memory management to the Node.js runtime, React internals, cloud infrastructure, CI/CD pipelines, and production deployment. Features animated step-by-step visualizations, plain-English explanations, a searchable glossary, and FAQs to help learners understand complex concepts visually.",
  tags: ["React", "Vite", "JavaScript", "Node.js", "CI/CD", "Cloud"],
  live: "https://fullstack-visualized-a4kw.vercel.app",
  code: "https://github.com/BinishB123/fullstack-visualized",
},

  {
    title: "Speedo",
    description:
      "A full-stack speed typing application that measures typing speed, accuracy, and stores user performance statistics using a Node.js and MongoDB backend.",
    tags: ["React", "Node.js", "MongoDB", "TypeScript"],
    live: "#",
    code: "#",
  },

  {
    title: "Image Gallery",
    description:
      "A full-stack image gallery application with image uploads, search functionality, filtering, and optimized media management powered by Node.js and MongoDB.",
    tags: ["React", "Node.js", "MongoDB", "REST API", "Tailwind CSS"],
    live: "#",
    code: "#",
  },

  {
    title: "Home Loan Calculator",
    description:
      "A full-stack home loan calculator that calculates EMI, total interest, and repayment schedules, with user history and saved calculations managed through Node.js and MongoDB.",
    tags: ["React", "Node.js", "MongoDB", "JavaScript"],
    live: "#",
    code: "#",
  },

  {
    title: "SRA Government Website",
    description:

  "A responsive government landing page built to showcase public information, schemes, announcements, and important services with a clean and accessible user interface.",    tags: ["React", "Tailwind CSS"],
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
    company: "FIRST ECONOMY",
    location: "Mumbai, India", // e.g. "Bengaluru, India" or "Remote"
    period: "2025 May  – Present",
   points: [
  "Worked on multiple client projects and in-house full stack products across different domains",
  "Collaborated with designers and backend developers to build scalable web applications",
  "Independently handled end-to-end development of features, from requirement analysis to deployment",
  "Attended client meetings to understand requirements and provide technical inputs",
  "Translated business requirements into maintainable frontend features using React.js and Redux",
  "Developed responsive, pixel-perfect user interfaces using Tailwind CSS",
  "Integrated REST APIs and third-party services for various application features",
  "Built and maintained reusable component libraries to ensure consistency across applications",
  "Ensured applications followed WCAG accessibility compliance for better usability",
  "Utilized AI-assisted development tools to improve productivity and streamline development",
  "Worked on-site at Unico Connect client locations to support project delivery, collaborate closely with stakeholders, and ensure timely completion of features",
],
  },
  {
  role: "Full Stack Developer Intern",
  company: "Brototype",
  location: "Kochi, Kerala, India",
  period: "2023 November – 2025 April",
  points: [
    "Completed a self-learning based full stack development program with hands-on projects",
    "Built responsive web applications using React.js, Node.js, Express.js, and MongoDB",
    "Implemented REST APIs and integrated frontend applications with backend services",
    "Practiced data structures, algorithms, and problem-solving regularly",
    "Worked on authentication, authorization, and state management in real-world projects",
    "Collaborated with peers during code reviews and technical discussions",
    "Developed reusable UI components and followed clean coding practices",
    "Gained experience with Git, GitHub, and deployment workflows",
  ],
},
];

export const NAV_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
