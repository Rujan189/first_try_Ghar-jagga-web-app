const { Router } = require("express");
const { sendEmail } = require("../utils/mailer");

const router = Router();

router.post("/", (req, res) => {
  console.log({ bd: req.body });
  const { email, subject, message } = req.body;
  sendEmail(email, subject, message);
  res.json({ check: true });
});
module.exports.emailRouter = router;
