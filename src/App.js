import './App.css';
import React, { useState } from 'react';
import pic from './components/imgs/sonriente.jpg'
import Intro from './components/PersonalInfo/Intro'
import Techs from './components/PersonalInfo/Techs'
import Proyects from './components/Proyects/Proyects'
import Footer from './components/Footer/Footer'
import '../src/components/Proyects/proyects.css'
import { AppBar, Box, Button, Container, Switch, Typography } from '@material-ui/core';
import { createTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import britishlogo from '../src/components/imgs/britishlogo.png'
import spanishlogo from '../src/components/imgs/spanishlogo.png'
import { Link, animateScroll as scroll } from "react-scroll";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
  });
  const [translate,setTranslate] = useState(false)
  return (
    <div className='imagenfondo'>
      <Container className='navbar'>
        <AppBar >
          <Container className='appbar'>
          <Switch 
            className='navbarBG'
            checked={translate}
            onChange={() => setTranslate(!translate)}
            color='default'
          />
          {translate === false ? <img className='languagelogo' src={britishlogo}/> : <img className='languagelogo' src={spanishlogo}/>}
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Button className='buttonscroll'>
              About
            </Button>
          </Link>
          <Link
            activeClass="active"
            to="techs"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Button className='buttonscroll'>
              Technologies
            </Button>
          </Link>
          <Link
          activeClass="active"
          to="proyects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <Button className='buttonscroll'>
            Projects
          </Button>
        </Link>
        </Container>
        </AppBar>
      </Container>
         <img className='profilePic' src={pic} alt="nothing"/>
           <Typography variant="p" className='welcometext'>
             <ThemeProvider theme={theme}>
              {translate === false ? <Box fontFamily='BlinkMacSystemFont'>
                  Welcome, <br/>
                  I'm Justo Becerra<br/>
                  Full Stack Developer<br/>
              </Box>
               : <Box fontFamily='BlinkMacSystemFont'>
                Bienvenido, <br/>
                soy Justo Becerra<br/>
                Full Stack Developer<br/>
              </Box>}
              </ThemeProvider>
            </Typography>
            <Typography variant='h5'  >
            <ThemeProvider theme={theme}>
              {translate === false ? 
              <Box fontFamily='BlinkMacSystemFont' text-underline='1px' className='residencetext'>
              residing in Argentina
              </Box>
              :
              <Box fontFamily='BlinkMacSystemFont' text-underline='1px' className='residencetextESP'>
              residiendo en Argentina
              </Box>
              }
              </ThemeProvider>
            </Typography>
         <Intro translate={translate}/>   
         <Techs translate={translate}/>
         <Proyects translate={translate}/>
         <Footer />
    </div>
  )
}

export default App;
