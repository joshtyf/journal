import express from "express";
import cors from "cors";
import { getPosts, createPost, updatePost, getPost } from "./post_model.js";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

const env = process.env.NODE_ENV || "development";
if (env == "production") {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const buildPath = path.join(__dirname, "..", "client", "build");
  app.use(express.static(buildPath));
}

app.get("/api", (req, res) => {
  getPosts()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.get("/api/:id", (req, res) => {
  getPost(req.params.id)
    .then((response) => res.status(200).send(response))
    .catch((error) => res.status(500).send(error));
});

app.post("/api", (req, res) => {
  createPost(req.body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.patch("/api/:id", (req, res) => {
  updatePost(req.body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => res.status(500).send(error));
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
