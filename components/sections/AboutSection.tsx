'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import { profile } from '@/lib/data';

export default function AboutSection() {
  return (
    <SectionWrapper id="about">
      <SectionHeading title="About Me" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative"
      >
        <div className="bg-bg-card border border-slate-200 rounded-xl p-8 sm:p-10 shadow-card">
          <div className="absolute top-0 left-8 w-1 h-full bg-gradient-to-b from-accent/40 to-transparent rounded-full" />
          <p className="text-text-secondary text-lg leading-relaxed pl-6">
            {profile.about}
          </p>
          <div className="mt-8 pl-6 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 text-sm text-text-muted">
              <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {profile.location}
            </div>
            <div className="flex items-center gap-2 text-sm text-text-muted">
              <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {profile.email}
            </div>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
