
import type { EducationEntry } from "@/data/portfolio-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, GraduationCap, MapPin } from "lucide-react";

interface EducationItemProps {
  education: EducationEntry;
}

export default function EducationItem({ education }: EducationItemProps) {
  return (
    <Card className="mb-6 shadow-md hover:shadow-lg hover:border-primary/30 transition-all duration-300 transform hover:scale-[1.01]">
      <CardHeader>
        <CardTitle className="font-headline text-xl md:text-2xl text-primary flex items-center">
          <GraduationCap className="mr-3 h-6 w-6" />
          {education.institution}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-lg font-medium text-foreground">{education.degree}</p>
        <div className="flex items-center text-sm text-muted-foreground">
          <CalendarDays className="mr-2 h-4 w-4" />
          <span>{education.period}</span>
        </div>
        {education.cgpa && (
          <p className="text-sm text-muted-foreground">
            <strong>CGPA:</strong> {education.cgpa}
          </p>
        )}
        <div className="flex items-center text-sm text-muted-foreground">
          <MapPin className="mr-2 h-4 w-4" />
          <span>{education.location}</span>
        </div>
      </CardContent>
    </Card>
  );
}
