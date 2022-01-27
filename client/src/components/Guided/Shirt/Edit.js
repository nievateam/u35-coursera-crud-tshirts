import { useState, useContext } from 'react'

import ShirtContext from '../../../context/Shirt/ShirtContext'

import { Link, Modal, Box, TextField, Button } from '@mui/material'

export default function Edit(props) {
  const shirtCtx = useContext(ShirtContext)
  const { shirts, editShirt } = shirtCtx

  const [open, setOpen] = useState(false)

  const [shirtToEdit, setShirtToEdit] = useState(null)
  const [id, setId] = useState(null)
  const [shirtEdited, setShirtEdited] = useState({})

  const handleOnClick = (uuid) => {
    setId(uuid)

    const filterShirt = shirts.data?.filter((item) => {
      return item._id === uuid
    })

    setShirtToEdit(filterShirt)

    handleOpen()
  }

  const handleOnTyping = (evt) => {
    return setShirtEdited({
      ...shirtEdited,
      [evt.target.name]: evt.target.value,
    })
  }

  const handleEditShirt = async (evt) => {
    evt.preventDefault()

    await editShirt(shirtEdited, id)

    handleClose()
  }

  const handleClose = () => setOpen(false)
  const handleOpen = () => setOpen(true)

  return (
    <>
      <Link
        underline="hover"
        component="button"
        onClick={() => {
          handleOnClick(props.uuid)
        }}
      >
        Actualizar
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
            p: 4,
          }}
        >
          <form action="#" onSubmit={handleEditShirt}>
            {shirtToEdit
              ? shirtToEdit.map((item) => (
                  <div key={item._id}>
                    <TextField
                      required
                      fullWidth
                      size="small"
                      label="Nombre del artículo"
                      sx={{ pb: 2 }}
                      name="name"
                      defaultValue={item.name}
                      onChange={handleOnTyping}
                    />
                    <TextField
                      required
                      fullWidth
                      size="small"
                      label="Descripción del artículo"
                      sx={{ pb: 2 }}
                      name="description"
                      defaultValue={item.description}
                      onChange={handleOnTyping}
                    />
                    <TextField
                      required
                      fullWidth
                      size="small"
                      label="URI de la imagen del artículo"
                      sx={{ pb: 2 }}
                      name="image"
                      defaultValue={item.image}
                      onChange={handleOnTyping}
                    />
                    <TextField
                      required
                      fullWidth
                      size="small"
                      label="Precio del artículo"
                      sx={{ pb: 2 }}
                      name="price"
                      defaultValue={item.price}
                      onChange={handleOnTyping}
                    />
                  </div>
                ))
              : ''}

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
                color="info"
                sx={{ m: 2 }}
              >
                Actualizar
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </>
  )
}
