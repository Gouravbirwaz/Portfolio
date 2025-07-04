import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Sparkles } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";

type Skills = typeof portfolioData.skills;
type Certifications = typeof portfolioData.certifications;

type ResumeSectionProps = {
  skills: Skills & { 'Highlighted Skills'?: string[] };
  certifications: Certifications;
};

export function ResumeSection({ skills, certifications }: ResumeSectionProps) {
  const education = portfolioData.education;

  return (
    <section id="resume" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl font-bold tracking-tighter text-gradient">
            <span className="text-accent-secondary before:content-['fit_'] before:text-accent">Training_&_Validation</span>
            <span className="text-accent-tertiary after:content-['_{_..._}']"></span>
          </h2>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto before:content-['//_'] before:text-accent">
            An overview of my training data, validation metrics, and core competencies.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="mb-24">
            <h3 className="text-center font-headline text-3xl text-gradient mb-12">Core_Training</h3>
            <div className="education-timeline flex flex-col items-center">
              {education.map(edu => (
                <div key={edu.degree} className="education-item">
                  <div className="education-content bg-bg-secondary backdrop-blur-md border border-border-color rounded-lg p-6 w-full">
                    <h4 className="font-semibold text-lg text-accent">{edu.degree}</h4>
                    <p className="text-sm text-accent-secondary">{edu.university} | {edu.years}</p>
                    <p className="mt-2 text-base text-text-secondary">{edu.gpa}</p>
                  </div>
                </div>
              ))}
            </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card className="bg-bg-secondary backdrop-blur-md border-border-color">
              <CardHeader>
                <CardTitle className="font-headline text-accent before:content-['compile_'] before:text-accent-secondary after:content-['=_...'] after:text-accent-secondary">
                  Skill_Matrix
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {Object.entries(skills).map(([category, skillList]) => {
                  if (!skillList || skillList.length === 0) return null;
                  return (
                    <div key={category}>
                      <h3 className={`font-semibold mb-3 flex items-center gap-2 text-lg ${category === 'Highlighted Skills' ? 'text-accent' : 'text-accent-secondary'}`}>
                        {category === 'Highlighted Skills' && <Sparkles className="h-5 w-5" />}
                        {category}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {skillList.map(skill => <Badge key={skill} variant={category === 'Highlighted Skills' ? 'default' : 'secondary'} className={`font-code text-base py-1 px-3 ${category === 'Highlighted Skills' ? 'bg-accent/80 text-primary-foreground' : 'bg-accent/10 text-accent border border-accent/20'}`}>{skill}</Badge>)}
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-8">
            <Card className="bg-bg-secondary backdrop-blur-md border-border-color">
              <CardHeader>
                <CardTitle className="font-headline text-accent before:content-['validate_'] before:text-accent-secondary after:content-['=_...'] after:text-accent-secondary">
                  Validation_&_Certs
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {certifications.length > 0 ? certifications.map(cert => (
                  <div key={cert.name} className="border-l-2 border-accent pl-4">
                      <h3 className="font-semibold text-lg text-text-secondary">{cert.name}</h3>
                      <p className="text-sm text-accent-secondary">{cert.issuer}</p>
                      <p className="text-xs text-text-secondary/70">{cert.date}</p>
                  </div>
                )) : <p className="text-muted-foreground font-code">// No certifications match your interests.</p>}
              </CardContent>
            </Card>

            <Card className="text-center p-6 bg-bg-secondary backdrop-blur-md border-border-color">
              <h3 className="font-headline text-xl mb-4 text-accent">Export Training Data</h3>
              <Button asChild size="lg" variant="ghost" className="border-2 border-accent text-accent hover:bg-accent hover:text-primary-foreground">
                <a href="/Gourav-Birwaz-Resume.pdf" download="Gourav-Birwaz-Resume.pdf">
                  <Download className="mr-2 h-5 w-5" />
                  Export_Training_Data()
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
