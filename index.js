const express = require ("express");
const app = express();
const db_KTP = require("./db");
const NIK = require("NIK");

app.use(express.json()) // => req.body


//ROUTES//

//get all NIK

app.get("/NIK", async (req, res) => {
    try {
        const allNIK = await db_KTP.query("SELECT * FROM NIK");

        res.json(allNIK.rows);
    } catch (err) {
        console.error(err.message);
    }
});
//get a NIK

app.get("/NIK/:Nama", async (req, res) => {
    const { Nama } = req.params;
    try {
        const NIK = await db_KTP.query("SELECT * FROM NIK WHERE NIK_Nama $1", [Nama]);

        res.json(NIK.rows[0])
    } catch (err) {
        console.error(err,message);
    }
});
//create a NIK

app.post("/NIK", async (req, res) => {
    try {
    const {description} = req.body
    const newNIK = await db_KTP.query(
        "INSERT INTO NIK (description) VALUES($1) RETURNING",
        {description} 
    );

    res.json(newNIK.rows);

    } catch (err) {
    console.error(err.message);
    }
});
//update a NIK

app.put("/NIK/:name", async (req, res) => {
    try {
        const { Nama } = req.params; //WHERE    
        const { description } = req.body; //SET

        const updateNIK = await db_KTP.query(
            "UPDATE NIK SET description = $1 WHERE NIK_Nama = $2",
            [description, Nama]
        );

        res.json("NIK was update!")
    } catch (err) {
        console.error(err.message);
    }
});
// delete a NIK

app.delete("/NIK/:Nama", async (req, res) => {
try {
    const { Nama } = req.params;
    const deleteNIK = await db_KTP.query("DELETE FROM NIK WHERE NIK_Nama = $1",[Nama])
    res.json("NIK was succesfully deleted!")
} catch (err) {
  console.error(err.message);  
}
});

app.listen(5000, () => {
    console.log("server is listening on port 5000");
});


module.exports = {db_KTP,NIK}