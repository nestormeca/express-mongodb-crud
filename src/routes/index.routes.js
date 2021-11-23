import { Router } from "express";
import Task from "../models/Task";

const router = Router();

router.get("/", async (req, res) => {
  const tasks = await Task.find().lean();

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

router.get("/edit", (req, res) => {
  res.render("edit");
});

router.post("/edit", (req, res) => {
  console.log(req.body);
  res.send("received");
});

export default router;
