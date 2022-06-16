import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import pressMeTaunts from '../Local-Data/TauntingButtonData/PressMeTaunts';
import dontPressWarning from '../Local-Data/DontPressData/DontPressWarningQuotes';
import DungeonButton from './DungeonButton';
import DontPressSign from './DontPressSign'; 

const Div = styled(motion.div)`
    height: 100%;
    display: grid;
    justify-items: center;
    align-items: center; 
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: repeat(3,1fr);
    grid-template-areas: 
      "topSign topSign topSign"
      "leftSign centerButton rightSign"
      "botSign botSign botSign"
    ;
    box-shadow: 0rem 0rem 2rem 1rem rgba(0,0,0,0.5) inset;
    background-image: url('https://images.pexels.com/photos/381700/pexels-photo-381700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
    background-size: cover;
    clip-path: polygon(0 0, 100% 0, 98% 10%, 100% 24%, 96% 46%, 100% 100%, 0 100%, 4% 79%, 0 56%, 2% 18%);
`;

const WoodenSignShadow = styled.div`
  height: 100%;
  filter: drop-shadow(0rem 1rem 0.5rem rgba(0, 0, 0,1));
`;

const DontPressWarning = (props) => {

  const DontPressWarningInitial = {
    gridArea: props.gridArea,
  }

  const DontPressWarningMotionProps = {
    initial: DontPressWarningInitial,
  }

  return (
    <WoodenSignShadow>
      <Div {...DontPressWarningMotionProps} >
        <DontPressSign gridArea={"topSign"} quotesArr={dontPressWarning.warning} changeTime={5000}></DontPressSign>
        <DontPressSign gridArea={"leftSign"} quotesArr={dontPressWarning.warning} changeTime={4000}></DontPressSign>
        <DungeonButton gridArea={"centerButton"} quotesArr={pressMeTaunts.taunts} changeTime={5000}/>
        <DontPressSign gridArea={"rightSign"} quotesArr={dontPressWarning.warning} changeTime={3000}></DontPressSign>
        <DontPressSign gridArea={"botSign"} quotesArr={dontPressWarning.warning} changeTime={2000}></DontPressSign>
      </Div>
    </WoodenSignShadow>
  );
}

export default DontPressWarning;