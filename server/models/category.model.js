const {Schema, model} = require('mongoose')

const categorySchema = new Schema({
  title: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  imageUrl: String
  // comments: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: 'comments'
  //   }
  // ]
})

module.exports = model('category', categorySchema)
