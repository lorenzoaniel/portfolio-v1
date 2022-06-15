import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
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

const Wrapper = styled.div`
    display: flex;
    height: 95%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: space-around; 
    padding: 1fr;
`;

const OminousLetters = (props) => {

    const titleItems = props.title.split(' ').map((letter, index) => {
        return( <H1 delay={index} className={"TitleSpan"} key={props.id+""+index}>{letter}</H1> )
    })

    return(
        <Wrapper key={props.id}>{titleItems}</Wrapper>
    )
};

export default OminousLetters;