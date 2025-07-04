import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, GraduationCap, Award, Sparkles } from "lucide-react";
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
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl font-bold tracking-tight text-primary">Interactive Resume</h2>
          <p className="mt-4 text-lg text-muted-foreground">A summary of my professional journey and technical skills.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline flex items-center gap-3"><GraduationCap className="text-accent" /> Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {education.map(edu => (
                  <div key={edu.degree}>
                    <h3 className="font-semibold text-lg">{edu.degree}</h3>
                    <p className="text-sm text-muted-foreground">{edu.university} | {edu.years}</p>
                    <p className="mt-2 text-base">{edu.gpa}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-headline flex items-center gap-3"><Award className="text-accent" /> Certifications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {certifications.length > 0 ? certifications.map(cert => (
                    <div key={cert.name}>
                        <h3 className="font-semibold text-lg">{cert.name}</h3>
                        <p className="text-sm text-muted-foreground">{cert.issuer} | {cert.date}</p>
                    </div>
                )) : <p className="text-muted-foreground">No certifications match your interests.</p>}
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-8">
             <Card>
              <CardHeader>
                <CardTitle className="font-headline">Technical Skills</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.entries(skills).map(([category, skillList]) => {
                  if (!skillList || skillList.length === 0) return null;
                  return (
                  <div key={category}>
                    <h3 className={`font-semibold mb-2 flex items-center gap-2 ${category === 'Highlighted Skills' ? 'text-accent' : ''}`}>
                      {category === 'Highlighted Skills' && <Sparkles className="h-4 w-4" />}
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                       {skillList.map(skill => <Badge key={skill} variant={category === 'Highlighted Skills' ? 'default' : 'secondary'} className="text-base py-1 px-3">{skill}</Badge>)}
                    </div>
                  </div>
                )})}
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <h3 className="font-headline text-xl mb-4">Download My Resume</h3>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <a href="/Gourav-Birwaz-Resume.pdf" download="Gourav-Birwaz-Resume.pdf">
                  <Download className="mr-2 h-5 w-5" />
                  Download PDF
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
