
import type { CertificationEntry } from "@/data/portfolio-data";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Award, ExternalLink } from "lucide-react";

interface CertificationItemProps {
  certification: CertificationEntry;
}

export default function CertificationItem({ certification }: CertificationItemProps) {
  return (
    <Card className="group mb-6 shadow-md hover:shadow-lg hover:border-primary/30 transition-all duration-300 transform hover:scale-[1.01]">
      <CardHeader>
        <CardTitle className="font-headline text-xl md:text-2xl text-primary flex items-center">
         <Award className="mr-3 h-6 w-6" />
          {certification.name}
        </CardTitle>
        <CardDescription className="text-md font-medium text-foreground/80 pt-1">
          Issued by: {certification.issuer}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {certification.description && (
          <p className="text-sm text-muted-foreground mb-3">{certification.description}</p>
        )}
      </CardContent>
      <CardFooter>
        <Button asChild variant="link" className="text-primary p-0 h-auto group-hover:underline">
          <Link href={certification.link} target="_blank" rel="noopener noreferrer">
            View Credential <ExternalLink className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
