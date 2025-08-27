import express from "express";
const app = express();
const PORT = 8080;
app.get("/test", (req, res) => {
  return res.status(200).send("<h1>Hello world</h1>");
});

app.listen(PORT, () => {
  console.log(
    `App is running port ${PORT} \n server running on url - http://localhost:${PORT}`
  );
});
