import { useEffect, useState } from 'react'
import { jokeDatas } from '~/api/mock-data'
import Cookies from 'js-cookie'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'

function BoardContent() {
  const theme = useTheme()

  const [jokes, setJokes] = useState(jokeDatas)
  const [currentJokeIndex, setCurrentJokeIndex] = useState(0)
  const [message, setMessage] = useState(false)
  const [voted, setVoted] = useState(false)

  useEffect(() => {
    const hasVoted = Cookies.get(`joke_id_${jokes[currentJokeIndex]._id}_voted`)
    setVoted(hasVoted)
  }, [currentJokeIndex, jokes])

  const handleVote = (index) => {

    const updatedJokes = [...jokes]
    const currentJoke = updatedJokes[currentJokeIndex]

    if (index === 'like') {
      currentJoke.likes++
    } else if (index === 'dislike') {
      currentJoke.dislikes++
    }
    //cookies
    Cookies.set(`joke_id_${currentJoke._id}_voted`, true)

    // setCurrentJokeIndex(currentJokeIndex + 1)
    if (currentJokeIndex === jokes.length - 1) {
      setMessage(true)
    } else {
      setCurrentJokeIndex(currentJokeIndex + 1)
    }

    setJokes(updatedJokes)
    setVoted(true)
  }
  return (
    <Box
      sx={{
        width: '100%',
        height: 'calc(100vh - 70px - 320px)',
        display:' flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
          height: 'calc(100vh - 70px - 200px)'
        }
      }}>
      <Box
        sx={{
          width: '900px',
          [theme.breakpoints.down('sm')]: {
            width: '350px'
          } }}>
        {message ?
          (<Typography variant="body1"
            sx={{
              textAlign:'center',
              color: '#666666'
            }}> That is all the jokes for today! Come back another day!
          </Typography>) :
          (
            <Box>
              <Typography variant="body1" sx={{ textAlign:'justify', color: '#666666' }}>
                {jokes[currentJokeIndex].joke}
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: '50px', gap: 3 }}>
                <Button
                  sx={{
                    color: 'white',
                    '&.MuiButton-root': {
                      borderRadius: 'unset',
                      textTransform: 'unset',
                      boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.8)',
                      p: '8px 60px',
                      bgcolor: 'primary.main',
                      transition: 'background-color 0.5s',
                      '&:hover' : {
                        backgroundColor: '#3498db'
                      },
                      [theme.breakpoints.down('sm')]: {
                        p: '8px 20px'
                      }
                    }
                  }}
                  onClick={() => handleVote('like')} disabled={voted}>This is Funny!</Button>
                {/* //// */}
                <Button
                  sx={{
                    color: 'white',
                    '&.MuiButton-root': {
                      borderRadius: 'unset',
                      textTransform: 'unset',
                      boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.8)',
                      p: '8px 60px',
                      bgcolor: '#27ae60',
                      transition: 'background-color 0.5s',
                      '&:hover' : {
                        backgroundColor: '#2ecc71'
                      },
                      [theme.breakpoints.down('sm')]: {
                        p: '8px 20px'
                      }
                    }
                  }}
                  onClick={() => handleVote('dislike')} disabled={voted}>This is not Funny</Button>
              </Box>
            </Box>
          )}
      </Box>
    </Box>
  )
}

export default BoardContent