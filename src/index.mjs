import express, { response } from "express";
import { GetAllData, AddRecipe, getbyid, Delete } from "../db/db.mjs";
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

app.get("/recipes/:id/Edit", async (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) {
    console.log("Invalid ID");
    res.status(400).send("Invalid ID");
    return;
  }

  const found = await getbyid(id);
  console.log("here what we found", found);
  res.render("EditRecipe", {
    recipe: found,
  });
});

app.post("/recipes/:id/delete", async (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) {
    console.log("Invalid ID");
    res.status(400).send("Invalid ID");
    return;
  }

  try {
    const deletedRows = await Delete(id);
    console.log(deletedRows);
    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error deleting recipe");
  }
});

// /recipes/ recipes[i].id/delete
// erorr handling here

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`running or  listenning to ${PORT}`);
});
