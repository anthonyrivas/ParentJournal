const express = require('express');
const { api: controller } = require('../../controllers');

const router = express.Router();

router.route('/').get(controller.getMain);

module.exports = router;
