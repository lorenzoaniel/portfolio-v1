import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  background: yellow;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: ${props => props.gridArea};
`;

const Contact = (props) => {
  return (
    <Div {...props}>
      <h1>Contact</h1>
    </Div>
  );
}

export default Contact;