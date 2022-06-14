import styled from "styled-components";
import React from 'react';
import useCurrentHeight from "../Helpers/useCurrentHeight";
import imgIce from '../Assets/imgs/fabrizio-conti-aExT3y92x5o-unsplash.jpg';
// import borderIce from '../Assets/imgs/aaron-burden-BOjF5QEZe-Y-unsplash.jpg';
import getRandomValue from "../Helpers/getRandomVal";

const SnowConfig = {
    snowQuantity: 50
}

const Div = styled.div`
    background: hsla(0, 0%, 100%, 1);
    background: url(${imgIce}), linear-gradient(0deg, hsla(0, 0%, 100%, 0.5) 0%, hsla(206, 100%, 76%, 0.5) 50%);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height: inherit;
`;

const FrameDiv = styled.div`
    height: inherit;
    /* border: 1rem solid rgba(54, 168, 239, 1);
    /* border-image: url(${imgIce}) 3 stretch; */
    /* box-shadow: 0rem 0rem 1.5rem 0.5rem rgba(54, 168, 239, 1) inset,
        0rem 0rem 1.5rem 0.4rem rgba(54, 168, 239, 1) inset,
        0rem 0rem 1.5rem 0.5rem rgba(54, 168, 239, 1) inset; */
`;

const Span = styled.span.attrs(props => ({
    style: {
        position: `absolute`,
        right: props.randomValueRight+`%`,
        top:0, 
        bottom:0,
        pointerEvents: `none`,
        background: `#FFFFFF`,
        height: `1px`, //dont use rem or it glitches and overflows
        width: `1px`,
        borderRadius: `50%`,
        boxShadow: `0rem 0rem 0.2rem 0.2rem rgba(255,255,255,1)`,

        /* ANIMATION */

        animation: `fallingstars ${props.animateDuration}s linear infinite`,
        animationDelay: props.animateDelay,

        /* KEYFRAMES */
    }
}))  `@keyframes fallingstars {
    0%{
        transform:  translateY(0);
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
        transform:  translateY(${ props => props.heightLimit}px);
        opacity: 0;
    }
}`;


const SnowBackground = (props) => {
    let height = useCurrentHeight();

    const makeStars = new Array(SnowConfig.snowQuantity).fill(0).map((x, index) => {
        const randValRight = Math.floor(Math.random(0) * 101);
        const randAnimateDelay = getRandomValue(1, 2);
        const randAnimateDuration = getRandomValue(1, 2);
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
        <FrameDiv>
            <Div>
                {props.children}
                {makeStars}
            </Div>
        </FrameDiv>
    ) 
}

export default SnowBackground;