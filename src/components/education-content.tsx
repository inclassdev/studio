'use client';

import { education, skills } from '@/data/content';
import { Card, CardContent } from '@/components/ui/card';
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
      <div className="flex flex-col gap-16">
        <div>
          <h2 className="mb-8 text-center text-3xl font-bold tracking-tight">Education</h2>
          <Accordion type="single" collapsible className="w-full">
            {education.map((item, index) => (
              <AccordionItem value={`item-${index}`} key={index} className="border-b-0">
                <Card className="mb-4 bg-card/50 backdrop-blur-sm">
                  <AccordionTrigger className="p-6 hover:no-underline">
                    <div className="flex w-full items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background">
                        <GraduationCap className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-grow text-left">
                        <p className="text-lg font-semibold">{item.degree}</p>
                        <p className="text-sm text-muted-foreground">{item.institution} - {item.date}</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="px-6 pb-6 pt-0">
                      <p className="text-foreground/80">{item.description}</p>
                    </div>
                  </AccordionContent>
                </Card>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div>
          <h2 className="mb-8 text-center text-3xl font-bold tracking-tight">Skills</h2>
          <Card className="bg-card/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <TooltipProvider>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8">
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
