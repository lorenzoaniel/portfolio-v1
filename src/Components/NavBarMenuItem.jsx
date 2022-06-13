import React from 'react';
import styled, {css} from 'styled-components';
import { motion, useAnimation } from "framer-motion"
import imgIce from '../Assets/imgs/fabrizio-conti-aExT3y92x5o-unsplash.jpg';

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
    const animationDelay = (props.delay===0) ? 0 : props.delay;

    const animateDiv = useAnimation();

    const NavMenuDivWhileOpenMenu = {
        transform: [`translateY(0rem)`,`translateY(1rem)`],
        boxShadow: [`0rem 0.5rem 1.5rem 0.5rem rgba(54, 168, 239, 1),
        0rem -0.5rem 1.5rem 0.4rem rgba(54, 168, 239, 1),
        0rem 0.5rem 1.5rem 0.5rem rgba(54, 168, 239, 1) inset`,`0rem 0.1rem 1.5rem 1rem rgba(54, 168, 239, 1),
        0rem -0.1rem 1.5rem 0.4rem rgba(54, 168, 239, 1),
        0rem -0.5rem 1.5rem 0.5rem rgba(54, 168, 239, 1) inset`],
        transition: {
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1,
            delay: `0.${animationDelay}`,
        },
    }

    const NavMenuDivStartOpenMenu = {
        opacity: 1,
        transition: {
            duration: 0.5,
            delay: animationDelay/2,
        },
    }

    // const NavMenuDivExitOpenMenu = {
    //     opacity: 0,
    //     transition: {
    //         duration: 1,
    //         delay: animationDelay/2,
    //     },
    // }

    const NavMenuDivOpenMenuInitial = {
        opacity: 0,
        transform: `translateY(0rem)`,
        boxShadow: `0rem 0.5rem 1.5rem 0.5rem rgba(54, 168, 239, 1),
        0rem -0.5rem 1.5rem 0.4rem rgba(54, 168, 239, 1),
        0rem 0.5rem 1.5rem 0.5rem rgba(54, 168, 239, 1) inset`,
    }

    const sequence = async () => {
        await animateDiv.start(NavMenuDivStartOpenMenu);
        await animateDiv.start(NavMenuDivWhileOpenMenu); 
        return
    }
        
    sequence();

    return (
        <Div initial={NavMenuDivOpenMenuInitial} animate={animateDiv} exit={{ opacity: 0 }}>{props.children}</Div>
    )
}

export { NavBarMenuItem, defaultMenuItemStyle}