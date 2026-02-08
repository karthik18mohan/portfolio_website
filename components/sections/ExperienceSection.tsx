'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import { experiences } from '@/lib/data';

export default function ExperienceSection() {
  return (
    <SectionWrapper id="experience">
      <SectionHeading title="Experience" />
      <div className="relative">
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-accent/20 to-transparent origin-top"
        />

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative pl-12 sm:pl-16 pb-12 last:pb-0"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.3, delay: index * 0.2 + 0.2, type: 'spring', stiffness: 300 }}
              className="absolute left-2.5 sm:left-4.5 top-1.5 w-3 h-3 rounded-full bg-accent border-2 border-bg-primary"
            />

            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.25 }}
              className="bg-bg-card border border-slate-200 rounded-xl p-6 sm:p-8 shadow-card hover:shadow-card-hover hover:border-accent/20 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold font-display text-text-primary tracking-tight">{exp.role}</h3>
                  <p className="text-accent text-sm font-medium">{exp.company}</p>
                </div>
                <div className="flex items-center gap-4 text-xs text-text-muted">
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {exp.startDate} &ndash; {exp.endDate}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {exp.location}
                  </span>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.bullets.map((bullet, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.3 + i * 0.05 }}
                    className="flex gap-3 text-[0.938rem] text-text-secondary leading-relaxed"
                  >
                    <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent/50" />
                    {bullet}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
