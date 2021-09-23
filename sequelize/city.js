import sequelize from "./db.js"
import * as pkg from "sequelize"
const { DataTypes, Model } = pkg

class City extends Model {}

City.init(
    {
        name: DataTypes.STRING,
        population: DataTypes.INTEGER
    },
    {
        sequelize,
        modelName: "city",
        timestamps: false,
    }
)

export default City