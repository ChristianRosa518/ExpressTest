const express = require("express");
require("dotenv").config();
const home = require("./src/home");

const app = express();
app.use(express.json());

app.use("/home", home);

app.get("/", (req, res) => res.send("hello world"));

const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Express app running on port ${port}`));
