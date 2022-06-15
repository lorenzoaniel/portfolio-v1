import React from 'react';
import styled from 'styled-components';
import getQuotes from '../Helpers/getQuotes';
import ominousSignsStyle from '../Mixins/OminousSignsStyle';
import OminousLetters from './OminousLetters';

const Div = styled.div`
    ${ominousSignsStyle}
    grid-area: ${props => props.gridArea};
`;

const DontPressSign = (props) => {
    const [quote, setQuote] = React.useState(() => getQuotes(props.quotesArr));

    React.useEffect(() => {
        const interval = setInterval(() => {
            setQuote(() => getQuotes(props.quotesArr))
        }, props.changeTime);
        return () => clearInterval(interval);
    }, []);

    return (
        <Div {...props}>
            <OminousLetters title={quote}/>
        </Div>
    );
}

export default DontPressSign;