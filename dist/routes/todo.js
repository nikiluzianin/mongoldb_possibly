"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todos_1 = require("../controllers/todos");
const router = (0, express_1.Router)();
router.post('/', todos_1.createTodo);
/*router.get('/', getTodos);
router.patch('/:id', updateTodo);
router.delete('/:id', deleteTodo);*/
exports.default = router;
