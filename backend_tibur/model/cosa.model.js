module.exports=(sequelize, Sequelize) =>{
    const Cosa = sequelize.define("cosa",{
        tipo: {
            type:Sequelize.STRING,
        },
        calidad:{
            type: Sequelize.STRING,
        }
    })

    return Cosa;
}