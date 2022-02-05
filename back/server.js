require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.options("*", cors());

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Database ON !"));

app.use(express.json());

const playersRouter = require("./routes/players");
app.use("/players", playersRouter);

app.listen(3000, () => console.log("Server ON !"));
