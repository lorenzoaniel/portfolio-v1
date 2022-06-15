import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
    display: inline-block;
    background: linear-gradient(0deg, #5AD3FF, #50C2F4, #46B1E9, #3CA1DE, #3290D3, #287FC8, #1E6EBD, #145EB2, #0A4DA7, #003C9C);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    background-clip: text;

    animation: animateMenuItems 0.3s linear infinite;
    animation-direction: alternate;
    animation-delay: ${props => `${props.delay/4}s`};
    animation-play-state: paused;

    /* FONT */
    font-size: 3.5rem;
    text-align: center;
    

    @keyframes animateMenuItems{
        0%{
            transform: rotate(0deg) scale(1);
        }
        20%{
            transform: rotate(5deg) scale(1.05);
        }
        40%{
            transform: rotate(10deg) scale(1.1);
        }
        55%{
            transform: rotate(5deg) scale(1.15);
        }
        65%{
            transform: rotate(0deg) scale(1.2);
        }
        80%{
            transform: rotate(-5deg) scale(1.25);
        }
        100%{
            transform: rotate(-10deg) scale(1.35); 
        }
    }
`;

const TitleWrapper = styled.div`
    &:hover .TitleSpan{
        animation-play-state: running;
    }
`;

const Title = (props) => {

    const titleItems = props.title.split('').map((letter, index) => {
        return( <H1 delay={index} className={"TitleSpan"} key={props.id+"TitleH1"+index}>{letter}</H1> )
    })

    return(
        <TitleWrapper key={props.id}>{titleItems}</TitleWrapper>
    )
};

export default Title;