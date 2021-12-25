const { order } = require('../app')
const Order = require('../models/order.model')


module.exports.create = async (req, res) => {
  
  const order = new Order({
    name: req.body.name,
    adres: req.body.adres,
    phone: req.body.phone,
    cartprice: req.body.cartprice,
    posts: req.body.posts
  })
  const newreq = await order.posts
  console.log(newreq)

  try {
    await order.save()
    res.status(201).json(order)
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.getAll = async (req, res) => {
  try {
    const orders = await Order.find().sort({date: -1})
    res.json(orders)
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.getById = async (req, res) => {
  try {
    await Order.findById(req.params.id).populate('comments').exec((error, order) => {
      res.json(order)
    })
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.update = async (req, res) => {
  const $set = {
    text: req.body.text
  }
  try {
    const order = await Order.findOneAndUpdate({
      _id: req.params.id
    }, {$set}, {new: true})
    res.json(order)
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.remove = async (req, res) => {
  try {
    await Order.deleteOne({_id: req.params.id})
    res.json({message: 'Заказ удален'})
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.addView = async (req, res) => {
  const $set = {
    views: ++req.body.views
  }
  try {
    await Order.findOneAndUpdate({_id: req.params.id}, {$set})
    res.status(204).json()
  } catch (e) {
    res.status(500).json(e)
  }
}


