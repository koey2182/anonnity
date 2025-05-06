const router = require('express').Router();
const memberController = require('../controller/member_controller');

router.get('/', memberController.getAllMembers);
router.post('/', memberController.createMember);

module.exports = router;