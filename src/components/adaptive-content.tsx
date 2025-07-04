'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { adaptContent, type AdaptContentOutput } from '@/ai/flows/adapt-content';

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
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Wand2 } from 'lucide-react';

const formSchema = z.object({
  interests: z.string().min(2, {
    message: 'Please tell us a bit more about your interests.',
  }),
});

const initialBio = `I'm Gourav, a motivated and detail-oriented Software Engineer with a strong foundation in Artificial Intelligence and Machine Learning. I'm passionate about solving real-world problems through scalable solutions, leveraging AI/ML techniques, data structures and algorithms, and modern development technologies. Proficient in Python, React, Firebase, and ML frameworks such as TensorFlow and scikit-learn. I am seeking opportunities to contribute my technical and analytical skills to build impactful applications in the environmental, healthcare, and social good sectors.`;

export function AdaptiveContent() {
  const [adaptedBio, setAdaptedBio] = useState<AdaptContentOutput | null>(null);
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
    setAdaptedBio(null);
    try {
      const result = await adaptContent({ content: initialBio, interests: values.interests });
      setAdaptedBio(result);
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

  return (
    <div className="mt-16 mx-auto max-w-4xl">
      <Card className="bg-card/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="font-headline text-2xl flex items-center gap-2">
            <Wand2 className="text-accent" />
            <span>AI-Powered Bio</span>
          </CardTitle>
          <p className="text-muted-foreground pt-2">
            This section adapts to you. Tell me your interests (e.g., &quot;data visualization, mobile apps&quot;), and I&apos;ll tailor my introduction.
          </p>
        </CardHeader>
        <CardContent>
          <div className="p-6 border rounded-lg bg-background">
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse"></div>
                <div style={{ animationDelay: '200ms' }} className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse"></div>
                <div style={{ animationDelay: '400ms' }} className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse"></div>
                <span className="text-muted-foreground text-sm">Analyzing & Adapting...</span>
              </div>
            ) : (
              <p className="text-base leading-relaxed text-foreground/90">
                {adaptedBio ? adaptedBio.adaptedContent : initialBio}
              </p>
            )}
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 space-y-4">
              <FormField
                control={form.control}
                name="interests"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sr-only">Your Interests</FormLabel>
                    <div className="flex flex-col sm:flex-row gap-2">
                       <FormControl>
                        <Input placeholder="Enter your interests (e.g., machine learning, design)" {...field} />
                      </FormControl>
                      <Button type="submit" disabled={isLoading} className="bg-accent hover:bg-accent/90 text-accent-foreground">
                        Adapt Content
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
    </div>
  );
}
