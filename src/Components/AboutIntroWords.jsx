import React from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';

const Span = styled(motion.span)`
    /* GENERAL */
    padding: 0 0.2rem;
`;

const AboutIntroWords = (props) => {
  const control = useAnimation()

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
    },
    letterAppearAnimationTest: {
      scale: [1.1,1],
      transition: {
        delay: props.delay/7,
        duration: 0.5,
        ease: `linear`,
        repeat: Infinity,
        repeatType: `reverse`,
      }
    },
  }

  const AboutIntroductionSpanMotionProps = {
    initial: AboutIntroductionSpanVariants.AboutIntroductionInitial,
    variant: AboutIntroductionSpanVariants,
    animate: control,
  }

  const sequence = async () => {
    await control.start(AboutIntroductionSpanVariants.letterAppearAnimation);
    await control.start(AboutIntroductionSpanVariants.letterAppearAnimationTest); 
    return;
  }
      
  sequence();

  return (
    <Span {...AboutIntroductionSpanMotionProps} >{props.children}</Span>
  );
}

export default AboutIntroWords;
