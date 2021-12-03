"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _tasks = require("../controllers/tasks.controller");

var router = (0, _express.Router)();
router.get("/", _tasks.renderTasks);
router.post("/tasks/add", _tasks.createTask);
router.get("/tasks/:id/edit", _tasks.renderTaskEdit);
router.post("/tasks/:id/edit", _tasks.updateTask);
router.get("/tasks/:id/delete", _tasks.deleteTask);
router.get("/toggleDone/:id", _tasks.toggleDone);
var _default = router;
exports["default"] = _default;