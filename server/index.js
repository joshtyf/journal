import express from "express";
import { getPosts, createPost } from "./post_model.js";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json())

app.get("/", (req, res) => {
  getPosts()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.post("/", (req, res) => {
  console.log(req.body);
  createPost(req.body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
