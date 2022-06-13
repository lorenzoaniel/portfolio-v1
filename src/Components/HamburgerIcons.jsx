import React from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";
// import useCurrentWidth from "../Helpers/useCurrentWidth";

const Icon = styled(motion.span)`
    background: linear-gradient(0deg,  #46B1E9, #3CA1DE, #3290D3, #287FC8, #0A4DA7, #072554, rgba(0,0,0,0.5));
    box-shadow: 0 0.0.05rem 0.5rem 0.2rem rgba(255,255,255,0.3),
                0 0.1rem 0.1rem rgba(0,0,0,0.5) inset;
    height: 0.5rem;
    justify-self: end;
    border-radius: 50%;
    &.topLine{
        grid-area: topline;
    }
    &.middleLine{
        grid-area: midline;
    }
    &.bottomLine{
        grid-area: botline;
    }
`;

const HamburgerIcon = (props) => {
    
    /* THREE HORIZONTAL SLASHES ICON */
    const variantsIconOpenMenu = {
        toggledOnMenu: { //ENTER
            transform: "scaleX(1)",
        },
        toggledOffMenu: { //EXIT
            transform: "scaleX(0)",
        },   
    }

    /* SNOWFLAKE ICON */
    const variantsIconClosedMenu = {
        toggledOnMenu: { //EXIT
            transform: "scaleX(0)",
        },
        toggledOffMenu: { //ENTER
            transform: "scaleX(1)",
        },     
    }

    const closedMenuInitial = {
        gridArea: "2 / 1 / 3 / 2",
        width: "4rem",
    }
    
    const openMenuInitial = {
        width: `${props.class === "topLine" ? 4 : 
            props.class === "midLine" ? 3 : 2
        }rem`,
    }

    const IconPropsObj = {
        variants: props.toggleMenu ? variantsIconOpenMenu : variantsIconClosedMenu,
        animate: props.toggleMenu ? "toggledOnMenu" : "toggledOffMenu",
        initial: props.toggleMenu ? openMenuInitial : closedMenuInitial,
    }
   
    return(
        <Icon key={props.toggleMenu} layout {...IconPropsObj} className={props.class} /> // have to add key with toggle otherwise dynamic initial wont work
    )
}

export default HamburgerIcon;