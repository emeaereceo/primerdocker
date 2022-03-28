const express = require('express');
const todoApi = require('./todoApi.routes');

function routerApi(app) {
	app.use('/', todoApi);
}

module.exports = routerApi;
