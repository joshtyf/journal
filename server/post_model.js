import pg from "pg";

const pool = new pg.Pool({
  user: process.env.PSQL_USER || "joshua",
  password: process.env.PSQL_PW || "",
  host: process.env.PSQL_HOST || "localhost",
  database: process.env.PSQL_DB || "journal",
  port: 5432,
  ssl: {
    rejectUnauthorized: false,
  },
});

pool.connect();
pool.on("connect", (client) => console.log("client connected"));
pool.on("error", (err, client) => console.log(err));
pool.on("acquire", (err, client) => console.log("client disconnected"));

const getPosts = () => {
  return new Promise((resolve, reject) => {
    pool
      .query("SELECT * FROM posts ORDER BY updated_at DESC")
      .then((results) => resolve(results.rows))
      .catch((error) => reject(error));
  });
};

const getPost = (id) => {
  return new Promise((resolve, reject) => {
    pool
      .query("SELECT * FROM posts WHERE id = $1", [id])
      .then((results) => {
        resolve(results.rows[0]);
      })
      .catch((error) => reject(error));
  });
};

const createPost = (post) => {
  return new Promise((resolve, reject) => {
    const { title, content, updated_at } = post;
    pool
      .query(
        "INSERT INTO posts (title, content, updated_at) VALUES ($1, $2, $3) RETURNING *",
        [title, content, updated_at]
      )
      .then((results) => resolve(results.rows[0]))
      .catch((error) => reject(error));
  });
};

const updatePost = (updatedPost) => {
  return new Promise((resolve, reject) => {
    const { id, content, updated_at } = updatedPost;
    pool
      .query(
        "UPDATE posts SET content = $1, updated_at = $2 WHERE id = $3 RETURNING *",
        [content, updated_at, id]
      )
      .then((results) => resolve(results.rows[0]))
      .catch((error) => reject(error));
  });
};

const deletePost = (id) => {
  return new Promise((resolve, reject) => {
    pool
      .query("DELETE FROM posts WHERE id = $1 RETURNING id", [id])
      .then((results) => resolve(results.rows[0]))
      .catch((error) => reject(error));
  });
};

export { getPosts, createPost, updatePost, getPost, deletePost };
