import ShirtState from './context/Shirt/ShirtState'

import TableList from './components/Shirt/TableList'
import Add from './components/Shirt/Add'

import { AppBar, Box, Container, Grid } from '@mui/material'

function App() {
  return (
    <ShirtState>
      <AppBar position="relative" align="center">
        <h1>CRUD</h1>
      </AppBar>

      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 4,
            pb: 2,
          }}
        >
          <Container maxWidth="lg">
            <Add />
          </Container>
        </Box>

        <Container maxWidth="lg">
          <Grid container sx={{ pt: 4 }}>
            <TableList />
          </Grid>
        </Container>
      </main>
    </ShirtState>
  )
}

export default App
