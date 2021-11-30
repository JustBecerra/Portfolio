import React from 'react'
import ReactPlayer from 'react-player'
import './proyects.css'
import { Container } from '@material-ui/core'

export default function Proyects(){
    return(
        <div className='container'>
            <h1 className='parrafo'>My proyects</h1>
            <div>
                <h2 className='projectname'>Videogame App</h2>
                <a className='links' href="https://justvideogames.vercel.app">
                  Check it out yourself
                </a>
                <p className='parrafo'>
                    Development of a SPA using React for the Front End, and Redux as stage management.
                    The components were developed with CSS without the use of external libraries. It
                    consumes data from an API through a Back End developed in nodeJS using Express,
                    adding new functionalities to the original API.
                </p>
                <Container>
                  <ReactPlayer className='PIvideo' url='https://vimeo.com/640730517/a54e463073'/>
                </Container>
            </div>
            <div>
                <h2 className='projectname'>Social Media App</h2>
                <a className='links' href="https://huellitas.vercel.app/home"> 
                  Check it out yourself
                </a>
                <p className='parrafo'>
                    Web social app I developed along with some friends where you can post lost, for adoption or found pets. 
                    We provide a map to locate the desired pet along with a real time chat to coordinate with other users.
                    Also, if you wish, you can find a donation button down in the footer to help us!.
                    The objective of this app is unifying pets announcement in one place so information can be easier to find. 
                    We used MongoDB, TypeScript, WebSocket, Leaflet, Passport and Firebase among others.
                </p>
                <Container className='PGvideo'>
                  <ReactPlayer  controls={true} url='https://www.youtube.com/watch?v=VXivMZ0iOYU' />
                </Container>
                
            </div>
            <p className='thankstext'>Hope you liked it, if you wish to contact me, you can go ahead and check below.</p>
        </div>
    )
}