module.exports = app =>{
    const express = require('express')
    const router = express.Router()
    
    const cosa = require('../controllers/cosa.controller')

    
    

    router.post('/', cosa.create);

    router.get('/', cosa.findAll);
    router.get('/:id', cosa.findOne);
    router.put('/:id', cosa.update);
    router.delete('/:id', cosa.delete);

    app.use('/api/cosa', router)


}

