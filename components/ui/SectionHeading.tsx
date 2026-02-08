'use client';

import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-12">
      <motion.h2
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold font-display text-text-primary tracking-tight"
      >
        {title}
        <motion.span
          initial={{ width: 0 }}
          whileInView={{ width: 48 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
          className="inline-block h-1 bg-accent rounded-full ml-4 align-middle"
        />
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-3 text-text-secondary text-base sm:text-lg max-w-2xl leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
