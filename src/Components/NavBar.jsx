import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import imgIce from '../Assets/imgs/fabrizio-conti-aExT3y92x5o-unsplash.jpg';
import getRandomValue from '../Helpers/getRandomVal';
import HamburgerIcon from './HamburgerIcon';
import Title from './Title';

const Nav = styled.nav`
    /* GENERAL */
    
    /* GRID/FLEX */
    grid-area: ${props => props.gridArea};
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

const Div = styled.div`
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

    /* ANIMATION */
    animation: elementFloat 2s linear infinite;
    animation-delay: ${props => props.delayVal}s;
    animation-direction: alternate;
    
    /* KEYFRAMES */ 
    @keyframes elementFloat {
        0%{
            transform: translate3d(0, 0, 0);
            box-shadow: 0rem 0.5rem 1.5rem 0.5rem rgba(54, 168, 239, 1),
            0rem -0.5rem 1.5rem 0.4rem rgba(54, 168, 239, 1),
            0rem 0.5rem 1.5rem 0.5rem rgba(54, 168, 239, 1) inset;
        }
        25%{
            transform: translate3d(0, 0.3rem, 0);
            box-shadow: 0rem 0.4rem 1.5rem 0.4rem rgba(54, 168, 239, 1),
            0rem -0.4rem 1.5rem 0.4rem rgba(54, 168, 239, 1),
            0rem 0.2rem 1rem 0.2rem rgba(54, 168, 239, 1) inset;
        }
        50%{
            transform: translate3d(0, 0.6rem, 0);
            box-shadow: 0rem 0.3rem 1.5rem 0.6rem rgba(54, 168, 239, 1),
            0rem -0.3rem 1.5rem 0.4rem rgba(54, 168, 239, 1),
            0rem 0rem 0.5rem 0rem rgba(54, 168, 239, 1) inset;
        }
        75%{
            transform: translate3d(0, 0.8rem, 0);
            box-shadow: 0rem 0.2rem 1.5rem 0.8rem rgba(54, 168, 239, 1),
            0rem -0.2rem 1.5rem 0.4rem rgba(54, 168, 239, 1),
            0rem -0.2rem 1rem 0.2rem rgba(54, 168, 239, 1) inset;
        }
        100%{
            transform: translate3d(0, 1rem, 0);
            box-shadow: 0rem 0.1rem 1.5rem 1rem rgba(54, 168, 239, 1),
            0rem -0.1rem 1.5rem 0.4rem rgba(54, 168, 239, 1),
            0rem -0.5rem 1.5rem 0.5rem rgba(54, 168, 239, 1) inset;
        }
    }

    /* NESTED */

    &:hover .TitleSpan {
        animation-play-state: running;
    }
`;

const HamburgerMenu = styled(Div)`
    /* GRID/FLEX */
    background-size: cover;
    flex-basis: 5%;
    display: grid;
    padding: 0rem 0.625rem;
    justify-content: space-between; 
    align-items: space-between;
    grid-template-columns: inherit;
    grid-template-rows:  1fr 1fr 1fr;
    grid-template-areas: 
    "topLine"
    "midLine"
    "botLine";

    & .topLine{
        grid-area: topLine;
    }

    & .middleLine{
        grid-area: midLine;
    }

    & .bottomLine{
        grid-area: botLine;
    }
`;

const NavBar = (props) => {
    const [toggleMenu, setToggleMenu] = React.useState(false);

    const handleClickMenu = () => {
        setToggleMenu(prevState => !prevState);
    }

    return (
        <Nav {...props}>
            <Div delayVal={getRandomValue(1,2)}><Link to={"/"}><Title title={"About"}/></Link></Div>
            <Div delayVal={getRandomValue(2,3)}><Link to={"/projects"}><Title title={"Projects"}/></Link></Div>
            <Div delayVal={getRandomValue(3,4)}><Link to={"/contact"}><Title title={"Contact"}/></Link></Div>
            <HamburgerMenu onClick={handleClickMenu} delayVal={getRandomValue(4,5)}><HamburgerIcon toggleMenu={toggleMenu}/></HamburgerMenu>
        </Nav>
    )
}


export default NavBar