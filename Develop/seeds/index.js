//-- Adding a function seedAll() that seeds the database with different fuctions: seedCategories(), seedProducts(), seedTags(), and seedProductTags()--//
//-- The sequelize variable is imported from ../config/connection. This allows the script to connect to the database using Sequelize--//
//-- The seedAll() function first calls sequelize.sync({ force: true }), which synchronizes the database--//
//-- After syncing the database, the function calls each of the four seed functions one after the other using await--//
//-- Finally, the process.exit(0) method is called to exit the Node.js process, which stops the script from running indefinitely.--//

const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');
const seedTags = require('./tag-seeds');
const seedProductTags = require('./product-tag-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedProducts();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  await seedTags();
  console.log('\n----- TAGS SEEDED -----\n');

  await seedProductTags();
  console.log('\n----- PRODUCT TAGS SEEDED -----\n');

  process.exit(0);
};

seedAll();
