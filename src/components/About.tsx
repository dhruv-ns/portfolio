"use client";

import SectionWrapper from "./SectionWrapper";
import { MapPin, GraduationCap, Calendar, BookOpen } from "lucide-react";

const coursework = [
  "Data Structures & Algorithms",
  "Object-Oriented Programming",
  "Database Management Systems",
  "Operating Systems",
  "Computer Networks",
  "Software Engineering",
];

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="section__header">
        <span className="section__label">About</span>
        <h2 className="section__title">Who I Am</h2>
        <p className="section__subtitle">
          The story behind the code — background, education, and what drives me.
        </p>
      </div>

      <div className="about__grid">
        <div className="about__story">
          <p className="about__text">
            I&apos;m an aspiring Software Engineer with a strong foundation in
            computer science fundamentals and a passion for building practical,
            well-engineered software. My focus spans Data Structures &
            Algorithms, full-stack web development, and cybersecurity — areas
            where I continuously push myself to learn and grow.
          </p>
          <p className="about__text">
            Through hackathons like Hacksynergy (where I built a Web Application
            Firewall in 24 hours) and competitions like Ideathon 2025 (where our
            team placed in the Top 20), I&apos;ve developed both technical
            skills and the ability to execute under pressure. I believe the best
            engineers are built through consistent practice and real-world
            problem solving.
          </p>
          <p className="about__text">
            When I&apos;m not coding, I&apos;m exploring new technologies,
            strengthening my algorithmic thinking with C++, or working on
            projects that challenge me to think differently about software
            architecture.
          </p>
        </div>

        <div className="about__card">
          <h3 className="about__card-title">Profile</h3>

          <div className="about__info-group">
            <div className="about__info-item">
              <GraduationCap size={16} className="about__info-icon" />
              <div>
                <span className="about__info-label">Education</span>
                <span className="about__info-value">
                  Bachelor of Computer Applications (BCA)
                </span>
              </div>
            </div>

            <div className="about__info-item">
              <BookOpen size={16} className="about__info-icon" />
              <div>
                <span className="about__info-label">Institution</span>
                <span className="about__info-value">
                  Lloyd Institute of Management & Technology
                </span>
              </div>
            </div>

            <div className="about__info-item">
              <Calendar size={16} className="about__info-icon" />
              <div>
                <span className="about__info-label">Expected Graduation</span>
                <span className="about__info-value">August 2028</span>
              </div>
            </div>

            <div className="about__info-item">
              <MapPin size={16} className="about__info-icon" />
              <div>
                <span className="about__info-label">Location</span>
                <span className="about__info-value">Noida, India</span>
              </div>
            </div>
          </div>

          <div className="about__coursework">
            <h4 className="about__coursework-title">Relevant Coursework</h4>
            <div className="about__coursework-list">
              {coursework.map((course) => (
                <span key={course} className="about__coursework-chip">
                  {course}
                </span>
              ))}
            </div>
          </div>

          <div className="about__languages">
            <h4 className="about__coursework-title">Languages</h4>
            <div className="about__languages-row">
              <span className="about__lang">
                English <span className="about__lang-level">Professional</span>
              </span>
              <span className="about__lang">
                Hindi <span className="about__lang-level">Native</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
