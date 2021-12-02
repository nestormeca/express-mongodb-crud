import { Router } from "express";
import {
  renderTasks,
  createTask,
  renderTaskEdit,
  updateTask,
  deleteTask,
  toggleDone,
} from "../controllers/tasks.controller";

const router = Router();

router.get("/", renderTasks);

router.post("/tasks/add", createTask);

router.get("/tasks/:id/edit", renderTaskEdit);

router.post("/tasks/:id/edit", updateTask);

router.get("/tasks/:id/delete", deleteTask);

router.get("/toggleDone/:id", toggleDone);

export default router;
