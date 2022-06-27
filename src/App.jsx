import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import NavBar from './Components/NavBar';
import styled from 'styled-components';
import SnowBackground from './Components/SnowBackground';
import AppConfig from './Configs/AppConfig';
import DontPressWarning from './Components/DontPressWarning';
import Dungeon from './DungeonCrawlerModule/Dungeon';
import AboutPageConfig from './Configs/AboutPageConfig';
// import NoMatch from './Components/NoMatch';


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
          <NavBar gridArea={AppConfig().navbar.gridArea}/>
          <Routes>
            <Route path={"about"} element={<About gridArea={AppConfig().about.gridArea} />}>
              <Route index element={<DontPressWarning gridArea={AboutPageConfig().dontPress.gridArea}/>} />
              <Route path={"sign"} element={<DontPressWarning gridArea={AboutPageConfig().dontPress.gridArea}/>}/>
              <Route path={"dungeon"} element={<Dungeon gridArea={AboutPageConfig().dontPress.gridArea}/>}/>
              <Route path="*" element={<Navigate to="/about" />} />
            </Route>
            <Route path={"projects"} element={<Projects gridArea={AppConfig().projects.gridArea} />}/>
            <Route path={"contact"} element={<Contact gridArea={AppConfig().contact.gridArea} />}/>
            <Route path="*" element={<Navigate to="/about" />} />
          </Routes>
        </Main>
      </SnowBackground>
    </>
  );
}

export default App;
