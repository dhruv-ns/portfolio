"use client";

import { useEffect, useState } from "react";
import SectionWrapper from "./SectionWrapper";
import {
  GitHubRepo,
  fetchGitHubRepos,
  getLanguageColor,
  formatDate,
} from "@/lib/github";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Star,
  GitFork,
  Clock,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { GitHubIcon } from "./Icons";

export default function GitHubSection() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchGitHubRepos()
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <SectionWrapper id="github">
      <div className="section__header">
        <span className="section__label">Open Source</span>
        <h2 className="section__title">GitHub Activity</h2>
        <p className="section__subtitle">
          Recent repositories and development activity.
        </p>
      </div>

      {loading && (
        <div className="github__loading">
          <Loader2 size={24} className="github__spinner" />
          <p>Loading repositories...</p>
        </div>
      )}

      {error && (
        <div className="github__error">
          <AlertCircle size={24} />
          <p>Unable to load GitHub repositories. Visit my profile directly.</p>
          <a
            href="https://github.com/dhruv-ns"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary btn--sm"
          >
            <GitHubIcon width={14} height={14} />
            View GitHub Profile
          </a>
        </div>
      )}

      {!loading && !error && repos.length > 0 && (
        <div className="github__grid">
          {repos.map((repo, idx) => (
            <motion.a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="github__repo-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
            >
              <div className="github__repo-header">
                <GitHubIcon
                  width={16}
                  height={16}
                  className="github__repo-icon"
                />
                <span className="github__repo-name">{repo.name}</span>
                <ExternalLink size={12} className="github__repo-external" />
              </div>

              {repo.description && (
                <p className="github__repo-desc">{repo.description}</p>
              )}

              <div className="github__repo-meta">
                {repo.language && (
                  <span className="github__repo-lang">
                    <span
                      className="github__repo-lang-dot"
                      style={{
                        backgroundColor: getLanguageColor(repo.language),
                      }}
                    />
                    {repo.language}
                  </span>
                )}
                <span className="github__repo-stat">
                  <Star size={12} /> {repo.stargazers_count}
                </span>
                <span className="github__repo-stat">
                  <GitFork size={12} /> {repo.forks_count}
                </span>
                <span className="github__repo-stat">
                  <Clock size={12} /> {formatDate(repo.updated_at)}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      )}

      <div className="github__cta">
        <a
          href="https://github.com/dhruv-ns"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--secondary"
          id="github-explore"
        >
          <GitHubIcon width={16} height={16} />
          Explore all repositories →
        </a>
      </div>
    </SectionWrapper>
  );
}
