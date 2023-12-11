import express from "express";
import { getUsers, getPoint, Register, Login, Logout } from "../controllers/Users.js";
import { exchangeVoucher, getVouchers } from "../controllers/Vouchers.js";
import { getContacts, postMessage } from "../controllers/Contacts.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";

const router = express.Router();

router.get("/users", verifyToken, getUsers);
router.post("/register", Register);
router.post("/login", Login);
router.get("/token", refreshToken);
router.delete("/logout", Logout);
router.get("/user-point", getPoint);

// VOUCHERS
router.get("/vouchers", getVouchers);
router.post("/exchange-voucher", exchangeVoucher)

// CONTACTS
router.get("/contacts", verifyToken, getContacts);
router.post("/post-message", postMessage);

export default router;
