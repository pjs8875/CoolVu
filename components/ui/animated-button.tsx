import { Button, ButtonProps } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps extends ButtonProps {
  children: React.ReactNode;
}

export function AnimatedButton({ children, className, ...props }: AnimatedButtonProps) {
  return (
    <Button className={cn("group/animated-btn relative overflow-hidden h-auto", className)} {...props}>
      <span className="mr-8 transition-opacity duration-500 group-hover/animated-btn:opacity-0">
        {children}
      </span>
      <i className="absolute right-1 top-1 bottom-1 rounded-[inherit] z-10 grid w-10 place-items-center transition-all duration-500 bg-black/10 group-hover/animated-btn:w-[calc(100%-0.5rem)] group-active/animated-btn:scale-95 text-current">
        <ChevronRight size={16} strokeWidth={2} aria-hidden="true" />
      </i>
    </Button>
  );
}