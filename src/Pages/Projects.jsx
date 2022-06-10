import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: ${props => props.gridArea};
`;

const Projects = (props) => {
  return (
    <Div {...props}>
      <h1>Projects</h1>
    </Div>
  );
}

export default Projects;