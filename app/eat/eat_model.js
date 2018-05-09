const orm = require('../config/orm.js');

const model = {
    selectAll: (cb) => orm.selectAll('eat', cb),
    selectWhere: (id, cb) => orm.selectWhere('eat', 'id', id, cb),
    insertOne: (restaurant, cb) => orm.insertOne('eat',
        'restaurant_name', restaurant, cb),
    updateOne: (column, newValue, id, cb) => orm.updateOne('eat', column, newValue, id, cb),
    deleteOne: (id, cb) => orm.deleteOne('eat', id, cb),
}

module.exports = model;

// =============== TEST CODE ===============
// model.insertOne('CPK', console.log);
// model.updateOne('eaten', 0, 4, console.log);
// model.selectWhere(4, console.log);
// model.deleteOne(11, console.log);
// model.selectAll(console.log);