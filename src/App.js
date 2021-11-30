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
      // palette: {
      //   primary: {
      //     main: '#242526',
      //     dark: '#000000',
      //   },
      // },
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
    <div>
      <Container >
        <Switch 
          // className='navbar'
          checked={translate}
          onChange={() => setTranslate(!translate)}
        />
        {translate === false ? <img className='languagelogo' src={britishlogo}/> : <img className='languagelogo' src={spanishlogo}/>}
      </Container>
       <div className='imagenfondo'> 
         <img className='profilePic' src={pic} alt="nothing"/>
           <Typography variant="p" className='welcometext'>
             <ThemeProvider theme={theme}>
              <Box fontFamily='BlinkMacSystemFont' fontSize='65px'>
              {translate === false ? <Box fontFamily='BlinkMacSystemFont' fontSize='65px'>
                  Welcome, <br/>
                  I'm Justo Becerra<br/>
                  Full Stack Developer<br/>
              </Box>
               : <Box fontFamily='BlinkMacSystemFont' fontSize='65px'>
                Bienvenido, <br/>
                soy Justo Becerra<br/>
                Full Stack Developer<br/>
              </Box>}
              
              
              </Box>
              </ThemeProvider>
            </Typography>
            <Typography variant='h5' className='residencetext' >
            <ThemeProvider theme={theme}>
              <Box fontFamily='BlinkMacSystemFont' text-underline='1px'>
               residing in Argentina
              </Box>
              </ThemeProvider>
            </Typography>
       </div>
       <div>
         <Intro/>
         <Techs/>
         <Proyects/>
       </div>
       <div>
         <Footer/>
       </div>
    </div>
  );
}

export default App;
