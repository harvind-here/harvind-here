
'use client';

import { personalInfo, educationHistory, skillCategories, certifications, competitions } from "@/data/portfolio-data";
import EducationItem from "@/components/education-item";
import CertificationItem from "@/components/certification-item";
import SkillBadge from "@/components/skill-badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Award as AwardIcon, Code2, Trophy } from "lucide-react";
import Image from "next/image";
import CompetitionItem from "@/components/competition-item";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";


export default function AboutPage() {
  const [streamedSummary, setStreamedSummary] = useState("");
  const [isStreaming, setIsStreaming] = useState(true);
  const fullSummary = personalInfo.professionalSummary;

  useEffect(() => {
    setStreamedSummary(""); // Reset on each load/refresh
    setIsStreaming(true);
    
    const interval = setInterval(() => {
      setStreamedSummary((prev) => {
        if (prev.length < fullSummary.length) {
          return fullSummary.substring(0, prev.length + 1);
        } else {
          clearInterval(interval);
          setIsStreaming(false);
          return prev;
        }
      });
    }, 25); // Adjust typing speed here (milliseconds)

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="container mx-auto py-16 md:py-24">
      <header className="text-center mb-12 md:mb-16">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">About Me</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          A glimpse into my journey, skills, and passion for technology and innovation.
        </p>
      </header>

      {/* Professional Summary Section */}
      <section id="summary" className="mb-16">
         <Card className="shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
          <div className="md:flex">
            <div className="md:w-1/3 p-4 md:p-6 flex items-center justify-center bg-secondary/30 overflow-hidden">
              <Image
                src="/pfp.png"
                alt={personalInfo.name}
                width={400} 
                height={400} 
                className="object-contain w-full h-auto max-w-xs sm:max-w-sm md:max-w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-2/3 flex flex-col justify-center p-6 space-y-6">
                {/* User/Sent Message */}
                <div className="flex justify-end">
                    <div className="bg-primary text-primary-foreground p-3 rounded-lg rounded-br-none max-w-sm shadow-md">
                        <p>Tell me about Harvind Mukhal Muthukumar.</p>
                    </div>
                </div>

                {/* ATHEN/Received Message */}
                <div className="flex justify-start">
                    <div className="flex items-start gap-3">
                        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent shrink-0 shadow-md">
                        </div>
                        <div className="bg-card border p-4 rounded-lg rounded-bl-none max-w-lg shadow-md">
                             <p className="text-md text-foreground/90 leading-relaxed whitespace-pre-line text-justify min-h-[150px]">
                              {streamedSummary}
                              <span className={cn(
                                "inline-block w-2 h-5 bg-primary ml-0.5 -mb-1 animate-blink",
                                !isStreaming && "hidden" // Hide cursor when streaming is done
                              )}></span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Education Section */}
      <section id="education" className="mb-16">
        <h2 className="font-headline text-3xl md:text-4xl font-bold mb-8 text-center md:text-left flex items-center justify-center md:justify-start">
          <BookOpen className="mr-3 h-8 w-8 text-primary" />
          Education
        </h2>
        <div>
          {educationHistory.map((edu, index) => (
            <EducationItem key={index} education={edu} />
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="mb-16">
        <h2 className="font-headline text-3xl md:text-4xl font-bold mb-8 text-center md:text-left flex items-center justify-center md:justify-start">
          <Code2 className="mr-3 h-8 w-8 text-primary" />
          Technical Skills
        </h2>
        <div className="space-y-8">
          {skillCategories.map((category) => (
            <Card key={category.name} className="shadow-md hover:shadow-lg hover:border-primary/20 transition-all duration-300">
              <CardHeader>
                <CardTitle className="font-headline text-xl md:text-2xl text-foreground">{category.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <SkillBadge key={skill} skill={skill} />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="mb-16">
        <h2 className="font-headline text-3xl md:text-4xl font-bold mb-8 text-center md:text-left flex items-center justify-center md:justify-start">
          <AwardIcon className="mr-3 h-8 w-8 text-primary" />
          Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <CertificationItem key={index} certification={cert} />
          ))}
        </div>
      </section>

       {/* Competitions Section */}
      <section id="competitions">
        <h2 className="font-headline text-3xl md:text-4xl font-bold mb-8 text-center md:text-left flex items-center justify-center md:justify-start">
          <Trophy className="mr-3 h-8 w-8 text-primary" />
          Competitions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {competitions.map((comp, index) => (
            <CompetitionItem key={index} competition={comp} />
          ))}
        </div>
      </section>
    </div>
  );
}
