import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import Menu from '@mui/material/Menu'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import Settings from '@mui/icons-material/Settings'
import Logout from '@mui/icons-material/Logout'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import { useTheme } from '@mui/material/styles'

function AppBars() {
  const theme = useTheme()

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box sx={{ flexGrow: 1, height: '70px' }}>
      <AppBar
        sx={{
          bgcolor: 'white',
          '&.MuiPaper-elevation' :{ boxShadow: 'none', position: 'unset' },
          p: '0 150px',
          [theme.breakpoints.down('sm')]: {
            p: '5px 20px'
          }
        }}>
        <Toolbar
          sx={{ [theme.breakpoints.down('sm')]: {
            pl: 0
          } }}>
          <Box sx={{ flexGrow: 1 }}>
            <Avatar
              src='/static/images/logo.png'
              sx={{
                width: 60,
                height: 60,
                bgcolor:'#ecf0f1',
                color: '#16a085'
              }}></Avatar>
          </Box>
          <Box sx={{ display: 'flex' }}>
            <Box sx={{ mr: 1, display: 'flex', flexDirection: 'column', alignItems: 'end', justifyContent: 'center' }}>
              <Typography variant="body1" sx={{ color: '#7f8c8d', fontSize: '12px', fontStyle: 'italic' }}>
                Handicrafted by
              </Typography>
              <Typography variant="body1" sx={{ color: 'black', fontSize: '12px' }}>
                Jim HLS
              </Typography>
            </Box>
            <Tooltip title="Profile">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ padding: 0 }}
                aria-controls={open ? 'basic-menu-profiles' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                <Avatar
                  src='https://cdn.pixabay.com/photo/2013/12/26/09/12/flower-233838_1280.jpg'
                  sx={{
                    width: 50,
                    height: 50,
                    bgcolor:'#ecf0f1',
                    color: '#16a085'
                  }}></Avatar>
              </IconButton>
            </Tooltip>
          </Box>
          <Menu
            id="basic-menu-profiles"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button-profiles'
            }}
          >
            <MenuItem>
              <Avatar sx={{ width: 28, height: 28, mr: 2 }} /> Profile
            </MenuItem>
            <MenuItem>
              <Avatar sx={{ width: 28, height: 28, mr: 2 }} /> My account
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Settings
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default AppBars