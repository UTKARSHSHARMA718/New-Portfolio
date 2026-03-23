export type ExperienceItem = {
  company: string;
  role: string;
  date: string;
  highlights: string[];
};

export type SkillCategory = {
  title: string;
  items: string;
};

export const experiences: ExperienceItem[] = [
  {
    company: "Unthinkable Solutions",
    role: "Frontend Developer",
    date: "April 2023 - Feb 2024",
    highlights: [
      "Used Ant Design, Material UI, and similar UI frameworks to reduce development time by 25% across projects.",
      "Worked on hybrid boilerplate projects using React Native + React.js, improving cross-platform compatibility by 80%.",
      "Used Trello, Locomo, Figma, and Zeplin to improve collaboration, project flow, and design handoff.",
      "Worked extensively with React Context, Redux Toolkit, Redux Saga, React Query, Google Maps, drag-and-drop, and chart-based UI.",
      "Contributed to data-intensive applications, especially in the CMIB Admin project, handling complex workflows effectively.",
      "Developed a dynamic admin panel supporting 6 distinct administrative roles.",
      "Implemented RBAC to enable secure and efficient permission management across multiple user roles.",
    ],
  },
  {
    company: "HestaBit",
    role: "Backend / Full-Stack Engineer · Technical Lead",
    date: "May 2024 - Present",
    highlights: [
      "Led end-to-end architecture and backend development of multiple large-scale products, including system design, cloud infrastructure, scalability planning, and production deployments.",
      "Designed and implemented a scalable event-driven architecture using Apache Kafka, AWS EventBridge, SQS (DLQ), and NestJS, processing 5000+ events per minute.",
      "Built real-time audio/video processing pipelines using AWS IVS, FFmpeg, Python, Lambda, and Lambda@Edge for live stream manipulation, seek-back playback, and thumbnail caching.",
      "Spearheaded development of a cross-platform Electron.js desktop application for macOS and Windows with real-time transcription, speaker diarization, global search, and secure offline processing.",
      "Implemented asynchronous task processing using BullMQ, optimized large file workflows up to 500MB, and integrated Google Drive, Stripe, and Cloudflare R2, reducing infrastructure cost by 40%.",
      "Architected and maintained a unified TypeScript monorepo integrating Next.js frontend, NestJS / Node.js backend, Python services, and Electron.",
      "Acted as technical lead and primary client liaison, owning architecture discussions, estimations, solution design, demos, mentoring, and technical interviews.",
      "Drove performance optimization initiatives including local PDF generation with 5x faster exports, offline Whisper transcription, and ML model benchmarking.",
    ],
  },
];

export const achievements: string[] = [
  'Received the "Bugs Management" Award for exceptional code quality, lowest bug count, and reliable project delivery.',
  "Scored the highest marks (98/100) across the software department in a Request for Resources interview.",
  "Secured a position among the Top 3 in the Information Technology department.",
  "Recognized as a two-time topper in the NPTEL course.",
  "Ranked among the Top 5% of users and earned the title of Knight on LeetCode.",
  "Achieved a 4-star rating on CodeChef with a score of 1882+.",
];

export const skills: SkillCategory[] = [
  {
    title: "Languages",
    items: "HTML, CSS, JavaScript, TypeScript, SQL, Python",
  },
  {
    title: "Databases",
    items: "MongoDB, PostgreSQL, Redis",
  },
  {
    title: "Frameworks / Libraries",
    items: "React.js, Next.js, Express.js, NestJS, Node.js, Redux, Redux Toolkit, Tailwind CSS, Material UI, Ant Design, Electron.js",
  },
  {
    title: "Tools / Platforms",
    items: "VS Code, Postman, Git, GitHub, Bitbucket, Jira, Trello, Vercel",
  },
  {
    title: "Concepts / Others",
    items: "RESTful APIs, JWT Authentication, Webpack, UI / UX Design, Unit Testing (Jest)",
  },
];