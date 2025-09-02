import {
  Home,
  Briefcase,
  GraduationCap,
  Rss,
  Mail,
  Github,
  Instagram,
  Youtube,
  LucideProps,
} from 'lucide-react';
import {
  type NavItem,
  type SocialLink,
  type Project,
  type EducationItem,
  type Skill,
  type BlogPost,
} from '@/lib/types';
import DiscordIcon from '@/components/icons/discord-icon';
import { SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, SiTailwindcss, SiFigma, SiPython } from '@icons-pack/react-simple-icons';
import React from 'react';

export const name = 'Ethereal Folio';

export const navItems: NavItem[] = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Projects', href: '/projects', icon: Briefcase },
  { name: 'Education', href: '/education', icon: GraduationCap },
  { name: 'Blog', href: '/blog', icon: Rss },
  { name: 'Contact', href: '/contact', icon: Mail },
];

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', icon: Github, url: 'https://github.com' },
  { name: 'Instagram', icon: Instagram, url: 'https://instagram.com' },
  { name: 'Discord', icon: DiscordIcon, url: '#' },
  { name: 'Email', icon: Mail, url: 'mailto:hello@example.com' },
  { name: 'YouTube', icon: Youtube, url: 'https://youtube.com' },
];

export const projects: Project[] = [
  {
    title: 'Project Alpha',
    category: 'Web',
    image: 'https://picsum.photos/600/400?random=1',
    description: 'A cutting-edge web application for seamless project management.',
    details: [
      'Developed with Next.js and TypeScript for a robust, type-safe codebase.',
      'Styled with Tailwind CSS for a modern, responsive user interface.',
      'Implemented state management using React Hooks for efficient data flow.',
    ],
    tags: ['Next.js', 'React', 'Tailwind CSS'],
  },
  {
    title: 'Design System Beta',
    category: 'Design',
    image: 'https://picsum.photos/600/400?random=2',
    description: 'A comprehensive design system built in Figma.',
    details: [
      'Created a library of reusable components to ensure brand consistency.',
      'Defined a clear typography and color palette for cohesive design language.',
      'Developed with accessibility (WCAG) standards in mind.',
    ],
    tags: ['Figma', 'UI/UX', 'Design System'],
  },
  {
    title: 'Blog Post Gamma',
    category: 'Blog',
    image: 'https://picsum.photos/600/400?random=3',
    description: 'An insightful article on modern frontend development trends.',
    details: [
      'Explored the future of server components in React.',
      'Compared different styling solutions in the JavaScript ecosystem.',
      'Provided code examples and performance benchmarks.',
    ],
    tags: ['React', 'Web Dev', 'Tech'],
  },
  {
    title: 'Utility Tool Delta',
    category: 'Other',
    image: 'https://picsum.photos/600/400?random=4',
    description: 'A handy utility tool for developers.',
    details: [
      'Built with Node.js for server-side logic.',
      'Features a command-line interface for ease of use.',
      'Published as an npm package for public use.',
    ],
    tags: ['Node.js', 'CLI', 'Tooling'],
  },
  {
    title: 'E-commerce Epsilon',
    category: 'Web',
    image: 'https://picsum.photos/600/400?random=5',
    description: 'A full-stack e-commerce platform with a focus on user experience.',
    details: [
      'React frontend with a custom shopping cart.',
      'Backend powered by a RESTful API.',
      'Secure payment integration.',
    ],
    tags: ['React', 'E-commerce', 'API'],
  },
  {
    title: 'Mobile App Zeta',
    category: 'Design',
    image: 'https://picsum.photos/600/400?random=6',
    description: 'UI/UX design for a new social networking mobile app.',
    details: [
      'Wireframing and prototyping in Figma.',
      'User research and persona development.',
      'Usability testing and iterative design improvements.',
    ],
    tags: ['Figma', 'Mobile', 'UI/UX'],
  },
];

