import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from "framer-motion"
import HamburgerMenu from './HamburgerMenu';
import { NavBarMenuItem } from './NavBarMenuItem';
import { Link } from 'react-router-dom';
import Title from './Title';

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

    const NavInitial = {
        gridArea: props.gridArea
    }

    const renderMenuItems = menuItems.map((menuItem, index) => {
       return ( <NavBarMenuItem delay={index} id={"NavBarMenu"+index}>{<Link to={menuItem.link}><Title id={"Title"+index} title={menuItem.title}/></Link>}</NavBarMenuItem> )
    })

    return (
            <Nav initial={NavInitial}>
                <AnimatePresence>
                    {toggleMenu && renderMenuItems}
                </AnimatePresence>
                <HamburgerMenu handleClickMenu={handleClickMenu} toggleMenu={toggleMenu}></HamburgerMenu>
            </Nav>
    )
}

export default NavBar