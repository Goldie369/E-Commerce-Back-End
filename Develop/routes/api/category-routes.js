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


//-- Adding a GET requests to the /api/categories/:id endpoint--//
//-- the code uses Sequelize to query the Category model and retrieve the category with the corresponding id from the database--//
//-- JSON.stringify() method and sends the response back to the user with res.send()--//

router.get('/:id', async(req, res) => {
  // find one category by its `id` value
  const categories=await Category.findByPk(req.params.id)
  const result=await JSON.stringify(categories)
  res.send(result)
  // be sure to include its associated Products
});


//-- Same comment like the one above just this is for the POST route--//

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
  router.put('/:id', async (req, res) => {
  try {
    // find the category by id
    const category = await Category.findByPk(req.params.id);

    if (!category) {
      return res.status(404).send('Category not found');
    }

    // update the category with the new data
    const updatedCategory = await category.update(req.body);

    // send the updated category back to the client
    res.json(updatedCategory);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    // find the category by id
    const category = await Category.findByPk(req.params.id);

    if (!category) {
      return res.status(404).send('Category not found');
    }

    // delete the category
    await category.destroy();

    // send a success response back to the client
    res.send('Category deleted successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
