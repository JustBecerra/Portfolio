import './techs.css'
import { Box } from '@material-ui/core'
import { ListItem } from '@material-ui/core'

export default function Techs(){
    return(
        <div className='list'>
            <h1 className='techtitle'>Tech</h1>
            <Box
            sx={{
                display: 'grid',
                gap:1,
                gridTemplateColumns: 'repeat(3, 1fr)',
                justifyContent: 'space-between'
              }}
              className='box'
            >
                <ListItem className='singletech'>JavaScript</ListItem>
                <ListItem className='singletech'>TypeScript</ListItem>
                <ListItem className='singletech'>ReactJS</ListItem>
                <ListItem className='singletech'>Redux</ListItem>
                <ListItem className='singletech'>MongoDB</ListItem>
                <ListItem className='singletech'>NodeJS</ListItem>
                <ListItem className='singletech'>WebSocket</ListItem>
                <ListItem className='singletech'>Express</ListItem>
                <ListItem className='singletech'>PostgresSQL</ListItem>
                <ListItem className='singletech'>Sequelize</ListItem>
                <ListItem className='singletech'>HTML5</ListItem>
                <ListItem className='singletech'>CSS</ListItem>
            </Box>
        </div>
    )
}