const Cat = require("model");

module.exports = {
    index: () => { Cat.all() },
    create: (data) => {},
    read: (id) => {
        Cat.get_by_id(id)
    },
    update: (data) => {},
    delete: (id) => {},
}