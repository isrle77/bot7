const express = require("express");
const fs = require("fs");

const app = express();
const port = process.env.PORT || 3000;

// טען את קובץ ה-flow
const flowData = JSON.parse(fs.readFileSync("./chatbot.json", "utf8"));

app.get("/", (req, res) => {
  res.send("Flowise server is running");
});

// נקודת API להצגת תוכן ה-flow (לדוגמה)
app.get("/flow", (req, res) => {
  res.json(flowData);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
