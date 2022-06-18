import React from 'react';
import styled from 'styled-components';
import getQuotes from '../Helpers/getQuotes';
import ominousSignsStyle from '../Mixins/OminousSignsStyle';
import OminousLetters from './OminousLetters';
import { motion } from 'framer-motion';


const Div = styled(motion.div)`
    ${ominousSignsStyle}
    box-shadow: 0rem 0rem 2rem 1rem rgba(0,0,0,0.5) inset;
    
`;

const DivWrapper = React.memo(styled.div`
    height: 100%;
    width: 100%;
    filter: drop-shadow(0rem 1rem 0.5rem rgba(0, 0, 0,1));
    /* filter: blur(1); */
    grid-area: ${props => props.gridArea};
`);

const DontPressSign = (props) => {
    const [quote, setQuote] = React.useState(() => getQuotes(props.quotesArr));

    React.useEffect(() => {
        const interval = setInterval(() => {
            setQuote(() => getQuotes(props.quotesArr))
        }, props.changeTime);
        return () => clearInterval(interval);
    }, [props.quotesArr, props.changeTime]);

    const DontPressSignInitial = {
        clipPath: props.clipPath,
        background: `url(${props.signImg})`,
        backgroundSize: `contain`,
    }

    const DontPressSignAnimate = {
        
    }
    
    const DontPressSignMotionProps = {
        initial: DontPressSignInitial,
        aniamte: DontPressSignAnimate,
    }

    return (
        <DivWrapper {...props}>
            <Div {...DontPressSignMotionProps}>
                <OminousLetters title={quote}/>
            </Div>
        </DivWrapper>
    );
}

export default DontPressSign;