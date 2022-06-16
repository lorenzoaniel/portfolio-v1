import React from 'react';
import styled, {css} from 'styled-components';
import navMenuDivFloatAndPulseAnimation from '../Mixins/Animations/NavMenuDivFloatAndPulseAnimation';
import defaultMenuItemDivStyle from '../Mixins/Styles/DefaultMenuItemDivStyle';
import imgIce from '../Assets/imgs/fabrizio-conti-aExT3y92x5o-unsplash.jpg';
import HamburgerIcon from './HamburgerIcon';

const HamburgerMenuDivOpenGridStyle = css`
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas:
        "topline"
        "midline"
        "botline";
`;

const HamburgerMenuDivClosedGridStyle = css`
    grid-template-rows: 1fr;
    grid-template-areas: "";
`;

const HamburgerMenuDiv = styled.div`
    /* GENERAL */
    ${defaultMenuItemDivStyle}
    background-image: url(${imgIce});
    background-size: cover;

    /* GRID/FLEX */
    flex-basis: 5%;
    display: grid;
    padding: 0rem 0.625rem;
    grid-template-columns: inherit;
    justify-content: center; 
    align-items: center;
    ${props => props.toggleMenu ? HamburgerMenuDivOpenGridStyle : HamburgerMenuDivClosedGridStyle}

    /* ANIMATION */
    animation-name: ${navMenuDivFloatAndPulseAnimation};
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-delay: ${props => props.delay ? ` ${props.delay/4}s` : ``};
`;

const HamburgerMenu = (props) => {

    return(
        <HamburgerMenuDiv {...props} onClick={props.handleClickMenu}>
            <HamburgerIcon toggleMenu={props.toggleMenu} cName={"topLine"}/>
            <HamburgerIcon toggleMenu={props.toggleMenu} cName={"midLine"}/>
            <HamburgerIcon toggleMenu={props.toggleMenu} cName={"botLine"}/>
        </HamburgerMenuDiv>
    )
}

export default HamburgerMenu;