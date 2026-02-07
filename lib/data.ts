import type { Profile, Experience, Project, Certification, Achievement, Education, NavItem } from './types';

import profileData from '@/content/profile.json';
import experienceData from '@/content/experience.json';
import projectsData from '@/content/projects.json';
import certificationsData from '@/content/certifications.json';
import achievementsData from '@/content/achievements.json';
import educationData from '@/content/education.json';
import imagesManifest from '@/content/images-manifest.json';

export const profile = profileData as Profile;
export const experiences = experienceData as Experience[];
export const certifications = certificationsData as Certification[];
export const achievements = achievementsData as Achievement[];
export const education = educationData as Education[];

const projectsWithImages: Project[] = (projectsData as Project[]).map(project => {
  const imageData = imagesManifest[String(project.id) as keyof typeof imagesManifest];

  return {
    ...project,
    thumbnail: imageData?.thumbnail || '/assets/projects/placeholder.jpg',
    screenshots: imageData?.screenshots || [],
  };
});

export const projects = projectsWithImages;

export function getProjectById(id: number): Project | undefined {
  return projects.find((p) => p.id === id);
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '#hero', sectionId: 'hero' },
  { label: 'About', href: '#about', sectionId: 'about' },
  { label: 'Experience', href: '#experience', sectionId: 'experience' },
  { label: 'Projects', href: '#projects', sectionId: 'projects' },
  { label: 'Certifications', href: '#certifications', sectionId: 'certifications' },
  { label: 'Achievements', href: '#achievements', sectionId: 'achievements' },
  { label: 'Education', href: '#education', sectionId: 'education' },
  { label: 'Contact', href: '#contact', sectionId: 'contact' },
];
