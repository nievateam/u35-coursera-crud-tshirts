const { validationResult } = require('express-validator')

const Shirt = require('./../models/Shirt')

exports.shirt_list_get = async (req, res) => {

  const getAllShirts = await Shirt.find({})

  res.json({
    msg: 'List of articles received.',
    data: getAllShirts,
  })
}

exports.shirt_create_post = async (req, res) => {

  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(400).json({
      msg: errors.array(),
    })
  }

  const { name, description, image, price } = req.body

  try {
    
    const newShirt = new Shirt({ name, description, image, price })

    await newShirt.save()

    res.json({
      msg: 'A new article has been created.',
    })

  } catch (error) {
    res.json({
      msg: 'There was an error creating the article.',
    })
  }
}

exports.shirt_update_put = async (req, res) => {
  
  const { id } = req.params

  const { name, description, image, price } = req.body

  try {
    
    await Shirt.findOneAndUpdate(
      { _id: id },
      { name, description, image, price },
      { returnOriginal: false }
    )
    res.json({
      msg: 'The article has been updated.',
    })

  } catch (error) {

    res.json({
      msg: 'There was an error updating the article.',
    })
  }
}

exports.shirt_delete = async (req, res) => {

  const { id } = req.params

  await Shirt.deleteOne({ _id: id })
  
  res.json({
    msg: 'The article was deleted correctly.',
  })
}
