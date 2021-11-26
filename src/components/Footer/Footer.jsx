import './footer.css'
import logoGitHub from '../imgs/logoGitHub.png'
import logoLinkedIn from '../imgs/logoLinkedIn.png'

export default function Footer(){
    return(
        <div className='footer'>
          <div  className='textito'>
            <h2>want to reach out? here you go</h2>
          </div>
          <div className='cajalogos'>
            <a href='https://github.com/JustBecerra'>
                GitHub
                <img className='logos' src={logoGitHub} alt='no hay nada'/>
            </a>
            <a href='https://www.linkedin.com/in/justo-juan-becerra-14868a1b4/'>
                LinkedIn
                <img className='logos' src={logoLinkedIn} alt='no hay nada'/>
            </a>
          </div>
        </div>
    )
}