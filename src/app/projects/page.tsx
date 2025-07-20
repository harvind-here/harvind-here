import ProjectCard from "@/components/project-card";
import { projects, personalInfo } from "@/data/portfolio-data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Projects | ${personalInfo.name}`,
  description: `Explore the projects by ${personalInfo.name}.`,
};

export default function ProjectsPage() {
  return (
    <div className="container mx-auto py-16 md:py-24">
      <header className="text-center mb-12 md:mb-16">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">My Projects</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          A collection of my work, showcasing my skills in AI/ML, web development, and more.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
