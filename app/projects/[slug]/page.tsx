import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projects, getProjectBySlug } from '@/lib/data';
import ProjectDetailClient from './ProjectDetailClient';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    return { title: 'Project Not Found' };
  }
  return {
    title: `${project.title} | Karthik Mohan`,
    description: project.shortInfo,
    openGraph: {
      title: project.title,
      description: project.shortInfo,
    },
  };
}

export default function ProjectPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}
