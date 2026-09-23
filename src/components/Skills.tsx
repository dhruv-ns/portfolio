"use client";

import SectionWrapper from "./SectionWrapper";
import { skillCategories } from "@/data/skills";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <div className="section__header">
        <span className="section__label">Skills</span>
        <h2 className="section__title">Technical Arsenal</h2>
        <p className="section__subtitle">
          Technologies and concepts I work with, organized by domain.
        </p>
      </div>

      <div className="skills__grid">
        {skillCategories.map((category, catIdx) => (
          <motion.div
            key={category.title}
            className="skills__category"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: catIdx * 0.1 }}
          >
            <h3 className="skills__category-title">{category.title}</h3>
            <div className="skills__chips">
              {category.skills.map((skill) => (
                <span key={skill} className="skills__chip">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
