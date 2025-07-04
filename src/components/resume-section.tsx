import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Briefcase, GraduationCap } from "lucide-react";

const skills = [
  'Python', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 
  'TensorFlow', 'PyTorch', 'Scikit-learn', 'SQL', 'NoSQL', 'Docker', 'Kubernetes', 'AWS'
];

export function ResumeSection() {
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
                <CardTitle className="font-headline flex items-center gap-3"><Briefcase className="text-accent" /> Experience</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg">Senior ML Engineer</h3>
                  <p className="text-sm text-muted-foreground">Tech Innovators Inc. | 2020 - Present</p>
                  <p className="mt-2 text-base">Leading the development of predictive models and deploying scalable machine learning solutions. Collaborated on a project that increased user engagement by 25%.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Software Developer</h3>
                  <p className="text-sm text-muted-foreground">Digital Solutions Co. | 2018 - 2020</p>
                  <p className="mt-2 text-base">Developed and maintained full-stack web applications for enterprise clients. Specialized in front-end development with React and data visualization.</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-headline flex items-center gap-3"><GraduationCap className="text-accent" /> Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                 <div>
                  <h3 className="font-semibold text-lg">M.S. in Computer Science</h3>
                  <p className="text-sm text-muted-foreground">University of Technology | 2016 - 2018</p>
                  <p className="mt-2 text-base">Specialization in Artificial Intelligence and Machine Learning. Thesis on Reinforcement Learning for game environments.</p>
                </div>
                 <div>
                  <h3 className="font-semibold text-lg">B.S. in Software Engineering</h3>
                  <p className="text-sm text-muted-foreground">State University | 2012 - 2016</p>
                  <p className="mt-2 text-base">Graduated with honors. Active member of the coding club and participated in several hackathons.</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline">Skills</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {skills.map(skill => <Badge key={skill} variant="outline" className="text-base py-1 px-3">{skill}</Badge>)}
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <h3 className="font-headline text-xl mb-4">Download My Resume</h3>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <a href="/resume.pdf" download="JohnDoe-Resume.pdf">
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
