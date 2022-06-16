/*FRAME IMPORTS*/
import React from 'react';
import styled, {css} from 'styled-components';
import { Link } from 'react-router-dom';

/*COMPONENT IMPORTS*/
import Title from './Title';
import HamburgerMenu from './HamburgerMenu';
import NavBarMenuItem from './NavBarMenuItem';

/*HELPER IMPORTS*/
import { nanoid } from 'nanoid';

/*STYLING/ANIMATIONS IMPORTS*/
import titleLetterWiggleAnimation from '../Mixins/Animations/TitleLetterWiggleAnimation';

const NavBarDivOpenToggleStyle = css`
    justify-content: center;
`;

const NavBarDivClosedToggleStyle = css`
    justify-content: flex-end;
`;

const NavBarDiv = styled.nav`
    /* GENERAL */
    ${props => props.toggleMenu ? NavBarDivOpenToggleStyle : NavBarDivClosedToggleStyle}
    
    /* GRID/FLEX */
    display: flex;
    align-items: center;
    gap: 1rem;

    /* ANIMATIONS */
`;

const NavBar = (props) => {
    const [toggleMenu, setToggleMenu] = React.useState(true);

    const randomId = nanoid();

    const handleClickMenu = () => {
        setToggleMenu(prevState => !prevState);
    }

    const renderMenuItems = props.menuItems.map((menuItem, index) => {
       return ( <NavBarMenuItem toggleMenu={toggleMenu} delay={index} key={"NavBarMenu"+index+randomId}>{<Link to={menuItem.link}><Title animation={titleLetterWiggleAnimation} key={"Title"+index+randomId} title={menuItem.title}/></Link>}</NavBarMenuItem> )
    })

    return (
        <NavBarDiv {...props}>
            {toggleMenu && renderMenuItems}
            <HamburgerMenu handleClickMenu={handleClickMenu} toggleMenu={toggleMenu}></HamburgerMenu>
        </NavBarDiv>
    )
}

export default NavBar