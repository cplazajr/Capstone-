const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

const app = express();

mongoose.connect("mongodb://localhost/local", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const PORT = process.env.PORT || 4040; // we use || to provide a default value

//Logging Middleware
const logging = (request, response, next) => {
  console.log(`${request.method} ${request.url} ${Date.now()}`);
  next();
};

// CORS Middleware
const cors = (req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, Accept,Authorization,Origin"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
};

app.use(cors);
app.use(express.json());
app.use(logging);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes
const taskRoutes = require("./routes/tasks");
app.use("/tasks", taskRoutes);

// Handle the request with HTTP GET method from http://localhost:4040/status
app.get("/status", (request, response) => {
  // Create the headers for response by default 200
  // Create the response body
  // End and return the response
  response.send(JSON.stringify({ message: "Service healthy" }));
});

// Tell the Express app to start listening
// Let the humans know I am running and listening on 4040
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
