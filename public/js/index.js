const addForm = document.getElementById('exampleModal');
const formulario = document.getElementById('formulario');
const addBtn = document.getElementById('add-btn');

// const deleteForm = document.getElementById('exampleModalDelete');
const eliminarFila = document.getElementById('delete-btn');

const miFuncionEliminadora = async (id) => {
	await fetch('http://localhost:4000/todo-delete/' + id, {
		method: 'DELETE',
	});
	window.location.reload();
};

addBtn.addEventListener('click', async (e) => {
	const addTitle = document.getElementById('add-Title');
	const addDesc = document.getElementById('add-Desc');

	// console.log(e.target.id);
	await fetch('http://localhost:4000/todo-create', {
		method: 'POST',
		body: JSON.stringify({
			title: addTitle.value,
			description: addDesc.value,
		}),
		headers: { 'Content-Type': 'application/json' },
	});
	formulario.reset();
	window.location.href = '/';
	// addForm.hide();
});
// .then((res) => res.json())
// .catch((error) => console.error('Error:', error))
// .then((response) => console.log('Success:', response));

document.addEventListener('click', (e) => {
	// let eliminarId = '';
	if (e.target.classList.contains('boton-eliminar')) {
		const fila = e.target.parentNode.parentNode;
		const id = fila.firstElementChild.innerHTML;
		eliminarFila.addEventListener('click', (e) => miFuncionEliminadora(id));
	}
});
