"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import { GitHubIcon } from "./Icons";

export default function Hero() {
  const handleScroll = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="hero__badge">
              <span className="hero__badge-dot" />
              Open to Software Engineering Internships
            </span>
          </motion.div>

          <motion.h1
            className="hero__heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hi, I&apos;m Dhruv.
            <br />
            <span className="hero__heading-accent">
              I build software that solves real problems.
            </span>
          </motion.h1>

          <motion.p
            className="hero__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            An aspiring Software Engineer focused on DSA, full-stack
            development, and secure software systems.
          </motion.p>

          <motion.div
            className="hero__ctas"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <button
              onClick={() => handleScroll("#projects")}
              className="btn btn--primary"
              id="hero-view-work"
            >
              View My Work
              <ArrowRight size={16} />
            </button>
            <a
              href="https://github.com/dhruv-ns"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--secondary"
              id="hero-github"
            >
              <GitHubIcon width={16} height={16} />
              GitHub
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--secondary"
              id="hero-resume"
            >
              <FileText size={16} />
              Resume
            </a>
          </motion.div>

          <motion.div
            className="hero__tech-tags"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {["C++", "Python", "Java", "JavaScript", "TypeScript"].map(
              (tech) => (
                <span key={tech} className="hero__tech-tag">
                  {tech}
                </span>
              )
            )}
          </motion.div>
        </div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="terminal">
            <div className="terminal__header">
              <div className="terminal__dots">
                <span className="terminal__dot terminal__dot--red" />
                <span className="terminal__dot terminal__dot--yellow" />
                <span className="terminal__dot terminal__dot--green" />
              </div>
              <span className="terminal__title">terminal</span>
              <div style={{ width: 52 }} />
            </div>
            <div className="terminal__body">
              <div className="terminal__line">
                <span className="terminal__prompt">$</span>
                <span className="terminal__cmd"> whoami</span>
              </div>
              <div className="terminal__output">dhruv@developer</div>
              <div className="terminal__line">
                <span className="terminal__prompt">$</span>
                <span className="terminal__cmd"> focus</span>
              </div>
              <div className="terminal__output">
                DSA • Full Stack • Software Engineering
              </div>
              <div className="terminal__line">
                <span className="terminal__prompt">$</span>
                <span className="terminal__cmd"> status</span>
              </div>
              <div className="terminal__output terminal__output--highlight">
                building...
                <span className="terminal__cursor" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
