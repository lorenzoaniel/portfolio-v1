import React from 'react';
import styled from 'styled-components';
import useCurrentWidth from "../Helpers/useCurrentWidth";



const Icon = styled.span`
    background: linear-gradient(0deg, #5AD3FF, #50C2F4, #46B1E9, #3CA1DE, #3290D3, #287FC8, #1E6EBD, #145EB2, #0A4DA7, #003C9C);
    box-shadow: 0 0.1rem 0.5rem 0.2rem rgba(255,255,255,0.3),
                0 0.1rem 0.1rem rgba(0,0,0,0.5) inset;
    height: 0.5rem;
    width: ${props => props.ValForDynamicResizing}px;
    justify-self: end;
    border-radius: 50%;
`;

const HamburgerIcon = (props) => {
    let width = useCurrentWidth();
    let topLineValForDynamicResizing = width / 20.0625;
    let midLineValForDynamicResizing = width / 25;
    let botLineValForDynamicResizing = width / 35.125;
    
    return(
        <>
            <Icon ValForDynamicResizing={topLineValForDynamicResizing} className={"topLine"}/>
            <Icon ValForDynamicResizing={midLineValForDynamicResizing} className={"middleLine"}/>
            <Icon ValForDynamicResizing={botLineValForDynamicResizing} className={"bottomLine"}/>
        </>
    )
}

export default HamburgerIcon;