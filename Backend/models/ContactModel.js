import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes} = Sequelize;

const contacts = db.define('contacts', {
    name:{
        type: DataTypes.STRING,
    },
    email:{
        type: DataTypes.STRING,
    },
    subject:{
        type: DataTypes.TEXT,
    },
    message:{
        type: DataTypes.TEXT,
    },
    phone:{
        type: DataTypes.STRING,
    }
}, {
    freezeTableName: true,
});

export default contacts;