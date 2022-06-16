import React from 'react';
import {Routes, Route} from 'react-router-dom';
import About from './Pages/About/About';
import Projects from './Pages/Projects/Projects';
import Contact from './Pages/Contact/Contact';
import NavBar from './Components/NavBar';
import styled from 'styled-components';
import SnowBackground from './Components/SnowBackground';
import AppConfig from './Configs/AppConfig';

const Main = styled.div`
  display: grid;
  height: inherit;
  grid-template-columns: 1fr;
  grid-template-rows: 10% 90%;
  grid-template-areas: 
    "navbar"
    "main";
  padding: 1rem;
`;

function App() {
  return (
    <>
      <SnowBackground>
        <Main>
          <NavBar menuItems={AppConfig().navbar.menuItems} gridArea={AppConfig().navbar.gridArea}/>
          <Routes>
            <Route path={"/"} element={<About gridArea={AppConfig().about.gridArea} />}/>
            <Route path={"/projects"} element={<Projects gridArea={AppConfig().projects.gridArea} />}/>
            <Route path={"/contact"} element={<Contact gridArea={AppConfig().contact.gridArea} />}/>
          </Routes>
        </Main>
      </SnowBackground>
    </>
  );
}

export default App;
