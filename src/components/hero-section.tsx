import { Sparkles } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";

type HeroSectionProps = {
  bio?: string | null;
  talkingPoints?: string[] | null;
}

export function HeroSection({ bio, talkingPoints }: HeroSectionProps) {
  return (
    <section id="hero" className="container mx-auto py-24 sm:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-6xl">
          {portfolioData.name}
        </h1>
        <p className="mt-6 text-xl leading-8 text-muted-foreground">
          Software Engineer & AI Enthusiast
        </p>
      </div>

      <div className="mt-12 mx-auto max-w-4xl">
        <div className="p-8 border rounded-lg bg-background/50 backdrop-blur-sm">
          <p className="text-base leading-relaxed text-foreground/90">
            {bio || portfolioData.objective}
          </p>

          {talkingPoints && talkingPoints.length > 0 && (
            <div className="mt-6">
               <h3 className="font-headline text-lg flex items-center gap-2 mb-3">
                <Sparkles className="text-accent" />
                Key Highlights For You
              </h3>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                {talkingPoints.map((point, index) => <li key={index}>{point}</li>)}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
