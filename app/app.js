const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "GitOps pipeline is working!!",
    status: "success"
  });
});

app.listen(3000, () => {
  console.log("App running on port 3000");
});