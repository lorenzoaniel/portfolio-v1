import React from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion"
import HamburgerMenu from './HamburgerMenu';
import { NavBarMenuItem } from './NavBarMenuItem';

const Nav = styled(motion.nav)`
    /* GENERAL */
    
    /* GRID/FLEX */
    
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding-top: 1rem;
`;

const NavBar = (props) => {
    const [toggleMenu, setToggleMenu] = React.useState(true);

    const handleClickMenu = () => {
        setToggleMenu(prevState => !prevState);
    }

    const NavInitial = {
        gridArea: props.gridArea
    }

    return (
        <Nav initial={NavInitial}>
            {toggleMenu && <NavBarMenuItem/>}
            <HamburgerMenu handleClickMenu={handleClickMenu} toggleMenu={toggleMenu}></HamburgerMenu>
        </Nav>
    )
}

export default NavBar