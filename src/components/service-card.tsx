import Link from "next/link";
import type { ServiceEntry } from "@/data/portfolio-data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  service: ServiceEntry;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = service.icon;

  return (
    <Card className="group flex flex-col overflow-hidden shadow-lg hover:shadow-xl hover:border-primary/50 transition-all duration-300 h-full bg-card border">
      <CardHeader className="pb-4">
        <div className="flex items-center mb-3">
          {IconComponent && <IconComponent className="h-8 w-8 mr-3 text-primary transition-transform duration-300 group-hover:scale-110" />}
          <CardTitle className="font-headline text-2xl text-card-foreground">{service.name}</CardTitle>
        </div>
        <CardDescription className="text-muted-foreground text-sm">
          {service.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        {/* Additional content can go here if needed in the future */}
      </CardContent>
    </Card>
  );
}
