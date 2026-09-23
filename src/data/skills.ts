export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["C++", "Java", "Python", "C", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Development",
    skills: ["Node.js", "React", "Full-Stack Development", "REST APIs"],
  },
  {
    title: "Core Computer Science",
    skills: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering",
    ],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "Streamlit", "Vercel"],
  },
];
