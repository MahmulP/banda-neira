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

export const getVouchersExchange = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.sendStatus(401);

    const vouchersExchange = await VoucherExchange.findAll({
      include: [
        { model: Users, as: "user", attributes: ["id", "username"] },
        { model: Vouchers, as: "voucher", attributes: ["id", "jenis_voucher"] },
      ],
    });

    res.json(vouchersExchange);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
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

export const voucherRedeem = async (req, res) => {
  const vouchersId = req.body.voucherId;
  const redeem = req.body.redeem;
  const vouchers = await VoucherExchange.findAll({
    where: {
      id: vouchersId,
    },
  });

  if (!vouchers || vouchers.length === 0) {
    return res.sendStatus(401);
  }

  const voucherId = vouchers[0].id;

  try {
      await VoucherExchange.update({ redeem_voucher: redeem, status: 1 }, { where: { id: voucherId } });

    res.status(200).json({
      message: "Voucher has been updated",
    });
    console.log('test doang mah');
  } catch (error) {
    console.log(error);
  }
};

export const getUserExchange = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      return res.sendStatus(401);
    }

    const users = await Users.findAll({
      where: {
        refresh_token: refreshToken,
      },
    });

    if (!users || users.length === 0) {
      return res.sendStatus(401);
    }

    const userId = users[0].id;

    const vouchersExchange = await VoucherExchange.findAll({
      where: {
        id_user: userId,
      },
      include: [
        { model: Users, as: "user", attributes: ["id", "username"] },
        { model: Vouchers, as: "voucher", attributes: ["id", "jenis_voucher"] },
      ],
    });

    res.json(vouchersExchange);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

