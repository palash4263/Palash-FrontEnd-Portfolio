import "./ProjectCard.css";

export default function ProjectCard({ title, description, github, live, techStack = [] }) {
  return (
    <div className="project-card" data-aos="fade-up" data-aos-delay="100">
      <h2>{title}</h2>
      <p>{description}</p>

      {/* 🚀 Tech Stack Tags */}
      <div className="project-tags">
        {techStack.map((tech, idx) => (
          <span key={idx} className="project-tag">
            {tech}
          </span>
        ))}
      </div>

      {/* 🌐 Links */}
      <div className="project-links">
        <a href={github} target="_blank" rel="noreferrer">🔗 GitHub</a>
        <a href={live} target="_blank" rel="noreferrer">🌐 Live</a>
      </div>
    </div>
  );
}
