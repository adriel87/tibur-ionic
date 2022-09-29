module.exports=(sequelize, Sequelize) =>{
    const Cosa = sequelize.define("cosa",{
        tipo: {
            type:Sequelize.STRING,
        },
        calidad:{
            type: Sequelize.STRING,
        },
        fav:{
            type: Sequelize.BOOLEAN,
            defaultValue: false,
        }
    })

    return Cosa;
}