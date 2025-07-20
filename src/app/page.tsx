
"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { personalInfo, projects } from "@/data/portfolio-data";
import { ArrowRight } from "lucide-react";
import AutoScrollingProjects from "@/components/auto-scrolling-projects";
import AnimatedBackgroundShapes from "@/components/animated-background-shapes";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import LoadingAnimation from "@/components/loading-animation";

export default function Home() {
  const [animationState, setAnimationState] = useState<'initial' | 'heroShrinking' | 'done'>('initial');
  const [isClient, setIsClient] = useState(false);
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    setIsClient(true);
    const homeAnimated = sessionStorage.getItem('homePageAnimated');
    if (homeAnimated) {
      setShowLoading(false);
      setAnimationState('done');
    }
  }, []);

  const handleAnimationComplete = () => {
    setAnimationState('heroShrinking');
    setTimeout(() => setShowLoading(false), 1000); // Hide after fade out
  };

  useEffect(() => {
    if (animationState === 'heroShrinking') {
      const timer = setTimeout(() => {
        setAnimationState('done');
        sessionStorage.setItem('homePageAnimated', 'true');
      }, 1500); // Duration of hero shrink
      return () => clearTimeout(timer);
    }
  }, [animationState]);

  return (
    <>
      {isClient && showLoading && <LoadingAnimation onAnimationComplete={handleAnimationComplete} />}
      {/* Hero Section */}
      <section
        className={cn(
          "flex flex-col items-center justify-center overflow-hidden transition-all duration-[1500ms] ease-out", 
          {
            "min-h-screen w-full p-4 bg-[#7e7d7e]": animationState === 'initial',
            "py-28 md:py-44 bg-[#545454]": animationState === 'heroShrinking' || animationState === 'done',
          }
        )}
      >
        <div
          className={cn(
            "absolute inset-0 -z-10 transition-opacity duration-[1500ms] ease-out", 
            {
              "opacity-30": animationState === 'initial', 
              "opacity-100": (animationState === 'heroShrinking' || animationState === 'done'),
            }
          )}
        >
          <Image
            src="/banner.png"
            alt="Hero Banner Background"
            fill
            className="object-cover transform scale-150 filter blur-xl" 
            quality={50}
            priority={animationState === 'initial'}
            data-ai-hint="abstract technology"
          />
        </div>

        <div className={cn(
            "absolute inset-0 z-0 flex items-center justify-center p-4 xl:p-8 lg:p-12 pointer-events-none transition-opacity duration-[1500ms] ease-out",
             {
               "opacity-80": animationState === 'initial', 
               "opacity-100": (animationState === 'heroShrinking' || animationState === 'done'),
            }
            )}
        >
          <div className="relative w-full h-full max-w-20xl">
            <Image
              src="/banner.png"
              alt="Hero Banner"
              fill
              className="object-contain transform scale-120 drop-shadow-2xl filter blur-sm" 
              quality={85}
              priority={animationState === 'initial'}
              data-ai-hint="abstract technology"
            />
          </div>
        </div>

        {/* Hero Content Container */}
        <div className={cn(
            "container mx-auto text-center relative z-20 transition-all duration-1000 ease-out",
            animationState === 'initial' ? "opacity-0 translate-y-10" : "opacity-100 translate-y-0 delay-300"
        )}>
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-white shadow-lg">
            {personalInfo.name}
          </h1>
          <p className="font-headline text-2xl md:text-3xl text-primary-foreground mb-8">
            {personalInfo.title}
          </p>
          <p className="max-w-2xl mx-auto text-lg text-slate-200 mb-10">
            {personalInfo.professionalSummaryShort}
          </p>
          <div className="space-x-4">
            <Button asChild size="lg" className="font-medium">
              <Link href="/hire-me">
               Hire Me  <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-medium bg-white/10 hover:bg-white/20 text-white border-white/50 hover:border-white/70">
              <Link href="/projects">View My Works</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Auto Scrolling Projects Section */}
      {isClient && (
        <section
          id="all-projects"
          className={cn(
            "relative py-16 md:py-24 bg-background overflow-hidden", // Base classes
            // Initial hidden state - no transition
            animationState === 'initial' && 'opacity-0 transform translate-y-5 scale-95', 
            // Animating in state - with transition
            animationState === 'heroShrinking' && 'opacity-100 transform translate-y-0 scale-100 transition-all duration-1000 ease-out delay-100',
            // Final settled state - no transition, just visible
            animationState === 'done' && 'opacity-100 transform translate-y-0 scale-100'
          )}
        >
          <AnimatedBackgroundShapes animate={animationState === 'heroShrinking' || animationState === 'done'} />
          <div className="container mx-auto relative z-10"> 
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">
              My Projects
            </h2>
            <AutoScrollingProjects projects={projects} />
          </div>
          <div className="text-center mt-12 relative z-10"> 
            <Button asChild size="lg" variant="outline">
              <Link href="/projects">
                View All Projects Details <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      )}
    </>
  );
}
