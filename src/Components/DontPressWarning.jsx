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
    border: 0.5rem solid black;
`;

const DontPressWarning = (props) => {

  const DontPressWarningInitial = {
    gridArea: props.gridArea,
  }

  const DontPressWarningMotionProps = {
    initial: DontPressWarningInitial,
  }

  return (
    <Div {...DontPressWarningMotionProps} {...props}>
        <DontPressSign gridArea={"topSign"} quotesArr={dontPressWarning.warning} changeTime={5000}></DontPressSign>
        <DontPressSign gridArea={"leftSign"} quotesArr={dontPressWarning.warning} changeTime={4000}></DontPressSign>
        <DungeonButton gridArea={"centerButton"} quotesArr={pressMeTaunts.taunts} changeTime={5000}/>
        <DontPressSign gridArea={"rightSign"} quotesArr={dontPressWarning.warning} changeTime={3000}></DontPressSign>
        <DontPressSign gridArea={"botSign"} quotesArr={dontPressWarning.warning} changeTime={2000}></DontPressSign>
    </Div>
  );
}

export default DontPressWarning;