import './proyects.css'

export default function Proyects(){
    return(
        <div className='container'>
            <div>
                <h2 href={"https://justvideogames.vercel.app"}>Videogame App</h2>
                <p>
                    Development of a SPA using React for the Front End, and Redux as stage management.
                    The components were developed with CSS without the use of external libraries. It
                    consumes data from an API through a Back End developed in nodeJS using Express,
                    adding new functionalities to the original API.
                </p>
            </div>
            <div>
                <h2 href={"https://huellitas.vercel.app/home"}>Social media App</h2>
                <p>
                    Web social app where you can post lost, for adoption or found pets. With the objective of
                    unifying pets announcement in one place so information can be easier to find. We used
                    MongoDB, TypeScript, WebSocket, Leaflet, Passport and Firebase among others.
                </p>
            </div>
        </div>
    )
}