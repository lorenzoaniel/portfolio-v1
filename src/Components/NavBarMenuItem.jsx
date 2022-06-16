import React from 'react';
import styled from 'styled-components';
import defaultMenuItemDivStyle from '../Mixins/Styles/DefaultMenuItemDivStyle';
import imgIce from '../Assets/imgs/fabrizio-conti-aExT3y92x5o-unsplash.jpg';
// import navMenuDivAnimation from '../Mixins/Animations/NavMenuDivAnimation';
import { CSSTransition } from 'react-transition-group';

const NavBarMenuItemDiv = styled.div`
    /* GENERAL */
    ${defaultMenuItemDivStyle}
    background-image: url(${imgIce});

    /* ANIMATION */
    &.navMenuDivAnimation-enter {
        opacity: 0;
    }
    &.navMenuDivAnimation-enter-active {
        opacity: 1;
    }
    &.navMenuDivAnimation-exit {
        opacity: 1;
    }
    &.navMenuDivAnimation-exit-active {
        opacity: 0;
    }
`;

const NavBarMenuItem = (props) => {

    return (
        <CSSTransition 
            in={props.toggleMenu}
            timeout={1000}
            classNames={"navMenuDivAnimation"}
        >
            <NavBarMenuItemDiv {...props}>{props.children}</NavBarMenuItemDiv>
        </CSSTransition>
    )
}

export default NavBarMenuItem; 