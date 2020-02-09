const express = require('express');
const router = express.Router();

const isAuthenticated = require('../../middleware/isAuthenticated');
const { validatePut, validatePost } = require('./validator/userValidator');

const User = require('../../models/users');
const userController = require('../../controllers/api/users');

// @route GET /api/user
// @desc  Get all users
router.get('/', userController.getUsers);
// router.get('/', isAuthenticated, userController.getUsers);

// @route PUT /api/user
// @desc  Signup user
router.put('/', validatePut(User), userController.signup);

// @route POST /api/user
// @desc  Login user
router.post('/', validatePost(), userController.login);

module.exports = router;