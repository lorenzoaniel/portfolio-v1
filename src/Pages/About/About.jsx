import React from 'react';
import styled from 'styled-components';
import AboutIntroduction from '../../Components/AboutIntroduction';
import DontPressWarning from '../../Components/DontPressWarning';
import basePagesDivStyle from '../../Mixins/Styles/BasePagesDivStyle';

const AboutPageConfig = {
  aboutIntro: {
    gridArea: "1",
  },
  dontPress: {
    gridArea: "2",
  }
}

const Div = styled.div`
  ${basePagesDivStyle}
  grid-area: ${props => props.gridArea};
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  grid-template-columns: 1fr;
  grid-template-rows: 60% 40%;
  grid-template-areas: 
  "1"
  "2"
  ;
`;

const About = (props) => {
  // const [enableDungeon, setEnableDungeon] = React.useState(false);
  
  return (  
    <Div {...props}>
      <AboutIntroduction gridArea={AboutPageConfig.aboutIntro.gridArea}/>
      <DontPressWarning gridArea={AboutPageConfig.dontPress.gridArea}/>
    </Div>
  );
}

export default About;