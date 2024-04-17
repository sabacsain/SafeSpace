const express = require("express"); 
const app = express(); 
const mysql = require('mysql2');
const cors = require('cors');

const PORT = process.env.PORT || 5000; 

app.use(cors());

app.get("/", (req, res) => { 
    res.send("Express on Vercel"); 
}); 

app.get("/api", (req, res) => { 
    res.send("Express on API"); 
}); 

const db = mysql.createConnection({
    host: "sql.freedb.tech",
    user: "freedb_safe-space",
    password: "Rw@fnA5CkBfbsb7",
    database: "freedb_safe-space"
})

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const sql = "SELECT * FROM user WHERE username = ? AND password = ?";
    
    db.query(sql, [username, password], (err, data) =>{
        if(err) return res.json(err + " Login Failed");
        if (data.length > 0){
            return res.json("Login Successful");
        } else {
            return res.json("Incorrect Email or Password");
        }
    })
})


app.listen(PORT, () => { 
    console.log(`Server is running on port ${PORT}`); 
});

module.exports = app;