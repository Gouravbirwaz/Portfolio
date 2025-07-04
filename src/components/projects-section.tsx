import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight, Github } from 'lucide-react';

const projects = [
  {
    title: 'EcoConnect – AI Environmental Platform',
    description: 'A full-stack web application to facilitate real-time environmental reporting and citizen engagement, with AI models to detect anomalies.',
    image: 'https://placehold.co/600x400.png',
    hint: 'environmental technology',
    tags: ['React', 'Node.js', 'Firebase', 'AI', 'Tailwind CSS'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Cross-Platform Mobile App',
    description: 'A mobile application built with Flutter for both Android and iOS. Showcases experience in cross-platform development and modern UI.',
    image: 'https://placehold.co/600x400.png',
    hint: 'mobile app screen',
    tags: ['Flutter', 'Dart', 'Firebase'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Django REST API',
    description: 'A backend project using Django and Django REST Framework to create a robust API for a web service, including authentication and database management.',
    image: 'https://placehold.co/600x400.png',
    hint: 'code api backend',
    tags: ['Python', 'Django', 'REST API', 'Postman'],
    liveUrl: '#',
    repoUrl: '#',
  },
    {
    title: 'Computer Vision Project',
    description: 'A project utilizing OpenCV and TensorFlow for a computer vision task, such as object detection or image classification, demonstrating practical ML skills.',
    image: 'https://placehold.co/600x400.png',
    hint: 'computer vision',
    tags: ['Python', 'OpenCV', 'TensorFlow', 'Computer Vision'],
    liveUrl: '#',
    repoUrl: '#',
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 sm:py-32 bg-secondary/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl font-bold tracking-tight text-primary">My Projects</h2>
          <p className="mt-4 text-lg text-muted-foreground">A selection of my work demonstrating my skills in web, mobile, and AI.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="relative w-full h-60 rounded-t-lg overflow-hidden">
                    <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" data-ai-hint={project.hint} />
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <CardTitle className="font-headline text-xl mb-2">{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
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
      </div>
    </section>
  );
}
