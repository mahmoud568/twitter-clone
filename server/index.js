// @ts-nocheck

const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.json({
      status: "erorr",
      res: "enter valid api",
    });
  });

app.listen(process.env.PORT || 3000);