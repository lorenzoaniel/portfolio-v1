import React from 'react';
import styled from 'styled-components';
import AboutIntroduction from '../Components/AboutIntroduction';
import DontPressWarning from '../Components/DontPressWarning';



const AboutPageConfig = {
  aboutIntro: {
    gridArea: "1",
  },
  dontPress: {
    gridArea: "2",
  }
}

const Div = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  grid-area: ${props => props.gridArea};
  grid-template-columns: 1fr;
  grid-template-rows: 60% 40%;
  grid-template-areas: 
  "1"
  "2"
  ;
`;

const About = (props) => {
  
  return (
    <Div {...props}>
      <AboutIntroduction gridArea={AboutPageConfig.aboutIntro.gridArea}/>
      <DontPressWarning gridArea={AboutPageConfig.dontPress.gridArea}/>
    </Div>
  );
}

export default About;