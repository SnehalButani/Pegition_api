const Comment = require('../controller/control');
const express = require('express');
const app =  express();
const router = express.Router();



router.get('/Comment',Comment.Read);
router.get('/',Comment.Pegition);



module.exports = router;