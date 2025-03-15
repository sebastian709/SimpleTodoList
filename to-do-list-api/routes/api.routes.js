const express = require('express');
const router = express.Router();
const customController = require('../controllers/custom.controller');

router.use('/user', require('../controllers/user.controller'));
router.use('/group', require('../controllers/group.controller'));

router.get('/userjoins', customController.userJoins);

router.post('/userRights', customController.userRights);
router.delete('/userRights', customController.deleteRights);
module.exports = router;