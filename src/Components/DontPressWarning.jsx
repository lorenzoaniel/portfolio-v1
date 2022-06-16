import React from 'react';
import styled from 'styled-components';
import pressMeTaunts from '../Local-Data/TauntingButtonData/PressMeTaunts';
import dontPressWarning from '../Local-Data/DontPressData/DontPressWarningQuotes';
import DungeonButton from './DungeonButton';
import DontPressSign from './DontPressSign';
import woodSign from '../Assets/imgs/pexels-mike-b-381700.jpg';
import warningSignImgTop from '../Assets/imgs/pexels-fwstudio-129723.jpg';
import warningSignImgLeft from '../Assets/imgs/pexels-adrien-olichon-2931290.jpg';
import warningSignImgRight from '../Assets/imgs/pexels-mudassir-ali-3127410.jpg';
import warningSignImgBottom from '../Assets/imgs/pexels-pixabay-207328.jpg';

const Div = styled.div`
  /* GENERAL */
  height: 100%;
  background-size: cover;
  clip-path: polygon(0 0, 100% 0, 98% 10%, 100% 24%, 96% 46%, 100% 100%, 0 100%, 4% 79%, 0 56%, 2% 18%);
  box-shadow: 0rem 0rem 2rem 2rem rgba(0,0,0,0.5) inset;

  /* GRID/FLEX */
  display: grid;
  justify-items: center;
  align-items: center; 
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: repeat(3,1fr);
  grid-template-areas: 
    ". topSign topSign"
    "leftSign centerButton rightSign"
    "botSign botSign ."
  ;
  grid-gap: 1rem;
`;

const WoodenSignShadow = styled.div`
  /* GENERAL */
  background-image: url(${woodSign});
  height: 100%;
  filter: drop-shadow(0rem 1rem 0.5rem rgba(0, 0, 0,1));

  /* GRID/FLEX */
  grid-area: ${props => props.gridArea};
`;

const DontPressWarning = (props) => {
  return (
    <WoodenSignShadow>
      <Div>
        <DontPressSign gridArea={"topSign"} quotesArr={dontPressWarning.warning} changeTime={5000} signImg={warningSignImgTop} clipPath={`polygon(0 9%, 100% 0, 97% 26%, 100% 89%, 66% 95%, 28% 91%, 0 100%, 3% 58%, 0 44%, 3% 23%)`}></DontPressSign>
        <DontPressSign gridArea={"leftSign"} quotesArr={dontPressWarning.warning} changeTime={4000} signImg={warningSignImgLeft} clipPath={`polygon(70% 0, 100% 12%, 98% 63%, 100% 100%, 82% 93%, 32% 87%, 2% 93%, 0 48%, 0 0, 23% 8%)`}></DontPressSign>
        <DungeonButton gridArea={"centerButton"} quotesArr={pressMeTaunts.taunts} changeTime={5000}/>
        <DontPressSign gridArea={"rightSign"} quotesArr={dontPressWarning.warning} changeTime={3000} signImg={warningSignImgRight} clipPath={`polygon(59% 10%, 100% 0, 96% 25%, 100% 100%, 63% 91%, 34% 100%, 0 95%, 2% 31%, 0 10%, 23% 0)`}></DontPressSign>
        <DontPressSign gridArea={"botSign"} quotesArr={dontPressWarning.warning} changeTime={2000} signImg={warningSignImgBottom} clipPath={`polygon(100% 0, 98% 12%, 100% 34%, 97% 88%, 100% 100%, 3% 93%, 0 69%, 5% 43%, 0 39%, 3% 0)`}></DontPressSign>
      </Div>
    </WoodenSignShadow>
  );
}

export default DontPressWarning;