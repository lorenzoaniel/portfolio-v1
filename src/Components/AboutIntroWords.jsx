import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Span = styled(motion.span)`
    /* GENERAL */
    padding: 0 0.2rem;
`;

const AboutIntroWords = (props) => {
  const AboutIntroductionSpanVariants = {
    AboutIntroductionInitial: {
      scale: 1,
      opacity: 0,
    },
    letterAppearAnimation: {
      scale: [1.5,1],
      opacity: 1,
      transition: {
        delay: props.delay/7,
        duration: 0.1,
        ease: `linear`,
      }
    }
  }

  const AboutIntroductionSpanMotionProps = {
    initial: AboutIntroductionSpanVariants.AboutIntroductionInitial,
    variant: AboutIntroductionSpanVariants,
    animate: AboutIntroductionSpanVariants.letterAppearAnimation,
  }

  return (
    <Span {...AboutIntroductionSpanMotionProps} >{props.children}</Span>
  );
}

export default AboutIntroWords;
