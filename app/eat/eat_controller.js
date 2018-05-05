// =============== SETUP ===============
// Requires
const Eat = require('./eat_model.js');

// Other
const log = console.log;

module.exports = {
    // test = {
    index: () => Eat.selectAll(),
    create: (restaurant) => Eat.addEat(restaurant),
    read: (id) => Eat.getById(id),
    update: (id, restaurant) => Eat.changeRestaurant(id, restaurant),
    delete: (id) => Eat.deleteRestaurant(id),
}

// =============== TEST CODE ===============
// log(Eat); // works
// test.index(); // works
// test.create('Applebees'); // works
// test.read(3); // works
// test.update(6, 'Little Caesars'); // works
// test.delete(5) // works