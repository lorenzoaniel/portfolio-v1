import React from 'react';
import styled from 'styled-components';
import getQuotes from '../Helpers/getQuotes';
import OminousLetters from './OminousLetters';
import ominousSignsStyle from '../Mixins/OminousSignsStyle';

const ButtonComp = styled.button`
    ${ominousSignsStyle}
    grid-area: ${props => props.gridArea};
`;

const DungeonButton = (props) => {
  const [quote, setQuote] = React.useState(() => getQuotes(props.quotesArr));
  
  React.useEffect(() => {
    const interval = setInterval(() => {
      setQuote(() => getQuotes(props.quotesArr))
    }, props.changeTime);
    return () => clearInterval(interval);
  }, []);

  
  return (
    <ButtonComp {...props}>
      <OminousLetters title={quote}/>
    </ButtonComp>
  );
}

export default DungeonButton;