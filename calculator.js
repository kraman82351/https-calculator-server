//the below code is for https server 
const express = require("express");
const https = require("https");
const fs = require("fs");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var height = Number(req.body.num1);
  var weight = Number(req.body.num2);

  var result = weight / (height * height);

  res.send("The result of your calculation is: " + result);
});

const credentials = {
  key: fs.readFileSync("C:/Users/Aman/key.pem"),
  cert: fs.readFileSync("C:/Users/Aman/certificate.pem"),
};

const httpsServer = https.createServer(credentials, app);

httpsServer.listen(3000, function () {
  console.log("HTTPS server is running on port 3000");
});