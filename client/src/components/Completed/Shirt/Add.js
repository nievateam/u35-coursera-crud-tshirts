import { useState, useContext } from 'react'
import { Modal, Box, Button, TextField, Alert } from '@mui/material'
import ShirtContext from '../../../context/Shirt/ShirtContext'

export default function ModalShirt() {
  const [open, setOpen] = useState(false)
  const [msg, setMsg] = useState('')

  const shirtCtx = useContext(ShirtContext)
  const { addShirt } = shirtCtx

  const [shirt, setShirt] = useState({
    name: '',
    description: '',
    image: '',
    price: '',
  })

  const handleType = (evt) => {
    return setShirt({
      ...shirt,
      [evt.target.name]: evt.target.value,
    })
  }

  const handleAddShirt = async (evt) => {
    evt.preventDefault()

    const result = await addShirt(shirt)

    if (result) {
      return setMsg(result)
    }

    setMsg('')

    return handleClose()
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
            Add article
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
                label="Name"
                sx={{ pb: 2 }}
                name="name"
                onChange={handleType}
              />
              <TextField
                required
                fullWidth
                size="small"
                label="Description"
                sx={{ pb: 2 }}
                name="description"
                onChange={handleType}
              />
              <TextField
                required
                fullWidth
                type="url"
                size="small"
                label="Image URL"
                sx={{ pb: 2 }}
                name="image"
                onChange={handleType}
              />
              <TextField
                required
                fullWidth
                size="small"
                label="Price"
                sx={{ pb: 2 }}
                name="price"
                onChange={handleType}
              />

              <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                <Button
                  type="submit"
                  variant="contained"
                  size="small"
                  color="success"
                >
                  Add
                </Button>
              </Box>
            </form>
            {msg ? (
              <Alert sx={{ mt: 4 }} severity="info">
                {msg}
              </Alert>
            ) : null}
          </Box>
        </Modal>
      </>
    </>
  )
}
