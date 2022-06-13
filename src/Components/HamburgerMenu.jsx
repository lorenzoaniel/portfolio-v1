import React from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";
import HamburgerIcon from './HamburgerIcons';
import { defaultMenuItemStyle } from './NavBarMenuItem';
// import useCurrentWidth from "../Helpers/useCurrentWidth";

const MenuDiv = styled(motion.div)`
    /* GENERAL */
    ${defaultMenuItemStyle}
    background-size: cover;

    /* GRID/FLEX */
    flex-basis: 5%;
    display: grid;
    padding: 0rem 0.625rem;
    grid-template-columns: inherit;
    justify-content: center; 
    align-items: center;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas:
        "topline"
        "midline"
        "botline";
`;

const HamburgerMenu = (props) => {

    const HamburgerMenuDivOpenMenuInitial = {
        boxShadow: `0rem 0.5rem 1.5rem 0.5rem rgba(54, 168, 239, 1),
        0rem -0.5rem 1.5rem 0.4rem rgba(54, 168, 239, 1),
        0rem 0.5rem 1.5rem 0.5rem rgba(54, 168, 239, 1) inset`,
    }

    const HamburgerMenuDiv = {
        transform: [`translateY(0rem)`,`translateY(1rem)`],
        boxShadow: [`0rem 0.5rem 1.5rem 0.5rem rgba(54, 168, 239, 1),
        0rem -0.5rem 1.5rem 0.4rem rgba(54, 168, 239, 1),
        0rem 0.5rem 1.5rem 0.5rem rgba(54, 168, 239, 1) inset`,`0rem 0.1rem 1.5rem 1rem rgba(54, 168, 239, 1),
        0rem -0.1rem 1.5rem 0.4rem rgba(54, 168, 239, 1),
        0rem -0.5rem 1.5rem 0.5rem rgba(54, 168, 239, 1) inset`],
    }

    const HamburgerMenuDivTransition = {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 2,
        delay: props.key,
    }

    return(
        <MenuDiv onClick={props.handleClickMenu} initial={HamburgerMenuDivOpenMenuInitial} animate={HamburgerMenuDiv} transition={HamburgerMenuDivTransition}>
            <HamburgerIcon togglemenu={props.toggleMenu} cname={"topLine"}/>
            <HamburgerIcon togglemenu={props.toggleMenu} cname={"midLine"}/>
            <HamburgerIcon togglemenu={props.toggleMenu} cname={"botLine"}/>
        </MenuDiv>
    )
}

export default HamburgerMenu;