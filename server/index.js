const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");
const mailer = require("./modules/index");

const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();
require("dotenv").config();

const port = process.env.PORT || 3000;

nextApp
  .prepare()
  .then(() => {
    const app = express();
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    app.get("/my-custom-route", (req, res) => {
      res.status(200).json({ hello: "Hello, from the back-end world!" });
    });

    app.post("/send-email", (req, res) => {
      res.status(200).json({ hello: "Message was received!" });
      var name = req.body.name;
      var email = req.body.email;
      var message = req.body.message;
      var content = `name: ${name} \nemail: ${email} \nmessage: ${message} `;

      var mail = {
        from: name,
        to: "esamkriegel@gmail.com", //Change to email address that you want to receive messages on
        subject: "New Message from Contact Form",
        text: content
      };

      mailer(mail); 

    });

    app.get("*", (req, res) => {
      return handle(req, res);
    });

    app.listen(port, err => {
      if (err) throw err;
      console.log(`> Ready on localhost: ${port}`);
    });
  })
  .catch(ex => {
    console.err(ex.stack);
    process.exit(1);
  });
