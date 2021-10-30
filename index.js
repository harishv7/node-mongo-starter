const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const db = require("./server/db/connect");
const port = process.env.PORT || 3000;

const users = require("./server/users/routes/users.route");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/health-check", (req, res) => {
  res.json({
    status: "ok",
  });
});

app.use("/users", users);

try {
  db.connection();
} catch (e) {
  console.error(e);
}

app.listen(port, () => {
  console.log("Server started on port: " + port);
});
