const express = require("express");
const app = express();
const mascot = require("./routes/mascot");
const tips = require("./tips/tips");
const img = require("./public/image");
const owner = require("./routes/owners")

const port = 3000;

app.use(express.json());


app.get("/", tips);
app.get("/image", img);

app.get("/animals", mascot);
app.get("/animals/owner", mascot);
app.get("/animals/:id", mascot);
app.put("/animals/edit/:id", mascot);
app.post("/animals/add", mascot);

app.put("/mascots/asign/:id", mascot);
app.get("/mascots/owners/:id", mascot);


app.post("/owners", owner);

app.listen(port,()=>{
    console.log(`Your server is working on http://localhost:${port}`);
})