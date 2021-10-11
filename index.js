var cors = require("cors");
const connectToMongo = require("./db");
var express = require("express");
connectToMongo();
var app = express();
const port = 5000;

app.use(cors());

app.use(express.json());

app.get("/", function (req, res) {
  res.send("hello world");
});
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`listening at port ${port}`);
});
