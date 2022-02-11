var express = require("express");
var app = express();
var body = require("body-parser");
var mango = require("mongoose");
var cors = require("cors");
app.use(express.json());
app.use(body.urlencoded({ extended: false }));
app.use(cors());
mango
  .connect("mongodb://127.0.0.1:27017/", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
var user = new mango.Schema({
  category: "String",
  poster: "String",
  Trailer: "String",
  Info: "String",
});
var result = new mango.model("Netflix", user);

app.post("/post", async (req, res) => {
  var data = await result.create(req.body);
  res.status(200).json({
    data,
  });
});
app.get("/get", async (req, res) => {
  var data = await result.find();
  res.status(200).json({
    data,
  });
});
app.get("/get/:id", async (req, res) => {
  var data = await result.findById(req.params.id);
  res.status(200).json({
    data,
  });
});
app.put("/put/:id", async (req, res) => {
  var data = await result.findById(req.params.id);
  data = await result.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).json({
    data,
  });
});
app.delete("/delete/:id", async (req, res) => {
  var data = await result.findById(req.params.id);
  await data.remove();
  res.status(200).json({
    data,
  });
});
app.listen(2400, () => {
  console.log("listenw");
});
