const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require('mysql');
//Test
app.use(cors());
app.use(express.json());

//connects to database 
const db = mysql.createConnection({
    user: "Java Buddy", 
    host: "25.72.100.118",
    password: "Java Buddies",
    database: "forminformation",
});

//saves informations 
app.post('/create', (req, res) => {

    const first = req.body.first;
    const last = req.body.last;
    const phone = req.body.phone;
    const mail = req.body.mail;
    const message = req.body.message;


    db.query("INSERT INTO prototypetable (FirstName, LastName, PhoneNumber, Email, Message) VALUES(?,?,?,?,?)", 
    [first, last, phone, mail, message], 
    (err, result) => {
        if (err) {
            console.log(err)
        } else{
            res.send("Values Inserted");
        }
    } 
    );
});


app.listen(3002, () =>{
    console.log("server is running on port 25.72.100.118");
});
