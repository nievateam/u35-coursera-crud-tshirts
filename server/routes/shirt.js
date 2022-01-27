const express = require('express')
const router = express.Router()

const { check } = require('express-validator')

const shirt_controller = require('../controllers/shirtController')

router.get('/', shirt_controller.shirt_list_get)
// middlewares
router.post(
  '/create',
  [
    check('name', `You need to specify name.`).notEmpty(),
    check('description',`You need to specify description.`).notEmpty(),
    check('image',`You need to specify a valid URL.`).isURL(),
    check('price',`You need to specify a price.`).notEmpty(),
  ],
  shirt_controller.shirt_create_post
)

router.put('/:id/update', shirt_controller.shirt_update_put)
router.delete('/:id/delete', shirt_controller.shirt_delete)

module.exports = router
