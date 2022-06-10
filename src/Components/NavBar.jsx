import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
    grid-area: ${props => props.gridArea};
    background: blue;
`;

const NavBar = (props) => {
    return (
        <Nav {...props}>
            <Link to={"/"}><></>About</Link>
            <Link to={"/projects"}>Projects</Link>
            <Link to={"/contact"}>Contact</Link>
        </Nav>
    )
}


export default NavBar