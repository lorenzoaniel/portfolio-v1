import React from 'react';
import styled from 'styled-components';
import getQuotes from '../Helpers/getQuotes';
import ominousSignsStyle from '../Mixins/OminousSignsStyle';
import OminousLetters from './OminousLetters';
import { motion } from 'framer-motion';
// import signImg from '../Assets/imgs/aaron-burden-keAS7rzOPMw-unsplash.jpg';

const Div = styled(motion.div)`
    ${ominousSignsStyle}
    /* background-image: url('https://images.pexels.com/photos/925728/pexels-photo-925728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
    background-size: contain; */
`;

const DontPressSign = (props) => {
    const [quote, setQuote] = React.useState(() => getQuotes(props.quotesArr));

    React.useEffect(() => {
        const interval = setInterval(() => {
            setQuote(() => getQuotes(props.quotesArr))
        }, props.changeTime);
        return () => clearInterval(interval);
    }, [props.quotesArr, props.changeTime]);

    const DontPressSignInitial = {
        gridArea: props.gridArea,
    }

    const DontPressSignAnimate = {
        
    }
    
    const DontPressSignMotionProps = {
        initial: DontPressSignInitial,
        aniamte: DontPressSignAnimate,
    }

    return (
        <Div {...DontPressSignMotionProps}>
            <OminousLetters title={quote}/>
        </Div>
    );
}

export default DontPressSign;