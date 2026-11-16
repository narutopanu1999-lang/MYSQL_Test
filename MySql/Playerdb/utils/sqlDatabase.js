

const sql = require('mysql2')
require('dotenv').config();

const connection = sql.createConnection({
	host: 'localhost',
 	user: 'root',
	password: 'Gaurav@8474',
	database: 'player_db',
})


connection.connect((err) => {
	if(err){
	    console.log("Failed to connect");
	    return ;
	}
        console.log("connection made");
		    const playerTable = `CREATE TABLE IF NOT EXISTS PLAYERS(
                         ID  INT AUTO_INCREMENT PRIMARY KEY,
                         NAME VARCHAR(225) NOT NULL,
                         EMAIL VARCHAR(225) NOT NULL 
                         )`;

connection.execute(playerTable);
}
)

module.exports = connection;