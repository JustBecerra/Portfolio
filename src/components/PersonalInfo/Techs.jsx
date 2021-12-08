import './techs.css'
import { Box, Grid, withWidth } from '@material-ui/core'
import { ListItem } from '@material-ui/core'
import jslogo from '../imgs/javascriptlogo.png'
import tslogo from '../imgs/typescriptlogo.png'
import reactlogo from '../imgs/reactlogo.png'
import reduxlogo from '../imgs/reduxlogo.png'
import nodelogo from '../imgs/nodelogo.png'
import mongologo from '../imgs/mongologo.png'
import socketlogo from '../imgs/socketlogo.png'
import sequelizelogo from '../imgs/sequelizelogo.png'
import postgreslogo from '../imgs/postgreslogo.png'
import expresslogo from '../imgs/expresslogo.png'
import htmllogo from '../imgs/htmllogo.png'
import csslogo from '../imgs/csslogo.png'
import luztech from '../imgs/luztech.png'

export default function Techs(translate){
    return(
        <div className='grandiv'>
            {translate.translate === false ?
            <h1 className='techtitle'>
                Technologies
            </h1>
            :
            <h1 className='techtitle'>
                Tecnologias
            </h1>
            }
            
            {/* <img className='luztech' src={luztech} alt='nada'/> */}
            
            <Grid container
                display='flex'
                alignItems='center'
                justifyContent='center'
                rowSpacing={0}
                direction="row"
                lg={10}
                xs={12}
                className='centertech'
            >
            <Grid item container lg={10} xs={12} direction="row" >
                <Grid item lg={3} xs={3} className='singletech' >
                    <h4 className='techname'>
                      JavaScript
                    </h4>
                    <img className='logos' src={jslogo} alt='nada'/>    
                </Grid>
                <Grid item lg={3} xs={3} className='singletech'>
                    <h4 className='techname'>
                    TypeScript
                    </h4>
                    <img className='tslogo' src={tslogo} alt='nada'/>
                </Grid>
                <Grid item lg={3} xs={3} className='singletech'>
                    <h4 className='techname'>
                    ReactJS
                    </h4>
                    <img className='logos' src={reactlogo} alt='nada'/>
                </Grid>
                <Grid item lg={3} xs={3} className='singletech'>
                    <h4 className='techname'>
                    Redux
                    </h4>
                    <img className='logos' src={reduxlogo} alt='nada'/>
                </Grid>
            </Grid>
            <Grid item container lg={10} xs={12} direction="row" >
                <Grid item lg={3} xs={3} className='singletech'>
                    <h4 className='techname'>
                    MongoDB
                    </h4>
                    <img className='logos' src={mongologo} alt='nada'/>
                </Grid>
                <Grid item lg={3} xs={3} className='singletech'>
                    <h4 className='techname'>
                    NodeJS
                    </h4>
                    <img className='logos' src={nodelogo} alt='nada'/>    
                </Grid>
                <Grid item lg={3} xs={3} className='singletech'>
                    <h4 className='techname'>
                    WebSocket
                    </h4>
                    <img className='logos' src={socketlogo} alt='nada'/>    
                </Grid>
                <Grid item lg={3} xs={3} className='singletech'>
                    <h4 className='techname'>
                    Express
                    </h4>
                    <img className='expresslogo' src={expresslogo} alt='nada'/>    
                </Grid>
            </Grid>
            <Grid item container lg={10} xs={12} direction="row" >
                <Grid item lg={3} xs={3} className='singletech'>
                    <h4 className='techname'>
                    PostgresSQL
                    </h4>
                    <img className='logos' src={postgreslogo} alt='nada'/>
                </Grid>
                <Grid item lg={3} xs={3} className='singletech'>
                    <h4 className='techname'>
                    Sequelize
                    </h4>
                    <img className='logos' src={sequelizelogo} alt='nada'/>    
                  </Grid>
                  <Grid item lg={3} xs={3} className='singletech'>
                    <h4 className='techname'>
                    HTML5
                    </h4>
                    <img className='logos' src={htmllogo} alt='nada'/>    
                  </Grid>
                  <Grid item lg={3} xs={3} className='singletech'>
                    <h4 className='techname'>
                    CSS
                    </h4>
                    <img className='logos' src={csslogo} alt='nada'/>    
                  </Grid>
                </Grid>
           </Grid>
        </div>
    )
}