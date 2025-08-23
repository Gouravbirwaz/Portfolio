'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

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
  // Define the AdaptContentOutput type according to your API response structure
  type AdaptContentOutput = {
    adaptedBio?: string;
    talkingPoints?: string[];
    relevantProjects?: Array<{
      title: string;
      description: string;
      liveUrl?: string;
      repoUrl?: string;
      // add other project fields as needed
    }>;
    relevantCertifications?: Array<{
      name: string;
      issuer: string;
      // add other certification fields as needed
    }>;
    highlightedSkills?: string[];
    // add other fields as needed
  };
  
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
