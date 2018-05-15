const connection = require("./connection.js");

const orm = {
  selectAll: (table, cb) => {
    console.log("\nSELECT THIS TABLE: " + table);
    let queryString = "SELECT * FROM ??";
    connection.query(queryString, [table], function(err, data) {
      if (err) throw err;
      cb(data);
    });
  },
  selectWhere: (table, column, value, cb) => {
    console.log(`\nSELECT TABLE ${table} WHERE ${column} = ${value}`);
    let queryString = "SELECT * FROM ?? WHERE ?? = ?";
    connection.query(queryString, [table, column, value], function(err, data) {
      if (err) throw err;
      cb(data);
    });
  },
  insertOne: (table, column, value, cb) => {
    if (value === "") {
        console.log("\nYOU ARE TRYING TO INSERT A BLANK VALUE");
        return;
    } else {
        console.log("\nINSERT THIS: " + value);
        let queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [table, column, value], function(err, data) {
          if (err) throw err;
          cb(data);
        });
    }
  },
  updateOne: (table, column, newValue, id, cb) => {
    console.log("\nUPDATE ENTRY " + id + " TO " + newValue);
    let queryString = "UPDATE ?? SET ?? = ? WHERE id = ?";
    connection.query(queryString, [table, column, newValue, id], function(
      err,
      data
    ) {
      if (err) throw err;
      cb(data);
    });
  },
  deleteOne: (table, id, cb) => {
    console.log("\nDELETE ENTRY: " + id);
    let queryString = "DELETE FROM ?? WHERE id = ?";
    connection.query(queryString, [table, id], function(err, data) {
      if (err) throw err;
      cb(data);
    });
  }
};

module.exports = orm;

// =============== TEST CODE ===============
// console.log(connection);
// orm.selectWhere('eat', 'id', 2, console.log);
// orm.insertOne('eat', 'restaurant_name', 'In-N-Out', console.log);
// orm.updateOne('eat', 'eaten', '1', 4, console.log);
// orm.deleteOne('eat', 7, console.log);
// orm.selectAll('eat', console.log);
