const router = require('express').Router();
const sequelize = require('sequelize');
const { Category, Product } = require('../../models');
const { query } = require('express');

// The `/api/categories` endpoint


router.get('/', async(req, res) => {
  // find all categories

  const categories= await Category.findAll()
  
  const result=await JSON.stringify(categories)
  res.send(result)
  // be sure to include its associated Products
});

router.get('/:id', async(req, res) => {
  // find one category by its `id` value
  const categories=await Category.findByPk(req.params.id)
  const result=await JSON.stringify(categories)
  res.send(result)
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
