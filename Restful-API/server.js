
// In this assignment, you will design and build your own RESTful API using Node.js and Express. The API should handle CRUD operations (Create, Read, Update, Delete) for a specific resource. You will create a sample resource directly in the server.js file instead of using a database.

// Deliverables:

// Set up a new Node.js project with Express. Create 
// Create the necessary routes for CRUD operations on your chosen resource.
// Define routes for handling GET, POST, PUT, and DELETE requests.
// Use Express's routing methods (app.get(), app.post(), app.put(), app.delete()) to define the routes.
// Implement route handlers and appropriate logic for each CRUD operation.
// Write the corresponding route handler functions for each route.
// Implement the logic to handle CRUD operations on your chosen resource.
// Use the Express req and res objects to access request data and send response data.
// Store the sample resource data directly in the server.js file since we are not using a traditional databse
// Define an array or object within the server.js file to serve as your sample resource data.
// Populate the array or object with sample resource data that represents your chosen resource.
// Handle HTTP requests and responses using Express.
// Implement error handling for invalid routes


const express = require("express");
const app = express();
const port = 4000; 

const tasks = [
    {
        id: 1,
        title: "Finish Assignemnt 6"
    },
    {
        id: 2,
        title: "Run 4 miles"
    },
    {
        id: 3,
        title: "Climb a V3"
    }
]

app.get("/", (req, res) => {
    res.send({tasks});
})



app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });