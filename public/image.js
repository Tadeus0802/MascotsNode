const express = require("express");
const router = express.Router();
const fs = require('fs/promises');

router.get("/image", async (req,res)=>{
    try {
        const data = await fs.readFile("./public/img.jpg");
        return res.send(data)
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;