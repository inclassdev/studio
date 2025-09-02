'use client';

import { socialLinks, name } from '@/data/content';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

export default function HomeContent() {
  const letters = Array.from(name);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center text-center wavy-background">
      <motion.h1
        className="font-black text-6xl md:text-8xl lg:text-9xl tracking-tighter text-foreground"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        aria-label={name}
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            className="inline-block"
            style={{ whiteSpace: letter === ' ' ? 'pre' : 'normal' }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.h1>
      <motion.div
        className="mt-8 flex gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: letters.length * 0.1 + 0.5, duration: 0.5 }}
      >
        <TooltipProvider>
          {socialLinks.map((link) => (
            <Tooltip key={link.name}>
              <TooltipTrigger asChild>
                <Link
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-card/50 p-4 text-muted-foreground shadow-lg backdrop-blur-sm transition-all hover:scale-110 hover:text-primary hover:shadow-primary/20"
                >
                  <link.icon className="h-6 w-6" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{link.name}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </motion.div>
    </div>
  );
}
