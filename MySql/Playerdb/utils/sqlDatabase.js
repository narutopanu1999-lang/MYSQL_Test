const sql = require('mysql2')
require('dotenv').config();

const connection = sql.createConnection({
	host: 'localhost',
 	user: process.env.db_user,
	password: process.env.db_password,
	database: 'Player_db'
})


connection.connect((err) => {
	if(err){
	    console.log("Failed to connect");
	    res.statusCode(500).send("Failure");
	    return ;
	}
        
        console.log("connection made");
}
)

module.exports = connection;