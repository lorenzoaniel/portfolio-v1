import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import aboutIntro from '../Local-Data/AboutIntroductionData/AboutIntro';
import AboutIntroWords from './AboutIntroWords';

const introString = aboutIntro.intro.split(" ");

const Div = styled(motion.div)`
    /* GENERAL */
    height: 100%;
    display: flex;
    padding: 1rem;
    
    /* GRID/FLEX */
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    
    /* FONTS */
    font-size: 190%;
`;

const AboutIntroduction = (props) => {

  const AboutIntroductionDivVariants = {
    AboutIntroductionInitial: {
      clipPath: props.clipPath,
      background: `url(${props.signImg})`,
      backgroundSize: `contain`,
    }
  }

  const AboutIntroductionDivMotionProps = {
    initial: AboutIntroductionDivVariants.AboutIntroductionInitial,
    variant: AboutIntroductionDivVariants,
    // animate: AboutIntroductionDivVariants.letterAppearAnimation,
  }
  

  const renderIntro = introString.map((word, index) => {
    return <AboutIntroWords delay={index} key={'AboutIntroSpan'+index}>{word}</AboutIntroWords>
  })
  

  return (
    <Div {...AboutIntroductionDivMotionProps}>
          {renderIntro}
    </Div>
  );
}

export default AboutIntroduction;
