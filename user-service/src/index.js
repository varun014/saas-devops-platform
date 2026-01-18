const express = require("express");
const app = express();

app.get("/health", (req, res) => {
  res.json({ status: "User service is healthy" });
});

app.get("/users", (req, res) => {
  res.json([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
  ]);
});

app.listen(3002, () => {
  console.log("User service running on port 3002");
});

