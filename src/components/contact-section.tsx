'use client';

import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function ContactSection() {

  return (
    <section id="contact" className="py-24 sm:py-32 bg-secondary/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl font-bold tracking-tight text-primary">Get In Touch</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Have a project in mind, a question, or just want to say hello? I&apos;d love to hear from you.
          </p>
        </div>
        <div className="mx-auto max-w-md text-center">
            <Card>
                <CardContent className="p-8 space-y-6">
                    <div className="flex flex-col gap-4">
                        <Button asChild size="lg" variant="outline">
                            <a href="mailto:gouravbirwaz@gmail.com">
                                <Mail className="mr-2 h-5 w-5" />
                                gouravbirwaz@gmail.com
                            </a>
                        </Button>
                        <Button asChild size="lg" variant="outline">
                            <a href="tel:+919141017165">
                                <Phone className="mr-2 h-5 w-5" />
                                +91 9141017165
                            </a>
                        </Button>
                    </div>
                </CardContent>
            </Card>
            <div className="mt-12 flex justify-center gap-6">
                <a href="https://github.com/Gouravbirwaz" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Github className="h-8 w-8" /></a>
                <a href="https://linkedin.com/in/gourav-b62157295" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="h-8 w-8" /></a>
            </div>
        </div>
      </div>
    </section>
  );
}
