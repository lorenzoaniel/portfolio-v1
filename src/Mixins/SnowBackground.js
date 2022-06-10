import styled from "styled-components";
import React from 'react';
import useCurrentHeight from "../Helpers/useCurrentHeight";

const SnowConfig = {
    snowQuantity: 30
}

const Div = styled.div`
    background-color: black;
    height: inherit;
    overflow: hidden;
`;

const Span = styled.span`
    position: absolute;
    right: ${props =>  props.randomValueRight}%;
    top:0; 
    bottom:0;
    pointer-events:none;
    background: #FFFFFF;
    height: 0.1rem;
    width: 0.1rem;
    border-radius: 50%;
    box-shadow: 0rem 0rem 0.2rem 0.2rem rgba(255,255,255,1);

    /* ANIMATION */

    animation: fallingstars ${props => props.animateDuration}s linear infinite;
    animation-delay: ${props => props.animateDelay};

    /* KEYFRAMES */

    @keyframes fallingstars {
        0%{
            transform:  translateX(0);
            opacity: 1;
        }
        25%{
            opacity: 0.75;
        }
        50%{
            opacity: 0.50;
        }
        75%{
            opacity: 0.25;
        }
        100%{
            transform:  translateY(${props => props.heightLimit}px);
            opacity: 0;
        }
    }
`;


const SnowBackground = (props) => {
    let height = useCurrentHeight();

    const makeStars = new Array(SnowConfig.snowQuantity).fill(0).map((x, index) => {
        const randValRight = Math.floor(Math.random(0) * 101);
        const randAnimateDelay = (Math.random() + 1) * 2;
        const randAnimateDuration = (Math.random() + 1) * 2;
        return(
            <Span 
                key={index} 
                id={index} 
                randomValueRight={randValRight}
                animateDelay={randAnimateDelay}
                animateDuration={randAnimateDuration}
                heightLimit={height}
            />
        ) 
    })

    return(
        <Div>
            {props.children}
            {makeStars}
        </Div>
    ) 
}

export default SnowBackground;