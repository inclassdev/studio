import type { LucideIcon, LucideProps } from 'lucide-react';
import React from 'react';

export interface NavItem {
  name: string;
  href: string;
  icon: LucideIcon;
}

export interface SocialLink {
  name: string;
  icon: React.ComponentType<LucideProps>;
  url: string;
}

export interface Project {
  title: string;
  category: 'Web' | 'Design' | 'Blog' | 'Other';
  image: string;
  description: string;
  details: string[];
  tags: string[];
}

export interface EducationItem {
  date: string;
  institution: string;
  degree: string;
  description: string;
}

export interface Skill {
  name: string;
  experience: string;
  icon: React.ComponentType<LucideProps>;
}

export interface BlogPost {
  id: number;
  title: string;
  category: 'Tech' | 'Design' | 'Life' | 'AI';
  image: string;
  content: string;
}
