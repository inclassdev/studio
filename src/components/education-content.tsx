'use client';

import { education, skills } from '@/data/content';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export default function EducationContent() {
  return (
    <div className="container mx-auto max-w-4xl">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div>
          <h2 className="mb-8 text-center text-3xl font-bold tracking-tight">Education</h2>
          <div className="relative">
            <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border" aria-hidden="true" />
            {education.map((item, index) => (
              <div key={item.institution} className="group relative mb-8 flex items-center">
                <div className="hidden lg:flex lg:w-1/2 pr-8 justify-end text-right">
                  {index % 2 === 0 && (
                    <Card className="bg-card/50 backdrop-blur-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/20">
                      <CardHeader>
                        <CardTitle className="text-base">{item.degree}</CardTitle>
                        <p className="text-sm font-normal text-muted-foreground">{item.institution}</p>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">{item.description}</p>
                      </CardContent>
                    </Card>
                  )}
                </div>
                <div className="absolute left-1/2 top-1/2 z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary bg-background transition-all group-hover:scale-125 group-hover:bg-primary" />
                <div className="w-full lg:w-1/2 lg:pl-8">
                  <p className="mb-2 text-sm text-muted-foreground lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:bg-background lg:px-2">{item.date}</p>
                   {index % 2 !== 0 && (
                    <Card className="bg-card/50 backdrop-blur-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/20">
                      <CardHeader>
                        <CardTitle className="text-base">{item.degree}</CardTitle>
                        <p className="text-sm font-normal text-muted-foreground">{item.institution}</p>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">{item.description}</p>
                      </CardContent>
                    </Card>
                  )}
                  <div className="lg:hidden">
                    <Card className="bg-card/50 backdrop-blur-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/20">
                        <CardHeader>
                          <CardTitle className="text-base">{item.degree}</CardTitle>
                          <p className="text-sm font-normal text-muted-foreground">{item.institution}</p>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm">{item.description}</p>
                        </CardContent>
                      </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-8 text-center text-3xl font-bold tracking-tight">Skills</h2>
          <TooltipProvider>
            <div className="grid grid-cols-3 gap-4 sm:grid-cols-4">
              {skills.map((skill) => (
                <Tooltip key={skill.name}>
                  <TooltipTrigger asChild>
                    <div className="flex flex-col items-center gap-2 rounded-lg bg-card/50 p-4 backdrop-blur-sm transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/20">
                      <skill.icon className="h-10 w-10 text-muted-foreground transition-colors group-hover:text-primary" />
                      <p className="text-xs text-center text-foreground">{skill.name}</p>
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
