
import { Metadata } from "next";
import Link from "next/link";
import { personalInfo, services } from "@/data/portfolio-data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone } from "lucide-react";
import ServiceCard from "@/components/service-card";

export const metadata: Metadata = {
  title: `Hire Harvind | Services Offered`,
  description: `Looking to hire? Explore the services offered by ${personalInfo.name}, including LLMOps, Machine Learning, Full Stack Development, IoT, and Data Analytics.`,
};

export default function HireMePage() {
  return (
    <div className="container mx-auto py-16 md:py-24">
      <header className="text-center mb-12 md:mb-16">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">
          Let's Build Something Amazing Together
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          I offer a range of services to bring your projects to life, leveraging my expertise in cutting-edge technologies.
          Explore my key service areas below.
        </p>
      </header>

      <section id="services" className="mb-16">
        <h2 className="font-headline text-3xl md:text-4xl font-bold mb-10 text-center text-primary">
          What I can bring to the table...
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      <section id="contact-cta" className="text-center">
        <Card className="max-w-2xl mx-auto shadow-xl bg-card border border-border p-6 md:p-10">
          <CardHeader>
            <CardTitle className="font-headline text-3xl md:text-4xl text-primary">So whats next?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-foreground/90 mb-6">
              If you're looking for a dedicated and passionate engineer to join your team or contribute to your project??, You're at the right place!
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button asChild size="lg" className="font-medium w-full sm:w-auto">
                <a href={`mailto:${personalInfo.email}`}>
                  <Mail className="mr-2 h-5 w-5" /> Send an Email
                </a>
              </Button>
              {/* Optional: Add a direct link to LinkedIn or a contact form page if you have one */}
              <Button asChild variant="outline" size="lg" className="font-medium w-full sm:w-auto">
                <Link href={personalInfo.socialLinks.find(link => link.label === "LinkedIn")?.href || "#"} target="_blank">
                  Connect via LinkedIn
                </Link>
              </Button>
            </div>
             <p className="mt-8 text-sm text-muted-foreground">
              Want to know more about me and my works??
            </p>
            <div className="mt-4 flex justify-center space-x-4">
                <Button asChild variant="link" className="text-primary">
                    <Link href="/projects">My Projects <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
                <Button asChild variant="link" className="text-primary">
                    <Link href="/about">About Me <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
