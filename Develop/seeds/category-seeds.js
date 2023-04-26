//-- Adding a function seedCategories() that seeds the Category model with some initial data--//
//-- Adding categoryData array contains objects that represent the data to be inserted into the Category table--//
//-- Adding seedCategories() function calls the bulkCreate() method on the Category model, which inserts multiple rows into the Category--//
//-- And Finally seedCategories() function is exported, which allows it to be imported and called by other files--//



const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Shirts',
  },
  {
    category_name: 'Shorts',
  },
  {
    category_name: 'Music',
  },
  {
    category_name: 'Hats',
  },
  {
    category_name: 'Shoes',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
