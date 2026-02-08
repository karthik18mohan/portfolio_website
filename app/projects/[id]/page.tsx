import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projects, getProjectById } from '@/lib/data';
import ProjectDetailClient from './ProjectDetailClient';

interface Props {
  params: { id: string };
}

export function generateStaticParams() {
  return projects.map((project) => ({
    id: String(project.id),
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = getProjectById(Number(params.id));
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
  const project = getProjectById(Number(params.id));

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}
