//--Adding a two dependencies, "express" and "./routes"--//
//-- const connection = require("./config/connection") is importing a module that sets up a database connection--//

const express = require('express');
const routes = require('./routes');

//--import sequelize connection--//
//-- constant variable app. process.env.PORT || 3001 sets the server's port to the environment variable--//

const connection = require("./config/connection")

const app = express();
const PORT = process.env.PORT || 3001;
//-- Adding express.json() and express.urlencoded() functions are used to set up middleware for parsing incoming requests that have a JSON or URL-encoded body--//
//-- Adding app.use(routes) to define the endpoints and corresponding handlers for the server--//
//-- Adding connection.sync() method is called to synchronize the database models--//
//-- Adding app.listen() method, which binds to the specified port and starts accepting incoming requests--//

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
connection.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
})
