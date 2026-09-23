"use client";

import { useState, FormEvent } from "react";
import SectionWrapper from "./SectionWrapper";
import { Mail, Send, CheckCircle } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./Icons";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message should be at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      const subject = encodeURIComponent(
        `Portfolio Contact from ${formData.name}`
      );
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
      );
      window.open(
        `mailto:singhdhruvnarayan62@gmail.com?subject=${subject}&body=${body}`
      );
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <SectionWrapper id="contact">
      <div className="section__header">
        <span className="section__label">Contact</span>
        <h2 className="section__title">
          Let&apos;s build something meaningful.
        </h2>
        <p className="section__subtitle">
          Open to software engineering internships, technical collaborations,
          hackathons, and interesting engineering projects.
        </p>
      </div>

      <div className="contact__grid">
        <div className="contact__info">
          <div className="contact__channels">
            <a
              href="mailto:singhdhruvnarayan62@gmail.com"
              className="contact__channel"
            >
              <div className="contact__channel-icon">
                <Mail size={20} />
              </div>
              <div>
                <span className="contact__channel-label">Email</span>
                <span className="contact__channel-value">
                  singhdhruvnarayan62@gmail.com
                </span>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/dhruv-narayan-singh-98b2a336a"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__channel"
            >
              <div className="contact__channel-icon">
                <LinkedInIcon width={20} height={20} />
              </div>
              <div>
                <span className="contact__channel-label">LinkedIn</span>
                <span className="contact__channel-value">
                  Dhruv Narayan Singh
                </span>
              </div>
            </a>

            <a
              href="https://github.com/dhruv-ns"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__channel"
            >
              <div className="contact__channel-icon">
                <GitHubIcon width={20} height={20} />
              </div>
              <div>
                <span className="contact__channel-label">GitHub</span>
                <span className="contact__channel-value">dhruv-ns</span>
              </div>
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="contact__form"
          noValidate
          aria-label="Contact form"
        >
          {submitted && (
            <div className="contact__success" role="alert">
              <CheckCircle size={18} />
              <span>
                Message prepared! Your email client should open shortly.
              </span>
            </div>
          )}

          <div className="contact__field">
            <label htmlFor="contact-name" className="contact__label">
              Name
            </label>
            <input
              id="contact-name"
              type="text"
              className={`contact__input ${errors.name ? "contact__input--error" : ""}`}
              placeholder="Your name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <span id="name-error" className="contact__error" role="alert">
                {errors.name}
              </span>
            )}
          </div>

          <div className="contact__field">
            <label htmlFor="contact-email" className="contact__label">
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              className={`contact__input ${errors.email ? "contact__input--error" : ""}`}
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <span id="email-error" className="contact__error" role="alert">
                {errors.email}
              </span>
            )}
          </div>

          <div className="contact__field">
            <label htmlFor="contact-message" className="contact__label">
              Message
            </label>
            <textarea
              id="contact-message"
              className={`contact__input contact__textarea ${errors.message ? "contact__input--error" : ""}`}
              placeholder="Tell me about the opportunity or project..."
              rows={5}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && (
              <span id="message-error" className="contact__error" role="alert">
                {errors.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="btn btn--primary btn--full"
            id="contact-submit"
          >
            <Send size={16} />
            Send Message
          </button>
        </form>
      </div>
    </SectionWrapper>
  );
}
