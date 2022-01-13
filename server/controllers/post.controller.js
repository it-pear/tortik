const { post } = require('../app')
const Post = require('../models/post.model')

debugger
module.exports.create = async (req, res) => {
  const post = new Post({
    title: req.body.title,
    text: req.body.text,
    price: req.body.price,
    category: req.body.category,
    categoryname: req.body.categoryname,
    imageUrl: `/${req.file.filename}`
  })

  // console.log(req.body.title)
  try {
    await post.save()
    res.status(201).json(post)
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.getAll = async (req, res) => {
  try {
    const posts = await Post.find().sort({date: -1})
    res.json(posts)
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.getById = async (req, res) => {
  try {
    await Post.findById(req.params.id).populate('comments').exec((error, post) => {
      res.json(post)
    })
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.update = async (req, res) => {
  const $set = {
    text: req.body.text,
    // imageUrl: `/lalalalal`
    imageUrl: `/${req?.file?.filename}`
  }
  try {
    const post = await Post.findOneAndUpdate({
      _id: req.params.id
    }, {$set}, {new: true})
    res.json(post)
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.updateImage = async (req, res) => {
  const $set = {
    imageUrl: req.body.imageUrl
  }
  try {
    const post = await Post.findOneAndUpdate({
      _id: req.params.id
    }, {$set}, {new: true})
    res.json(post)
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.remove = async (req, res) => {
  try {
    await Post.deleteOne({_id: req.params.id})
    res.json({message: 'Пост удален'})
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.addView = async (req, res) => {
  const $set = {
    views: ++req.body.views
  }
  try {
    await Post.findOneAndUpdate({_id: req.params.id}, {$set})
    res.status(204).json()
  } catch (e) {
    res.status(500).json(e)
  }
}


module.exports.getAnalytics = async (req, res) => {
  try {
    const posts = await Post.find()

    const labels = posts.map(post => post.title)

    const json = {
      comments: {
        labels,
        data: posts.map(post => post.comments.length)
      },
      views: {
        labels, 
        data: posts.map(post => post.views)
      }
    }
    res.json(json)
  } catch (e) {
    res.status(500).json(e)
  }

}