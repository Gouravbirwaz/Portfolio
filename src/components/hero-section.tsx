'use client';

import { Sparkles } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";
import { useTypewriter } from "@/hooks/use-typewriter";

type HeroSectionProps = {
  bio?: string | null;
  talkingPoints?: string[] | null;
}

export function HeroSection({ bio, talkingPoints }: HeroSectionProps) {
  const typedName = useTypewriter(portfolioData.name, 150);

  return (
    <section id="hero" className="container mx-auto py-32 sm:py-48 min-h-[90vh] flex items-center">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="font-code text-accent before:content-['init_']">Gourav()</p>
          <h1 className="font-headline text-5xl font-extrabold tracking-tighter text-gradient sm:text-7xl md:text-8xl">
            {typedName}
            <span className="animate-ping">_</span>
          </h1>
          <h2 className="mt-4 font-code text-xl sm:text-2xl text-text-secondary before:content-['//_'] before:text-accent-tertiary">
            AI/ML Engineer & Software Developer
          </h2>
        </div>

        <div className="mt-12 mx-auto max-w-4xl">
          <div className="p-8 border rounded-lg bg-bg-secondary backdrop-blur-md border-border-color shadow-lg shadow-shadow-color">
            <p className="text-lg leading-relaxed text-text-secondary before:content-['/*_'] after:content-['_*/'] before:text-accent after:text-accent">
              {bio || portfolioData.objective}
            </p>

            {talkingPoints && talkingPoints.length > 0 && (
              <div className="mt-6">
                 <h3 className="font-headline text-xl flex items-center gap-2 mb-3 text-accent">
                  <Sparkles className="text-accent-secondary" />
                  Key Highlights For You
                </h3>
                <ul className="list-disc list-inside space-y-2 text-text-secondary/90 font-code text-base">
                  {talkingPoints.map((point, index) => <li key={index}>{point}</li>)}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
