import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'

function BoardBar() {
  const theme = useTheme()

  return (
    <div>
      <Box
        sx={{
          bgcolor: '#27ae60',
          height: '200px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'

        }}>
        <Box sx={{ textAlign: 'center', color: 'white' }}>
          <Typography variant="h4"
            sx={{
              fontSize: '30px',
              fontWeight: 500,
              [theme.breakpoints.down('sm')]: {
                fontSize: '22px'
              }
            }}>
          A joke a day keeps the doctor away
          </Typography>
          <Typography variant="body1"
            sx={{
              mt: '10px',
              fontSize: '14px',
              [theme.breakpoints.down('sm')]: {
                mt: '20px'
              }
            }}>
            If you joke wrong way, your teeth have to pay, (Serious)
          </Typography>
        </Box>
      </Box>
    </div>
  )
}

export default BoardBar