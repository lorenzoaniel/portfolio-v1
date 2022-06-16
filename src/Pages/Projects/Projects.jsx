import React from 'react';
import styled from 'styled-components';
import basePagesDivStyle from '../../Mixins/Styles/BasePagesDivStyle';

const Div = styled.div`
  ${basePagesDivStyle}
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