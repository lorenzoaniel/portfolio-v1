import React from 'react';
import styled, {keyframes} from 'styled-components';

const lineHelper = (className, lineValuesArr) => { // returns one of the values in an arr ["4rem","3rem","2rem"] based on matching class
    return(
        className === "topLine" ? lineValuesArr[0] : 
        className === "midLine" ? lineValuesArr[1] : 
        lineValuesArr[2]
    ) 
}

const HamburgerIconSlashesAnimation = (props) => keyframes`
    from{
        width: 0rem;
    }
    to {
        width: ${lineHelper(props.className, [4,3,2])}rem;
    } 
`;


const HamburgerIconSnowFlakeAnimation = (props) => keyframes`
    from{
        width: 0rem;
        transform: rotate(0deg);
    }
    to {
        width: 4rem;
        transform: rotate(${lineHelper(props.className, ['45','90','-45'])}deg);
    }
`;

const Icon = styled.span`
    /* GENERAL */
    background: linear-gradient(0deg,  #46B1E9, #3CA1DE, #3290D3, #287FC8, #0A4DA7, #072554, rgba(0,0,0,0.5));
    box-shadow: 0 0.1rem 0.1rem rgba(0,0,0,0.5) inset;
    height: 0.5rem;
    width: 0rem;
    border-radius: 50%;

    /* GRID/FLEX */
    justify-self: end;
    grid-area: ${props => props.toggleMenu ? lineHelper(props.className, ["topline","midline","botline"]) : `1 / 1 / 2 / 2`};

    /* ANIMATION */
    animation-name: ${props => props.toggleMenu ? HamburgerIconSlashesAnimation : HamburgerIconSnowFlakeAnimation};
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
`;

const HamburgerIcon = (props) => {
    return(
        <Icon {...props} className={props.cName}/>
    )
}

export default HamburgerIcon;