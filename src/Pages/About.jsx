import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  background: red;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: ${props => props.gridArea};
`;

const About = (props) => {
  return (
    <Div {...props}>
      <h1>About</h1>
    </Div>
  );
}

export default About;