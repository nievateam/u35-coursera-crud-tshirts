import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Link as RouterLink } from 'react-router-dom'

export default function Header() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              T-Shirts
            </Typography>

            <Button to="/" variant="" component={RouterLink}>
              Guided
            </Button>

            <Button to="/develop" variant="" component={RouterLink}>
              Develop
            </Button>

            <Button to="/project" variant="" component={RouterLink}>
              Project
            </Button>

            <Button to="/completed" variant="" component={RouterLink}>
              Completed
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}
