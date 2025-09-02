'use client';

import { education, skills } from '@/data/content';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { GraduationCap } from 'lucide-react';

export default function EducationContent() {
  return (
    <div className="container mx-auto max-w-4xl">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div>
          <h2 className="mb-8 text-center text-3xl font-bold tracking-tight">Education</h2>
          <div className="relative">
            <div className="absolute left-5 top-0 h-full w-0.5 -translate-x-1/2 bg-border" aria-hidden="true" />
            <div className="space-y-8">
              {education.map((item) => (
                <div key={item.institution} className="relative flex items-start gap-6">
                  <div className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-grow">
                    <Card className="bg-card/50 backdrop-blur-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/20">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">{item.degree}</CardTitle>
                          <p className="text-sm text-muted-foreground">{item.date}</p>
                        </div>
                        <p className="text-sm font-normal text-muted-foreground">{item.institution}</p>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h2 className="mb-8 text-center text-3xl font-bold tracking-tight">Skills</h2>
          <TooltipProvider>
            <div className="grid grid-cols-3 gap-4 sm:grid-cols-4">
              {skills.map((skill) => (
                <Tooltip key={skill.name}>
                  <TooltipTrigger asChild>
                    <div className="group flex flex-col items-center gap-2 rounded-lg bg-card/50 p-4 backdrop-blur-sm transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/20">
                      <skill.icon className="h-10 w-10 text-muted-foreground transition-colors group-hover:text-primary" />
                      <p className="text-center text-xs text-foreground">{skill.name}</p>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{skill.experience}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
}
