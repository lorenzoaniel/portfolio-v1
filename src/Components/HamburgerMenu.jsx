import React from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";
import imgIce from '../Assets/imgs/fabrizio-conti-aExT3y92x5o-unsplash.jpg';
import HamburgerIcon from './HamburgerIcons';
// import useCurrentWidth from "../Helpers/useCurrentWidth";

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
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas:
        "topline"
        "midline"
        "botline";
`;

const HamburgerMenu = (props) => {

    return(
        <MenuDiv onClick={props.handleClickMenu} initial={props.initial} animate={props.animate} transition={props.transition}>
            <HamburgerIcon toggleMenu={props.toggleMenu} class={"topLine"}/>
            <HamburgerIcon toggleMenu={props.toggleMenu} class={"midLine"}/>
            <HamburgerIcon toggleMenu={props.toggleMenu} class={"botLine"}/>
        </MenuDiv>
    )
}

export default HamburgerMenu;