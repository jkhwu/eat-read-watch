const Orm = require('orm');

module.exports = {
    all: () => Orm.all('Cats'),
    get_by_id: (id) => Orm.one('Cats', id)
}