import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes} = Sequelize;

const VoucherExchange = db.define('vouchers_exchange', {
    id_voucher:{
        type: DataTypes.INTEGER,
    },
    id_user:{
        type: DataTypes.INTEGER,
    },
    redeem_voucher:{
        type: DataTypes.STRING,
    }
}, {
    freezeTableName: true,
});

export default VoucherExchange;