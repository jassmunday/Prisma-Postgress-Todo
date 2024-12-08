"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todo_controller_1 = require("../controller/todo.controller");
const router = (0, express_1.Router)();
router.post('/', todo_controller_1.createTodo);
router.get('/', todo_controller_1.allTodos);
router.get('/:id', todo_controller_1.getTodoById);
router.put('/:id', todo_controller_1.updateTodo);
router.delete('/:id', todo_controller_1.deleteTodo);
exports.default = router;