export const education: EducationItem[] = [
  {
    date: '2018 - 2022',
    institution: 'University of Technology',
    degree: 'B.Sc. in Computer Science',
    description:
      'Graduated with honors, focusing on software engineering and human-computer interaction. Completed a final year project on machine learning applications.',
  },
  {
    date: '2022',
    institution: 'Design Academy',
    degree: 'Certificate in UI/UX Design',
    description:
      'Intensive program covering user research, wireframing, prototyping, and visual design principles using Figma and other industry-standard tools.',
  },
  {
    date: '2023',
    institution: 'Online Course Platform',
    degree: 'Advanced React & Next.js',
    description:
      'Mastered advanced concepts in React, including state management, performance optimization, and server-side rendering with Next.js.',
  },
];

export const skills: Skill[] = [
  { name: 'JavaScript', experience: '4 years', icon: (props: LucideProps) => React.createElement(SiJavascript, { ...props, className: 'size-10' }) },
  { name: 'TypeScript', experience: '3 years', icon: (props: LucideProps) => React.createElement(SiTypescript, { ...props, className: 'size-10' }) },
  { name: 'React', experience: '3 years', icon: (props: LucideProps) => React.createElement(SiReact, { ...props, className: 'size-10' }) },
  { name: 'Next.js', experience: '2 years', icon: (props: LucideProps) => React.createElement(SiNextdotjs, { ...props, className: 'size-10' }) },
  { name: 'Node.js', experience: '3 years', icon: (props: LucideProps) => React.createElement(SiNodedotjs, { ...props, className: 'size-10' }) },
  { name: 'Tailwind CSS', experience: '2 years', icon: (props: LucideProps) => React.createElement(SiTailwindcss, { ...props, className: 'size-10' }) },
  { name: 'Figma', experience: '3 years', icon: (props: LucideProps) => React.createElement(SiFigma, { ...props, className: 'size-10' }) },
  { name: 'Python', experience: '2 years', icon: (props: LucideProps) => React.createElement(SiPython, { ...props, className: 'size-10' }) },
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'The Rise of Server Components',
    category: 'Tech',
    image: 'https://picsum.photos/600/400?random=7',
    content: 'Server Components are changing the way we build React applications. This post dives deep into how they work, their benefits, and how to start using them in your Next.js projects. We will explore patterns for data fetching, state management, and creating highly performant, interactive web experiences. The shift from client-centric to server-centric UI development is a paradigm shift worth understanding for any modern web developer.',
  },
  {
    id: 2,
    title: 'Designing for Accessibility',
    category: 'Design',
    image: 'https://picsum.photos/600/400?random=8',
    content: 'Accessibility is not an afterthought; it is a necessity. Learn the core principles of accessible design, including WCAG guidelines, ARIA roles, and semantic HTML. This guide provides practical tips and tools to make your websites and applications usable for everyone, regardless of their abilities. We cover everything from color contrast to keyboard navigation, ensuring your user interface is inclusive and robust.',
  },
  {
    id: 3,
    title: 'A Guide to a Balanced Life',
    category: 'Life',
    image: 'https://picsum.photos/600/400?random=9',
    content: 'In the fast-paced world of technology, finding a balance between work and life is crucial for long-term well-being. This article shares personal strategies for managing stress, staying productive without burning out, and cultivating hobbies outside of coding. Discover techniques for mindfulness, time management, and setting healthy boundaries to create a sustainable and fulfilling lifestyle.',
  },
  {
    id: 4,
    title: 'Getting Started with Generative AI',
    category: 'AI',
    image: 'https://picsum.photos/600/400?random=10',
    content: 'Generative AI is transforming industries, and now you can harness its power in your own applications. This introductory post explains the basics of large language models (LLMs), prompt engineering, and how to use APIs from providers like OpenAI and Google. We will build a simple application to demonstrate how to integrate AI for tasks like text generation, summarization, and more.',
  },
];
