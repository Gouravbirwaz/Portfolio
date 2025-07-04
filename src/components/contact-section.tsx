'use client';

import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const contactMethods = [
  {
    icon: <Mail />,
    title: "Email",
    value: "gouravbirwaz@gmail.com",
    href: "mailto:gouravbirwaz@gmail.com"
  },
  {
    icon: <Phone />,
    title: "Phone",
    value: "+91 9141017165",
    href: "tel:+919141017165"
  },
  {
    icon: <Github />,
    title: "GitHub",
    value: "github.com/Gouravbirwaz",
    href: "https://github.com/Gouravbirwaz"
  },
  {
    icon: <Linkedin />,
    title: "LinkedIn",
    value: "linkedin.com/in/gourav-b62157295",
    href: "https://linkedin.com/in/gourav-b62157295"
  }
];

export function ContactSection() {
  return (
    <section id="deploy-connection" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl font-bold tracking-tighter text-gradient">
            <span className="text-accent-secondary before:content-['deploy_'] before:text-accent">Connection_Protocol</span>
            <span className="text-accent-tertiary after:content-['_{_..._}']"></span>
          </h2>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto before:content-['//_'] before:text-accent">
            Ready to build the future? Initiate a connection protocol. Let's talk.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactMethods.map((method) => (
            <a href={method.href} key={method.title} target="_blank" rel="noopener noreferrer" className="group">
              <Card className="bg-bg-secondary backdrop-blur-md border-border-color shadow-shadow-color h-full text-center p-6 transition-all duration-300 hover:border-accent hover:-translate-y-2 hover:shadow-xl hover:shadow-shadow-color">
                <CardContent className="p-0 flex flex-col items-center justify-center">
                    <div className="text-accent mb-4 transition-transform duration-300 group-hover:scale-125">
                      {method.icon}
                    </div>
                    <h3 className="font-headline text-xl text-accent mb-1">{method.title}</h3>
                    <p className="text-text-secondary break-all">{method.value}</p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
