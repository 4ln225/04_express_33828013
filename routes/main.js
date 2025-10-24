



// Create a new router



const express = require("express");
const router = express.Router();

const path = require("path"); 


// Handle the main routes


router.get("/", (req, res) => res.send("Hello World!")); 


router.get("/about", (req, res) => res.send ("<h1>This is my about page</h1>"));


router.get("/contact", (req, res) => res.send("<h1>Contact me at balna001@gold.ac.uk</h1>"));

router.get("/date", (req, res) => {
  const currentDate = new Date(); // current date and time
  res.send(`
    <h1>Current Date and Time</h1> <p>${currentDate.toString()}</p>`);
});


router.get("/portfolio", (req, res) => res.send("<h1>Portfolio</h1><p>Check out my past work!</p>"));

router.get("/privacy", (req, res) => res.send("<h1>Privacy Policy</h1>"));


router.get("/welcome/:name", (req, res) => {
  const name = req.params.name; // get the value after /welcome/
  res.send(`<h1>Welcome ${name}</h1>`);
});


router.get("/chain", (req, res, next) => {
    console.log("First handler running...");
    req.message = "Hello from the first handler! ";
    next(); // Pass control to the next handler task 11
  },
  (req, res) => {
    console.log("Second handler running...");
    res.send(req.message + "This is the second handler.");
  }
);

router.get("/file", (req, res) => {
  res.sendFile(path.join(__dirname, "../a.html"));
}); //get file task 12

// Export the router object so index.js can access it
module.exports = router;
