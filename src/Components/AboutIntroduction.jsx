import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const AboutIntroduction = (props) => {
  return (
    <Div {...props}>
          Hi! my name is Lorenzo. I am an IT enthusiast and currently interested in a junior front-end development role.
          Feel free to check out my website and some projects I showcase!
          Oh, and if possible please ignore the glitchy magic looking part below, I am still new to React and some things are a little finnicky.
          Have fun exploring! 
    </Div>
  );
}

export default AboutIntroduction;
