module.exports = app => {
    const router = require('express'). Router();
    const chaussureController= require('../controllers/chaussure.controller');
    router.post('/chaussures', chaussureController.create);
    router.get('/chaussures', chaussureController.findAll);
    router.get('/chaussures/:id',chaussureController.findOne);
    router.delete('/chaussures/:id',chaussureController.delete);
    router.put('/chaussures/:id',chaussureController.update);
    app.use('/api/', router);



    const magasinController= require('../controllers/magasin.controller');
    router.post('/magasins', magasinController.create);
    router.get('/magasins', magasinController.findAll);
    router.get('/magasins/:id',magasinController.findOne);





}

