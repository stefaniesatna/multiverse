import sequelize from "./db.js";
import City from "./city.js"

async function sandbox(){
    await sequelize.sync()
}

sandbox()
