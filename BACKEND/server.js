// Import the express module
const express = require('express');

// Create an instance of an express application
const app = express();
const PORT = process.env.PORT || 5000;


// Default route
app.get('/users', (req, res) => {
    res.json({ "users": ["userOne", "userTwo", "userThree"] });
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});