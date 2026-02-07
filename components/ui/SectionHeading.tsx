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
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-4xl font-bold text-text-primary"
      >
        {title}
        <span className="inline-block w-12 h-1 bg-accent rounded-full ml-4 align-middle" />
      </motion.h2>
      {subtitle && (
        <p className="mt-3 text-text-secondary text-base max-w-2xl">{subtitle}</p>
      )}
    </div>
  );
}
