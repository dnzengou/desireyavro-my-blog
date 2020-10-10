import express from 'express';
import bodyParser from "body-parser";

// create our backend app object
const app = express();

// this parses the json object that we've included (on postman) along with our post request
// and it adds a body property to the request parameter of whatever the route is
app.use(bodyParser.json());

// let's define different endpoints to our app object, and what we want to do to one of those endpoints is hit
// let's start with when our app receives a get request on the endpoint/hello, it simply responds with a message saying 'hello'
app.get("/hello", (req, res) => res.send("Hello!"));
// app.get gets a call back that is called whenever this endpoint ("/hello") is hit with a get request.
// This call back has two main arguments: a request object (req), which contains details about the request that we receive
// and a response object (res) which we can use to send the response back to whoever sent the request. 
// For our purposes, the body of our callback looks like this: (req, res) => res.send("Hello!")

app.get('/hello/:name', (req, res) => res.send(`Hello ${req.params.name}`));
// this (req.params.name) gives the request access to name paramater, in the section of the url

app.post("/hello", (req, res) => res.send(`Hello ${req.body.name}!`));
// this accesses the body property, here the name property

// We finally start our server, with listen that takes as an argument the port (8000 here) to listen,
// and a callback that gets called once the server is actually listening
app.listen(8000, () => console.log("Listening on port 8000"));
// We just use console.log("Listening on port 8000") to log a message to the console that tells us the app is actually listening.

// After having node js run our express server, we can check everything is OK at localhost:8000/hello with the message Hello!