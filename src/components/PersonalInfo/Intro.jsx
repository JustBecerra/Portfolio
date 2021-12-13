import './intro.css'
import programmer from '../imgs/programmer.gif'
import info from '../imgs/infologo.png'

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
          <img src={info} className='infologo' alt='no hay nada'/>
          {translate.translate === false ? 
          <h3 className='born'>
            Age
          </h3>
          :
          <h3 className='born'>
            Edad
          </h3>
          }
          {translate.translate === false ? 
          <h3 className='bornAnswer'>
            : 21
          </h3>
          : 
          <h3 className='bornAnswerES'>
          : 21
          </h3>
          }
          
          {translate.translate === false ?
          <h3 className='nationality'> 
            Nationality
          </h3>
          :
          <h3 className='nationality'> 
            Nacionalidad
          </h3>
          }
          {translate.translate === false ?
          <h3 className='nationalityAnswer'> 
            : Argentina
          </h3>
          :
          <h3 className='nationalityAnswerES'> 
            : Argentina
          </h3>
          }  
          <h3 className='hobbies'> 
            Hobbies
          </h3>
          {translate.translate === false ?
          <h3 className='hobbiesAnswer'> 
            : Gym and history fan
          </h3>
          :
          <h3 className='hobbiesAnswer'> 
            : Gimnasio y fan de historia
          </h3>
          }
          
          <div className='Pbackground'>
          {translate.translate === false ? 
          <p className='paragraph'>
            I'm a Junior Full Stack Web Developer specialized in ReactJS for the Front-End and NodeJs for the Back-End.<br/>
            I graduated from SoyHenry's Bootcamp after 800+ hours of programming.
            Hardworker, team player, precise and stoic.<br/>
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