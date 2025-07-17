import React, { useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import "./Projects.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiTailwindcss,
  SiOpenai,
} from "react-icons/si";


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
 
  return (
    <div className="projects-techstack-container">
      <div className="projects-wrapper">
        <motion.h1
          className="projects-heading"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{
            y: -400,
            x: 100,
            rotate: 20,
            opacity: 0,
            transition: { duration: 1, ease: "easeIn" }
          }}
        >
          <span className="emoji">🚀</span> My Projects
        </motion.h1>

        <div className="projects-grid">
          {projects.map((proj, idx) => (
            <ProjectCard key={idx} {...proj} />
          ))}
        </div>
      </div>
      {/* Skill Showcase */}
      <section className="tech-stack-section">
        <h2 className="tech-stack-heading">🚀 TECH STACK I WORK WITH</h2>
        <div className="tech-icons-grid">
          {[
            { Icon: FaReact, label: "React" },
            { Icon: FaNodeJs, label: "Node.js" },
            { Icon: SiNextdotjs, label: "Next.js" },
            { Icon: SiMongodb, label: "MongoDB" },
            { Icon: SiTailwindcss, label: "TailwindCSS" },
            { Icon: SiOpenai, label: "OpenAI" },
          ].map(({ Icon, label }, idx) => (
            <motion.div
              key={idx}
              className="tech-card"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Icon className="tech-icon" />
              <p className="tech-label">{label}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
