import React, { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import "./Home.css";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiTailwindcss,
  SiOpenai,
} from "react-icons/si";

import { motion } from "framer-motion";


export default function Home() {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.className = "cursor-light";
    document.body.appendChild(cursor);
    const move = (e) => {
      cursor.style.transform = `translate(${e.clientX - 60}px, ${e.clientY - 60}px)`;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

//   const techStack = [
//   { Icon: FaReact, label: "React" },
//   { Icon: FaNodeJs, label: "Node.js" },
//   { Icon: SiNextdotjs, label: "Next.js" },
//   { Icon: SiMongodb, label: "MongoDB" },
//   { Icon: SiTailwindcss, label: "TailwindCSS" },
//   { Icon: SiOpenai, label: "OpenAI" },
// ];

  return (
    <div className="hero-wrapper">
      <div className="hero-inner">
        <h1 className="hero-heading">
          <Typewriter
            words={["Hi, I'm Palash Mishra "]}
            loop={Infinity}
            cursor
            cursorStyle="|"
            typeSpeed={90}
            deleteSpeed={0}
            delaySpeed={1500}
          />
        </h1>
        {/* 👉 Banner Image with animation on hover */}
        <motion.img
          src="/palash-profile-image.jpeg"
          alt="Palash Banner"
          className="hero-banner"
          initial={{ opacity: 0, scale: 0.8, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{
            scale: 1.08,
            rotate: 6,
            boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
          }}
        />

        <motion.h2
          className="hero-subheading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.8 }}
        >
          Crafting interactive, scalable front end solutions.
        </motion.h2>

        <motion.p
          className="hero-bio"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.8 }}
        >
          Bridging design with engineering, one component at a time.
        </motion.p>

        <p className="typewriter-text fade-in">
          I’m a&nbsp;
          <span className="typewriter-role">
            <Typewriter
              words={[
                "Full-Stack Developer",
                "Frontend Developer",
                "API Builder",
                "Backend Developer",
              ]}
              loop={0}
              cursor
              cursorStyle="->"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </p>
        <div className="hero-buttons fade-in">
          <a href="/projects" className="hero-btn primary">
            🚀 View Projects
          </a>
          <a href="/resume" className="hero-btn secondary">
            📄 Resume
          </a>
        </div>
        <div className="hero-socials fade-in">
          <a
            href="https://github.com/palash4263"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:your@email.com">Email</a>
        </div>
      </div>
    </div>
  );
}
