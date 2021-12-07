import './App.css';
import React, { useState } from 'react';
import pic from './components/imgs/sonriente.jpg'
import Intro from './components/PersonalInfo/Intro'
import Techs from './components/PersonalInfo/Techs'
import Proyects from './components/Proyects/Proyects'
import Footer from './components/Footer/Footer'
import '../src/components/Proyects/proyects.css'
import { Box, Container, Switch, Typography } from '@material-ui/core';
import { createTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import britishlogo from '../src/components/imgs/britishlogo.png'
import spanishlogo from '../src/components/imgs/spanishlogo.png'


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
        <Switch 
          className='navbarBG'
          checked={translate}
          onChange={() => setTranslate(!translate)}
        />
        {translate === false ? <img className='languagelogo' src={britishlogo}/> : <img className='languagelogo' src={spanishlogo}/>}
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
            <Typography variant='h5' className='residencetext' >
            <ThemeProvider theme={theme}>
              {translate === false ? 
              <Box fontFamily='BlinkMacSystemFont' text-underline='1px'>
               residing in Argentina
              </Box>
              :
              <Box fontFamily='BlinkMacSystemFont' text-underline='1px'>
                residiendo en Argentina
              </Box>
              }
              </ThemeProvider>
            </Typography>
         <Intro  translate={translate}/>   
         <Techs translate={translate}/>
         <Proyects translate={translate}/>
         <Footer />
    </div>
  );
}

export default App;
