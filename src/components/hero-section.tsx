import { AdaptiveContent } from './adaptive-content';

export function HeroSection() {
  return (
    <section id="hero" className="container mx-auto py-24 sm:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-6xl">
          Synthesizing Creativity with Code
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Welcome to my digital space. I&apos;m a passionate developer and creator, exploring the intersection of technology and design. This portfolio is a curated collection of my work, thoughts, and experiments.
        </p>
      </div>
      <AdaptiveContent />
    </section>
  );
}
