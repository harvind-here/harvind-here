
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import type { ProjectEntry } from "@/data/portfolio-data";
import { projects as allProjects } from "@/data/portfolio-data";

interface ProjectCardProps {
  project: ProjectEntry;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card id={project.id} className="group flex flex-col h-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 bg-card">
      <CardHeader className="p-0 shrink-0">
        <div className="aspect-[16/9] relative w-full overflow-hidden rounded-t-lg">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={project.id === allProjects[0]?.id} 
            data-ai-hint={project.imageHint}
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex flex-col flex-grow overflow-hidden">
        <CardTitle className="font-headline text-2xl mb-2 text-card-foreground">{project.title}</CardTitle>
        {project.subtitle && <CardDescription className="text-primary mb-3 font-medium">{project.subtitle}</CardDescription>}
        
        <div className="flex-grow overflow-y-auto mb-4 pr-1 scrollbar-thin">
          {project.description.map((paragraph, index) => (
            <p key={index} className="text-muted-foreground mb-3 text-sm leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
        
        <div className="mt-auto shrink-0">
          <h4 className="text-sm font-semibold uppercase text-foreground/70 mb-2">Technologies Used</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-full font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t p-6 flex justify-end space-x-3 bg-muted/30 shrink-0">
        {project.demoLink && (
          <Button asChild variant="default">
            <Link href={project.demoLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> LiveLink
            </Link>
          </Button>
        )}
        {project.sourceLink && (
          <Button asChild variant="default">
            <Link href={project.sourceLink} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> Source
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
