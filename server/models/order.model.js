const {Schema, model} = require('mongoose')

const orderSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  adres: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  cartprice: {
    type: Number,
    required: true
  },
  posts: [
    {
      type: Object 
    }
  ]
})

module.exports = model('orders', orderSchema)
