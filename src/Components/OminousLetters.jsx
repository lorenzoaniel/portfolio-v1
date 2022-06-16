import React from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';

const H1 = styled.h1`
    /* GENERAL */
    display: inline-block;
    background: linear-gradient(90deg, rgba(245,245,245,1) 30%, rgba(250,250,250,1) 35%, rgba(255,255,255,1) 50%);
    
    /* GRID/FLEX */
    flex-grow: 1;

    /* FONT */
    font-size: 1fr;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    text-align: center;
`;

const Wrapper = styled.div`
    /* GENERAL */
    height: 95%;
    padding: 1fr;
    filter: drop-shadow(0rem 1rem 2rem rgba(255, 255, 255,1));

    /* GRID/FLEX */
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: space-around; 
`;

const OminousLetters = (props) => {
    const id = nanoid();

    const titleItems = props.title.split(' ').map((letter, index) => {
        return( <H1 delay={index} className={"OminousLetterSpan"} key={"OminousLetterSpan"+index+id}>{letter}</H1> )
    })

    return(
        <Wrapper key={id}>{titleItems}</Wrapper>
    )
};

export default OminousLetters;