// =============== SETUP ===============
// Dependencies
const mysql = require('mysql');

// Requires
const connection = require('./connection.js').connection;

// Other
const log = console.log;

// =============== Object Relational Mapping ===============

module.exports = {
    // orm = { // test
    selectAll: (table) => {
        log('SELECT THIS TABLE: ' + table)
        let queryString = 'SELECT * FROM ??';
        connection.query(queryString, [table], function(err, data) {
            if (err) throw err;
            log(data);
            // return new Promise((resolve, reject) => {
            //     if (err) {
            //         reject(err)
            //     } else {
            //         resolve(data)
            //     }
            // });
        });
    },
    insertOne: (table, column, value) => {
        log('INSERT THIS: ' + value)
        let queryString = 'INSERT INTO ?? (??) VALUES (?)';
        connection.query(queryString, [table, column, value], function(err, data) {
            if (err) throw err;
            log(data);
            // return new Promise((resolve, reject) => {
            //     if (err) {
            //         reject(err)
            //     } else {
            //         resolve(data)
            //     }
            // });
        });
    },
    updateOne: (table, column, newValue, id) => {
        log('UPDATE ENTRY ' + id + ' TO ' + newValue);
        let queryString = 'UPDATE ?? SET ?? = ? WHERE id = ?';
        connection.query(queryString, [table, column, newValue, id], function(err, data) {
            if (err) throw err;
            log(data);
            // return new Promise((resolve, reject) => {
            //     if (err) {
            //         reject(err)
            //     } else {
            //         resolve(data)
            //     }
            // });
        });
    }
}

// =============== TEST CODE ===============
// log(connection); // works 
// require('./connection.js').seedData(); // works 
// orm.insertOne('eat', 'restaurant_name', 'In-N-Out'); // works
// orm.selectAll('eat'); // works
// orm.updateOne('eat', 'restaurant_name', 'Black Angus', '5'); // works
// orm.selectAll('eat'); // works