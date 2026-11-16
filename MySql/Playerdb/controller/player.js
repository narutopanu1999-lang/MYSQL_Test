
const db = require('../utils/sqlDatabase.js')
const addEntries = (req,res) => {
    const {email,name} = req.body;
    const insertQuery = 'INSERT INTO PLAYERS (email,name) VALUES(?,?)';

    db.execute(insertQuery,[email,name],(err,result)=>{
       if(err){
         console.log(err.message);
         res.status(500).send(err.message);
         connection.end();
         return;
       }
       console.log("Value has been inserted");
       res.status(200).send(`Player ${name} with ${email} added.`)
    })               
}

const updateEntries = (req, res) => {
    const { id } = req.params;
    const { email, name } = req.body;

    const query = `
        UPDATE PlayerS
        SET email = ?, name = ?
        WHERE id = ?
    `;

    db.execute(query, [email, name, id], (err, result) => {
        if (err) {
            return res.status(500).send(err.message);
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "Player not found"
            });
        }
        res.status(200).json({
            message: "Player updated successfully"
        });
    });
};


const deleteEntries = (req,res) =>{
  db.execute(query, [id], (err, result) => {
        if (err) {
            return res.status(500).send(err.message);
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "Player not found"
            });
        }

        res.status(200).json({
            message: "Player deleted successfully"
        });
    });
};
const showEntries = (req, res) => {
                const selectQuery = 'select * from players';
                db.query(selectQuery,(err,result) => {
                    if(err){
                        console.log(err.message);
                        res.status(500).send("not found");
                        return;
                    }

                      res.status(200).json({
            players: result
        });
                })
}

module.exports = {
    addEntries,
    updateEntries,
    deleteEntries,
    showEntries
}