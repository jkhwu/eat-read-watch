// =============== SETUP ===============
// Requires
const Orm_promisified = require('../config/orm_promisified.js');

// Other
const log = console.log;

// Methods to Export
module.exports = {
    // test = {
    selectAll: () => Orm_promisified.selectAll('eat'),
    addEat: (restaurant) => Orm_promisified.insertOne('eat', 'restaurant_name', restaurant),
    getById: (id) => Orm_promisified.selectWhere('eat', 'id', id),
    changeRestaurant: (id, restaurant) => Orm_promisified.updateOne('eat', 'restaurant_name', restaurant, id),
    deleteRestaurant: (id) => Orm_promisified.deleteById('eat', id),
}

// =============== TEST CODE ===============
// pre-promisified
// test.selectAll(); // works
// test.addEat('CPK'); // works
// test.changeRestaurant(6, 'Pizza Hut'); // works
// test.getById(4); // works
// test.deleteRestaurant(6); // works


// post-promisified
// test.selectAll()
//     .then((data) => log(data))
//     .catch((error) => log(error))