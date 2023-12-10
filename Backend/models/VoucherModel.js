import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes} = Sequelize;

const vouchers = db.define('vouchers', {
    jenis_voucher:{
        type: DataTypes.STRING,
    },
    valid_voucher:{
        type: DataTypes.DATE,
    },
    deskripsi_voucher:{
        type: DataTypes.TEXT,
    },
    point_voucher:{
        type: DataTypes.STRING,
    }
}, {
    freezeTableName: true,
});

export default vouchers;