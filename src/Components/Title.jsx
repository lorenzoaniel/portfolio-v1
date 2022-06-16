import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
    /* GENERAL */
    display: inline-block;
    background: linear-gradient(0deg, #5AD3FF, #50C2F4, #46B1E9, #3CA1DE, #3290D3, #287FC8, #1E6EBD, #145EB2, #0A4DA7, #003C9C);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    background-clip: text;

    /* FONT */
    font-size: 3.5rem;
    text-align: center;

    /* ANIMATION */
    ${props => props.animation}
`;

const TitleWrapperDiv = styled.div`
    &:hover .TitleSpan{
        animation-play-state: running; // activates tittleLetterWiggleAnimation
    }
`;

const Title = (props) => {

    const titleItems = props.title.split('').map((letter, index) => {
        return( <H1 {...props} delay={index} className={"TitleSpan"} key={props.id+"TitleH1"+index}>{letter}</H1> )
    })

    return(
        <TitleWrapperDiv key={props.id}>{titleItems}</TitleWrapperDiv>
    )
};

export default Title;