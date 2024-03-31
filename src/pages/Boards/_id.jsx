import Container from '@mui/material/Container'
import AppBars from '~/components/AppBar/AppBar'
import BoardContent from './BoardContent/BoardContent'
import Footer from '~/components/Footer/Footer'
import BoardBar from './BoardBar/BoardBar'

function Board() {

  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <AppBars/>
      <BoardBar/>
      <BoardContent/>
      <Footer/>
    </Container>
  )
}

export default Board
