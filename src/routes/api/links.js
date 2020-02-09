const express = require('express');
const router = express.Router();

const isAuthenticated = require('../../middleware/isAuthenticated');
const { validatePut, validatePost } = require('./validator/linkValidator');

const Link = require('../../models/links');
const linkController = require('../../controllers/api/links');

// @route GET /api/link
// @desc  Get all links
router.get('/', linkController.getLink);
// router.get('/', isAuthenticated, linkController.getLink);

// @route GET /api/link/:id
// @desc  Get a link
router.get('/:id', linkController.getLink);
// router.get('/:id', isAuthenticated, linkController.getLink);

// @route POST /api/link
// @desc  Create a link
router.post('/', isAuthenticated, validatePost(Link), linkController.create);

// @route PUT /api/link/:id
// @desc  Update a link
router.put('/:id', isAuthenticated, validatePut(Link), linkController.update);

// @route DELETE /api/link/:id
// @desc  Delete a link
router.delete('/:id', isAuthenticated, linkController.delete);

module.exports = router;