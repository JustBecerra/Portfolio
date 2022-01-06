import './footer.css'
import logoGitHub from '../imgs/logoGitHub.png'
import logoLinkedIn from '../imgs/logoLinkedIn.png'
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
                       
                <h4 className='githubtext'>
                 <a href='https://github.com/JustBecerra'>
                  <img className='logoGitHub' src={logoGitHub} alt='no hay nada'/>
                 </a>
                </h4>
                
                  <h4 className='linkedtext'>
                    <a href='https://www.linkedin.com/in/justo-juan-becerra-14868a1b4/'>
                      <img className='logoLinkedIn' src={logoLinkedIn} alt='no hay nada'/>
                    </a>
                  </h4>
                <h4 className='gmailtext'>
                  justj.becerra@gmail.com
                </h4>
            </Grid>
          </div>
        </div>
        </Container>
    )
}