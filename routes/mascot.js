const express = require("express");
const router = express.Router();
const mysql = require("mysql2/promise");
const fs = require("fs/promises");


router.post("/animals/add", async (req,res)=>{
    try {
        const conect = await mysql.createConnection({
            host: "localhost",
            user: "root",
            password:"",
            database: "Mascots"
        });
        const [rows, fields] = await conect.execute("INSERT INTO mascots (name, age, animal, owner) VALUES (?, ?, ?, ?)", [req.body.name, req.body.age, req.body.animal, req.body.owner]);

        conect.end();
        return res.send(rows);
    } catch (error) {
        res.send(error);
    }
})

//*SEE ALL ANIMALS
router.get("/animals", async (req,res)=>{
    try {
        const conect = await mysql.createConnection({
            host: "localhost",
            user: "root",
            password:"",
            database: "Mascots"
        });
        const [rows, fields] = await conect.execute("SELECT * FROM mascots", []);

        conect.end();
        return res.send(rows);
    } catch (error) {
        res.send(error);
    }
});

//*SEE ANIMALS IF THE HAVE OWNER
router.get("/animals/owner", async (req,res)=>{
    try {
        const conect = await mysql.createConnection({
            host: "localhost",
            user: "root",
            password:"",
            database: "Mascots"
        });
        const [rows, fields] = await conect.execute("SELECT * FROM mascots WHERE owner = 1", []);

        conect.end();
        return res.send(rows);
    } catch (error) {
        res.send(error);
    }
});

//*SEE ANIMALS BY ID
router.get("/animals/:id", async (req,res)=>{
    try {
        const conect = await mysql.createConnection({
            host: "localhost",
            user: "root",
            password:"",
            database: "Mascots"
        });
        const [rows, fields] = await conect.execute("SELECT * FROM mascots WHERE id = ?", [req.params.id]);

        conect.end();
        return res.send(rows);
    } catch (error) {
        res.send(error);
    }
});

//*EDIT ANIMAL DATA
router.put("/animals/edit/:id", async (req,res)=>{
    try {
        const conect = await mysql.createConnection({
            host: "localhost",
            user: "root",
            password:"",
            database: "Mascots"
        });
        await conect.execute("UPDATE mascots SET name = ?, age = ?, animal = ? WHERE id = ? ", [req.body.name, req.body.age, req.body.animal, req.params.id]);
        conect.end();
        return res.send("Changed!!");
    } catch (error) {
        res.send(error);
    }
});

//*EDIT ANIMAL DATA
router.put("/animals/owner/:id", async (req,res)=>{
    try {
        const conect = await mysql.createConnection({
            host: "localhost",
            user: "root",
            password:"",
            database: "Mascots"
        });
        await conect.execute("UPDATE mascots SET owner = ? WHERE id = ? ", [req.body.owner, req.params.id]);
        conect.end();
        if(req.body.owner==="0"||req.body.owner===0){
            res.send("Poor you :c");
        }
        else{
            res.send("You got a owner!!");
        }
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;