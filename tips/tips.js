const express = require("express");
const router = express.Router();
const fs = require('fs/promises');

router.get("/", async (req,res)=>{
    try {
        const data = await fs.readFile("./tips/tips.txt", "utf8");
        return res.send(data)
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;