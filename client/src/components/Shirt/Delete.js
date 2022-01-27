import { useState, useContext } from 'react'

import ShirtContext from '../../context/Shirt/ShirtContext'

import { Link, Modal, Box, Button } from '@mui/material'

export default function Delete(props) {
  const [open, setOpen] = useState(false)

  const shirtCtx = useContext(ShirtContext)
  const { msg, deleteShirt } = shirtCtx

  const handleDelete = (id) => {
    deleteShirt(id)

    handleClose()
  }

  console.log(msg)

  const handleClose = () => setOpen(false)
  const handleOpen = () => setOpen(true)

  return (
    <>
      <Link
        underline="hover"
        component="button"
        onClick={() => {
          handleOpen()
        }}
      >
        Eliminar
      </Link>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '1px solid #000',
            borderRadius: 2,
            boxShadow: 5,
            p: 1,
          }}
        >
          <Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <p>Esta seguro que desea eliminar este registro ?</p>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Button
                variant="contained"
                size="small"
                color="secondary"
                sx={{ m: 2 }}
                onClick={handleClose}
              >
                Cancelar
              </Button>

              <Button
                type="submit"
                variant="contained"
                size="small"
                color="success"
                sx={{ m: 2 }}
                onClick={() => {
                  handleDelete(props.uuid)
                }}
              >
                Aceptar
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  )
}
