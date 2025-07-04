import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight, Github } from 'lucide-react';

const projects = [
  {
    title: 'Neural Network Visualizer',
    description: 'An interactive platform to build, train, and visualize neural networks in real-time. Built with D3.js and TensorFlow.js.',
    image: 'https://placehold.co/600x400.png',
    hint: 'neural network',
    tags: ['React', 'Next.js', 'AI', 'Visualization'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Predictive Analytics Dashboard',
    description: 'A comprehensive dashboard for e-commerce businesses to forecast sales trends using historical data and ML models.',
    image: 'https://placehold.co/600x400.png',
    hint: 'dashboard analytics',
    tags: ['Python', 'Flask', 'React', 'Charts'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Generative Art System',
    description: 'A creative tool that uses generative adversarial networks (GANs) to produce unique, abstract artwork based on user inputs.',
    image: 'https://placehold.co/600x400.png',
    hint: 'abstract art',
    tags: ['Pytorch', 'Next.js', 'Generative AI'],
    liveUrl: '#',
    repoUrl: '#',
  },
    {
    title: 'Sentiment Analysis API',
    description: 'A robust REST API that provides sentiment analysis for text data, capable of handling high-volume requests for social media monitoring.',
    image: 'https://placehold.co/600x400.png',
    hint: 'code terminal',
    tags: ['Node.js', 'Express', 'NLP'],
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
          <p className="mt-4 text-lg text-muted-foreground">A selection of my work in machine learning and web development.</p>
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
