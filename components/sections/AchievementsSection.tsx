'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import { achievements } from '@/lib/data';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

export default function AchievementsSection() {
  return (
    <SectionWrapper id="achievements">
      <SectionHeading title="Achievements" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
      >
        {achievements.map((ach, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="relative bg-bg-card border border-accent/15 rounded-xl p-6 sm:p-8 overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
              className="absolute top-0 right-0 w-32 h-32 bg-accent/[0.03] rounded-full -translate-y-1/2 translate-x-1/2"
            />
            <div className="relative">
              <motion.div
                initial={{ rotate: -15, scale: 0 }}
                whileInView={{ rotate: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.1, type: 'spring', stiffness: 200 }}
                className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5"
              >
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </motion.div>
              <h3 className="text-lg font-semibold font-display text-text-primary">{ach.title}</h3>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed">{ach.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
