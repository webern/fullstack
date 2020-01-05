const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/status", (req, res) => {
  res.json({ status: 'ok', message: "Hello Bones 🐈" })
});

app.listen(PORT, () => {
  console.log(`🐈 Bones prefers port ${PORT} 🐈`);
});
