import React from 'react'
import ReactPlayer from 'react-player'
import './proyects.css'
import { Card, Container, Link } from '@material-ui/core'
import { CardMedia } from '@mui/material';
import PIimg from '../imgs/joystick.png'
import PGimg from '../imgs/paw.png'

export default function Proyects(translate){
    return(
        <div id='proyects' className='container'>
          
            {translate.translate === false ?
            <h1 className='titulo'>My Projects</h1>
            :
            <h1 className='titulo'>Mis Proyectos</h1>
            }
            <div className='cardcontainer'>
            <Link href='https://justvideogames.vercel.app' >     
            <CardMedia image={PIimg}  className='ProjectCard'>
                {translate.translate === false ?
                <h2 className='projectname'>Videogame App</h2>
                :
                <h2 className='projectname'>App de videojuegos</h2>
                }
            </CardMedia>
            </Link>
            <Link href='https://huellitas.vercel.app/home' >     
            <CardMedia image={PGimg} className='ProjectCard'>
                {translate.translate === false ? 
                 <h2 className='projectname'>Social Media App</h2>
                :  
                 <h2 className='projectname'>App de Red Social</h2>
                }
            </CardMedia>    
            </Link>
            </div>    
            
            {translate.translate === false ?
            <h5 className='thankstext'>Hope you liked it, if you wish to contact me, you can go ahead and check below.</h5>
             :
             <h5 className='thankstext'>Espero que les haya gustado, si desea ponerse en contacto conmigo, puede consultar a continuación.</h5>
            }
            
        </div>
    )
}