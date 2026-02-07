'use client';

import { motion } from 'framer-motion';
import { profile } from '@/lib/data';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="border-t border-slate-200 py-8 px-4"
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-text-muted">
        <p>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors duration-200"
          >
            GitHub
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors duration-200"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
