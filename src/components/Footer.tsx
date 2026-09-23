"use client";

import { Mail, ArrowUp } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <span className="footer__name">Dhruv Narayan Singh</span>
            <p className="footer__tagline">Building. Learning. Engineering.</p>
          </div>

          <div className="footer__links">
            <a
              href="https://github.com/dhruv-ns"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
              aria-label="GitHub"
            >
              <GitHubIcon width={18} height={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/dhruv-narayan-singh-98b2a336a"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
              aria-label="LinkedIn"
            >
              <LinkedInIcon width={18} height={18} />
            </a>
            <a
              href="mailto:singhdhruvnarayan62@gmail.com"
              className="footer__link"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            © {new Date().getFullYear()} Dhruv Narayan Singh
          </p>
          <button
            onClick={scrollToTop}
            className="footer__back-top"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
