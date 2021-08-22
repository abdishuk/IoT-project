import express from "express";
import dotenv from "dotenv"; // for creating .env file in the root to store environment variables
import connectDB from "./config/db.js";
import Lamp from "./Models/Lamp.js";
import Cin from "./Models/Cin.js";

import Descriptor from "./Models/Descriptor.js";

import Axios from "axios";
const app = express();

import bodyParser from "body-parser";
import axios from "axios";

// create application/json parser
var jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// import connectDB from "./config/db.js";
connectDB();
app.use(express.json()); // to post json data

// custom error middleware
const PORT = 5000;

app.post("/lamp0", async (req, res) => {
  const createdInfo = new Lamp0(req.body);
  const info = await createdInfo.save();
  res.send(info);
});

// getting lamp base  info by id

app.get("/lamps/lamp/:id", async (req, res) => {
  const info = await Lamp.findById(req.params.id);

  if (info) {
    console.log(info);
    res.send(info);
  } else {
    res.status(404);
    throw new Error("no orders found");
  }
});

// getting lamp descriptor by Id

app.get("/lamps/lamp/desc/:id", async (req, res) => {
  const info = await Descriptor.findById(req.params.id);

  if (info) {
    console.log(info);
    res.send(info);
  } else {
    res.status(404);
    throw new Error("no orders found");
  }
});

// get lamp cin by Id
// /lamps/lamp0/desc/cin

app.get("/lamps/lamp/desc/cin/:id", async (req, res) => {
  const info = await Cin.findById(req.params.id);

  if (info) {
    console.log(info);
    res.send(info);
  } else {
    res.status(404);
    throw new Error("no orders found");
  }
});

app.get("/lampo/info", async (req, resp) => {
  const res = await Axios.get(
    "http://localhost:8282/~/mn-cse/CAE610333489?rcn=5&lvl=1",
    {
      headers: {
        accept: "application/json",
        "x-m2m-origin": "admin:admin",
      },
    }
  );
  resp.send(res);
});

//

app.listen(5000, console.log("server listening on port " + PORT));
