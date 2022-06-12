import React from 'react';
import styled from 'styled-components';
import useCurrentWidth from "../Helpers/useCurrentWidth";

const Icon = styled.span`
    background: linear-gradient(0deg,  #46B1E9, #3CA1DE, #3290D3, #287FC8, #0A4DA7, #072554, rgba(0,0,0,0.5));
    box-shadow: 0 0.1rem 0.5rem 0.2rem rgba(255,255,255,0.3),
                0 0.1rem 0.1rem rgba(0,0,0,0.5) inset;
    height: 0.5rem;
    width: ${props => props.ValForDynamicResizing}px;
    justify-self: end;
    border-radius: 50%;
    position: ${props => props.toggleMenu ? "static" : "absolute"};
    transform: scale(${props => props.toggleMenu ? 1 : 0.9});
`;

const HamburgerIcon = (props) => {
    let width = useCurrentWidth();
    let topLineValForDynamicResizing = width / 20.0625;
    let midLineValForDynamicResizing = width / (props.toggleMenu ? 25 : 20.0625);
    let botLineValForDynamicResizing = width / (props.toggleMenu ? 35.125 : 20.0625);
    console.log("render")

    return(
        <>
            <Icon toggleMenu={props.toggleMenu} ValForDynamicResizing={topLineValForDynamicResizing} className={"topLine"}/>
            <Icon toggleMenu={props.toggleMenu} ValForDynamicResizing={midLineValForDynamicResizing} className={"middleLine"}/>
            <Icon toggleMenu={props.toggleMenu} ValForDynamicResizing={botLineValForDynamicResizing} className={"bottomLine"}/>
        </>
    )
}

export default HamburgerIcon;