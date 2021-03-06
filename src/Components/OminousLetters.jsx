import React from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';
import { motion } from 'framer-motion';

const H1 = styled(motion.h1)`
    /* GENERAL */
    display: inline-block;
    background: linear-gradient(90deg, rgba(245,245,245,1) 30%, rgba(250,250,250,1) 35%, rgba(255,255,255,1) 50%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    background-clip: text;
    flex-grow: 1;

    /* FONT */
    font-size: 1fr;
    text-align: center;
`;

const Wrapper = styled(motion.div)`
    display: flex;
    height: 95%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: space-around; 
    padding: 1fr;
    filter: drop-shadow(0rem 1rem 2rem rgba(255, 255, 255,1));
`;

const OminousLetters = (props) => {
    const id = nanoid();

    const H1Variants = {
        initial: {
            scale: 0,
        },
        lettersAppear: {
            scale: 1,
            transition: {
                duration: 0.5,
            }
        }
    }

    const H1MotionProps = {
        initial: H1Variants.initial,
        animate: H1Variants.lettersAppear,
    }

    const titleItems = props.title.split(' ').map((letter, index) => {
        return( <H1 {...H1MotionProps} delay={index} className={"OminousLetterSpan"} key={"OminousLetterSpan"+index+id}>{letter}</H1> )
    })

    return(
        <Wrapper key={id}>{titleItems}</Wrapper>
    )
};

export default OminousLetters;