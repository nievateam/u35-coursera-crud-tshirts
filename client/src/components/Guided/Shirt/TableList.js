import { useContext, useEffect } from 'react'

import Edit from './Edit'
import Delete from './Delete'

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
  const { shirts, loadShirts } = shirtCtx

  useEffect(() => {
    const fetchShirts = () => {

      return loadShirts()
    }

    fetchShirts(loadShirts)
  }, [])

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ maxWidth: 'lg' }}>
          <TableHead>
            <TableRow>
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
