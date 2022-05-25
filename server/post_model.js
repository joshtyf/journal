import pg from "pg";

const Pool = pg.Pool;

const pool = new Pool({
  user: "joshua",
  host: "localhost",
  database: "journal",
  port: 5432,
});

const getPosts = () => {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM posts", (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results.rows);
    });
  });
};

const getPost = (id) => {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM posts WHERE id = $1", [id], (error, result) => {
      if (error) {
        reject(error);
      }
      resolve(result.rows[0]);
    });
  });
};

const createPost = (post) => {
  return new Promise((resolve, reject) => {
    const { title, content } = post;
    pool.query(
      "INSERT INTO posts (title, content) VALUES ($1, $2) RETURNING *",
      [title, content],
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results.rows[0]);
      }
    );
  });
};

const updatePost = (updatedPost) => {
  return new Promise((resolve, reject) => {
    const { id, content } = updatedPost;
    pool.query(
      "UPDATE posts SET content = $1 WHERE id = $2",
      [content, id],
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(`Post updated`);
      }
    );
  });
};

export { getPosts, createPost, updatePost, getPost };
