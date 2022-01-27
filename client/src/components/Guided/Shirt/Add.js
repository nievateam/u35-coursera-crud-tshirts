import { useState, useContext } from 'react'

import ShirtContext from '../../context/Shirt/ShirtContext'

import { Modal, Box, Button, TextField } from '@mui/material'

export default function ModalShirt() {
  const [open, setOpen] = useState(false)

  const shirtCtx = useContext(ShirtContext)
  const { addShirt } = shirtCtx

  const [shirt, setShirt] = useState({
    name: '',
    description: '',
    image: '',
    price: '',
  })

  const handleOnTyping = (evt) => {
    return setShirt({
      ...shirt,
      [evt.target.name]: evt.target.value,
    })
  }

  const handleAddShirt = async (evt) => {
    evt.preventDefault()

    await addShirt(shirt)

    handleClose()
  }

  const handleClose = () => setOpen(false)
  const handleOpen = () => setOpen(true)

  return (
    <>
      <>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            variant="contained"
            size="small"
            color="success"
            onClick={handleOpen}
          >
            Nuevo
          </Button>
        </Box>

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
              p: 4,
            }}
          >
            <form action="#" onSubmit={handleAddShirt}>
              <TextField
                required
                fullWidth
                size="small"
                label="Nombre del artículo"
                sx={{ pb: 2 }}
                name="name"
                onChange={handleOnTyping}
              />
              <TextField
                required
                fullWidth
                size="small"
                label="Descripción del artículo"
                sx={{ pb: 2 }}
                name="description"
                onChange={handleOnTyping}
              />
              <TextField
                required
                fullWidth
                type="url"
                size="small"
                label="URI de la imagen del artículo"
                sx={{ pb: 2 }}
                name="image"
                onChange={handleOnTyping}
              />
              <TextField
                required
                fullWidth
                size="small"
                label="Precio del artículo"
                sx={{ pb: 2 }}
                name="price"
                onChange={handleOnTyping}
              />

              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button
                  type="submit"
                  variant="contained"
                  size="small"
                  color="success"
                >
                  Agregar
                </Button>
              </Box>
            </form>
          </Box>
        </Modal>
      </>
    </>
  )
}
