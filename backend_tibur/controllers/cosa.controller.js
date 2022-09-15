const db = require('../model')
const Cosa = db.cosa;
const Op = db.Sequelize.Op;

// create
exports.create = (req, res) => {

    if (!req.body.tipo) {
        res.status(400).send({
            msg: "necesito al menos un tipo"
        })

        return
    }

    const {tipo, calidad} = req.body

    const cosa = {
        tipo,
        calidad
    }

    Cosa.create(cosa)
        .then(data=>{
            res.status(201).send(data)
        })
        .catch(err => res.status(500).send({err:"a ocurrido un error"}))


}
// read all
exports.findAll = (req, res) => {
    Cosa.findAll()
        .then(data=> res.status(200).send(data) )
        .catch(err=> res.status(500).send({err: 'something happen'}))
}
// read one
exports.findOne = (req, res) => {
    res.status(404).send({
        msg:'Working on it'
    })
}
// update one
exports.update = (req, res) => {
    res.status(404).send({
        msg:'Working on it'
    })
}
// delete one 
exports.delete = (req, res) => {
    res.status(404).send({
        msg:'Working on it'
    })
}



