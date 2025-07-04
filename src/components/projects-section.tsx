import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight, Github } from 'lucide-react';
import type { portfolioData } from '@/lib/portfolio-data';

type Project = (typeof portfolioData.projects)[0];

type ProjectsSectionProps = {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="deployed-models" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl font-bold tracking-tighter text-gradient">
            <span className="text-accent-secondary before:content-['deploy_'] before:text-accent">Deployed_Models</span>
            <span className="text-accent-tertiary after:content-['_{_..._}']"></span>
          </h2>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto before:content-['//_'] before:text-accent">
            Each project represents a model, rigorously trained on complex datasets and deployed to demonstrate practical, high-impact solutions.
          </p>
        </div>
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card key={project.title} className="flex flex-col overflow-hidden group bg-bg-secondary backdrop-blur-md border-border-color shadow-shadow-color transition-all duration-300 hover:border-accent hover:-translate-y-2 hover:shadow-xl hover:shadow-shadow-color">
                <CardHeader className="p-0">
                  <div className="relative w-full h-60 overflow-hidden">
                      <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" data-ai-hint={project.hint} />
                  </div>
                </CardHeader>
                <CardContent className="flex-1 p-6">
                  <CardTitle className="font-headline text-xl mb-2 text-accent">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="font-code text-text-secondary">
                    {project.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="flex justify-between items-center p-6 pt-0">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-accent/10 text-accent border border-accent/20 font-code text-sm">{tag}</Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button asChild variant="ghost" size="sm" className="hover:bg-accent hover:text-primary-foreground">
                      <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                        <Github />
                      </a>
                    </Button>
                    <Button asChild variant="ghost" size="sm" className="hover:bg-accent hover:text-primary-foreground">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ArrowUpRight />
                      </a>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center text-text-secondary py-8 font-code">
            <p>// No models match your specified interests. Please broaden your search to see all trained models.</p>
          </div>
        )}
      </div>
    </section>
  );
}
