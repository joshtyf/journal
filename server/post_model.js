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
    pool.query(
      "SELECT * FROM posts ORDER BY updated_at DESC",
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results.rows);
      }
    );
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
    const { title, content, updated_at } = post;
    pool.query(
      "INSERT INTO posts (title, content, updated_at) VALUES ($1, $2, $3) RETURNING *",
      [title, content, updated_at],
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
    const { id, content, updated_at } = updatedPost;
    pool.query(
      "UPDATE posts SET content = $1, updated_at = $2 WHERE id = $3 RETURNING *",
      [content, updated_at, id],
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results.rows[0]);
      }
    );
  });
};

const deletePost = (id) => {
  return new Promise((resolve, reject) => {
    pool.query(
      "DELETE FROM posts WHERE id = $1 RETURNING id",
      [id],
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results.rows[0]);
      }
    );
  });
};

export { getPosts, createPost, updatePost, getPost, deletePost };
