const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const allowedOrigins = ['https://safespace-backend.vercel.app/*', 
                        'https://safe-space-ivory.vercel.app/*'];

app.use(express.json());


app.use(cors({
    origin: function (origin, callback) {
      // Check if the origin is allowed
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    }
  }));

const db = mysql.createConnection({
    host: "sql.freedb.tech",
    user: "freedb_safe-space",
    password: "Rw@fnA5CkBfbsb7",
    database: "freedb_safe-space"
})

app.post('/login', (req, res) => {
    res.set('Access-Control-Allow-Origin', 'https://safe-space-ivory.vercel.app/');
    res.send({ "msg": "This has CORS enabled 🎈" });
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

app.post('/signup', (req, res) => {
    res.set('Access-Control-Allow-Origin', 'https://safe-space-ivory.vercel.app/');
    res.send({ "msg": "This has CORS enabled 🎈" });

    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;

    const sqlCheck = "SELECT * FROM user WHERE username = ?";
    const sqlInsert = "INSERT INTO user (first_name, last_name, email, username, password) VALUES (?, ?, ?, ?, ?)";

    // Check if the username already exists
    db.query(sqlCheck, [username], (err, data) => {
    if (err) {
        console.error(err);
        return res.json(err + " Signup Failed");
    }
    console.log(data);
    if (data.length > 0) {
        // Username already exists
        return res.json("User already exists");
    } else {
        // Username is available, proceed with signup
        db.query(sqlInsert, [first_name, last_name, email, username, password], (err) => {
            if (err) {
                res.json(err + " Signup Failed");
            }
            return res.json("Signup Successful");
        });
    }
});
})

app.listen(8083, () => {
     console.log("Listening...");
})