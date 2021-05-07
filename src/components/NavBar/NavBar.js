import React from 'react';
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const NavBarStyles = styled.div`
    background-color:black;
    display: flex;
    justify-content: center;
    padding: 5px;
`;

const LinkStyles = styled(Link)`
    color: white;
    font-size: 16px;
    display: block;
    margin: 0.5em 0;
    padding: 10px;
    text-decoration: none;
`;

const NavBar = () => (
    <NavBarStyles>
        <LinkStyles to="/about">About</LinkStyles>
        <LinkStyles to="/blog">Blog</LinkStyles>
        <LinkStyles to="/resume">Resume</LinkStyles>
    </NavBarStyles>
)

export default withRouter(NavBar);
