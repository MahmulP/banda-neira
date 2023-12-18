import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import vouchers from "./VoucherModel.js";
import users from "./UserModel.js";

const { DataTypes} = Sequelize;

const VoucherExchange = db.define('vouchers_exchange', {
    id_voucher:{
        type: DataTypes.INTEGER,
    },
    id_user:{
        type: DataTypes.INTEGER,
    },
    status:{
        type: DataTypes.INTEGER,
    },
    redeem_voucher:{
        type: DataTypes.STRING,
    }
}, {
    freezeTableName: true,
});

VoucherExchange.belongsTo(users, {
    foreignKey: 'id_user',
    as: 'user',
});

VoucherExchange.belongsTo(vouchers, {
    foreignKey: 'id_voucher',
    as: 'voucher',
});

export default VoucherExchange;