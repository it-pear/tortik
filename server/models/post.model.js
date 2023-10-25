const {Schema, model} = require('mongoose')

const postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  oldprice: {
    type: Number,
    required: false
  },
  category: {
    type: String,
    required: true
  },
  categoryname: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  views: {
    type: Number,
    default: 0
  },
  imageUrl: String,
  images: {
    type: Array,
    required: true
  },
  recommend: {
    type: Boolean,
    required: true
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'comments'
    }
  ]
})

module.exports = model('posts', postSchema)
