// =============== SETUP ===============
// Dependencies
const mysql = require('mysql');
const cmd = require('node-cmd');

// Methods to Export
module.exports = {
    // test = { 
    connection: mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "eatReadWatch_db"
    }),
    seedData: () => {
        cmd.get(
            `
                mysql -u root < ../db/schema.sql
                mysql -u root < ../db/seeds.sql
            `,
            function(data, err, stderr) {
                if (!err) {
                    console.log('created and seeded database :\n\n', data)
                } else {
                    console.log('error', err)
                }
            }
        );
    }
}


// =============== TEST CODE ===============
// log(test.connection);
// test.seedData();