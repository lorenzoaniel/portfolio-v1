import React from 'react';
import styled from 'styled-components';
import getQuotes from '../Helpers/getQuotes';
import OminousLetters from './OminousLetters';
import ominousSignsStyle from '../Mixins/OminousSignsStyle';
import { motion } from 'framer-motion';

const ButtonComp = styled(motion.button)`
    ${ominousSignsStyle}
    /* background-image: url(' https://images.pexels.com/photos/4504754/pexels-photo-4504754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'); */
    background-size: contain;
    border-radius: 50%;
`;

const DungeonButton = (props) => {
  const [quote, setQuote] = React.useState(() => getQuotes(props.quotesArr));
  
  React.useEffect(() => {
    const interval = setInterval(() => {
        setQuote(() => getQuotes(props.quotesArr))
    }, props.changeTime);
    return () => clearInterval(interval);
  }, [props.quotesArr, props.changeTime]);

  const DungeonButtonInitial = {
    gridArea: props.gridArea,
  }

  const DungeonButtonMotionProps = {
    initial: DungeonButtonInitial,
  }

  return (
    <ButtonComp {...DungeonButtonMotionProps}>
      <OminousLetters title={quote}/>
    </ButtonComp>
  );
}

export default DungeonButton;