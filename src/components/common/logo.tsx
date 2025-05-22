import { Sparkles } from 'lucide-react';
import Link from 'next/link';

interface LogoProps {
  className?: string;
  iconSize?: number;
  textSize?: string;
}

export function Logo({ className, iconSize = 28, textSize = "text-2xl" }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-2 group ${className}`}>
      <Sparkles className="text-primary group-hover:animate-pulse transition-transform duration-300 group-hover:scale-110" size={iconSize} />
      <h1 className={`font-bold ${textSize} tracking-tight text-glow-primary`}>
        Lumina Images
      </h1>
    </Link>
  );
}
