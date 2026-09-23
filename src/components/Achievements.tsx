"use client";

import SectionWrapper from "./SectionWrapper";
import { achievements, timeline } from "@/data/achievements";
import { motion } from "framer-motion";
import { Trophy, Award, Zap } from "lucide-react";

const typeIcons = {
  hackathon: Zap,
  competition: Award,
  milestone: Trophy,
};

export default function Achievements() {
  return (
    <SectionWrapper id="achievements">
      <div className="section__header">
        <span className="section__label">Experience</span>
        <h2 className="section__title">Achievements & Journey</h2>
        <p className="section__subtitle">
          Hackathons, competitions, and milestones that shaped my engineering
          path.
        </p>
      </div>

      <div className="achievements__cards">
        {achievements.map((achievement, idx) => {
          const Icon = typeIcons[achievement.type];
          return (
            <motion.div
              key={achievement.id}
              className="achievement-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
            >
              <div className="achievement-card__icon-wrap">
                <Icon size={20} />
              </div>
              <div className="achievement-card__content">
                <div className="achievement-card__top">
                  <h3 className="achievement-card__title">
                    {achievement.title}
                  </h3>
                  <span className="achievement-card__period">
                    {achievement.period}
                  </span>
                </div>
                <p className="achievement-card__role">
                  {achievement.role} — {achievement.organization}
                </p>
                <p className="achievement-card__desc">
                  {achievement.description}
                </p>
                <div className="achievement-card__highlights">
                  {achievement.highlights.map((h) => (
                    <span key={h} className="achievement-card__highlight">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Engineering Timeline */}
      <div className="timeline">
        <h3 className="timeline__title">Engineering Journey</h3>
        <div className="timeline__track">
          {timeline.map((event, idx) => (
            <motion.div
              key={`${event.year}-${idx}`}
              className="timeline__event"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.12 }}
            >
              <div className="timeline__marker" />
              <div className="timeline__content">
                <span className="timeline__year">{event.year}</span>
                <h4 className="timeline__event-title">{event.title}</h4>
                <p className="timeline__event-desc">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
