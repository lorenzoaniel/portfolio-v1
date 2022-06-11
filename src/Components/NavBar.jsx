import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import imgIce from '../Assets/imgs/fabrizio-conti-aExT3y92x5o-unsplash.jpg';
import getRandomValue from '../Helpers/getRandomVal';

const Nav = styled.nav`
    /* GENERAL */

    /* GRID/FLEX */
    grid-area: ${props => props.gridArea};
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @keyframes scaleMenuItems{
        0%{
            transform: translate3d(0, 0, 0);
        }
        25%{
            transform: translate3d(0, 0, 0);
        }
        50%{
            transform: translate3d(0, 0, 0);
        }
        75%{
            transform: translate3d(0, 0, 0);
        }
        100%{
            transform: translate3d(0, 0, 0);
        }
    }
`;

const Div = styled.div`
    /* GENERAL */
    height: 100%;
    background-image: url(${imgIce});
    background-size: contain;
    clip-path: polygon(35% 0, 92% 3%, 100% 35%, 93% 65%, 80% 90%, 53% 82%, 35% 93%, 5% 80%, 0% 35%, 8% 16%);
    border-radius: 10px;

    /* GRID/FLEX */
    flex-basis: 33%;
    display: flex;
    justify-content: center;
    align-items: center;

    /* ANIMATION */
    animation: elementFloat 2s linear infinite;
    animation-delay: ${props => props.delayVal}s;
    animation-direction: alternate;

    /* NESTED */
        a {
            /* GENERAL */
            background: linear-gradient(0deg, #5AD3FF, #50C2F4, #46B1E9, #3CA1DE, #3290D3, #287FC8, #1E6EBD, #145EB2, #0A4DA7, #003C9C);
            background-clip: text;
            -webkit-text-fill-color: transparent;
            text-shadow: 0 0.1rem 0.1rem rgba(0,0,0,0.5);

            /* FONT */
            font-family: 'Iceberg', cursive;
            font-size: 3.5rem;
            font-weight: 400;
            text-decoration: none; 
            text-align: center;
            
            /* ANIMATION */
            animation: scaleMenuItems 3s linear infinite;
            animation-direction: alternate;


            &:hover {
                text-shadow: 0rem 0.1rem 0rem rgba(255,255,255,0.5);
            }
        }
    }
    
    /* KEYFRAMES */ 
    @keyframes elementFloat{
        0%{
            transform: translate3d(0, 0, 0);
            box-shadow: 0rem 1rem 1.5rem 0.5rem rgba(54, 168, 239, 1),
            0rem -1rem 1.5rem 0.4rem rgba(54, 168, 239, 1),
            0rem 0.5rem 1.5rem 0.5rem rgba(54, 168, 239, 1) inset;
        }
        25%{
            transform: translate3d(0, 0.3rem, 0);
            box-shadow: 0rem 0.8rem 1.5rem 0.4rem rgba(54, 168, 239, 1),
            0rem -0.8rem 1.5rem 0.4rem rgba(54, 168, 239, 1),
            0rem 0.2rem 1rem 0.2rem rgba(54, 168, 239, 1) inset;
        }
        50%{
            transform: translate3d(0, 0.6rem, 0);
            box-shadow: 0rem 0.6rem 1.5rem 0.6rem rgba(54, 168, 239, 1),
            0rem -0.6rem 1.5rem 0.4rem rgba(54, 168, 239, 1),
            0rem 0rem 0.5rem 0rem rgba(54, 168, 239, 1) inset;
        }
        75%{
            transform: translate3d(0, 0.8rem, 0);
            box-shadow: 0rem 0.4rem 1.5rem 0.8rem rgba(54, 168, 239, 1),
            0rem -0.4rem 1.5rem 0.4rem rgba(54, 168, 239, 1),
            0rem -0.2rem 1rem 0.2rem rgba(54, 168, 239, 1) inset;
        }
        100%{
            transform: translate3d(0, 1rem, 0);
            box-shadow: 0rem 0.2rem 1.5rem 1rem rgba(54, 168, 239, 1),
            0rem -0.2rem 1.5rem 0.4rem rgba(54, 168, 239, 1),
            0rem -0.5rem 1.5rem 0.5rem rgba(54, 168, 239, 1) inset;
        }
    
`;

const NavBar = (props) => {
    return (
        <Nav {...props}>
            <Div delayVal={getRandomValue(1,2)}><Link to={"/"}><span>About</span></Link></Div>
            <Div delayVal={getRandomValue(2,3)}><Link to={"/projects"}>Projects</Link></Div>
            <Div delayVal={getRandomValue(3,4)}><Link to={"/contact"}>Contact</Link></Div>
        </Nav>
    )
}


export default NavBar