const orm = require('../config/orm.js');

const model = {
    selectAll: (cb) => orm.selectAll('watch', cb),
    selectWhere: (id, cb) => orm.selectWhere('watch', 'id', id, cb),
    insertOne: (restaurant, cb) => orm.insertOne('watch',
        'movie_name', restaurant, cb),
    updateOne: (column, newValue, id, cb) => orm.updateOne('watch', column, newValue, id, cb),
    deleteOne: (id, cb) => orm.deleteOne('watch', id, cb),
}

module.exports = model;

// =============== TEST CODE ===============
// model.insertOne('CPK', console.log);
// model.updateOne('watched', 0, 4, console.log);
// model.selectWhere(4, console.log);
// model.deleteOne(11, console.log);
// model.selectAll(console.log);