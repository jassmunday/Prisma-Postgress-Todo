"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const errorHandler_1 = require("./middleware/errorHandler");
const todo_routes_1 = __importDefault(require("./routes/todo.routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
//Routes
app.use('/api/todo', todo_routes_1.default);
app.use(errorHandler_1.errorHandler);
exports.default = app;
