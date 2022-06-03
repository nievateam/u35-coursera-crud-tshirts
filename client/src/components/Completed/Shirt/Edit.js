import { useState, useContext } from 'react'
import PropTypes from 'prop-types'

import ShirtContext from '../../../context/Shirt/ShirtContext'

import { Link, Modal, Box, TextField, Button } from '@mui/material'

export default function Edit({ uuid }) {
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
          handleOnClick(uuid)
        }}
      >
        Update
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
                      label="Name"
                      sx={{ pb: 2 }}
                      name="name"
                      defaultValue={item.name}
                      onChange={handleOnTyping}
                    />
                    <TextField
                      required
                      fullWidth
                      size="small"
                      label="Description"
                      sx={{ pb: 2 }}
                      name="description"
                      defaultValue={item.description}
                      onChange={handleOnTyping}
                    />
                    <TextField
                      required
                      fullWidth
                      size="small"
                      label="Image URL"
                      sx={{ pb: 2 }}
                      name="image"
                      defaultValue={item.image}
                      onChange={handleOnTyping}
                    />
                    <TextField
                      required
                      fullWidth
                      size="small"
                      label="Price"
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
                Cancel
              </Button>

              <Button
                type="submit"
                variant="contained"
                size="small"
                color="info"
                sx={{ m: 2 }}
              >
                Update
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </>
  )
}

Edit.propTypes = {
  uuid: PropTypes.String,
}
