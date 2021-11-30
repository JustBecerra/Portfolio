import './techs.css'
import { Box } from '@material-ui/core'
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
        <div >
            {translate === false ?
            <h1 className='techtitle'>
                Technologies
            </h1>
            :
            <h1 className='techtitle'>
                Tecnologias
            </h1>
            }
            
            <img className='luztech' src={luztech} alt='nada'/>
            
            <Box
            sx={{
                display: 'grid',
                width:600,
                gap:1,
                gridTemplateColumns: 'repeat(3, 1fr)',
              }}
              className='box'
            >
                <ListItem className='singletech'>
                    JavaScript
                    <img className='jslogo' src={jslogo} alt='nada'/>    
                </ListItem>
                <ListItem className='singletech'>
                    TypeScript
                    <img className='tslogo' src={tslogo} alt='nada'/>
                </ListItem>
                <ListItem className='singletech'>
                    ReactJS
                    <img className='htmllogo' src={reactlogo} alt='nada'/>
                </ListItem>
                <ListItem className='singletech'>
                    Redux
                    <img className='reduxlogo' src={reduxlogo} alt='nada'/>
                </ListItem>
                <ListItem className='singletech'>
                    MongoDB
                    <img className='mongologo' src={mongologo} alt='nada'/>
                </ListItem>
                <ListItem className='singletech'>
                    NodeJS
                    <img className='htmllogo' src={nodelogo} alt='nada'/>    
                </ListItem>
                <ListItem className='singletech'>
                    WebSocket
                    <img className='socketlogo' src={socketlogo} alt='nada'/>    
                </ListItem>
                <ListItem className='singletech'>
                    Express
                    <img className='expresslogo' src={expresslogo} alt='nada'/>    
                </ListItem>
                <ListItem className='singletech'>
                    PostgresSQL
                    <img className='socketlogo' src={postgreslogo} alt='nada'/>
                </ListItem>
                <ListItem className='singletech'>
                    Sequelize
                    <img className='jslogo' src={sequelizelogo} alt='nada'/>    
                </ListItem>
                <ListItem className='singletech'>
                    HTML5
                    <img className='htmllogo' src={htmllogo} alt='nada'/>    
                </ListItem>
                <ListItem className='singletech'>
                    CSS
                    <img className='csslogo' src={csslogo} alt='nada'/>    
                </ListItem>
            </Box>
        </div>
    )
}