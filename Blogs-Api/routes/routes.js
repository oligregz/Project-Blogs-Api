const express = require('express');

const routes = express.Router();

// import middlewares

const validateCreateUser = require('../middlewares/validateCreateUser');
const validateLogin = require('../middlewares/validateLogin');
const validateToken = require('../middlewares/validateToken');
const validatePOST = require('../middlewares/validatePOST');

// import controllers

const req1PostUsers = require('../controllers/postUser');
const req2PostLogin = require('../controllers/postLogin');
const req3GetUser = require('../controllers/getUser');
const req4GetUserId = require('../controllers/getUserId');
const req5PostCategories = require('../controllers/postCategories');
const req6GetCategories = require('../controllers/getCategories');
const req7PostPOST = require('../controllers/postPOST');
const req8GetPost = require('../controllers/getPost');

// using method

routes.post('/user', validateCreateUser, req1PostUsers);
routes.post('/login', validateLogin, req2PostLogin);
routes.get('/user', validateToken, req3GetUser);
routes.get('/user/:id', validateToken, req4GetUserId);
routes.post('/categories', validateToken, req5PostCategories);
routes.get('/categories', validateToken, req6GetCategories);
routes.post('/post', validateToken, validatePOST, req7PostPOST);
routes.get('/post', validateToken, req8GetPost);

module.exports = routes;
