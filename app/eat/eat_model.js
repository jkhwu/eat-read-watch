// =============== SETUP ===============
// Requires
const Orm_promisified = require('../config/orm_promisified.js');

// Other
const log = console.log;

// Methods to Export
module.exports = {
    // model = { // test
    selectAll: () => Orm_promisified.selectAll('eat'),
    addEat: (restaurant) => Orm_promisified.insertOne('eat', 'restaurant_name', restaurant),
    changeRestaurant: (id, restaurant) => Orm_promisified.updateOne('eat', 'restaurant_name', restaurant, id)
}

// =============== TEST CODE ===============
// pre-promisified
// model.selectAll(); // works
// model.addEat('CPK'); // works
// model.changeRestaurant(6, 'Pizza Hut'); // works

// post-promisified
// model.selectAll()
//     .then((data) => log(data))
//     .catch((error) => log(error))