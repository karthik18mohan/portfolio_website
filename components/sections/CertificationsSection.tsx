'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import { certifications } from '@/lib/data';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

export default function CertificationsSection() {
  return (
    <SectionWrapper id="certifications">
      <SectionHeading title="Certifications" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="bg-bg-card border border-slate-200 rounded-xl overflow-hidden shadow-card hover:shadow-card-hover hover:border-accent/20 transition-all duration-300"
          >
            {cert.image && (
              <div className="relative w-full bg-bg-elevated overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-contain transition-transform duration-500 hover:scale-105"
                    unoptimized
                  />
                </div>
              </div>
            )}

            <div className="p-6">
              {!cert.image && (
                <motion.div
                  initial={{ rotate: -10, scale: 0 }}
                  whileInView={{ rotate: 0, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.2, type: 'spring' }}
                  className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4"
                >
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </motion.div>
              )}
              <h3 className="text-sm font-semibold text-text-primary leading-snug">
                {cert.title}
              </h3>
              <div className="mt-3 flex items-center gap-2 text-xs text-text-muted">
                <span>{cert.issuer}</span>
                <span className="w-1 h-1 rounded-full bg-text-muted/50" />
                <span>{cert.year}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
