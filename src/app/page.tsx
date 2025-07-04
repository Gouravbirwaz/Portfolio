'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { adaptContent, type AdaptContentOutput } from '@/ai/flows/adapt-content';
import { portfolioData } from '@/lib/portfolio-data';

import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { ProjectsSection } from '@/components/projects-section';
import { ResumeSection } from '@/components/resume-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
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
      const result = await adaptContent({ interests: values.interests, portfolio: portfolioData });
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

  const projects = adaptedData?.relevantProjects?.length ? adaptedData.relevantProjects : portfolioData.projects;
  const certifications = adaptedData?.relevantCertifications?.length ? adaptedData.relevantCertifications : portfolioData.certifications;
  
  let skills:any = portfolioData.skills;
  if (adaptedData?.highlightedSkills && adaptedData.highlightedSkills.length > 0) {
    skills = { 'Highlighted Skills': adaptedData.highlightedSkills, ...portfolioData.skills };
  }


  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection bio={adaptedData?.adaptedBio} talkingPoints={adaptedData?.talkingPoints} />
        
        <section className="container mx-auto -mt-24 sm:-mt-32 md:-mt-40 z-10 relative">
          <Card className="bg-card/80 backdrop-blur-sm border-accent/20 shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl flex items-center gap-2">
                <Wand2 className="text-accent" />
                <span>Tailor This Portfolio to Your Needs</span>
              </CardTitle>
              <CardDescription className="pt-2 text-base">
                What are you looking for in a candidate? Enter your key interests (e.g., &quot;backend API development&quot;, &quot;AI for healthcare&quot;, &quot;mobile apps with Flutter&quot;), and I'll dynamically highlight my most relevant skills and projects for you.
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
                            <Input placeholder="e.g., AI/ML, backend development..." {...field} />
                          </FormControl>
                          <Button type="submit" disabled={isLoading} className="bg-accent hover:bg-accent/90 text-accent-foreground">
                            {isLoading ? 'Adapting...' : 'Adapt Portfolio'}
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
                    <div className="w-4 h-4 rounded-full bg-accent animate-pulse"></div>
                    <div style={{ animationDelay: '200ms' }} className="w-4 h-4 rounded-full bg-accent animate-pulse"></div>
                    <div style={{ animationDelay: '400ms' }} className="w-4 h-4 rounded-full bg-accent animate-pulse"></div>
                </div>
                <p className="mt-4 text-lg text-muted-foreground">Personalizing content for you...</p>
            </div>
        )}

        {!isLoading && (
          <>
            <ProjectsSection projects={projects} />
            <ResumeSection skills={skills} certifications={certifications} />
            <ContactSection />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
