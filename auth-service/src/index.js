const express = require("express");
const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "Auth service is healthy" });
});

app.post("/login", (req, res) => {
  const { username } = req.body;
  res.json({
    message: "Login successful",
    user: username || "demo-user"
  });
});

app.listen(3001, () => {
  console.log("Auth service running on port 3001");
});

