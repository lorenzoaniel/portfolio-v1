import React from 'react';
import styled from 'styled-components';
import getQuotes from '../Helpers/getQuotes';
import ominousSignsStyle from '../Mixins/Styles/OminousSignsStyle';
import OminousLetters from './OminousLetters';

const DontPressSignDiv = styled.div`
    /* GENERAL */
    ${ominousSignsStyle}
    clip-path: ${props => props.clipPath};
    background: url(${props => props.signImg});
    box-shadow: 0rem 0rem 2rem 1rem rgba(0,0,0,0.5) inset;
    background-size: contain;

`;

const DivWrapper = styled.div`
    /* GENERAL */
    height: 100%;
    width: 100%;
    filter: drop-shadow(0rem 1rem 0.5rem rgba(0, 0, 0,1));
    grid-area: ${props => props.gridArea};
`;

const DontPressSign = (props) => {
    const [quote, setQuote] = React.useState(() => getQuotes(props.quotesArr));

    React.useEffect(() => {
        const interval = setInterval(() => {
            setQuote(() => getQuotes(props.quotesArr))
        }, props.changeTime);
        return () => clearInterval(interval);
    }, [props.quotesArr, props.changeTime]);

    return (
        <DivWrapper {...props}>
            <DontPressSignDiv>
                <OminousLetters title={quote}/>
            </DontPressSignDiv>
        </DivWrapper>
    );
}

export default DontPressSign;