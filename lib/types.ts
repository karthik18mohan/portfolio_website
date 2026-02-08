export interface Profile {
  name: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  about: string;
  links: {
    github: string;
    linkedin: string;
  };
  profileImage: string;
  heroBackground: string;
  resumeUrl: string;
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  bullets: string[];
}

export interface Project {
  id: number;
  title: string;
  shortInfo: string;
  description: string;
  tools: string[];
  githubUrl: string;
  liveUrl: string | null;
  tags: string[];
  thumbnail?: string;
  screenshots?: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  image?: string;
}

export interface Achievement {
  title: string;
  description: string;
}

export interface Education {
  degree: string;
  field: string;
  institution: string;
  startYear: string;
  endYear: string;
  cgpa: string;
}

export interface NavItem {
  label: string;
  href: string;
  sectionId: string;
}
