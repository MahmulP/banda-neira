import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import users from "./UserModel.js";

const { DataTypes} = Sequelize;

const points = db.define('points', {
    id_user:{
        type: DataTypes.STRING,
    },
    total_point:{
        type: DataTypes.STRING,
    },
}, {
    freezeTableName: true,
});

points.belongsTo(users, {
    foreignKey: 'id_user',
    as: 'user',
});

export default points;