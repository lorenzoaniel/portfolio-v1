import React from 'react';
import styled from 'styled-components';
import getQuotes from '../Helpers/getQuotes';
import OminousLetters from './OminousLetters';
import ominousSignsStyle from '../Mixins/OminousSignsStyle';
import { motion } from 'framer-motion';

const ButtonComp = styled(motion.button)`
    ${ominousSignsStyle}
    background-size: contain;
    border-radius: 5%;
    z-index: 999;
`;

const DungeonButton = (props) => {
  const [quote, setQuote] = React.useState(() => getQuotes(props.quotesArr));
  
  React.useEffect(() => {
    const interval = setInterval(() => {
        setQuote(() => getQuotes(props.quotesArr))
    }, props.changeTime);
    return () => clearInterval(interval);
  }, [props.quotesArr, props.changeTime]);

  const DungeonButtonVariants = {
    onHoverPortalExpand: {
      scale: 2,
      boxShadow: [`0 0 3rem 3rem rgba(0,0,0,1), 0 0 3rem 3rem rgba(0,0,0,0.9) inset`,
                  `0 0 4rem 4rem rgba(0,0,0,1), 0 0 4rem 4rem rgba(0,0,0,0.9) inset`],
      cursor: `pointer`,
    },
    pulsingDarkButton: {
      boxShadow: [`0 0 2rem 2rem rgba(0,0,0,0.9), 0 0 2rem 2rem rgba(0,0,0,0.7) inset`,
                  `0 0 3rem 3rem rgba(0,0,0,0.9), 0 0 3rem 3rem rgba(0,0,0,0.7) inset`],
      background: [`radial-gradient(circle, rgba(0,0,0,1) 15%, rgba(5,100,176,1) 25%, rgba(5,30,61,1) 35%)`, `radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(5,100,176,1) 35%, rgba(5,30,61,1) 45%)`],           
      transition: {
        repeat: Infinity,
        repeatType: 'reverse',
        duration: 0.5,
      } 
    }
  }

  const DungeonButtonInitial = {
    gridArea: props.gridArea,
    background: `radial-gradient(circle, rgba(0,0,0,0.5) 5%, rgba(5,100,176,0.5) 15%, rgba(5,30,61,0.5) 25%)`,
    boxShadow: `0 0 1rem 1rem rgba(0,0,0,0.7),
                0 0 1rem 1rem rgba(0,0,0,0.7) inset
    `,
  }

  const DungeonButtonMotionProps = {
    initial: DungeonButtonInitial,
    variant: DungeonButtonVariants,
    whileHover: DungeonButtonVariants.onHoverPortalExpand,
    animate: DungeonButtonVariants.pulsingDarkButton,
  }

  return (
    <ButtonComp  {...DungeonButtonMotionProps}>
      <OminousLetters title={quote}/>
    </ButtonComp>
  );
}

export default DungeonButton;