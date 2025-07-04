import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, GraduationCap, Award } from "lucide-react";

const skills = [
  'Python', 'Dart', 'C++', 'C', 'Java', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'Django', 'Django REST Framework', 'Firebase', 'Flutter', 'TensorFlow', 'scikit-learn', 'NumPy', 'Pandas', 'OpenCV', 'Git', 'GitHub', 'Postman', 'Linux', 'DSA'
];

const certifications = [
    { name: "Artificial intelligence for everyone", issuer: "DeepLearning.AI", date: "May 2024" },
    { name: "Deep Learning in ecological studies", issuer: "Indian Institute of Remote Sensing (IIRS)", date: "Nov 2024" },
    { name: "Problem Solving (basic)", issuer: "HackerRank", date: "Jul 2024" },
    { name: "Python Programming intermediate", issuer: "IIIT Kota", date: "Mar 2024" },
]

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
                <CardTitle className="font-headline flex items-center gap-3"><GraduationCap className="text-accent" /> Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                 <div>
                  <h3 className="font-semibold text-lg">Bachelor of Engineering in Computer Science (AI/ML)</h3>
                  <p className="text-sm text-muted-foreground">Visvesvaraya Technological University, Karnataka | 2023 - 2027</p>
                  <p className="mt-2 text-base">Current GPA: 9.23 / 10</p>
                </div>
                 <div>
                  <h3 className="font-semibold text-lg">Pre-University Education</h3>
                  <p className="text-sm text-muted-foreground">Karnataka State Board | 2021</p>
                  <p className="mt-2 text-base">Grade: 95%</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-headline flex items-center gap-3"><Award className="text-accent" /> Certifications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {certifications.map(cert => (
                    <div key={cert.name}>
                        <h3 className="font-semibold text-lg">{cert.name}</h3>
                        <p className="text-sm text-muted-foreground">{cert.issuer} | {cert.date}</p>
                    </div>
                ))}
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline">Technical Skills</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {skills.map(skill => <Badge key={skill} variant="secondary" className="text-base py-1 px-3">{skill}</Badge>)}
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
