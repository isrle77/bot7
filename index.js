const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.json()); // כדי לפרסר JSON בבקשות POST

const port = process.env.PORT || 3000;

const flowData = JSON.parse(fs.readFileSync("./chatbot.json", "utf8"));

// כאן צריך להוסיף את האובייקט או הלוגיקה שמריצה את ה-flow
// לדוגמה, אם יש לך אובייקט flow שמריץ את השיחה:
const flow =
  /* יצירת מופע או טעינת ה-flow */

  app.post("/chat", async (req, res) => {
    const question = req.body.question;
    if (!question) return res.status(400).send("Missing question");

    try {
      // כאן צריך לקרוא לפונקציה שמריצה את השאלה ב-flow
      // לדוגמה: const answer = await flow.run(question);

      // כרגע נשיב בדוגמה פשוטה
      const answer = `קיבלתי את השאלה: ${question}`;

      res.json({ answer });
    } catch (error) {
      res.status(500).send("Error: " + error.message);
    }
  });

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
