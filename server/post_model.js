import pg from "pg";

const Pool = pg.Pool;

const pool = new Pool({
  user: "joshua",
  host: "localhost",
  database: "journal",
  port: 5432,
});

const getPosts = () => {
  return new Promise(function (resolve, reject) {
    pool.query("SELECT * FROM posts", (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results.rows);
    });
  });
};

const createPost = (post) => {
  return new Promise(function (resolve, reject) {
    const { title, content } = post;
    pool.query(
      "INSERT INTO posts (title, content) VALUES ($1, $2) RETURNING *",
      [title, content],
      (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(`A new post has been added: ${results.rows[0]}`);
      }
    );
  });
};

export { getPosts, createPost };