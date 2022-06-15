import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: ${props => props.gridArea};
`;

const Dungeon = (props) => {
  return (
    <Div {...props}>
      <h1> Dungeon</h1>
    </Div>
  );
}

export default Dungeon;