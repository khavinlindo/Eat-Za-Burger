 
 var express = require("express");

 var PORT = process.env.PORT || 3000;

 var app = express();

 //For making api calls straight from html/handlebars, not needing to do it in public/main.js file
 var methodOverride = require("method-override");

 // Serve static content for the app from the "public" directory in the application directory.
 app.use(express.static("public"));

 // Parse request body as JSON
 app.use(express.urlencoded({ extended: true }));
 app.use(express.json());

 app.use(methodOverride("_method"));


 // Set Handlebars.
 var exphbs = require("express-handlebars");

 app.engine("handlebars", exphbs({ defaultLayout: "main" }));
 app.set("view engine", "handlebars");

 //Import routes and give the server access to them.
 var routes = require("./routes_controllers/routes.js");

 app.use(routes);


 app.listen(PORT, function() {
     console.log("App now listening at localhost:" + PORT);
 })
 