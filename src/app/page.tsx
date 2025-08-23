'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { type AdaptContentOutput } from '@/ai/flows/adapt-content';
import { portfolioData } from '@/lib/portfolio-data';

import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { ProjectsSection } from '@/components/projects-section';
import { ResumeSection } from '@/components/resume-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Wand2 } from 'lucide-react';

const formSchema = z.object({
  interests: z.string().min(2, {
    message: 'Please tell us a bit more about your interests.',
  }),
});

export default function Home() {
  const [adaptedData, setAdaptedData] = useState<AdaptContentOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      interests: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setAdaptedData(null);
    try {
      const response = await fetch('/api/adapt-content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ interests: values.interests, portfolio: portfolioData }),
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      setAdaptedData(result);
    } catch (error) {
      console.error(error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to adapt content. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  }

  // ✅ Ensure `liveUrl` and `repoUrl` are always strings
  const projects = (adaptedData?.relevantProjects?.length
    ? adaptedData.relevantProjects
    : portfolioData.projects
  ).map((p) => ({
    ...p,
    liveUrl: p.liveUrl ?? '',
    repoUrl: p.repoUrl ?? '',
  }));

  const certifications = adaptedData?.relevantCertifications?.length
    ? adaptedData.relevantCertifications
    : portfolioData.certifications;

  const skills =
    adaptedData?.highlightedSkills?.length
      ? { 'Highlighted Skills': adaptedData.highlightedSkills, ...portfolioData.skills }
      : portfolioData.skills;

  return (
    <div className="flex min-h-screen flex-col bg-transparent">
      <Header />
      <main className="flex-1">
        <HeroSection bio={adaptedData?.adaptedBio} talkingPoints={adaptedData?.talkingPoints} />

        <section
          id="ai-adapter"
          className="container mx-auto -mt-24 sm:-mt-32 md:-mt-40 z-20 relative"
        >
          <Card className="bg-bg-secondary backdrop-blur-md border-border-color shadow-lg shadow-shadow-color">
            <CardHeader>
              <CardTitle className="font-headline text-xl flex items-center gap-2 text-accent">
                <Wand2 />
                <span className="before:content-['compile_'] before:text-accent-secondary">
                  AdapterEngine
                </span>
              </CardTitle>
              <CardDescription className="pt-2 text-base text-text-secondary before:content-['//_'] before:text-accent-tertiary">
                What are you looking for? Enter your interests (e.g., &quot;backend API
                development&quot;, &quot;AI for healthcare&quot;), and I'll dynamically
                reconfigure this portfolio to highlight my most relevant skills and
                projects for you.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="interests"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="sr-only">Your Interests</FormLabel>
                        <div className="flex flex-col sm:flex-row gap-2">
                          <FormControl>
                            <Input
                              placeholder="> Enter interests..."
                              {...field}
                              className="bg-background/80 border-accent/50 focus:ring-accent text-base"
                            />
                          </FormControl>
                          <Button
                            type="submit"
                            disabled={isLoading}
                            variant="ghost"
                            className="border-2 border-accent text-accent hover:bg-accent hover:text-black"
                          >
                            {isLoading ? 'Adapting...' : 'Execute()'}
                          </Button>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </form>
              </Form>
            </CardContent>
          </Card>
        </section>

        {isLoading && (
          <div className="text-center py-24">
            <div className="flex items-center justify-center space-x-2">
              <p className="font-code text-accent text-lg">Training ........</p>
            </div>
            <p className="mt-4 text-lg text-text-secondary">
              Personalizing content matrix for you...
            </p>
          </div>
        )}

        <div className="relative z-10">
          {!isLoading && (
            <>
              <ProjectsSection projects={projects} />
              <ResumeSection skills={skills} certifications={certifications} />
              <ContactSection />
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
