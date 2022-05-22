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
import { Link } from "react-scroll";

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
        <AppBar color='transparent'> 
          {window.innerWidth > 500 ? 
            <Container className='appbar'>
            <Switch 
              className='navbarBG'
              checked={translate}
              onChange={() => setTranslate(!translate)}
              color='default'
            />
            {translate === false ? <img className='languagelogo' src={britishlogo} alt='' /> : <img className='languagelogo' src={spanishlogo} alt=''/>}
            <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            {translate === false ? <Button size='small' style={{ color: '#FFFFFF'}} className='buttonscroll'>
              About me
            </Button> :
              <Button style={{ color: '#FFFFFF'}} className='buttonscroll'>
              Sobre mi
            </Button>
            }
          </Link>
          <Link
            activeClass="active"
            to="techs"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            {translate === false ? <Button size='small' style={{ color: '#FFFFFF'}} className='buttonscroll'>
              Technologies
            </Button> :
              <Button style={{ color: '#FFFFFF'}} className='buttonscroll'>
              Tecnologías
            </Button>
            }
          </Link>
          <Link
          activeClass="active"
          to="proyects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          {translate === false ? <Button size='small' style={{ color: '#FFFFFF'}} className='buttonscroll'>
              Projects
            </Button> :
              <Button style={{ color: '#FFFFFF'}} className='buttonscroll'>
              Proyectos
            </Button>
            }
        </Link>
        </Container> 
           :
          <Container className='appbar'>
          <Switch 
            className='navbarBG'
            checked={translate}
            onChange={() => setTranslate(!translate)}
            color='default'
          />
          {translate === false ? <img className='languagelogo' src={britishlogo} alt=''/> : <img className='languagelogo' src={spanishlogo} alt=''/>}
            <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            {translate === false ? <Button size='small' style={{ color: '#FFFFFF'}} className='buttonscroll'>
              About me
            </Button> :
              <Button style={{ color: '#FFFFFF'}} className='buttonscroll'>
              Sobre mi
            </Button>
            }
          </Link>
          <Link
            activeClass="active"
            to="techs"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            {translate === false ? <Button size='small' style={{ color: '#FFFFFF'}} className='buttonscroll'>
              Technologies
            </Button> :
              <Button style={{ color: '#FFFFFF'}} className='buttonscroll'>
              Tecnologías
            </Button>
            }
          </Link>
          <Link
          activeClass="active"
          to="proyects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          {translate === false ? <Button size='small' style={{ color: '#FFFFFF'}} className='buttonscroll'>
              Projects
            </Button> :
              <Button style={{ color: '#FFFFFF'}} className='buttonscroll'>
              Proyectos
            </Button>
            }
        </Link>
          </Container>
        } 
        </AppBar>
      </Container>
         <img className='profilePic' src={pic} alt="nothing"/>
           <Typography variant="p" className='welcometext'>
             <ThemeProvider theme={theme}>
              {translate === false ? <Box>
                  Welcome, <br/>
                  I'm Justo Becerra<br/>
                  Full Stack Developer<br/>
              </Box>
               : <Box >
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
