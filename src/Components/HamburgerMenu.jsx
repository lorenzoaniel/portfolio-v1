import React from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";
import imgIce from '../Assets/imgs/fabrizio-conti-aExT3y92x5o-unsplash.jpg';
// import useCurrentWidth from "../Helpers/useCurrentWidth";

const IconGeneralStyle = styled(motion.span)`
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

const IconOpenMenu = styled(IconGeneralStyle)`
    &.topLine{
        width: 4rem;
    }
    &.middleLine{
        width: 3rem;
    }
    &.bottomLine{
        width: 2rem;
    }
`;

const IconClosedMenu = styled(IconGeneralStyle)`
    width: 4rem;
`;

const MenuDiv = styled(motion.div)`
    /* GENERAL */
    height: 100%;
    background-image: url(${imgIce});
    background-size: cover;
    border-radius: 1.25rem;

    /* GRID/FLEX */
    flex-basis: 5%;
    display: grid;
    padding: 0rem 0.625rem;
    grid-template-columns: inherit;
    justify-content: center; 
    align-items: center;
    grid-template-rows: "repeat(3, 1fr)";
    grid-template-areas:
        "topline"
        "midline"
        "botline";
`;

const variantsMenuDiv = {
    toggledOnMenu: {
    },
    toggledOffMenu: {
    },   
}

const variantsIconOpenMenu = {
    toggledOnMenu: {
        
    },
    toggledOffMenu: {
        
    },   
}

const variantsIconClosedMenu = {
    toggledOnMenu: {
        
    },
    toggledOffMenu: {
    },   
}

const closedMenuInitial = {
    gridArea: "2 / 1 / 3 / 2",
}

const HamburgerIcon = (props) => {
    // let width = useCurrentWidth();
    // let topLineValForDynamicResizing = { width: width / 20.0625 };
    // let midLineValForDynamicResizing = { width: width / (props.toggleMenu ? 25 : 20.0625) };
    // let botLineValForDynamicResizing = { width: width / (props.toggleMenu ? 35.125 : 20.0625) };

    const IconPropsObj = {
        variants: props.toggleMenu ? variantsIconOpenMenu : variantsIconClosedMenu,
        animate: props.toggleMenu ? "toggledOnMenu" : "toggledOffMenu",
    }

    return(
        <MenuDiv onClick={props.handleClickMenu} layout variants={variantsMenuDiv} animate={props.toggleMenu ? "toggledOnMenu" : "toggledOffMenu"}>
            { props.toggleMenu ? <IconOpenMenu layout {...IconPropsObj} className={"topLine"}/> : <IconClosedMenu initial={closedMenuInitial} layout {...IconPropsObj} className={"topLine"}/>}
            { props.toggleMenu ? <IconOpenMenu layout {...IconPropsObj} className={"middleLine"}/> : <IconClosedMenu initial={closedMenuInitial} layout {...IconPropsObj} className={"middleLine"}/>}
            { props.toggleMenu ? <IconOpenMenu layout {...IconPropsObj} className={"bottomLine"}/> : <IconClosedMenu initial={closedMenuInitial} layout {...IconPropsObj} className={"bottomLine"}/>}
        </MenuDiv>
    )
}

export default HamburgerIcon;