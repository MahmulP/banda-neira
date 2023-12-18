import express from "express";
import { getUsers, getPoint, getRole, changeRole, Register, Login, Logout } from "../controllers/Users.js";
import { exchangeVoucher, getVouchers, getVouchersExchange, getUserExchange, voucherRedeem } from "../controllers/Vouchers.js";
import { getContacts, postMessage } from "../controllers/Contacts.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";

const router = express.Router();

router.get("/users", getUsers);
router.post("/register", Register);
router.post("/login", Login);
router.get("/token", refreshToken);
router.delete("/logout", Logout);
router.get("/user-point", getPoint);
router.get("/user-role", getRole);
router.post('/change-role', changeRole);

// VOUCHERS
router.get("/vouchers", getVouchers);
router.post("/exchange-voucher", exchangeVoucher)
router.get("/voucher-exchange", getVouchersExchange);
router.get("/user-exchange", getUserExchange);
router.post("/voucher-redeem", voucherRedeem);

// CONTACTS
router.get("/contacts", getContacts);
router.post("/post-message", postMessage);

export default router;
