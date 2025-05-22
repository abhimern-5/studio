import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import AppLayout from "@/app/(app)/layout";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CareersPage() {
  return (
    <AppLayout>
      <div className="space-y-8">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl text-glow-primary">Careers at Lumina Images</CardTitle>
            <CardDescription>Join our team and help shape the future of AI-powered creativity.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-foreground/90">
            <p>
              At Lumina Images, we're passionate about building innovative tools that empower creativity. We're a dynamic team of thinkers, creators, and problem-solvers working at the intersection of artificial intelligence and visual arts. If you're excited by the potential of AI and want to make an impact, we'd love to hear from you.
            </p>
            
            <h3 className="text-2xl font-semibold text-glow-accent pt-4">Why Work With Us?</h3>
            <ul className="list-disc list-inside pl-4 space-y-2">
              <li><strong>Innovative Projects:</strong> Work on cutting-edge AI technologies and build features that millions will use.</li>
              <li><strong>Collaborative Culture:</strong> Be part of a supportive and inspiring team environment where your ideas are valued.</li>
              <li><strong>Growth Opportunities:</strong> We invest in our team's development with learning resources and challenging projects.</li>
              <li><strong>Impactful Work:</strong> Help artists, designers, and creators around the world bring their visions to life.</li>
              <li><strong>Flexible Environment:</strong> We offer a flexible work environment that promotes work-life balance.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-glow-accent pt-6">Current Openings</h3>
            <p>
              We are always looking for talented individuals to join our team. While we may not have specific roles listed at all times, we encourage you to reach out if you believe your skills and passion align with our mission.
            </p>
            <div className="space-y-4 mt-4">
              {/* Example Job Listing (commented out or replace with actuals) */}
              {/*
              <Card className="bg-secondary/30">
                <CardHeader>
                  <CardTitle className="text-xl">Senior AI Engineer</CardTitle>
                  <CardDescription>Remote / Full-time</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>We are looking for an experienced AI Engineer to lead the development of our next-generation image models...</p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" asChild><Link href="#">Learn More & Apply</Link></Button>
                </CardFooter>
              </Card>
              */}
              <p className="text-muted-foreground">
                Currently, there are no specific job openings listed. However, we are always interested in hearing from talented individuals.
              </p>
            </div>

            <div className="pt-8 text-center">
              <h3 className="text-xl font-semibold text-glow-accent mb-2">Interested in Joining Us?</h3>
              <p className="mb-4">
                If you don't see a role that fits your profile but are excited about Lumina Images, send us your resume and a cover letter explaining why you'd be a great fit.
              </p>
              <Button size="lg" className="neon-glow-primary hover:scale-105 transition-transform" asChild>
                <Link href="mailto:careers@luminaimages.example.com">Contact Our Hiring Team</Link>
              </Button>
              <p className="text-sm text-muted-foreground mt-2">(careers@luminaimages.example.com - Not a real email)</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
