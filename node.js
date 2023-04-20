const express = require("express");
const app = express();

// const database = require('./sqlConnection');
const mysql = require("mysql")
let db_con =  mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ''
});
  

app.listen(5000, () => {
  console.log(`Server is up and running on 5000 ...`);
});
 


db_con.connect((error) =>{
    if (error) {
        console.log("Database Connection Failed !!", error);
    } else {
        console.log("Connection Successfully Done");
    }
});

module.exports = db_con;