const model = require('./read_model.js');

const read = {
    selectAll: (cb) => model.selectAll(cb),
    selectWhere: (id, cb) => model.selectWhere(id, cb),
    insertOne: (restaurant, cb) => model.insertOne(restaurant, cb),
    updateOne: (column, newValue, id, cb) => model.updateOne(column, newValue, id, cb),
    deleteOne: (id, cb) => model.deleteOne(id, cb),
}

module.exports = read;

// =============== TEST CODE ===============
// read.insertOne('The Boggart', console.log);
// read.updateOne('readed', 0, 4, console.log);
// read.selectWhere(4, console.log);
// read.deleteOne(13, console.log);
// read.selectAll(console.log);