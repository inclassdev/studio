'use client';

import { education, skills } from '@/data/content';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { GraduationCap } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function EducationContent() {
  return (
    <div className="container mx-auto max-w-4xl">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <h2 className="mb-8 text-center text-3xl font-bold tracking-tight">Education</h2>
          <Accordion type="single" collapsible className="w-full">
            {education.map((item, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background">
                      <GraduationCap className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-grow text-left">
                      <p className="font-semibold">{item.degree}</p>
                      <p className="text-sm text-muted-foreground">{item.institution}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pl-14">
                    <p className="mb-2 text-sm text-muted-foreground">{item.date}</p>
                    <p className="text-foreground/80">{item.description}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="lg:col-span-2">
          <h2 className="mb-8 text-center text-3xl font-bold tracking-tight">Skills</h2>
          <Card className="bg-card/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <TooltipProvider>
                <div className="grid grid-cols-3 gap-4 sm:grid-cols-4">
                  {skills.map((skill) => (
                    <Tooltip key={skill.name}>
                      <TooltipTrigger asChild>
                        <div className="group flex flex-col items-center gap-2 rounded-lg bg-background/50 p-4 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/20">
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
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}