const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("server is runiing on port: " + PORT);
});

app.get("/", (req, res) => {
  res.json({ ok: true });
});
