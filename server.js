const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Harshit Fast Food & Pizza WhatsApp Bot is running!");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Bot running on port ${PORT}`);
});
