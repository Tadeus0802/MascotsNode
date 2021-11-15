const express = require("express");
const app = express();
const mascot = require("./routes/mascot");
const tips = require("./tips/tips");
const owner = require("./routes/owners")
const users = require("./routes/users");
const welcome = require("./routes/welcome");
const path = require('path');

const port = 3000;

app.use(express.json());
app.use('/static', express.static(path.join(__dirname + 'public')))

app.use("/", tips);
app.use("/mascots", mascot);
app.use("/owners", owner);
app.use("/", users);
app.use("/", welcome);

app.listen(port,()=>{
    console.log(`Your server is working on http://localhost:${port}`);
})