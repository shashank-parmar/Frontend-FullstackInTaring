const express = require('express');
const connectDb = require("../backend/config/config");
const registerRoute = require("./routes/authRoute"); // Import the router correctly
const loginRoute = require("./routes/authRoute"); // Import the router correctly

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectDb();

app.get('/', (req, res) => {
    res.send("shashank");
});

app.use('/api', registerRoute); // Use the imported router directly
app.use('/api', loginRoute); // Use the imported router directly

app.listen(8080, () => {
    console.log("Server is running on port 8080");
});
