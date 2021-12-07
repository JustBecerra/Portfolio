import './intro.css'
import programmer from '../imgs/programmer.gif'

export default function Intro(translate){
  
  return(
      <div className='introduction'>
          {translate.translate === false ?
          <h1 className='Aboutme'>
            About me 
          </h1> 
          :
          <h1 className='Aboutme'>
            Sobre mi 
          </h1> 
          }
          {translate.translate === false ? 
          <p className='Pbackground'>
            I'm a Junior Full Stack Web Developer looking for opportunities to enhance my knowledge.
            I graduated from SoyHenry's Bootcamp after 800+ hours of programming.
            Hardworking, team player, precise and stoic.<br/>
            Fully capable and willing to work with others to achieve new goals.
            When I come face to face with a problem, I try to fix it myself but I'm not shy about asking others for help.<br/>
            My goals for the future are to join a great group of developers, learn alongside them and work remotely while travelling if possible.
          </p>
           :
           <p className='Pbackground'>
           Soy un Junior Full Stack Web Developer buscando oportunidades para mejorar mi conocimiento.
           Me gradue del bootcamp soyHenry despues de 800+ horas programando.
           trabajador, jugador de equipo, preciso and estoico.<br/>
           Totalmente capaz y dispuesto a trabajar con otros para lograr nuevos objetivos.
           Cuando me encuentro cara a cara con un problema, trato de solucionarlo yo mismo, pero no me da vergüenza pedir ayuda a los demás.<br/>
           Mis objetivos para el futuro son unirme a un gran grupo de desarrolladores, aprender junto a ellos y trabajar de forma remota mientras viajo si es posible.
         </p>
         }
          <img className='programmergif' src={programmer} alt='no hay nada'/>
      </div>
  )
}