import './proyects.css'

export default function Proyects(){
    return(
        <div className='container'>
            <h1>My proyects</h1>
            <div>
                <a href="https://justvideogames.vercel.app">
                  <h2>Videogame App</h2>
                </a>
                <p>
                    Development of a SPA using React for the Front End, and Redux as stage management.
                    The components were developed with CSS without the use of external libraries. It
                    consumes data from an API through a Back End developed in nodeJS using Express,
                    adding new functionalities to the original API.
                </p>
            </div>
            <div>
                <a href="https://huellitas.vercel.app/home"> 
                  <h2>Social media App</h2>
                </a>
                <p>
                    Web social app I developed along with some friends where you can post lost, for adoption or found pets. 
                    We provide a map to locate the desired pet along with a real time chat to coordinate with other users.
                    Also, if you wish, you can find a donation button down in the footer to help us!.
                    The objective of this app is unifying pets announcement in one place so information can be easier to find. 
                    We used MongoDB, TypeScript, WebSocket, Leaflet, Passport and Firebase among others.
                </p>
            </div>
        </div>
    )
}