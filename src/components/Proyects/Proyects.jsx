import React, {useState} from 'react'
import './proyects.css'
import { Link } from '@material-ui/core'
import { CardMedia } from '@mui/material';
import PIimg from '../imgs/joystick.png'
import PGimg from '../imgs/paw.png'
import SPimg from '../imgs/cartoonbills.png'
import blueprint from '../imgs/blueprintlogo.jpg'

export default function Proyects(translate){
    const [stylePI, setStylePI] = useState({display: 'none'});
    const [stylePG, setStylePG] = useState({display: 'none'});
    const [styleSP, setStyleSP] = useState({display: 'none'});
    return(
        <div id='proyects' className='container'>         
            {translate.translate === false ?
            <h1 className='titulo'>My Projects</h1>
            :
            <h1 className='titulo'>Mis Proyectos</h1>
            }
            {translate.translate === false ?
              <img src={blueprint} className='BPlogo' alt='no hay nada'/> :
              <img src={blueprint} className='BPlogoESP' alt='no hay nada'/>
            }
            <div className='cardcontainer'>
            <Link style={{ textDecoration: 'none' }} href='https://justvideogames.vercel.app' >     
            <CardMedia image={PIimg}  className='ProjectCard'
                onMouseEnter={e => {
                    setStylePI({display: 'block'});
                  }}
                  onMouseLeave={e => {
                    setStylePI({display: 'none'})
                  }}
            >
                {translate.translate === false ?
                <h2 className='projectname'>Videogame App</h2>
                :
                <h2 className='projectname'>App de videojuegos</h2>
                }
                <h4 style={stylePI} className='PItechs'>
                ReactJs<br/>
                NodeJs<br/>
                JavaScript<br/>
                CSS3
                </h4>
            </CardMedia>
            </Link>
            <Link style={{ textDecoration: 'none' }} href='https://spending-control.vercel.app' >     
            <CardMedia image={SPimg}  className='ProjectCard'
                onMouseEnter={e => {
                    setStyleSP({display: 'block'});
                  }}
                  onMouseLeave={e => {
                    setStyleSP({display: 'none'})
                  }}
            >
                {translate.translate === false ?
                <h2 className='projectname'>Spending Control</h2>
                :
                <h2 className='projectname'>Control de gastos</h2>
                }
                <h4 style={styleSP} className='SPtechs'>
                ReactJs<br/>
                ReduxJs<br/>
                JavaScript<br/>
                CSS3
                </h4>
            </CardMedia>
            </Link>
            <Link style={{ textDecoration: 'none' }} href='https://huellitas.vercel.app/home' >     
            <CardMedia image={PGimg} className='ProjectCard'
              onMouseEnter={e => {
                setStylePG({display: 'block'});
              }}
              onMouseLeave={e => {
                setStylePG({display: 'none'})
              }}
            >
                {translate.translate === false ? 
                 <h2 className='projectname'>Social Media App</h2>
                :  
                 <h2 className='projectname'>App de Red Social</h2>
                }
                
                <h4 style={stylePG} className='PGtechs'>
                ReactJs<br/>
                NodeJs<br/>
                JavaScript<br/>
                TypeScript<br/>
                CSS3
                </h4>
            </CardMedia>    
            </Link>
            </div>    
            
            {translate.translate === false ?
            <h5 className='thankstext'>Hope you liked it, if you wish to contact me, you can go ahead and check below.</h5>
             :
             <h5 className='thankstext'>Espero que le haya gustado, si desea contactarse, le dejo mi información.</h5>
            }
            
        </div>
    )
}