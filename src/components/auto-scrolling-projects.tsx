
"use client";

import type { ProjectEntry } from "@/data/portfolio-data";
import ProjectCard from "@/components/project-card";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AutoScrollingProjectsProps {
  projects: ProjectEntry[];
}

export default function AutoScrollingProjects({ projects }: AutoScrollingProjectsProps) {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Duplicate projects for seamless scrolling
  const duplicatedProjects = [...projects, ...projects];

  const handleInteraction = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsPaused(true);
    timeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 2000); // Pause for 2 seconds
  };

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  if (!projects || projects.length === 0) {
    return <p className="text-center text-muted-foreground">No projects to display.</p>;
  }

  return (
    <div 
      className="relative w-full overflow-hidden hide-scrollbar"
      onClick={handleInteraction}
      onTouchStart={handleInteraction} // Also pause on touch for mobile
      role="button" // for accessibility
      tabIndex={0} // for accessibility
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleInteraction();}} // for accessibility
      aria-label="Project showcase carousel, click or tap to pause scrolling for 2 seconds"
    >
      <div
        ref={scrollRef}
        className={cn(
          "flex w-max animate-scroll-x", // w-max makes the container wide enough for all items
          { "paused-scroll-animation": isPaused }
        )}
      >
        {duplicatedProjects.map((project, index) => (
          <div 
            key={`${project.id}-${index}`} 
            className="w-[350px] md:w-[400px] h-[560px] shrink-0 p-4"
          > {/* Adjust width and fixed height as needed */}
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
