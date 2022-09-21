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

    const { id } = req.params;

    Cosa.findAll({
        where:{
            id,
        }
    })
    .then( data => res.status(200).send(data))
    .catch( err => res.status(500))

    res.status(404).send({
        msg:'Working on it'
    })
}
// update one
exports.update = (req, res) => {

    const { id } = req.params;
    const updateParams = req.body
    

   Cosa.update({ ...updateParams },{
    where:{
        id
    }
   })
   .then(data => res.status(200).send(data))
   .catch( err => res.status(500)) 

    

}
// delete one 
exports.delete = async (req, res) => {
    const { id } = req.params;
    

    const resp = await  Cosa.destroy({
        where:{
            id
        }
    })
    .then(data => {
        if(data > 0) {
            res.status(200).send({msg:`se han eliminado ${data} registros`})
        }else{
            res.status(200).send({msg:`unreachable id`})
        }
    })
    .catch( err => res.status(500)) 

    // const data = await resp.json()

    

}



