"use client";

import { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { GitHubIcon } from "./Icons";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const featured = projects.filter((p) => p.featured);
  const displayProjects = showAll ? projects : featured;

  return (
    <SectionWrapper id="projects">
      <div className="section__header">
        <span className="section__label">Projects</span>
        <h2 className="section__title">What I&apos;ve Built</h2>
        <p className="section__subtitle">
          Real projects solving real problems — from banking systems to data
          analysis pipelines.
        </p>
      </div>

      <div className="projects__grid">
        {displayProjects.map((project, idx) => (
          <motion.article
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <div className="project-card__header">
              <h3 className="project-card__title">{project.title}</h3>
              <div className="project-card__links">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card__link"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <GitHubIcon width={16} height={16} />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card__link"
                    aria-label={`View ${project.title} live demo`}
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>

            <p className="project-card__desc">{project.description}</p>

            <div className="project-card__highlights">
              {project.highlights.map((h) => (
                <span key={h} className="project-card__highlight">
                  {h}
                </span>
              ))}
            </div>

            <div className="project-card__tech">
              {project.technologies.map((t) => (
                <span key={t} className="project-card__tech-tag">
                  {t}
                </span>
              ))}
            </div>

            <div className="project-card__actions">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--sm btn--secondary"
                >
                  <GitHubIcon width={14} height={14} />
                  Source
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--sm btn--primary"
                >
                  <ExternalLink size={14} />
                  Live Demo
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>

      {projects.length > featured.length && (
        <div className="projects__toggle">
          <button
            onClick={() => setShowAll(!showAll)}
            className="btn btn--secondary"
            id="projects-toggle"
          >
            {showAll ? (
              <>
                Show Featured <ChevronUp size={16} />
              </>
            ) : (
              <>
                View All Projects <ChevronDown size={16} />
              </>
            )}
          </button>
        </div>
      )}
    </SectionWrapper>
  );
}
