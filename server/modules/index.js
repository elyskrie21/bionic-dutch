var nodemailer = require("nodemailer");

var transport = {
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "esamkriegel@gmail.com",
    pass: process.env.PASS
  }
};

var transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});

module.exports = mail => {
  transporter.sendMail(mail, (err, info) => {
    if (err) {
      console.log("there was an error")
    }

    console.log('Message sent: %s', info.messageId); 
  });
};
