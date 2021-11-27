import './footer.css'
import logoGitHub from '../imgs/logoGitHub.png'
import logoLinkedIn from '../imgs/logoLinkedIn.png'
import logoGmail from '../imgs/logoGmail.png'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'


export default function Footer(){
    return(
       <Container >
        <div className='footer'>
          <div className='espaciologos'>
            <Grid container
              direction="row"
              justifyContent="space-evenly"
              alignItems="center"
            >
              <img className='logoGitHub' src={logoGitHub} alt='no hay nada'/>         
                <h4 className='githubtext'>
                 <a href='https://github.com/JustBecerra'>
                  GitHub
                 </a>
                </h4>
              <img className='logoLinkedIn' src={logoLinkedIn} alt='no hay nada'/>  
                  <h4 className='linkedtext'>
                    <a href='https://www.linkedin.com/in/justo-juan-becerra-14868a1b4/'>
                    LinkedIn
                    </a>
                  </h4>
                
                <img className='logoGmail' src={logoGmail} alt='no hay nada'/>
                <h4 >
                  justj.becerra@gmail.com
                </h4>
            </Grid>
          </div>
          {/* <h1>Espero que te haya gustado!</h1> */}
        </div>
        </Container>
    )
}