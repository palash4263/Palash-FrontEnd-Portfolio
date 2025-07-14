import "./Resume.css";

export default function Resume() {
  return (
    <div className="resume-wrapper">
      <h1 className="resume-title"> My Resume</h1>
      
      <div className="resume-actions">
        <a 
          href="/Palash_Mishra_Resume.pdf"
          target="_blank"  // open in new tab
          rel="noopener noreferrer"
          className="resume-btn"
        >
          ⬇️  Download Resume
        </a>
      </div>

     
    </div>
  );
}
