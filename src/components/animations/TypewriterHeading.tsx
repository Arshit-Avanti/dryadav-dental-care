import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

interface TypewriterHeadingProps {
  text: string;
  className?: string;
  cursor?: boolean;
  speed?: number; // ms per char
  delay?: number; // ms before start
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'div' | 'span';
  highlightWords?: string[];
  highlightClassName?: string;
  italic?: boolean;
}

export const TypewriterHeading: React.FC<TypewriterHeadingProps> = ({
  text,
  className = '',
  cursor = true,
  speed = 45,
  delay = 200,
  as = 'h2',
  highlightWords = [],
  highlightClassName = 'text-gradient-cyan-blue',
  italic = false,
}) => {
  const ref = React.useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const [displayedLength, setDisplayedLength] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!isInView) return;

    let intervalId: ReturnType<typeof setInterval>;
    const startDelayTimer = setTimeout(() => {
      let currentLength = 0;
      intervalId = setInterval(() => {
        currentLength++;
        setDisplayedLength(currentLength);
        if (currentLength >= text.length) {
          clearInterval(intervalId);
          setIsComplete(true);
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(startDelayTimer);
      clearInterval(intervalId);
    };
  }, [isInView, text, speed, delay]);

  const Component = as as any;
  const visibleText = text.slice(0, displayedLength);

  // Helper to highlight specific words
  const renderFormattedText = (str: string) => {
    if (!highlightWords.length) return str;

    const regex = new RegExp(`(${highlightWords.join('|')})`, 'gi');
    const parts = str.split(regex);

    return parts.map((part, index) => {
      const isHighlighted = highlightWords.some(
        (hw) => hw.toLowerCase() === part.toLowerCase()
      );
      if (isHighlighted) {
        return (
          <span key={index} className={highlightClassName}>
            {part}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <Component
      ref={ref}
      className={`${
        italic ? 'font-caslon-italic italic' : 'font-caslon font-normal'
      } tracking-tight inline-block select-none ${className}`}
    >
      <span>{renderFormattedText(visibleText)}</span>
      {cursor && (
        <motion.span
          animate={{ opacity: isComplete ? [1, 0] : [1, 0, 1] }}
          transition={{
            duration: isComplete ? 0.8 : 0.6,
            repeat: isComplete ? 2 : Infinity,
            ease: 'easeInOut',
          }}
          className="inline-block w-[3px] h-[0.85em] bg-bright-cyan ml-1 align-baseline translate-y-[2px]"
          aria-hidden="true"
        />
      )}
    </Component>
  );
};

export default TypewriterHeading;
