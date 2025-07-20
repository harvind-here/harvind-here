
"use client";

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface ShapeStyle {
  id: number;
  width: string;
  height: string;
  top?: string;
  left?: string;
  bottom?: string;
  right?: string;
  rotate: string;
  animationDelay: string;
  animationDuration: string;
  initialX: string; // Starting transform X (e.g., '-100%')
  initialY: string; // Starting transform Y (e.g., '-100%')
  finalX: string;   // Final transform X (will be '0%')
  finalY: string;   // Final transform Y (will be '0%')
}

interface AnimatedBackgroundShapesProps {
  animate: boolean;
}

const generateRandom = (min: number, max: number) => Math.random() * (max - min) + min;

// Define 8 target zones for the shapes' final CSS positions and their initial off-screen transforms
const targetPositions = [
  // Format: { finalCss: {top, left, etc.}, initialTransformOffset: {x, y to start off-screen} }
  { finalCss: { top: '5%', left: '5%' }, initialTransformOffset: { x: '-250%', y: '-250%' } }, // Top-Left
  { finalCss: { top: '5%', right: '5%' }, initialTransformOffset: { x: '250%', y: '-250%' } }, // Top-Right
  { finalCss: { top: '40%', left: '2%' }, initialTransformOffset: { x: '-300%', y: '0%' } },   // Mid-Left
  { finalCss: { top: '40%', right: '2%' }, initialTransformOffset: { x: '300%', y: '0%' } },  // Mid-Right
  { finalCss: { bottom: '5%', left: '5%' }, initialTransformOffset: { x: '-250%', y: '250%' } }, // Bottom-Left
  { finalCss: { bottom: '5%', right: '5%' }, initialTransformOffset: { x: '250%', y: '250%' } }, // Bottom-Right
  { finalCss: { top: '2%', left: '35%' }, initialTransformOffset: { x: '0%', y: '-300%' } },   // Top-Center-ish
  { finalCss: { bottom: '2%', right: '35%' }, initialTransformOffset: { x: '0%', y: '300%' } }, // Bottom-Center-ish
];

export default function AnimatedBackgroundShapes({ animate }: AnimatedBackgroundShapesProps) {
  const [shapes, setShapes] = useState<ShapeStyle[]>([]);

  useEffect(() => {
    const newShapes: ShapeStyle[] = [];
    const numShapes = 8;

    for (let i = 0; i < numShapes; i++) {
      const target = targetPositions[i % targetPositions.length]; // Cycle through predefined targets

      newShapes.push({
        id: i,
        width: `${generateRandom(140, 360)}px`,
        height: `${generateRandom(140, 360)}px`,
        rotate: `rotate(${generateRandom(-45, 45)}deg)`,
        animationDelay: `${generateRandom(0, 2.5)}s`, // Slightly increased max delay
        animationDuration: `${generateRandom(4, 6)}s`, // Slightly increased max duration

        // CSS positioning for the final resting place
        top: target.finalCss.top,
        left: target.finalCss.left,
        bottom: target.finalCss.bottom,
        right: target.finalCss.right,

        // Initial transform to start off-screen relative to the final CSS position
        initialX: target.initialTransformOffset.x,
        initialY: target.initialTransformOffset.y,

        // Final transform will always be 0,0 to settle at the CSS position
        finalX: '0%',
        finalY: '0%',
      });
    }
    setShapes(newShapes);
  }, []);

  if (!animate) {
    return null;
  }

  return (
    <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className={cn(
            'absolute bg-muted opacity-0',
            animate ? 'animate-emerge-rectangle' : ''
          )}
          style={{
            width: shape.width,
            height: shape.height,
            top: shape.top,
            left: shape.left,
            bottom: shape.bottom,
            right: shape.right,
            transform: `translate(${shape.initialX}, ${shape.initialY}) ${shape.rotate}`,
            animationDelay: shape.animationDelay,
            animationDuration: shape.animationDuration,
            animationFillMode: 'forwards',
            // @ts-ignore Custom properties for the animation
            '--initial-x': shape.initialX,
            '--initial-y': shape.initialY,
            '--final-x': shape.finalX,
            '--final-y': shape.finalY,
            '--rotate': shape.rotate,
          }}
        />
      ))}
    </div>
  );
}
