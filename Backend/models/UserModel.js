import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes} = Sequelize;

const users = db.define('users', {
    username:{
        type: DataTypes.STRING,
    },
    email:{
        type: DataTypes.STRING,
    },
    password:{
        type: DataTypes.STRING,
    },
    phone:{
        type: DataTypes.STRING,
    },
    refresh_token:{
        type: DataTypes.TEXT,
    }
}, {
    freezeTableName: true,
});

export default users;