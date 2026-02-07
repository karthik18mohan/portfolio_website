'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import Badge from '@/components/ui/Badge';
import { projects } from '@/lib/data';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function ProjectsSection() {
  return (
    <SectionWrapper id="projects">
      <SectionHeading
        title="Projects"
        subtitle="A selection of projects spanning full-stack development, machine learning, and signal processing."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.slug}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link href={`/projects/${project.slug}`} className="block group">
              <motion.div
                whileHover={{ y: -4, boxShadow: '0 8px 30px rgba(20, 184, 166, 0.12)' }}
                transition={{ duration: 0.25 }}
                className="bg-bg-card border border-white/5 rounded-xl overflow-hidden hover:border-accent/30 transition-colors"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-card/80 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm text-text-secondary line-clamp-2 leading-relaxed">
                    {project.shortInfo}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="accent">{tag}</Badge>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center text-sm text-accent font-medium">
                    View Details
                    <svg
                      className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
