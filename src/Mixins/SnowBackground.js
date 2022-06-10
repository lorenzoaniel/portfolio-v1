import styled from "styled-components";
import React from 'react';
import useCurrentHeight from "../Helpers/useCurrentHeight";
import imgIce from '../Assets/imgs/fabrizio-conti-aExT3y92x5o-unsplash.jpg';

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

const Span = styled.span`
    position: absolute;
    right: ${props =>  props.randomValueRight}%;
    top:0; 
    bottom:0;
    pointer-events:none;
    background: #FFFFFF;
    height: 1px; //dont use rem or it glitches and overflows
    width: 1px;
    border-radius: 50%;
    box-shadow: 0rem 0rem 0.2rem 0.2rem rgba(255,255,255,1);
    

    /* ANIMATION */

    animation: fallingstars ${props => props.animateDuration}s linear infinite;
    animation-delay: ${props => props.animateDelay};

    /* KEYFRAMES */

    @keyframes fallingstars {
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