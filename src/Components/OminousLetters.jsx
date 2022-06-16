import React from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';
import { motion } from 'framer-motion';

const H1 = styled(motion.h1)`
    display: inline-block;
    background: linear-gradient(0deg, #5AD3FF, #50C2F4, #46B1E9, #3CA1DE, #3290D3, #287FC8, #1E6EBD, #145EB2, #0A4DA7, #003C9C);
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
    /* border: 1rem solid orange; */
`;

const OminousLetters = (props) => {
    const id = nanoid();

    /*OminousLetters*/

    const OminousLettersInitial = {
        opacity: 0,
    }

    const OminousLettersAnimate = {
        opacity: 1,
    }

    const OminousLettersExit = {
    }
    
    const OminousLettersMotionProps = {
        initial: OminousLettersInitial,
        animate: OminousLettersAnimate,
        exit: OminousLettersExit,
    }

    /*OminousLettersWrapper*/

    const OminousLettersWrapperInitial = {}

    const OminousLettersWrapperAnimate = {}

    const OminousLettersWrapperExit = {}
    
    const OminousLettersWrapperMotionProps = {
        initial: OminousLettersWrapperInitial,
        animate: OminousLettersWrapperAnimate,
        exit: OminousLettersWrapperExit,
    }

    const titleItems = props.title.split(' ').map((letter, index) => {
        return( <H1 {...OminousLettersMotionProps} delay={index} className={"OminousLetterSpan"} key={"OminousLetterSpan"+index+id}>{letter}</H1> )
    })

    return(
        <Wrapper {...OminousLettersWrapperMotionProps} key={id}>{titleItems}</Wrapper>
    )
};

export default OminousLetters;