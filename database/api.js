require('dotenv').config();
const { Pool } = require('pg');
const pool = new Pool();

const consulta = async (query) => {
	const client = await pool.connect();
	try {
		const datos = await client.query(query);
		return datos.rows;
	} catch (err) {
		console.error(err.message);
		return err;
	} finally {
		client.release();
	}
};

const postTodo = (title, description) => {
	const query = {
		text: 'INSERT INTO todos (title, description) values ($1,$2) RETURNING *',
		values: [title, description],
	};

	return consulta(query);
};

const deleteTodo = (id) => {
	const query = {
		text: 'DELETE FROM todos WHERE id=$1 RETURNING *',
		values: [id],
	};
	return consulta(query);
};

module.exports = { postTodo, deleteTodo };
