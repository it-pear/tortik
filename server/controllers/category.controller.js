const { category } = require('../app')
const Category = require('../models/category.model')


module.exports.create = async (req, res) => {
  const category = new Category({
    title: req.body.title,
    slug: req.body.slug,
    imageUrl: `/${req.file.filename}`
  })

  try {
    await category.save()
    res.status(201).json(category)
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.getAll = async (req, res) => {
  try {
    const categories = await Category.find().sort({date: -1})
    res.json(categories)
  } catch (e) {
    res.status(500).json(e)
  }
  
}

module.exports.getById = async (req, res) => {
  try {
    await Category.findById(req.params.id).populate('comments').exec((error, category) => {
      res.json(category)
    })
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.update = async (req, res) => {
  const $set = {
    title: req.body.title
  }
  try {
    const category = await Category.findOneAndUpdate({
      _id: req.params.id
    }, {$set}, {new: true})
    res.json(category)
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.remove = async (req, res) => {
  try {
    await Category.deleteOne({_id: req.params.id})
    res.json({message: 'Категория удален'})
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.addView = async (req, res) => {
  const $set = {
    views: ++req.body.views
  }
  try {
    await Category.findOneAndUpdate({_id: req.params.id}, {$set})
    res.status(204).json()
  } catch (e) {
    res.status(500).json(e)
  }
}


module.exports.getAnalytics = async (req, res) => {
  try {
    const categories = await Category.find()

    const labels = categories.map(category => category.title)

    const json = {
      comments: {
        labels,
        data: categories.map(category => category.comments.length)
      },
      views: {
        labels, 
        data: categories.map(category => category.views)
      }
    }
    res.json(json)
  } catch (e) {
    res.status(500).json(e)
  }

}