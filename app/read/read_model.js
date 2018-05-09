const orm = require('../config/orm.js');

const model = {
    selectAll: (cb) => orm.selectAll('readr', cb),
    selectWhere: (id, cb) => orm.selectWhere('readr', 'id', id, cb),
    insertOne: (restaurant, cb) => orm.insertOne('readr',
        'book_name', restaurant, cb),
    updateOne: (column, newValue, id, cb) => orm.updateOne('readr', column, newValue, id, cb),
    deleteOne: (id, cb) => orm.deleteOne('readr', id, cb),
}

module.exports = model;

// =============== TEST CODE ===============
// model.insertOne('Happiness Hypothesis', console.log);
// model.updateOne('readed', 0, 4, console.log);
// model.selectWhere(4, console.log);
// model.deleteOne(11, console.log);
// model.selectAll(console.log);