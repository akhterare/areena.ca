import React from 'react';
import styled from "styled-components";

const HeroStyles = styled.div`
    text-align: center;
    background-color: grey;
    height: 200px;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
`;

const Hero = () => (
    <HeroStyles>
        <h1>Hi! I'm Areena.</h1>
        <h4>Welcome to my website! Here's what I'm working on.</h4>
    </HeroStyles>
)

export default Hero;
