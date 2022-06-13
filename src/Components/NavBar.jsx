import React from 'react';
import styled from 'styled-components';
import { motion , AnimatePresence} from "framer-motion"
import HamburgerMenu from './HamburgerMenu';
import { NavBarMenuItem } from './NavBarMenuItem';
import { Link } from 'react-router-dom';
import Title from './Title';
import { nanoid } from 'nanoid';

const Nav = styled(motion.nav)`
    /* GENERAL */
    
    /* GRID/FLEX */
    display: flex;
`;

const NavBar = (props) => {
    const [toggleMenu, setToggleMenu] = React.useState(true);

    const randomId = nanoid();

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
        gridArea: props.gridArea,
        justifyContent: `space-evenly`,
        flexDirection: `row`,
        alignItems: `center`,
        paddingTop: `1rem`,
    }

    const NavCloseMenu = {
        justifyContent: `flex-end`,
    }

    const NavOpenMenu = {
        justifyContent: `space-evenly`,
    }

    const renderMenuItems = menuItems.map((menuItem, index) => {
       return ( <NavBarMenuItem delay={index} key={"NavBarMenu"+index+randomId}>{<Link to={menuItem.link}><Title key={"Title"+index+randomId} title={menuItem.title}/></Link>}</NavBarMenuItem> )
    })

    return (
            <Nav initial={NavInitial} animate={toggleMenu ? NavOpenMenu : NavCloseMenu}>
                <AnimatePresence>
                    {toggleMenu && renderMenuItems}
                </AnimatePresence>
                <HamburgerMenu handleClickMenu={handleClickMenu} toggleMenu={toggleMenu}></HamburgerMenu>
            </Nav>
    )
}

export default NavBar