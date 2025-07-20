
import type { CompetitionEntry } from "@/data/portfolio-data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy } from "lucide-react";

interface CompetitionItemProps {
  competition: CompetitionEntry;
}

export default function CompetitionItem({ competition }: CompetitionItemProps) {
  return (
    <Card className="group mb-6 shadow-md hover:shadow-lg hover:border-primary/30 transition-all duration-300 transform hover:scale-[1.01]">
      <CardHeader>
        <CardTitle className="font-headline text-xl md:text-2xl text-primary flex items-start">
         <Trophy className="mr-3 h-6 w-6 mt-1 shrink-0" />
          <div className="flex-1">
            {competition.name}
             <span className="block text-lg font-semibold text-accent mt-1">{competition.rank}</span>
          </div>
        </CardTitle>
        <CardDescription className="text-md font-medium text-foreground/80 pt-1 pl-9">
          Organized by: {competition.organizer}
        </CardDescription>
      </CardHeader>
      <CardContent className="pl-9">
        {competition.description && (
          <p className="text-sm text-muted-foreground mb-3">{competition.description}</p>
        )}
      </CardContent>
    </Card>
  );
}
