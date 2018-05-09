const model = require('./watch_model.js');

const watch = {
    selectAll: (cb) => model.selectAll(cb),
    selectWhere: (id, cb) => model.selectWhere(id, cb),
    insertOne: (restaurant, cb) => model.insertOne(restaurant, cb),
    updateOne: (column, newValue, id, cb) => model.updateOne(column, newValue, id, cb),
    deleteOne: (id, cb) => model.deleteOne(id, cb),
}

module.exports = watch;

// =============== TEST CODE ===============
// watch.insertOne('Her', console.log);
// watch.updateOne('watched', 0, 4, console.log);
// watch.selectWhere(4, console.log);
// watch.deleteOne(13, console.log);
// watch.selectAll(console.log);