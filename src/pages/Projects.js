import React, { useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import "./Projects.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiFirebase, SiMongodb, SiOpenai, SiVercel } from "react-icons/si";

const projects = [
  {
    title: "NFT Gallery",
    description: "Explore trending NFTs and get instant insights.",
    github: "https://github.com/palash4263/NFT-Gallery",
    live: "https://nft-pal.netlify.app/",
    techStack: ["React", "Next.js", "Tailwind CSS", "OpenSea API"],
  },
  {
    title: "AI Dashboard",
    description: "Personalized daily dashboard powered by AI.",
    github: "https://github.com/palash4263/Nueroboard_Final.git",
    live: "https://nueroboard999.netlify.app/",
    techStack: ["React", "OpenAI API", "Tailwind CSS", "Firebase"],
  },
  {
    title: "Sushi Order App",
    description: "We can order sushi from this place.",
    github: "https://github.com/palash4263/sushi.git",
    live: "https://cosmic-medovik-32c439.netlify.app/",
    techStack: ["React", "OpenAI API", "Tailwind CSS", "Firebase"],
  },
  {
    title: "Hangman Game",
    description: "A fun hangman game made with React.",
    github: "https://github.com/palash4263/hangman.git",
    live: "https://sparkling-pudding-69436b.netlify.app/",
    techStack: ["React", "OpenAI API", "Tailwind CSS", "Firebase"],
  },
  {
    title: "Breakout Game",
    description: "A classic breakout game built with React.",
    github: "https://github.com/palash4263/breakout-game.git",
    live: "https://stupendous-puffpuff-50729c.netlify.app/",
    techStack: ["React", "OpenAI API", "Tailwind CSS", "Firebase"],
  },
  {
    title: "Shoe Sense Store",
    description: "A marketplace for shoes with a modern design.",
    github: "https://github.com/palash4263/Shoes-Web.git",
    live: "https://shoesense.netlify.app/",
    techStack: ["React", "OpenAI API", "Tailwind CSS", "Firebase"],
  },
];

export default function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const allTechStack = [
  { name: "React", icon: <FaReact />, link: "https://reactjs.org/" },
  { name: "Next.js", icon: <SiNextdotjs />, link: "https://nextjs.org/" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, link: "https://tailwindcss.com/" },
  { name: "Firebase", icon: <SiFirebase />, link: "https://firebase.google.com/" },
  { name: "Node.js", icon: <FaNodeJs />, link: "https://nodejs.org/" },
  { name: "Express", icon: <FaNodeJs />, link: "https://expressjs.com/" },
  { name: "MongoDB", icon: <SiMongodb />, link: "https://www.mongodb.com/" },
  { name: "OpenAI API", icon: <SiOpenai />, link: "https://platform.openai.com/" },
  { name: "OpenSea API", icon: <FaDatabase />, link: "https://docs.opensea.io/" },
  { name: "Vercel", icon: <SiVercel />, link: "https://vercel.com/" },
];

  return (
    <div className="projects-wrapper">
      <h1 className="projects-heading">
        <span className="emoji">🚀</span> My Projects
      </h1>

      <div className="projects-grid">
        {projects.map((proj, idx) => (
          <ProjectCard key={idx} {...proj} />
        ))}
      </div>

      <div className="tech-stack-wrapper" data-aos="fade-up">
        <h2 className="tech-stack-heading">🛠️ Tech Stack Used</h2>
        <div className="tech-stack-list">
  {allTechStack.map((tech, index) => (
    <a
      key={index}
      href={tech.link}
      target="_blank"
      rel="noreferrer"
      className="tech-badge"
    >
      <span className="tech-icon">{tech.icon}</span>
      <span>{tech.name}</span>
    </a>
  ))}
</div>
      </div>
    </div>
  );
}
