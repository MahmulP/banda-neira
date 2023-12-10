import Vouchers from "../models/VoucherModel.js";

export const getVouchers = async (req, res) => {
  try {
    const vouchers = await Vouchers.findAll();
    res.json(vouchers);
  } catch (error) {
    console.log(error);
  }
};
