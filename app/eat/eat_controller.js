const model = require('./eat_model.js');

const eat = {
    selectAll: (cb) => model.selectAll(cb),
    selectWhere: (id, cb) => model.selectWhere(id, cb),
    insertOne: (restaurant, cb) => model.insertOne(restaurant, cb),
    updateOne: (column, newValue, id, cb) => model.updateOne(column, newValue, id, cb),
    deleteOne: (id, cb) => model.deleteOne(id, cb),
}

module.exports = eat;

// =============== TEST CODE ===============
// eat.insertOne('CPK', console.log);
// eat.updateOne('eaten', 0, 4, console.log);
// eat.selectWhere(4, console.log);
// eat.deleteOne(13, console.log);
// eat.selectAll(console.log);