
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, Briefcase, Home, UserCircle, XIcon as X, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { useState } from "react";
import { personalInfo } from "@/data/portfolio-data";
import { cn, asset } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: UserCircle },
  { href: "/projects", label: "Projects", icon: Briefcase },
  { href: "/hire-me", label: "Hire Me", icon: Building },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className={cn(
      "main-navbar", // Class for global animation control
      "sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    )}>
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 group">
          <Image
            src={asset("/pfp.png")}
            alt="logo"
            width={32}
            height={32}
            className="rounded-full object-cover object-top transition-transform duration-200 group-hover:scale-110"
          />
          <span className="font-headline text-xl font-bold text-foreground">
            {personalInfo.name.split(" ")[0]} {/* First name */}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-primary",
                pathname === item.href
                  ? "text-primary font-semibold"
                  : "text-foreground/70 hover:text-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background p-6">
              <div className="flex flex-col space-y-1">
                <div className="flex justify-between items-center mb-4">
                 <Link href="/" className="flex items-center space-x-2 group" onClick={() => setIsMobileMenuOpen(false)}>
                    <Image
                      src={asset("/pfp.png")}
                      alt="logo"
                      width={28}
                      height={28}
                      className="rounded-full object-cover object-top transition-transform duration-200 group-hover:scale-110"
                    />
                    <span className="font-headline text-lg font-bold">Menu</span>
                  </Link>
                  <SheetClose asChild>
                     <Button variant="ghost" size="icon">
                        <X className="h-5 w-5" />
                        <span className="sr-only">Close menu</span>
                      </Button>
                  </SheetClose>
                </div>
                {navItems.map((item) => (
                  <SheetClose asChild key={item.label}>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center space-x-3 rounded-md px-3 py-3 text-base font-medium transition-colors",
                        pathname === item.href
                          ? "bg-primary/10 text-primary"
                          : "hover:bg-accent hover:text-accent-foreground"
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </Link>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
