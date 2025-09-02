'use client';

import { useState, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { projects } from '@/data/content';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import type { Project } from '@/lib/types';
import { Skeleton } from '@/components/ui/skeleton';

const categories = ['All', 'Web', 'Design', 'Blog', 'Other'];

export default function ProjectsContent() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  // Simulate image loading
  useState(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  });

  const filteredProjects = useMemo(() => {
    if (filter === 'All') return projects;
    return projects.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <div className="container mx-auto max-w-6xl">
      <div className="mb-8 flex justify-center gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={filter === category ? 'default' : 'secondary'}
            onClick={() => setFilter(category)}
            className="rounded-full"
          >
            {category}
          </Button>
        ))}
      </div>
      <motion.div
        layout
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence>
          {(loading ? Array(6).fill(0) : filteredProjects).map((project, index) =>
            loading ? (
              <Card key={index} className="bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <Skeleton className="h-6 w-3/4" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-40 w-full" />
                </CardContent>
                <CardFooter>
                  <Skeleton className="h-10 w-28" />
                </CardFooter>
              </Card>
            ) : (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  className="flex h-full cursor-pointer flex-col overflow-hidden bg-card/50 shadow-lg backdrop-blur-sm transition-all hover:shadow-primary/20 hover:scale-105"
                  onClick={() => setSelectedProject(project)}
                >
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="relative aspect-video w-full">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="rounded-md object-cover"
                        data-ai-hint="abstract technology"
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                  </CardFooter>
                </Card>
              </motion.div>
            )
          )}
        </AnimatePresence>
      </motion.div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl bg-card/80 backdrop-blur-xl">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold">{selectedProject.title}</DialogTitle>
                <DialogDescription className="text-base text-muted-foreground">{selectedProject.description}</DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="relative aspect-video w-full">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="rounded-lg object-cover"
                    data-ai-hint="abstract technology"
                  />
                </div>
                <div>
                  <h3 className="mb-4 text-xl font-semibold">Project Details</h3>
                  <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                    {selectedProject.details.map((detail, i) => <li key={i}>{detail}</li>)}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
