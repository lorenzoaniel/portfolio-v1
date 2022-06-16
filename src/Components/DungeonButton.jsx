import React from 'react';
import styled from 'styled-components';
import getQuotes from '../Helpers/getQuotes';
import OminousLetters from './OminousLetters';
import ominousSignsStyle from '../Mixins/Styles/OminousSignsStyle';

const PortalWrapper = styled.div`
  /* GENERAL */
  background: transparent;
  width: 100%;
  height: 100%;
`;

const ButtonComp = styled.button`
  /* GENERAL */
  ${ominousSignsStyle}
  background: rgb(0,0,0);
  background: radial-gradient(circle, rgba(0,0,0,1) 10%, rgba(5,100,176,0.5) 67%, rgba(5,30,61,0.2) 91%);
  border-radius: 5%;
  border: none;
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

  return (
    <ButtonComp>
      <PortalWrapper>
        <OminousLetters title={quote}/>
      </PortalWrapper>
    </ButtonComp>
  );
}

export default DungeonButton;