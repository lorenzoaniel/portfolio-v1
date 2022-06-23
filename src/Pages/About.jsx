import React from 'react';
import styled from 'styled-components';
import AboutIntroduction from '../Components/AboutIntroduction';
import { motion } from 'framer-motion';
import { Outlet } from 'react-router-dom';
import AboutPageConfig from '../Configs/AboutPageConfig'; 


const Div = styled(motion.div)`
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

  const AboutInitial = {
    gridArea: props.gridArea,
  }

  const AboutMotionProps = {
    initial: AboutInitial,
  }
  
  return (
    <Div {...AboutMotionProps}>
      <AboutIntroduction gridArea={AboutPageConfig().aboutIntro.gridArea}/>
      <Outlet/>
    </Div>
  );
}

export default About;