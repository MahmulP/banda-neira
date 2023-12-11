import Vouchers from "../models/VoucherModel.js";
import VoucherExchange from "../models/VoucherExchangeModel.js";
import Users from "../models/UserModel.js";

export const getVouchers = async (req, res) => {
  try {
    const vouchers = await Vouchers.findAll();
    res.json(vouchers);
  } catch (error) {
    console.log(error);
  }
};

export const exchangeVoucher = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) return res.sendStatus(401);
  const voucherId = req.body.voucherId;

  const users = await Users.findAll({
    where: {
      refresh_token: refreshToken,
    },
  });

  const vouchers = await Vouchers.findAll({
    where: {
      id: voucherId,
    },
  });

  if (!users || users.length === 0 || !vouchers || vouchers.length === 0) {
    return res.sendStatus(401);
  }

  const userId = users[0].id;
  const userPoints = users[0].points;
  const vouchersId = vouchers[0].id;
  const voucherPoint = vouchers[0].point_voucher;

  try {
    if (userPoints >= voucherPoint) {
      const exchangeResult = await VoucherExchange.create({
        id_voucher: vouchersId,
        id_user: userId,
        redeem_voucher: null,
      });

      await Users.update(
        { points: userPoints - voucherPoint },
        { where: { id: userId } }
      );

      res.status(200).json({
        message: "Voucher berhasil ditukarkan",
        exchangeResult,
      });
    } else {
      res.status(400).json({
        message: "Not enough points for exchange",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

