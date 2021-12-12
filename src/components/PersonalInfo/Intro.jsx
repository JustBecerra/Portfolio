import './intro.css'
import programmer from '../imgs/programmer.gif'

export default function Intro(translate){
  
  return(
      <div id='about' className='introduction'>
          {translate.translate === false ?
          <h1 className='Aboutme'>
            About me 
          </h1> 
          :
          <h1 className='Aboutme'>
            Sobre mi 
          </h1> 
          }
          <h3 className='born'>
            Birthday: 21/09/2000
          </h3>
          <h3 className='nationality'> 
            Nationality: Argentina
          </h3>
          <h3 className='hobbies'> 
            Hobbies: Gym rat and Geek
          </h3>
          <div className='Pbackground'>
          {translate.translate === false ? 
          <p className='paragraph'>
            I'm a Junior Full Stack Web Developer specialized in ReactJS for the Front-End and NodeJs for the Back-End.<br/>
            I graduated from SoyHenry's Bootcamp after 800+ hours of programming.
            Hardworking, team player, precise and stoic.<br/>
            Fully capable and willing to work with others to achieve new goals.<br/>
            When I come face to face with a problem, I try to fix it myself but I'm not shy about asking others for help.<br/>
            My goals for the future are to join a great group of developers and learn as much as I can.
          </p>
           :
           <p className='paragraph'>
           Soy un Junior Full Stack Web Developer especializado en ReactJS para el Front-End y NodeJS para el Back-End.<br/>
           Me gradue del bootcamp soyHenry despues de 800+ horas programando.
           Trabajador, jugador de equipo, preciso and estoico.<br/>
           Totalmente capaz y dispuesto a trabajar con otros para lograr nuevos objetivos.<br/>
           Cuando me encuentro con un problema, trato de solucionarlo yo mismo, pero no me da vergüenza pedir ayuda a los demás.<br/>
           Mis objetivos para el futuro son unirme a un gran grupo de desarrolladores y aprender lo mas que pueda.
         </p>
         }
         </div>
          <img className='programmergif' src={programmer} alt='no hay nada'/>
      </div>
  )
}