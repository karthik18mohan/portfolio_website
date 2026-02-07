'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import { education } from '@/lib/data';

export default function EducationSection() {
  return (
    <SectionWrapper id="education">
      <SectionHeading title="Education" />

      <div className="space-y-6">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{ y: -3 }}
            className="bg-bg-card border border-slate-200 rounded-xl p-6 sm:p-8 shadow-card hover:shadow-card-hover hover:border-accent/20 transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div className="flex gap-4">
                <motion.div
                  initial={{ rotate: -15, scale: 0 }}
                  whileInView={{ rotate: 0, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.2, type: 'spring', stiffness: 200 }}
                  className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center"
                >
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </motion.div>
                <div>
                  <h3 className="text-lg font-semibold font-display text-text-primary">{edu.degree}</h3>
                  <p className="text-accent text-sm font-medium">{edu.field}</p>
                  <p className="mt-1 text-sm text-text-secondary">{edu.institution}</p>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.4, delay: index * 0.15 + 0.3 }}
                className="flex flex-wrap items-center gap-3 sm:flex-col sm:items-end sm:gap-2"
              >
                <span className="text-sm text-text-muted">
                  {edu.startYear} &ndash; {edu.endYear}
                </span>
                <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                  CGPA {edu.cgpa}
                </span>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
