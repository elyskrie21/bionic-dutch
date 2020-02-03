const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "dev";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

const port = process.env.PORT || 3000;

nextApp
  .prepare()
  .then(() => {
    const app = express();

    app.get("/my-custom-route", (req, res) => {
      res.status(200).json({ hello: "Hello, from the back-end world!" });
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
