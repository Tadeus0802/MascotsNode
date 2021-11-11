const express = require("express");
const router = express.Router();
const mysql = require("mysql2/promise");
const database = require("../connection/connect.json");

router.post("/", async (req,res)=>{
    try {
        const conect = await mysql.createConnection(database);
        const [rows, fields] = await conect.execute("INSERT INTO owners (name, lastname, age ) VALUES (?, ?, ?)", [req.body.name, req.body.lastname, req.body.age]);
        conect.end();
        return res.send(rows);
    } catch (error) {
        res.send(error);
    }
})

module.exports = router