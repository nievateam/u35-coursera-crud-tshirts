

import TableList from './Shirt/TableList'
import Add from './Shirt/Add'

import { AppBar, Box, Container, Grid } from '@mui/material'

function App() {
  return (
    

        <Container maxWidth="lg">
          <Grid container sx={{ pt: 4 }}>
            <TableList />
          </Grid>
          <Grid container sx={{ pt: 4 }}>
            <Add />
          </Grid>
        </Container>

    
  )
}

export default App
