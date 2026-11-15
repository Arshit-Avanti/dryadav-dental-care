import React from 'react';
import { motion, Variants } from 'framer-motion';

interface AppleWordRevealProps {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
  once?: boolean;
}

export const AppleWordReveal: React.FC<AppleWordRevealProps> = ({
  text,
  className = '',
  wordClassName = '',
  delay = 0.1,
  stagger = 0.045,
  as = 'div',
  once = true,
}) => {
  const words = text.split(' ');

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
      y: '60%',
      filter: 'blur(6px)',
    },
    visible: {
      opacity: 1,
      y: '0%',
      filter: 'blur(0px)',
      transition: {
        duration: 0.65,
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
      viewport={{ once, margin: '-20px' }}
      className={`inline-block ${className}`}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden mr-[0.22em] last:mr-0 align-top leading-tight"
        >
          <motion.span
            variants={wordVariants}
            className={`inline-block ${wordClassName}`}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Component>
  );
};

export default AppleWordReveal;
