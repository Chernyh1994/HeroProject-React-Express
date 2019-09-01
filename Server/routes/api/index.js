const express = require('express');
const router = express.Router();

router.use('/heroes', require('./hero'));

module.exports = router;
