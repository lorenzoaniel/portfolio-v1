import React from 'react';
import {Link} from 'react-router-dom';
import styled, {css} from 'styled-components';
import { motion } from "framer-motion"
import imgIce from '../Assets/imgs/fabrizio-conti-aExT3y92x5o-unsplash.jpg';
import Title from './Title';

const defaultMenuItemStyle = css`
    /* GENERAL */
    height: 100%;
    background-image: url(${imgIce});
    background-size: contain;
    border-radius: 1.25rem;

    /* GRID/FLEX */
    flex-basis: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Div = styled(motion.div)`
    ${defaultMenuItemStyle}
`;

const NavBarMenuItem = (props) => {
    const menuItems = [
        {
            title: "About",
            link: "/"
        },
        {
            title: "Projects",
            link: "/projects"
        },
        {
            title: "Contact",
            link: "/contact"
        },
    ]

    const NavMenuDivOpenMenuInitial = {
        boxShadow: `0rem 0.5rem 1.5rem 0.5rem rgba(54, 168, 239, 1),
        0rem -0.5rem 1.5rem 0.4rem rgba(54, 168, 239, 1),
        0rem 0.5rem 1.5rem 0.5rem rgba(54, 168, 239, 1) inset`,
    }

    const NavMenuDivOpenMenu = {
        transform: [`translateY(0rem)`,`translateY(1rem)`],
        boxShadow: [`0rem 0.5rem 1.5rem 0.5rem rgba(54, 168, 239, 1),
        0rem -0.5rem 1.5rem 0.4rem rgba(54, 168, 239, 1),
        0rem 0.5rem 1.5rem 0.5rem rgba(54, 168, 239, 1) inset`,`0rem 0.1rem 1.5rem 1rem rgba(54, 168, 239, 1),
        0rem -0.1rem 1.5rem 0.4rem rgba(54, 168, 239, 1),
        0rem -0.5rem 1.5rem 0.5rem rgba(54, 168, 239, 1) inset`],
    }
    
    const NavMenuDivOpenMenuTransition = {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 2,
        delay: props.key,
    }

    const renderMenuItems = menuItems.map((menuItem, index) => 
        <Div key={index} initial={NavMenuDivOpenMenuInitial} animate={NavMenuDivOpenMenu} transition={NavMenuDivOpenMenuTransition}><Link to={menuItem.link}><Title title={menuItem.title}/></Link></Div>
    )

    return (
        renderMenuItems
    )
}

export { NavBarMenuItem, defaultMenuItemStyle}