import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 4000;
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "blog",
  password: "2021",
  port: 5432,
});


db.connect();
// In-memory data store
let posts = [
];

let lastId = 3;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Write your code here//

//CHALLENGE 1: GET All posts
app.get("/posts", async (req, res) => {
  const blog = await db.query("SELECT * FROM posts ORDER BY id ASC;");
  posts = blog.rows;
  res.json(posts);
});

//CHALLENGE 2: GET a specific post by id

app.get("/posts/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const result = await db.query("SELECT * FROM posts WHERE id = $1", [
    id
  ]);
  const specificpost = result.rows;
  //const specificpost= posts.find((post) =>  post.id === id );
  console.log("called specific post");
  res.json(specificpost);


});

//CHALLENGE 3: POST a new post

app.post("/posts", async (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  const author = req.body.author;
  // const date = new Date();
  const result = await db.query("INSERT INTO posts (title,content,author) VALUES($1,$2,$3)", [
    title, content, author
  ]);
  const newpost = result.rows;
  res.json(newpost);
});

//CHALLENGE 4: PATCH a post when you just want to update one parameter
app.patch("/posts/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const result = await db.query("SELECT * FROM posts WHERE id = $1", [
    id
  ]);

  const existingpost = result.rows;
  console.log(existingpost);

  const title = req.body.title || existingpost.title;
  const content = req.body.content || existingpost.content;
  const author = req.body.author || existingpost.author;

  console.log(title);
  console.log(content);
  console.log(author);

  const modify = await db.query("UPDATE posts SET title= $1,content =$2,author =$3 WHERE id=$4", [
    title, content, author, id
  ]);
  const replacementpost=modify.rows;
  res.json(replacementpost);

});

//CHALLENGE 5: DELETE a specific post by providing the post id.
app.delete("/posts/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const result = await db.query("DELETE FROM  posts WHERE id=$1", [
    id
  ]);
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`API is running at http://localhost:${port}`);
});
