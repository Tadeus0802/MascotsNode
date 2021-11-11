const express = require("express");
const router = express.Router();
const mysql = require("mysql2/promise");
const database = require("../connection/connect.json");

//*ADD OWNERS TO MASCOTS
router.post("/add", async (req,res)=>{
    try {
        const conect = await mysql.createConnection(database);
        const [rows, fields] = await conect.execute("INSERT INTO mascots (name, age, animal) VALUES (?, ?, ?, ?)", [req.body.name, req.body.age, req.body.animal, req.body.owner]);

        conect.end();
        return res.send(rows);
    } catch (error) {
        res.send(error);
    }
})

//*SEE ALL ANIMALS
router.get("/", async (req,res)=>{
    try {
        const conect = await mysql.createConnection(database);
        const [rows, fields] = await conect.execute("SELECT (name, age, animal, owner) FROM mascots", []);

        conect.end();
        return res.send(rows);
    } catch (error) {
        res.send(error);
    }
});

//*SEE ANIMALS IF THE HAVE OWNER
router.get("/owner", async (req,res)=>{
    try {
        const conect = await mysql.createConnection(database);
        const [rows, fields] = await conect.execute("SELECT (name, age, animal, owner) FROM mascots WHERE owner = 1", []);

        conect.end();
        return res.send(rows);
    } catch (error) {
        res.send(error);
    }
});

//*SEE ANIMALS BY ID
router.get("/:id", async (req,res)=>{
    try {
        const conect = await mysql.createConnection(database);
        const [rows, fields] = await conect.execute("SELECT (name, age, animal, owner) FROM mascots WHERE id = ?", [req.params.id]);

        conect.end();
        return res.send(rows);
    } catch (error) {
        res.send(error);
    }
});

//*EDIT ANIMAL DATA
router.put("/edit/:id", async (req,res)=>{
    try {
        const conect = await mysql.createConnection(database);
        await conect.execute("UPDATE mascots SET name = ?, age = ?, animal = ? WHERE id = ? ", [req.body.name, req.body.age, req.body.animal, req.params.id]);
        conect.end();
        return res.send("Changed!!");
    } catch (error) {
        res.send(error);
    }
});

//*EDIT ANIMAL DATA
router.put("/owner/:id", async (req,res)=>{
    try {
        const conect = await mysql.createConnection(database);
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

//*EDIT ANIMALS TO THE ONES THAT GOT OWNERS
router.put("/asign/:id", async (req,res)=>{
    try {
        const conect = await mysql.createConnection(database);
        const [rows, fields] = await conect.execute("UPDATE mascots SET owner_id = ? WHERE mascots.id = ? ", [req.body.id, req.query.id]);
        conect.end();
        return res.send("UPDATED!");
    } catch (error) {
        res.send(error);
    }
})

//*SEE ANIMALS BY OWNER ID
router.get("/owners/:id", async (req,res)=>{
    try {
        const conect = await mysql.createConnection(database);
        const [rows, fields] = await conect.execute("SELECT (name, age, animal, owner) FROM mascots WHERE owner_id = ?", [req.params.id]);
        conect.end();
        return res.send(rows);
    } catch (error) {
        res.send(error);
    }
})

module.exports = router;