import './App.css';
import backG from './components/imgs/night road.jpg'
import pic from './components/imgs/sonriente.jpg'
import Intro from './components/PersonalInfo/Intro'
import Techs from './components/PersonalInfo/Techs'
import Proyects from './components/Proyects/Proyects'
import Footer from './components/Footer/Footer'
import '../src/components/Proyects/proyects.css'
import { Box, Typography } from '@material-ui/core';
import { createTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

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

  return (
    <div>
       <div className='imagenfondo'> 
         <img className='profilePic' src={pic} alt="nothing"/>
           <Typography variant="p" className='welcometext'>
             <ThemeProvider theme={theme}>
              <Box fontFamily='BlinkMacSystemFont' fontSize='65px'>
              Hello there,<br/>
              I'm Justo Becerra<br/>
              Full Stack Developer<br/>
              
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
