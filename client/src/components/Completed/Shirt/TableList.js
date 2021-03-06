import { useContext, useEffect } from 'react'

import Edit from './Edit'
import Delete from './Delete'

import Alert from '@mui/material/Alert'
import Stack from '@mui/material/Stack'

import ShirtContext from '../../../context/Shirt/ShirtContext'

import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material'

export default function TableList() {
  const shirtCtx = useContext(ShirtContext)

  const { shirts, loadShirts, msg, resetMsg } = shirtCtx

  useEffect(() => {
    const fetchShirts = () => {
      return loadShirts()
    }

    fetchShirts(loadShirts)
  }, [])

  return (
    <>
      {msg ? (
        <Stack sx={{ width: '100%', my: 2 }} spacing={2}>
          <Alert
            onClose={() => {
              resetMsg()
            }}
            severity="info"
          >
            {msg}
          </Alert>
        </Stack>
      ) : null}

      <TableContainer component={Paper}>
        <Table sx={{ maxWidth: 'lg' }}>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#f1f1f1' }}>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Description</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">-</TableCell>
              <TableCell align="center">-</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {shirts.data?.map((item) => (
              <TableRow key={item._id}>
                <TableCell align="center">{item.name}</TableCell>
                <TableCell align="center">{item.description}</TableCell>
                <TableCell align="center">${item.price}</TableCell>

                <TableCell align="center">
                  <Edit uuid={item._id} />
                </TableCell>

                <TableCell align="center">
                  <Delete uuid={item._id} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
