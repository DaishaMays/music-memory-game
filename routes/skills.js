var express = require('express');
var router = express.Router();
const skillsController = require('../controllers/skills');


router.get('/new', skillsController.new);
router.get('/', skillsController.index);
router.get('/:id', skillsController.show);
router.post('/', skillsController.create);
router.delete('/:id', skillsController.delete);

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('Respond with resource');
// });

// router.get('/skills', function(req, res, next) {
//   res.send('These are my skills');
// });

module.exports = router;
