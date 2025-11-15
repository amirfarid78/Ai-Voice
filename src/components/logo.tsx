import { Headset } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2 text-lg font-bold text-primary", className)}>
      <div className="rounded-lg bg-primary p-1.5 text-primary-foreground">
        <Headset className="h-5 w-5" />
      </div>
      <span className="font-headline text-xl text-primary group-data-[state=collapsed]/sidebar:hidden">
        CallPilot AI
      </span>
    </div>
  );
}
