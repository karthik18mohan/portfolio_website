import type { Profile, Experience, Project, Certification, Achievement, Education, NavItem } from './types';

import profileData from '@/content/profile.json';
import experienceData from '@/content/experience.json';
import projectsData from '@/content/projects.json';
import certificationsData from '@/content/certifications.json';
import achievementsData from '@/content/achievements.json';
import educationData from '@/content/education.json';

export const profile = profileData as Profile;
export const experiences = experienceData as Experience[];
export const projects = projectsData as Project[];
export const certifications = certificationsData as Certification[];
export const achievements = achievementsData as Achievement[];
export const education = educationData as Education[];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
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
