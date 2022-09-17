const express = require('express')


const app = express();
// aplicamos diferentes middlewares

app.use(express.json());
app.use(express.urlencoded({extended:true}))

//creamos nuestra primera ruta

const db = require('./model');

db.sequelize.sync({force:true}).then(()=> console.log("Drop database and resync."))

app.get('/', (req, res)=>{
    res.json({msg: 'todo va bien'}).status(204);
})

require("./routes/cosa.routes")(app);

const PORT = process.env.PORT || 8080 ;

// console.log(proccess.env);
app.listen(8080, ()=>{
    console.log(`servido ready en ${8080}`);
})
