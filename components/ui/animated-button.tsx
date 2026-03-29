import { Button, ButtonProps } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface AnimatedButtonProps extends ButtonProps {
  children: React.ReactNode;
  href?: string;
}

export function AnimatedButton({ children, className, href, ...props }: AnimatedButtonProps) {
  const innerContent = (
    <>
      <span className="mr-8 transition-opacity duration-500 group-hover/animated-btn:opacity-0">
        {children}
      </span>
      <i className="absolute right-1 top-1 bottom-1 rounded-[inherit] z-10 grid w-10 place-items-center transition-all duration-500 bg-black/10 group-hover/animated-btn:w-[calc(100%-0.5rem)] group-active/animated-btn:scale-95 text-current">
        <ChevronRight size={16} strokeWidth={2} aria-hidden="true" />
      </i>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cn("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group/animated-btn relative overflow-hidden h-auto", className)}>
        {innerContent}
      </Link>
    );
  }

  return (
    <Button className={cn("group/animated-btn relative overflow-hidden h-auto", className)} {...props}>
      {innerContent}
    </Button>
  );
}