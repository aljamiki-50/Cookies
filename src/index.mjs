import express, { response } from "express";
import { GetAllData, AddRecipe, getbyid } from "../db/db.mjs";
const app = express();

app.set("view engine", "ejs");
// it's very important to have it here
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const Mock = [];

app.get("/", async (req, res) => {
  const recipes = await GetAllData();
  // console.log(recipes[0].title)
  res.render("index", {
    num: 20,
    recipes: recipes,
  });
});

// make the receipe
app.get("/make", (req, res) => {
  res.render("Addreceipes");
});

// get the recipe by post
app.post("/recipes", async (req, res) => {
  const { title, ingredients, instructions } = req.body;

  const added = await AddRecipe(title, ingredients, instructions);

  res.redirect("/");
});

// erorr handling here

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`running or  listenning to ${PORT}`);
});
