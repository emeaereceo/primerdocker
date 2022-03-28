const express = require('express');
const getTodos = require('../database/get-todos');
const { postTodo, deleteTodo } = require('../database/api.js');

const router = express.Router();

const app = express();
router.use(express.json());
// app.use(express.urlencoded({ extended: false }));

router.get('/', async (req, res) => {
	const todos = await getTodos();
	res.render('home', { todos });
});

router.post('/todo-create', async (req, res) => {
	const { title, description } = req.body;
	const respuesta = await postTodo(title, description);

	return res.json(respuesta);
});

router.delete('/todo-delete/:id', async (req, res) => {
	const { id } = req.params;
	const respuesta = await deleteTodo(id);
	return res.json(respuesta);
});

module.exports = router;
