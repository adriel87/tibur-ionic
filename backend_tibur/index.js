const express = require('express')
const cors = require('cors')
const { PORT } = require('./config/enviroment');

const isForceNeed = process.argv[2]?.includes('force')

const app = express();
// aplicamos diferentes middlewares

app.use(express.json());
app.use(express.urlencoded({extended:true}))

// uso la version simple del cors que por defecto permite todo
app.use(cors())

const db = require('./model');

db.sequelize.sync({force: isForceNeed }).then(()=> console.log("Drop database and resync."))

app.get('/', (req, res)=>{
    res.json({msg: 'todo va bien'}).status(204);
})

require("./routes/cosa.routes")(app);

app.listen(PORT, ()=>{
    console.log(`servido ready en ${PORT}`);
})
