import { AdaptiveContent } from './adaptive-content';

export function HeroSection() {
  return (
    <section id="hero" className="container mx-auto py-24 sm:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-6xl">
          Software Engineer & AI Enthusiast
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Welcome to my digital portfolio. I am Gourav Birwaz, a developer passionate about building scalable solutions with AI/ML to solve real-world problems.
        </p>
      </div>
      <AdaptiveContent />
    </section>
  );
}
