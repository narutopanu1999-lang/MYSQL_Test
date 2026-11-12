const express = require('express');
const app = express();
const port = 3000;
require('dotenv').config();


const sql = require('mysql2');

const connection = sql.createConnection({
    host:'localhost',
    user:process.env.db_user,
    password:process.env.db_password,
    database:'student_db'
});

connection.connect((err) => {
    if(err){
        console.log('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySql database')
    
    const createTable = `CREATE TABLE IF NOT EXISTS test_db(
                      id INT AUTO_INCREMENT PRIMARY KEY,
                      name VARCHAR(255) NOT NULL,
                      email VARCHAR(255) NOT NULL UNIQUE
                      )`;


    connection.execute(createTable,(err)=>{
    if(err) throw err;
    console.log("Table created");
    })
});





app.listen(port,()=> {
    console.log('Server is running');
})