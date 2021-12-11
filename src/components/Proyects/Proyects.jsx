import React from 'react'
import ReactPlayer from 'react-player'
import './proyects.css'
import { Container } from '@material-ui/core'

export default function Proyects(translate){
    return(
        <div id='proyects' className='container'>
            {translate.translate === false ?
            <h1 className='titulo'>My Proyects</h1>
            :
            <h1 className='titulo'>Mis Proyectos</h1>
            }
            <div>
                {translate.translate === false ?
                <h2 className='projectname'>Videogame App</h2>
                :
                <h2 className='projectname'>App de videojuegos</h2>
                }
                
                {translate.translate === false ? 
                <a className='links' href="https://justvideogames.vercel.app">
                  Check it out yourself
                </a>
                :
                <a className='links' href="https://justvideogames.vercel.app">
                  Compruébalo tú mismo
                </a>
                }
                {translate.translate === false ? 
                 <p className='parrafo'>
                    Development of a SPA using React for the Front End, and Redux as stage management.
                    The components were developed with CSS without the use of external libraries. It
                    consumes data from an API through a Back End developed in nodeJS using Express,
                    adding new functionalities to the original API.
                 </p>
                :
                <p className='parrafo'>
                    Desarrollo de un SPA utilizando React para el Front End y Redux como gestión de escenario.
                    Los componentes se desarrollaron con CSS sin el uso de bibliotecas externas. Eso
                    consume datos de una API a través de un Back End desarrollado en nodeJS usando Express,
                    agregando nuevas funcionalidades a la API original.
                </p>
                } 
                <Container>
                  <ReactPlayer className='PIvideo' url='https://vimeo.com/640730517/a54e463073'/>
                </Container>
            </div>
            <div>
                {translate.translate === false ? 
                 <h2 className='projectname'>Social Media App</h2>
                :  
                 <h2 className='projectname'>Red Social</h2>
                }
                
                {translate.translate === false ?
                <a className='links' href="https://huellitas.vercel.app/home"> 
                  Check it out yourself
                </a>
                :
                <a className='links' href="https://huellitas.vercel.app/home"> 
                  Compruébalo tú mismo
                </a>
                }
                {translate.translate === false ?
                  <p className='parrafo'>
                  Web social app I developed along with some friends where you can post lost, for adoption or found pets. 
                  We provide a map to locate the desired pet along with a real time chat to coordinate with other users.
                  Also, if you wish, you can find a donation button down in the footer to help us!.
                  The objective of this app is unifying pets announcement in one place so information can be easier to find. 
                  We used MongoDB, TypeScript, WebSocket, Leaflet, Passport and Firebase among others.
                  </p>
                :
                <p className='parrafo'>
                    Aplicación web social que desarrollé junto con algunos amigos donde puedes publicar mascotas perdidas, en adopción o encontradas.
                    Proporcionamos un mapa para localizar la mascota deseada junto con un chat en tiempo real para coordinar con otros usuarios.
                    Además, si lo desea, puede encontrar un botón de donación en el pie de página para ayudarnos.
                    El objetivo de esta aplicación es unificar el anuncio de mascotas en un solo lugar para que la información sea más fácil de encontrar.
                    Usamos MongoDB, TypeScript, WebSocket, Leaflet, Passport y Firebase entre otros.
                </p>
                }        
                <Container >
                  <ReactPlayer className='PGvideo' controls={true} url='https://www.youtube.com/watch?v=VXivMZ0iOYU' />
                </Container>
            </div>
            {translate.translate === false ?
            <h5 className='thankstext'>Hope you liked it, if you wish to contact me, you can go ahead and check below.</h5>
             :
             <h5 className='thankstext'>Espero que les haya gustado, si desea ponerse en contacto conmigo, puede consultar a continuación.</h5>
            }
            
        </div>
    )
}