const CatController = require('cats/controller');

module.exports = (router) => {
    router.get('/', (req, res) => {
        CatController.index()
            .then((data) => {
                res.render('index', data)
            });
    });
    router.get('/:id', (req, res) => {
        CatController.read(req.params.id)
            .then((data) => {
                res.render('cat_profile', data)
            });
    });
}