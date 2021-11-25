import { Router } from "express";
import Task from "../models/Task";

const router = Router();

router.get("/", async (req, res) => {
  const tasks = await Task.find().lean();
  //con el metodo .lean te devuelve un json tipico leido por js
  res.render("index", { tasks: tasks });
});

router.post("/tasks/add", async (req, res) => {
  try {
    const task = Task(req.body);
    const taskSaved = await task.save();
    res.redirect("/");
  } catch {
    console.log(error);
  }

  //res.send("add task");
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/edit/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).lean();

    res.render("edit", { task });
  } catch {
    error;
  }
  {
    console.log(error.message);
  }
});

router.post("/edit/:id", async (req, res) => {
  const { id } = req.params;

  await Task.findByIdAndUpdate(id, req.body);

  res.redirect("/");
});

router.get("/delete/:id", async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndDelete(id);
  res.redirect("/");
});

export default router;
