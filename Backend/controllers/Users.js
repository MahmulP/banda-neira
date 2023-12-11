import Users from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getUsers = async (req, res) => {
  try {
    const users = await Users.findAll({
      attributes: ["id", "username", "email", "points"],
    });
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

export const Register = async (req, res) => {
  const { username, email, password, phone } = req.body;
  if (!email || !password)
    return res.status(400).json({ msg: "Email dan password harus diisi." });
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);
  try {
    await Users.create({
      username: username,
      email: email,
      password: hashPassword,
      phone: phone,
    });
    res.json({ msg: "Pendaftaran berhasil" });
  } catch (error) {
    console.log(error);
  }
};

export const Login = async (req, res) => {
  try {
    const user = await Users.findAll({
      where: {
        email: req.body.email,
      },
    });
    const match = await bcrypt.compare(req.body.password, user[0].password);
    if (!match) return res.status(400).json({ msg: "Password anda salah!" });
    const userId = user[0].id;
    const username = user[0].username;
    const email = user[0].email;
    const accessToken = jwt.sign(
      { userId, username, email },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "45s",
      }
    );
    const refreshToken = jwt.sign(
      { userId, username, email },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: "1d",
      }
    );
    await Users.update(
      { refresh_token: refreshToken },
      {
        where: {
          id: userId,
        },
      }
    );
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.json({ accessToken });
  } catch (error) {
    res.status(404).json({ msg: "Email tidak ditemukan" });
  }
};

export const Logout = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) return res.sendStatus(204);
  const user = await Users.findAll({
    where: {
      refresh_token: refreshToken
    }
  });
  if (!user[0]) return res.sendStatus(204);
  const userId = user[0].id;
  await Users.update({refresh_token: null}, {
    where:{
        id: userId
    }
  })
  res.clearCookie('refreshToken');
  return res.sendStatus(200);
};


export const getPoint = async (req, res) => {
  try {
      const refreshToken = req.cookies.refreshToken;
      if (!refreshToken) return res.sendStatus(401);

      const users = await Users.findAll({
          where: {
              refresh_token: refreshToken
          }
      });

      if (!users[0]) return res.sendStatus(404);

      const userPoint = users[0].points;

      if (!userPoint) return res.sendStatus(404);

      res.json({ userPoint });
  } catch (error) {
      console.log(error);
      res.status(500).send('Internal Server Error');
  }
};

