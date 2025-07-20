
import Link from "next/link";
import { personalInfo } from "@/data/portfolio-data";
import { cn } from "@/lib/utils";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={cn(
      "main-footer", // Class for global animation control
      "border-t border-border/40 bg-background/95"
    )}>
      <div className="container mx-auto py-12 px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-4">
            {personalInfo.socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label={link.label}
              >
                {link.icon && <link.icon className="h-5 w-5" />}
                {link.username ? <span>{link.username}</span> : <span className="sr-only">{link.label}</span>}
              </Link>
            ))}
          </div>
          <p className="text-sm text-muted-foreground text-center">
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
