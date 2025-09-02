'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { navItems } from '@/data/content';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { Download } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <TooltipProvider delayDuration={0}>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
        <nav className="relative flex items-center gap-6 rounded-full bg-card/50 p-2 shadow-lg backdrop-blur-md">
          {navItems.map((item) => (
            <Tooltip key={item.name}>
              <TooltipTrigger asChild>
                <Link href={item.href} className="group relative rounded-full p-3 transition-colors hover:bg-accent">
                  <item.icon
                    className={cn(
                      'h-5 w-5 text-muted-foreground transition-colors group-hover:text-accent-foreground',
                      pathname === item.href && 'text-foreground'
                    )}
                  />
                  {pathname === item.href && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-[-6px] left-0 right-0 h-0.5 rounded-full bg-primary"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.name}</p>
              </TooltipContent>
            </Tooltip>
          ))}
          <div className="h-6 w-px bg-border" />
          <Tooltip>
            <TooltipTrigger asChild>
                <a 
                    href="/resume.pdf" 
                    download="resume.pdf"
                    className="group relative flex items-center justify-center rounded-full p-3 transition-colors hover:bg-accent"
                >
                    <Download className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-accent-foreground" />
                </a>
            </TooltipTrigger>
            <TooltipContent>
                <p>Download Resume</p>
            </TooltipContent>
          </Tooltip>
        </nav>
      </header>
    </TooltipProvider>
  );
}
