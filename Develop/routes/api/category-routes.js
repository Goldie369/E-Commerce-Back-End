//-- Adding a express router--//
//-- The router handles GET requests to the /api/categories endpoint--//
//-- When the router receives a GET request to this endpoint, it executes an function that does the following:
//-- Calls the findAll() method on the Category to retrieve all categories from the database--//

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

router.post('/', async(req, res) => {
  console.log(req.body)
  const category= await Category.create({category_name:req.body.category_name})
  if (category){
    res.send("succsess")
  // create a new category
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
