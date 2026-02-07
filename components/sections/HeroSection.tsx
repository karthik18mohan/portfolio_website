'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { profile } from '@/lib/data';
import Button from '@/components/ui/Button';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
} as const;

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
} as const;

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={profile.heroBackground}
          alt=""
          fill
          className="object-cover opacity-[0.07]"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white via-bg-primary/95 to-bg-elevated/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(13,148,136,0.06),_transparent_60%)]" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16"
        >
          <div className="flex-1 text-center lg:text-left">
            <motion.p variants={item} className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
              {profile.tagline}
            </motion.p>

            <motion.h1 variants={item} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display text-text-primary leading-[1.1] tracking-tight">
              {profile.name}
            </motion.h1>

            <motion.p variants={item} className="mt-4 text-xl sm:text-2xl lg:text-[1.75rem] text-text-secondary font-light tracking-tight">
              {profile.title}
            </motion.p>

            <motion.p variants={item} className="mt-2 text-text-muted flex items-center justify-center lg:justify-start gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {profile.location}
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <Button
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="md"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </Button>
              <Button
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="md"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </Button>
              <Button
                href={profile.resumeUrl}
                download
                variant="primary"
                size="md"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </Button>
            </motion.div>
          </div>

          <motion.div variants={item} className="flex-shrink-0">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64">
              <div className="absolute -inset-1 bg-gradient-to-br from-accent/30 to-accent/5 rounded-full blur-md" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-accent/20 shadow-elevated">
                <Image
                  src={profile.profileImage}
                  alt={profile.name}
                  fill
                  className="object-cover"
                  priority
                  unoptimized
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-text-muted/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-text-muted/50 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
