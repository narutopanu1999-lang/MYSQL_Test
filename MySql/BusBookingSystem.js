const express = require('express');
const sql = require('mysql2');
const port = 3000;
const app = express();
require('dotenv').config();


const connection = sql.createConnection({
    host:'localhost',
    user: process.env.db_user,
    password:process.env.db_password,
    database:'user_db'
})

connection.connect((err)=>{
    if(err) {
        console.log("Cannot connect to the Database",err);
        return ;
    }
    console.log("Connection made.");

    const userTable = `CREATE TABLE IF NOT EXISTS USERS(
                         ID  INT AUTO_INCREMENT PRIMARY KEY,
                         NAME VARCHAR(225) NOT NULL,
                         EMAIL VARCHAR(225) NOT NULL 
                         )`;

    const busesTable = `CREATE TABLE IF NOT EXISTS BUSES(
                        ID INT AUTO_INCREMENT PRIMARY KEY,
                        BUS_NUMBER INT(10) NOT NULL,
                        TOTAL_SEATS INT(10) NOT NULL,
                        AVAILABLE_SEATS INT(10) NOT NULL
                        )`;
   
    const bookingsTable = `CREATE TABLE IF NOT EXISTS BOOKINGS(
                            ID INT  AUTO_INCREMENT PRIMARY KEY,
                            SEAT_NUMBER INT 
                            )`

    const paymentsTable = `CREATE TABLE IF NOT EXISTS PAYMENTS(
                            ID INT AUTO_INCREMENT PRIMARY KEY,
                            AMOUNT_PAID INT,
                            PAYMENT_STATUS VARCHAR(225)
                            )`
    const Tables = [userTable, busesTable, bookingsTable, paymentsTable]

    try{
    for(const table of Tables){
     connection.execute(table)
     }
     console.log("Tabels created");
    }
     catch(err){  
        console.log("Failed");
    }
})


app.listen(port,() =>{
    console.log("Server is running .");
})