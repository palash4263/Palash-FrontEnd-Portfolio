"use client";
import { motion } from "framer-motion";
import "./Resume.css";

export default function Resume() {
  return (
    <motion.section
      className="resume-wrapper"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.h1
        className="resume-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Download My Resume
      </motion.h1>

      <motion.div
        className="resume-actions"
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
      <div className="resume-actions">
        <motion.a
          href="/Palash_Mishra_FrontEnd.docx"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-btn"
          initial="rest"
          whileHover="hover"
          animate="rest"
          variants={{
            rest: { scale: 1, boxShadow: "0 0 15px rgba(127,90,240,0.3)" },
            hover: {
              scale: 1.1,
              boxShadow: [
                "0 0 15px rgba(127,90,240,0.6)",
                "0 0 25px rgba(56,189,248,0.6)",
                "0 0 35px rgba(127,90,240,0.4)",
                "0 0 45px rgba(56,189,248,0.4)",
              ],
              transition: {
                duration: 0.6,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse"
              }
            }
          }}
          whileTap={{ scale: 0.95 }}
        >
          ⬇️ Download Resume
        </motion.a>
       </div>
      </motion.div>
    </motion.section>
  );
}
