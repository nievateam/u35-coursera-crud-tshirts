

import TableList from './Shirt/TableList'
import Add from './Shirt/Add'

import { Grid } from '@mui/material'

function Guided() {
  return (
    
      <>
          <Grid container sx={{ pt: 4 }}>
            <TableList />
          </Grid>
          <Grid container sx={{ pt: 4 }}>
            <Add />
          </Grid>
      </>  
  )
}

export default Guided
