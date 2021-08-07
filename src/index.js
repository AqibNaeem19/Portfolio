import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import About from './components/About';
import Stack from './components/Stack';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
     return (
          <div>
               <NavBar/>
               <LandingPage />
               <About />
               <Stack />
               <Projects />
               <Contact />
          </div>
     )
}

ReactDOM.render(<App />, document.querySelector('#root'));