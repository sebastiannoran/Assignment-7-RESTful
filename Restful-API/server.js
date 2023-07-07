
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
        title: "Finish Assignemnt 6",
        status: false
    },
    {
        id: 2,
        title: "Run 4 miles",
        status: false
    },
    {
        id: 3,
        title: "Climb a V3",
        status: true
    }
]

app.get("/", (req, res) => {
    res.send({tasks});
})

app.get("/tasks/:id", (req, res) => {
    const taskId = parseInt(req.params.id, 10); // make the id value into workable integer
    const task = tasks.find((task) => task.id === taskId); // check if task is same as task.id
    res.send(task);
})


app.use((req, res, next) => {
    console.log(`Request: ${req.method} ${req.originalUrl}`);
    next();
  });

app.use(express.json())

app.post("/tasks", (req, res) => {
    const newTask = req.body;
    console.log("newTask", newTask);
    tasks.push(newTask);
    res.send(newTask);
});

app.put("/tasks/:id", (req, res) => { // do something similar to patch method
    const taskId = parseInt(req.params.id, 10);
    const updateTask = req.body;
    const taskIndex = tasks.findIndex(task => task.id === taskId);

    if (taskIndex === -1) {
        return res.status(404).send ({message: "Task not found"})
    } else {
        tasks[taskIndex] = { ...tasks[taskIndex], ...updateTask };
        res.send(tasks[tasks[taskIndex]])
    }

});

app.delete("/tasks/:id", (req, res) => {
    const taskId = parseInt(req.params.id, 10);
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    tasks.splice(taskIndex, 1);
    res.send({message: "task deleted succesfully"});
});

app.use((req, res, next) => {
    res.status(404).send({ message: "Invalid route" });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });