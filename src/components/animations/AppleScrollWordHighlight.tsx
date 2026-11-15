import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AppleScrollWordHighlightProps {
  text: string;
  className?: string;
  containerClassName?: string;
}

interface WordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: React.FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.18, 1]);
  const y = useTransform(progress, range, [4, 0]);

  return (
    <span className="inline-block relative mr-[0.25em] last:mr-0 align-top">
      <motion.span
        style={{ opacity, y }}
        className="inline-block transition-colors duration-200"
      >
        {children}
      </motion.span>
    </span>
  );
};

export const AppleScrollWordHighlight: React.FC<AppleScrollWordHighlightProps> = ({
  text,
  className = '',
  containerClassName = '',
}) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'end 0.45'],
  });

  const words = text.split(' ');

  return (
    <p
      ref={containerRef}
      className={`flex flex-wrap leading-relaxed select-none ${containerClassName} ${className}`}
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word
            key={`${word}-${i}`}
            progress={scrollYProgress}
            range={[start, end]}
          >
            {word}
          </Word>
        );
      })}
    </p>
  );
};

export default AppleScrollWordHighlight;
