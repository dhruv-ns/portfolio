"use client";

import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";

const dsaTopics = [
  "Arrays",
  "Strings",
  "Linked Lists",
  "Stacks",
  "Queues",
  "Trees",
  "Searching",
  "Sorting",
  "Recursion",
  "Problem Solving",
];

export default function Fundamentals() {
  return (
    <SectionWrapper id="fundamentals">
      <div className="section__header">
        <span className="section__label">Foundations</span>
        <h2 className="section__title">Engineering Fundamentals</h2>
        <p className="section__subtitle">
          Focused on strengthening algorithmic problem solving with C++.
        </p>
      </div>

      <div className="fundamentals__container">
        <div className="fundamentals__info">
          <h3 className="fundamentals__heading">
            Data Structures & Algorithms in C++
          </h3>
          <p className="fundamentals__text">
            Building a strong foundation in core computer science concepts
            through consistent practice. Focused on understanding the
            fundamentals deeply rather than chasing numbers — because great
            software engineering starts with solid algorithmic thinking.
          </p>
        </div>

        <div className="fundamentals__topics">
          {dsaTopics.map((topic, idx) => (
            <motion.div
              key={topic}
              className="fundamentals__topic"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
            >
              <span className="fundamentals__topic-icon">⟨/⟩</span>
              {topic}
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
