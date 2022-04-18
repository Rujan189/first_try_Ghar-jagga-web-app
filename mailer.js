const { createTransport } = require("nodemailer");

const _config = {
  host: "smtp-mail.outlook.com",
  port: 587,
  secure: false,
  auth: {
    user: "gharjaggauser@outlook.com",
    pass: "nepal098#",
  },
};
const transport = createTransport(_config);

const sendEmail = async (email = "", subject = "", message = "") => {
  try {
    const res = await transport.sendMail({
      to: ["chaudariaditya@gmail.com", "ac11041719@student.ku.edu.np"],
      from: "gharjaggauser@outlook.com",
      subject: "Gharjagga Contact Request",
      html: `
        <h2>Contact Request</h2>
        <p>Contact Request By: <b>${email}</b></p>
        <p>Contact Request on Subject: <b>${subject}</b></p>
        <p>Message: <b>${message}</b></p>
      `,
    });

    console.log({ res });
  } catch (ex) {
    console.log({ ex });
  }
};

module.exports.sendEmail = sendEmail;
