export interface Skill {
  name: string;
  icon: string;
  level: number; // 0-100
}
export interface SkillCategory {
  id: string;
  title: string;
  skills: Skill[];
}
export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Linguagens",
    skills: [
      { name: "TypeScript", icon: "🔷", level: 90 },
      { name: "Java", icon: "☕", level: 88 },
      { name: "JavaScript", icon: "🟨", level: 85 },
      { name: "Python", icon: "🐍", level: 60 },
      { name: "PHP", icon: "🐘", level: 50 },
      { name: "Shell/Bash", icon: "🐧", level: 65 },
      { name: "HTML/CSS", icon: "🌐", level: 92 },
    ],
  },
  {
    id: "frameworks",
    title: "Frameworks & Libs",
    skills: [
      { name: "Next.js", icon: "▲", level: 88 },
      { name: "React", icon: "⚛️", level: 85 },
      { name: "NestJS", icon: "🐈", level: 75 },
      { name: "Spring Boot", icon: "🍃", level: 82 },
      { name: "Tailwind CSS", icon: "🎨", level: 90 },
      { name: "Vite", icon: "⚡", level: 70 },
      { name: "Express.js", icon: "🚂", level: 72 },
    ],
  },
  {
    id: "devops",
    title: "DevOps & Infra",
    skills: [
      { name: "Docker", icon: "🐳", level: 80 },
      { name: "Git/GitHub", icon: "🔀", level: 90 },
      { name: "Linux", icon: "🐧", level: 78 },
      { name: "Vercel", icon: "▲", level: 85 },
      { name: "Firebase", icon: "🔥", level: 60 },
      { name: "Shell Scripting", icon: "📜", level: 65 },
    ],
  },
  {
    id: "iot",
    title: "IoT & Smart Cities",
    skills: [
      { name: "Raspberry Pi", icon: "🍓", level: 75 },
      { name: "Home Assistant", icon: "🏠", level: 70 },
      { name: "Node-RED", icon: "🔴", level: 68 },
      { name: "MQTT", icon: "📡", level: 65 },
      { name: "InterSCity", icon: "🏙️", level: 72 },
      { name: "Alexa Skills", icon: "🔊", level: 55 },
    ],
  },
];
