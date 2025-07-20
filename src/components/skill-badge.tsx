interface SkillBadgeProps {
  skill: string;
}

export default function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <span className="inline-block bg-secondary text-secondary-foreground px-3 py-1.5 rounded-full text-sm font-medium shadow-sm">
      {skill}
    </span>
  );
}
