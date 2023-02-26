const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
var bodyParser = require('body-parser');
require("dotenv").config();

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.listen(PORT, async () => {
  console.log(`server up on port ${PORT}`);
});

require("./app/routes/pages.routes")(app);

mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });
