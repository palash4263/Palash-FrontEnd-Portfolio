import React, { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import "./Home.css";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiTailwindcss, SiOpenai } from "react-icons/si";

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

  return (
    <div className="hero-wrapper">
      <div className="hero-inner">
        <h1 className="hero-heading">
  Hi, I'm <span className="name-highlight">Palash Mishra</span>
</h1>
        {/* 👉 Banner Image */}
        <img
          src="/palash-profile-image.jpeg"
          alt="Palash Banner"
          className="hero-banner"
        />

        <h2 className="hero-subheading">Crafting interactive, scalable front end solutions.</h2>

        <p className="hero-bio fade-in">
          Bridging design with engineering, one component at a time.
        </p>

        <p className="typewriter-text fade-in">
          I’m a&nbsp;
          <span className="typewriter-role">
            <Typewriter
              words={[
                'Full-Stack Developer',
                'Frontend Developer',
                'API Builder',
                'Backend Developer'
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

        <p className="hero-subtitle fade-in">
          Turning ideas into responsive, secure, and performant full-stack applications.
        </p>

        {/* Skill Showcase */}
       <div className="hero-tech-icons fade-in-up fade-in-delay-2">
  <FaReact className="tech-icon-glow" />
  <FaNodeJs className="tech-icon-glow" />
  <SiNextdotjs className="tech-icon-glow" />
  <SiMongodb className="tech-icon-glow" />
  <SiTailwindcss className="tech-icon-glow" />
  <SiOpenai className="tech-icon-glow" />
</div>


        <div className="hero-buttons fade-in">
          <a href="/projects" className="hero-btn primary">🚀 View Projects</a>
          <a href="/resume" className="hero-btn secondary">📄 Resume</a>
        </div>
        <div className="hero-socials fade-in">
          <a href="https://github.com/palash4263" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:your@email.com">Email</a>
        </div>
      </div>
    </div>
  );
}
