import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import nextConfig from '../../next.config';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const asset = (path: string) => {
  const basePath = nextConfig.basePath || '';
  return `${basePath}${path}`;
};
