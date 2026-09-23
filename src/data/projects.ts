export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "bank-management-system",
    title: "Bank Management System",
    description:
      "A full-featured banking operations system with an intuitive Streamlit interface, built with modular OOP architecture for maintainability.",
    longDescription:
      "Developed and deployed a Bank Management System using Streamlit, featuring an intuitive interface for banking operations and modular code designed for maintainability. Implements core banking features with object-oriented design patterns and persistent file-based storage.",
    technologies: ["Python", "Streamlit", "OOP", "File Handling"],
    highlights: [
      "Banking operations interface",
      "Modular OOP architecture",
      "Persistent file-based storage",
      "Deployed on Streamlit Cloud",
    ],
    githubUrl: "https://github.com/dhruv-ns/bank-management-system",
    liveUrl:
      "https://bank-management-system-cjcw9yfzs7qzerhy3yg7lf.streamlit.app/",
    featured: true,
  },
  {
    id: "dc-motard-data-analysis",
    title: "Data Analysis — DC Motard Showroom",
    description:
      "Exploratory data analysis on showroom data to clean datasets, identify sales trends, and generate business insights through visualization.",
    longDescription:
      "Performed exploratory data analysis on showroom data to clean datasets, identify sales trends, and generate business insights through data visualization. Leveraged Pandas for data manipulation and Matplotlib for creating informative charts and graphs.",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib"],
    highlights: [
      "Data cleaning & transformation",
      "Exploratory data analysis",
      "Sales trend identification",
      "Business insight visualization",
    ],
    githubUrl:
      "https://github.com/dhruv-ns/Data-Analysis-of-DC-Motard-Showroom",
    featured: true,
  },
  {
    id: "mind-well",
    title: "MindWell",
    description:
      "A TypeScript-based application focused on wellness and mental health tracking, showcasing full-stack development skills.",
    longDescription:
      "Built with TypeScript, MindWell is a modern application that demonstrates proficiency in typed JavaScript development, component architecture, and clean code practices.",
    technologies: ["TypeScript", "React", "Node.js"],
    highlights: [
      "TypeScript architecture",
      "Component-based design",
      "Modern development practices",
    ],
    githubUrl: "https://github.com/dhruv-ns/mind-well",
    featured: true,
  },
  // {
  //   id: "complete-backend-frontend",
  //   title: "Full-Stack Web Application",
  //   description:
  //     "A complete backend-frontend integration project deployed on Vercel, demonstrating end-to-end web development capabilities.",
  //   longDescription:
  //     "A comprehensive full-stack web application showcasing integration between frontend and backend services. Demonstrates RESTful API design, frontend-backend communication, and deployment on Vercel.",
  //   technologies: ["JavaScript", "Node.js", "HTML", "CSS"],
  //   highlights: [
  //     "Full-stack architecture",
  //     "RESTful API integration",
  //     "Vercel deployment",
  //     "End-to-end development",
  //   ],
  //   githubUrl: "https://github.com/dhruv-ns/complete-backend-frontend",
  //   liveUrl: "https://complete-backend-frontend.vercel.app",
  //   featured: false,
  // },
  {
    id: "random-password-generator",
    title: "Random Password Generator",
    description:
      "A secure password generation tool with customizable options, deployed as a web application.",
    longDescription:
      "A web-based password generator that creates secure, randomized passwords with customizable length and character requirements. Focuses on usability and security best practices.",
    technologies: ["JavaScript", "HTML", "CSS"],
    highlights: [
      "Secure randomization",
      "Customizable parameters",
      "Clean UI/UX",
      "Deployed on Vercel",
    ],
    githubUrl: "https://github.com/dhruv-ns/Random-password-generator",
    liveUrl: "https://random-password-generator-pi-nine.vercel.app",
    featured: false,
  },
  {
    id: "snake-game",
    title: "Snake Game",
    description:
      "A classic Snake game built with vanilla JavaScript, demonstrating game loop mechanics and DOM manipulation.",
    longDescription:
      "A browser-based Snake game implementation using vanilla JavaScript. Demonstrates understanding of game loop architecture, collision detection, state management, and responsive canvas rendering.",
    technologies: ["JavaScript", "HTML Canvas", "CSS"],
    highlights: [
      "Game loop architecture",
      "Collision detection",
      "State management",
      "Responsive design",
    ],
    githubUrl: "https://github.com/dhruv-ns/snake-game",
    liveUrl: "https://snake-game-dhruv-ns.vercel.app",
    featured: false,
  },
];
