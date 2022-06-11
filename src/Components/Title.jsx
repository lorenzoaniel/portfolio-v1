import React from 'react';
import styled from 'styled-components';


const H1 = styled.h1`
    display: inline-block;
    background: linear-gradient(0deg, #5AD3FF, #50C2F4, #46B1E9, #3CA1DE, #3290D3, #287FC8, #1E6EBD, #145EB2, #0A4DA7, #003C9C);
    background-clip: text;
    -webkit-text-fill-color: transparent;

    ${props => props.startAnimation ? `animation: animateMenuItems 0.5s linear infinite;` : `` }
    animation-direction: alternate;
    animation-delay: 0.${props => props.delayVal}s;

    /* FONT */
    font-family: 'Iceberg', cursive;
    font-size: 3.5rem;
    font-weight: 400;
    text-decoration: none; 
    text-align: center;
    letter-spacing: 0.1em;
    text-shadow: 0 0.1rem 0.1rem rgba(0,0,0,0.5);
    

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

const Title = (props) => {
    const [startAnimation, setStartAnimation] = React.useState(false);
    const toggleAnimation = () => {
        setStartAnimation(prevState => !prevState);
    }

    return(
        props.title.split('').map((letter, index) => {
            return( <H1 onMouseEnter={toggleAnimation} onMouseLeave={toggleAnimation} startAnimation={startAnimation} delayVal={index} className={"TitleSpan"} key={index} {...props}>{letter}</H1> )
        })
    )
};

export default Title;