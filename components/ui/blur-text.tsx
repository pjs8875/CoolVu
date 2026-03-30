"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

interface BlurTextProps {
  text: string;
  delay?: number;
  className?: string;
  animateBy?: 'words' | 'letters';
  direction?: 'top' | 'bottom';
  threshold?: number;
  rootMargin?: string;
  as?: React.ElementType;
}

export function BlurText({
  text = '',
  delay = 50,
  className = '',
  animateBy = 'words',
  direction = 'top',
  threshold = 0.1,
  rootMargin = '0px',
  as: Component = 'div',
}: BlurTextProps) {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: rootMargin as `${number}px`, amount: threshold });

  const defaultFrom =
    direction === 'top'
      ? { filter: 'blur(8px)', opacity: 0, y: -30 }
      : { filter: 'blur(8px)', opacity: 0, y: 30 };

  const defaultTo = { filter: 'blur(0px)', opacity: 1, y: 0 };

  return (
    <Component ref={ref} className={cn('inline-flex flex-wrap', className)}>
      {elements.map((element, index) => (
        <motion.span
          key={index}
          initial={defaultFrom}
          animate={isInView ? defaultTo : defaultFrom}
          transition={{
            duration: 0.4,
            delay: index * (delay / 1500),
            ease: "easeOut",
          }}
          className={cn(
            'inline-block',
            animateBy === 'words' ? 'mr-[0.25em]' : ''
          )}
        >
          {element === ' ' ? '\u00A0' : element}
        </motion.span>
      ))}
    </Component>
  );
}