const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "olsam",
});

app.get("/", authenticateToken, (req, res) => {
  return res.json("Backend side");
});

// Registration endpoint
app.post("/register", authenticateToken, async (req, res) => {
  const { username, email, password, phone } = req.body;

  if (!username || !email || !password || !phone) {
    return res
      .status(400)
      .json({ success: false, alert: "All fields are required" });
  }

  // Check if the username is already taken
  const usernameCheckSql = "SELECT * FROM users WHERE username = ?";
  db.query(usernameCheckSql, [username], async (err, usernameResult) => {
    if (err) {
      console.error(err);
      return res
        .status(500)
        .json({ success: false, alert: "Internal Server Error" });
    }

    if (usernameResult.length > 0) {
      return res.status(400).json({
        success: false,
        alert: "Username is already taken",
      });
    }

    // Check if the email is already taken
    const emailCheckSql = "SELECT * FROM users WHERE email = ?";
    db.query(emailCheckSql, [email], async (err, emailResult) => {
      if (err) {
        console.error(err);
        return res
          .status(500)
          .json({ success: false, alert: "Internal Server Error" });
      }

      if (emailResult.length > 0) {
        return res.status(400).json({
          success: false,
          alert: "Email is already registered",
        });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Insert the new user
      const insertSql =
        "INSERT INTO users (username, email, password, phone) VALUES (?, ?, ?, ?)";
      db.query(
        insertSql,
        [username, email, hashedPassword, phone],
        (err, result) => {
          if (err) {
            console.error(err);
            return res
              .status(500)
              .json({ success: false, alert: "Internal Server Error" });
          }

          return res
            .status(201)
            .json({ success: true, alert: "User registered successfully!" });
        }
      );
    });
  });
});

// Login endpoint
app.post("/login", authenticateToken, (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  const sql = "SELECT * FROM users WHERE email = ?";
  db.query(sql, [email], async (err, result) => {
    if (err) {
      console.error(err);
      return res
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    }

    if (result.length === 0) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid email or password" });
    }

    const user = result[0];

    // Compare hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (isPasswordValid) {
      const payload = {
        id: user.id,
        name: user.name,
        email: user.email
      }
      const secret = process.env.SECRET_KEY;
      const expiresIn = 60 * 60 * 1;
      const token = jwt.sign(payload, secret, {expiresIn: expiresIn})


    } else {
      return res
        .status(401)
        .json({ success: false, message: "Invalid email or password" });
    }
    
    // if (!isPasswordValid) {
    //   return res
    //     .status(401)
    //     .json({ success: false, message: "Invalid email or password" });
    // }

    
    
    // Hardcoded static token for testing purposes
    // const staticToken = "mahmulp2512";

    return res
      .status(200)
      .json({ success: true, message: "Login successful", token: staticToken });
  });
});

// Protected route example
app.get("/users", authenticateToken, (req, res) => {
  const sql = "SELECT * FROM users";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

function authenticateToken(req, res, next) {
  const {authorization} = req.headers;

  // const staticToken = "mahmulp2512";

  if (!authorization) {
    return res
      .status(401)
      .json({ success: false, message: "Token not provided or invalid" });
  }

  const token = authorization.split('')[1];
  const secret = process.env.SECRET_KEY;

  try {
    const jwtDecode = jwt.verify(token,secret);
    req.user = jwtDecode
  } catch (error) {
    return res.status(403).json({ success: false, message: "Invalid token" });
  }  
    next();
}

app.listen(8080, () => {
  console.log("listening on 8080");
});
