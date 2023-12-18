import Contacts from "../models/ContactModel.js";

export const getContacts = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.sendStatus(401);

    const contacts = await Contacts.findAll();
    res.json(contacts);

  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};

export const postMessage = async (req, res) => {
  const { name, email, phone, subject, message } = req.body;
  if (!email || !name)
    return res.status(400).json({ msg: "Email dan nama harus diisi" });
  if (!message || !subject)
    return res.status(400).json({ msg: "Subjek beserta pesan harus diisi." });
  try {
    await Contacts.create({
      name: name,
      email: email,
      phone: phone,
      subject: subject,
      message: message,
    });
    res.json({
      msg: "Pesan Anda telah diterima, kami akan segera menghubungi Anda",
    });
  } catch (error) {
    console.log(error);
  }
};
