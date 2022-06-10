import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import imgIce from '../Assets/imgs/fabrizio-conti-aExT3y92x5o-unsplash.jpg';

const Nav = styled.nav`
    /* GENERAL */
    background-image: url(${imgIce});
    /* box-shadow: 0rem 0.5rem 2rem 2.5rem rgba(54, 168, 239, 1),
    0rem 0.5rem 1rem 0.5rem rgba(54, 168, 239, 1) inset; */
    backdrop-filter: blur(1rem);

    /* GRID/FLEX */
    grid-area: ${props => props.gridArea};
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    
    /* ANIMATION */
    animation: navBarFloat 3s linear infinite;
    animation-direction: alternate;

    /* KEYFRAMES */ 
    @keyframes navBarFloat{
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
    }

    /* NESTED */
    
    a {
        /* GENERAL */

        background: linear-gradient(0deg, #5AD3FF, #50C2F4, #46B1E9, #3CA1DE, #3290D3, #287FC8, #1E6EBD, #145EB2, #0A4DA7, #003C9C);
        background-clip: text;
        -webkit-text-fill-color: transparent;

        /* FONT */

        font-family: 'Iceberg', cursive;
        font-size: 2rem;
        font-weight: 400;
        text-decoration: none; 
        text-align: center;
        

        &:hover {
            text-shadow: 0rem 0.1rem 0rem rgba(255,255,255,0.5);
        }
    }
`;

const NavBar = (props) => {
    return (
        <Nav {...props}>
            <Link to={"/"}>About</Link>
            <Link to={"/projects"}>Projects</Link>
            <Link to={"/contact"}>Contact</Link>
        </Nav>
    )
}


export default NavBar