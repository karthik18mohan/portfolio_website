'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  if (!hover) {
    return (
      <div className={`bg-bg-card border border-white/5 rounded-xl p-6 ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: '0 8px 30px rgba(20, 184, 166, 0.12)' }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={`bg-bg-card border border-white/5 rounded-xl p-6 cursor-pointer transition-colors hover:border-accent/30 ${className}`}
    >
      {children}
    </motion.div>
  );
}
