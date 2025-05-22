
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import AppLayout from "@/app/(app)/layout";
import { Mail, MessageSquare, User } from "lucide-react";
import type React from 'react'; // Import React type for FormEvent

export default function ContactPage() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    // In a real application, you would collect form data and send it to a backend API
    // For example:
    // const formData = new FormData(form);
    // const name = formData.get('name');
    // const email = formData.get('email');
    // const subject = formData.get('subject');
    // const message = formData.get('message');
    // console.log({ name, email, subject, message });

    alert(
      `Thank you for your message! In a real application, this would be sent to sabhisek328@gmail.com. (This is a demo, no email was actually sent)`
    );
    form.reset(); // Reset the form fields after showing the alert
  };

  return (
    <AppLayout>
      <div className="space-y-8">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl text-glow-primary">Contact Us</CardTitle>
            <CardDescription>Have questions or feedback? We'd love to hear from you.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-foreground/90">
            <p>
              If you have any inquiries, partnership proposals, or just want to share your thoughts about Lumina Images,
              please use the form below or reach out to us via our support channels.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center"><User className="mr-2 h-4 w-4 text-primary" /> Full Name</Label>
                  <Input id="name" name="name" type="text" placeholder="John Doe" required className="text-base" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center"><Mail className="mr-2 h-4 w-4 text-primary" /> Email Address</Label>
                  <Input id="email" name="email" type="email" placeholder="you@example.com" required className="text-base" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject" className="flex items-center"><MessageSquare className="mr-2 h-4 w-4 text-primary" /> Subject</Label>
                <Input id="subject" name="subject" type="text" placeholder="Regarding..." required className="text-base" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="flex items-center"><MessageSquare className="mr-2 h-4 w-4 text-primary" /> Your Message</Label>
                <Textarea id="message" name="message" placeholder="Tell us more..." required rows={6} className="min-h-[120px] text-base" />
              </div>
              <div>
                <Button type="submit" size="lg" className="w-full md:w-auto neon-glow-primary hover:scale-105 transition-transform">
                  Send Message
                </Button>
              </div>
            </form>
            <div className="pt-6 border-t border-border/40">
              <h3 className="text-xl font-semibold text-glow-accent mb-2">Other ways to reach us:</h3>
              <p><strong>Support Email:</strong> support@luminaimages.example.com (Not a real email)</p>
              <p><strong>Office Hours:</strong> Monday - Friday, 9 AM - 5 PM (PST)</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
