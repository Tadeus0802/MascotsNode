const express = require("express");
const router = express.Router();
const mysql = require("mysql2/promise");
const database = require("../connection/connect.json");
const crypto = require('crypto');

router.post("/register", async (req,res)=>{
    let email = req.body.email;
    let password = req.body.password;
    let secretPassword = crypto.createHash('sha256').update(password).digest('hex');

    try {
        const conect = await mysql.createConnection(database);
        const [rows, fields] = await conect.execute("INSERT INTO usuarios (email, password) VALUES (?, ?)", [email, secretPassword]);

        conect.end();
        return res.send(rows);
    } catch (error) {
        res.send(error);
    }
});

router.post("/login", async (req,res)=>{
    let email = req.body.email;
    let password = req.body.password;
    let secretPassword = crypto.createHash('sha256').update(password).digest('hex');

    try {
        const conect = await mysql.createConnection(database);
        const [rows, fields] = await conect.execute("SELECT id FROM usuarios WHERE email = ? AND password = ?", [email, secretPassword]);

        conect.end();
        if(!rows){
            return res.send("Te logueaste correctamente!");
        }
        else{
            return res.send("Te equivocaste con algun dato!")
        }
    } catch (error) {
        res.send(error);
    }
})


module.exports = router