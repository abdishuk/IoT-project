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

// get status of lamp 0

app.get("/lamps/:id", async (req, res) => {
  const lamp0 = await Descriptor.findById(req.params.id);
  if (lamp0) {
    const lampoStatus = lamp0.m2mcnt.st;
    res.send(lampoStatus);
  }
});

// update status of a lamp
app.put("/lamps/:id", async (req, res) => {
  let status = req.query.status;
  console.log("stauts", status, typeof status);
  if (status === false || status === 0) {
    status = 0;
  } else if (status === true || status === 1 || status === "true") {
    console.log("status1", status, typeof status);
    status = 1;
  }

  //on
  try {
    const lamp0 = await Descriptor.findById(req.params.id);
    console.log("lamp0", lamp0);

    if (lamp0) {
      //of
      lamp0.m2mcnt.st = status;
      console.log("newLamp", lamp0);
      await lamp0.save();
    }
    const newlamp0 = await Descriptor.findById(req.params.id);

    res.send(newlamp0);
  } catch (error) {
    console.log(error);
  }
});

// update status of both lamps

app.put("/lamps", async (req, res) => {
  let status = req.query.status;
  console.log("stauts", status, typeof status);
  if (status === false || status === 0) {
    status = 0;
  } else if (status === true || status === 1 || status === "true") {
    console.log("status1", status, typeof status);
    status = 1;
  }

  //on
  try {
    const lamp0 = await Descriptor.findById("6121565cb3981420bc939ed8");
    console.log("lamp0", lamp0);
    const lamp1 = await Descriptor.findById("6121565cb3981420bc939eda");
    console.log("lamp01", lamp1);

    if (lamp0) {
      //of
      lamp0.m2mcnt.st = status;
      console.log("newLamp", lamp0);
      await lamp0.save();
    }
    if (lamp1) {
      //of
      lamp1.m2mcnt.st = status;
      console.log("newLamp", lamp0);
      await lamp1.save();
    }

    const newStatus = lamp1.m2mcnt.st;

    res.send(newStatus);
  } catch (error) {
    console.log(error);
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
