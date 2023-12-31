import Users from "../models/UserModel.js";
import Points from "../models/PointModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getUsers = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.sendStatus(401);

    const users = await Users.findAll({
      attributes: ["id", "username", "email", "points", "role", "phone"],
    });
    res.json(users);

  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};

export const Register = async (req, res) => {
  const { username, email, password, phone } = req.body;
  const role = "user";
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
      role: role,
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
      refresh_token: refreshToken,
    },
  });
  if (!user[0]) return res.sendStatus(204);
  const userId = user[0].id;
  await Users.update(
    { refresh_token: null },
    {
      where: {
        id: userId,
      },
    }
  );
  res.clearCookie("refreshToken");
  return res.sendStatus(200);
};

export const getPoint = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.sendStatus(401);

    const users = await Users.findAll({
      where: {
        refresh_token: refreshToken,
      },
    });

    if (!users[0]) return res.sendStatus(404);

    const userPoint = users[0].points;

    if (!userPoint) return res.sendStatus(404);

    res.json({ userPoint });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};

export const getRole = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.sendStatus(401);

    const users = await Users.findAll({
      where: {
        refresh_token: refreshToken,
      },
    });

    if (!users[0]) return res.sendStatus(404);

    const role = users[0].role;

    if (!role) return res.sendStatus(404);

    res.json({ role });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};

export const changeRole = async (req, res) => {
  const usersId = req.body.userId;
  const users = await Users.findAll({
    where: {
      id: usersId,
    }
  })

  if (!users || users.length === 0) {
    return res.sendStatus(401);
  }

  const userId = users[0].id;
  const userRole = users[0].role;

  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.sendStatus(401);

    if (userRole == 'admin') {
      await Users.update(
        { role: 'user' },
        { where: { id: userId } }
      );
    } else {
      await Users.update(
        { role: 'admin' },
        { where: { id: userId } }
      )
    }

    res.status(200).json({
      message: "Role has been updated successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

export const givePoint = async (req, res) => {
  const usersId = req.body.userId;
  const points = req.body.points;
  const users = await Users.findAll({
    where: {
      id: usersId,
    }
  })

  if (!users || users.length === 0) {
    return res.sendStatus(401);
  }

  const userId = users[0].id;
  const userPoints = users[0].points;

  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.sendStatus(401);

    await Users.update(
      { points: userPoints + points },
      { where: { id: userId } }
    );

    await Points.create({
      id_user: userId,
      total_point: points,
    })

    res.status(200).json({
      message: "Point has been created successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

export const getUsersPoint = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.sendStatus(401);

    const usersPoint = await Points.findAll({
      include: [
        { model: Users, as: "user", attributes: ["id", "username"] },
      ],
    });

    res.json(usersPoint);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};
