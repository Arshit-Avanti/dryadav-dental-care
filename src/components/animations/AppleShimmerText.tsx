import React from 'react';
import { motion, Variants } from 'framer-motion';

interface AppleShimmerTextProps {
  text: string;
  className?: string;
  shimmerTheme?: 'cyan' | 'gold' | 'slate';
  delay?: number;
  stagger?: number;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
}

export const AppleShimmerText: React.FC<AppleShimmerTextProps> = ({
  text,
  className = '',
  shimmerTheme = 'cyan',
  delay = 0.1,
  stagger = 0.08,
  as = 'div',
}) => {
  const words = text.split(' ');

  const themeClassMap = {
    cyan: 'text-shimmer-cyan',
    gold: 'text-shimmer-gold',
    slate: 'text-shimmer-slate',
  };

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: {
      opacity: 0,
      y: '70%',
      filter: 'blur(10px)',
    },
    visible: {
      opacity: 1,
      y: '0%',
      filter: 'blur(0px)',
      transition: {
        duration: 0.85,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const Component = motion[as] as any;

  return (
    <Component
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-20px' }}
      className={`inline-block select-none ${className}`}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden mr-[0.24em] last:mr-0 align-top leading-tight"
        >
          <motion.span
            variants={wordVariants}
            className={`inline-block font-display font-black tracking-tight ${themeClassMap[shimmerTheme]}`}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Component>
  );
};

export default AppleShimmerText;
