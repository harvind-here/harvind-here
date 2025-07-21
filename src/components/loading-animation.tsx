import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { personalInfo } from '@/data/portfolio-data';
import { cn, asset } from '@/lib/utils';

const LoadingAnimation = ({ onAnimationComplete }: { onAnimationComplete: () => void }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 100), // Fade in image
      setTimeout(() => setStep(2), 1100), // Fade in name
      setTimeout(() => setStep(3), 1600), // Fade in tagline
      setTimeout(() => {
        setStep(4); // Start zoom out
        onAnimationComplete();
      }, 3000),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onAnimationComplete]);

  return (
    <div
      className={cn(
        'fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-1000',
        step >= 4 ? 'opacity-0' : 'opacity-100'
      )}
    >
      <div
        className={cn(
          'relative w-full h-full transition-transform duration-1500 ease-out',
          step >= 4 ? 'scale-50' : 'scale-100'
        )}
      >
        <Image
          src={asset("/banner.png")}
          alt="Banner"
          layout="fill"
          objectFit="cover"
          className={cn('transition-opacity duration-1000', step >= 1 ? 'opacity-100' : 'opacity-0')}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1
            className={cn(
              'text-6xl font-bold transition-all duration-700',
              step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            )}
          >
            {personalInfo.name}
          </h1>
          <p
            className={cn(
              'mt-4 text-2xl transition-all duration-700',
              step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            )}
          >
            {personalInfo.title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
