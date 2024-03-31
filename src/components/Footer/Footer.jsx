import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'


function Footer() {
  const theme = useTheme()

  return (
    <Box
      sx={{
        borderTop: '1px solid #bdc3c7',
        height: '120px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
          height: '250px'
        }
      }}>
      <Box>
        <Typography variant="body1"
          sx={{
            textAlign:'center',
            color: '#95a5a6',
            fontSize: '14px',
            width: 900,
            [theme.breakpoints.down('sm')]: {
              width: 320
            }
          }}> This website was created as part of the Hisolutions program.
        The material on this website is provided for information only
        general information and do not configure any configuration.
        HLS does not warrant the accuracy of any particular statement and does not
        responsible for dealing with any loss or damage that may be discovered
         in reliance on the information contained on this site.
        </Typography>
        <Typography variant="body1"
          sx={{
            textAlign:'center',
            fontSize: '14px',
            mt: '10px'

          }}> Copyright 2021 HLS
        </Typography>
      </Box>
    </Box>
  )
}

export default Footer