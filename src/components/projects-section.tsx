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
    <section id="projects" className="py-24 sm:py-32 bg-secondary/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl font-bold tracking-tight text-primary">My Projects</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A selection of my work demonstrating my skills in web, mobile, and AI.
          </p>
        </div>
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card key={project.title} className="flex flex-col overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="p-0">
                  <div className="relative w-full h-60 overflow-hidden">
                      <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" data-ai-hint={project.hint} />
                  </div>
                </CardHeader>
                <CardContent className="flex-1 p-6">
                  <CardTitle className="font-headline text-xl mb-2">{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardContent>
                <CardFooter className="flex justify-end gap-2 p-6 pt-0">
                  <Button asChild variant="ghost" size="sm">
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                      <Github />
                      GitHub
                    </a>
                  </Button>
                  <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground" size="sm">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      Live Demo
                      <ArrowUpRight />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center text-muted-foreground py-8">
            <p>No projects match your specified interests. Please broaden your search to see all projects.</p>
          </div>
        )}
      </div>
    </section>
  );
}
