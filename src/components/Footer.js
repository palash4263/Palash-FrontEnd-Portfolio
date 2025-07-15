import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} <span className="highlight">Palash Mishra</span> • Built with <span className="tech">MERN</span> 💜
      </p>
    </footer>
  );
}
