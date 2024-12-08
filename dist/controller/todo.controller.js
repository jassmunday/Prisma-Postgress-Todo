"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.getTodoById = exports.updateTodo = exports.createTodo = exports.allTodos = void 0;
const client_1 = __importDefault(require("../prisma/client"));
const allTodos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todos = yield client_1.default.todo.findMany();
        res.status(200).json(todos);
    }
    catch (error) {
        res.status(400).json(error);
    }
});
exports.allTodos = allTodos;
const createTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description } = req.body;
        const todo = yield client_1.default.todo.create({
            data: { title, description },
        });
        res.status(201).json(todo);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.createTodo = createTodo;
// Update a Todo by ID
const updateTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { title, description } = req.body;
        const todo = yield client_1.default.todo.update({
            where: { id: Number(id) },
            data: { title, description },
        });
        res.json(todo);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.updateTodo = updateTodo;
const getTodoById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const todo = yield client_1.default.todo.findUnique({
            where: { id: Number(id) },
        });
        if (!todo) {
            res.status(404).json({ msg: "Not Found" });
        }
        res.status(200).json(todo);
    }
    catch (error) {
        res.status(200).json({ msg: `Error: ${error}` });
    }
});
exports.getTodoById = getTodoById;
// Delete a Todo by ID
const deleteTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield client_1.default.todo.delete({
            where: { id: Number(id) },
        });
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.deleteTodo = deleteTodo;
