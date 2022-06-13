import React from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";

const Icon = styled(motion.span)`
    background: linear-gradient(0deg,  #46B1E9, #3CA1DE, #3290D3, #287FC8, #0A4DA7, #072554, rgba(0,0,0,0.5));
    box-shadow: 0 0.0.05rem 0.5rem 0.2rem rgba(255,255,255,0.3),
                0 0.1rem 0.1rem rgba(0,0,0,0.5) inset;
    height: 0.5rem;
    justify-self: end;
    border-radius: 50%;
`;

const HamburgerIcon = (props) => {

    const lineHelper = (lineValuesArr) => { // returns one of the values in an arr ["4rem","3rem","2rem"] based on matching class
        return(
            props.class === "topLine" ? lineValuesArr[0] : 
            props.class === "midLine" ? lineValuesArr[1] : 
            lineValuesArr[2]
        ) 
    } 
        

    /* THREE HORIZONTAL SLASHES ICON */
    const variantsIconOpenMenu = {
        toggledOnMenu: { //ENTER
            // transform: "scaleX(1)",
            gridArea: ["2 / 1 / 3 / 2",`${lineHelper(['topline','midline','botline'])}`],
            width: ["4rem",`${lineHelper([4,3,2])}rem`],
        },  
    }

    /* SNOWFLAKE ICON */
    const variantsIconClosedMenu = {
        toggledOffMenu: { //ENTER
            transform: [`rotate(0deg)`,`rotate(${lineHelper([45,90,-45])}deg)`],
            gridArea: [`${lineHelper(['topline','midline','botline'])}`,"2 / 1 / 3 / 2"],
            width: [`${lineHelper([4,3,2])}rem`,"4rem"],
        },     
    }

    /* SNOWFLAKE ICON */ //starts out reversed as THREE HORIZONTAL SLASHES ICON
    // const closedMenuInitial = {
    //     gridArea: ,
    //     width: ,
    // }
    
    // /* THREE HORIZONTAL SLASHES ICON */ //starts out reversed as SNOWFLAKE ICON
    // const openMenuInitial = {
    //     gridArea: ,
    //     width: ,
    // }

    const IconPropsObj = {
        variants: props.toggleMenu ? variantsIconOpenMenu : variantsIconClosedMenu,
        animate: props.toggleMenu ? "toggledOnMenu" : "toggledOffMenu",
        // initial: props.toggleMenu ? openMenuInitial : closedMenuInitial,
    }
   
    return(
        <Icon key={props.toggleMenu} layout {...IconPropsObj} className={props.class} transition={{duration: 2}}/> // have to add key with toggle otherwise dynamic initial wont work
    )
}

export default HamburgerIcon;