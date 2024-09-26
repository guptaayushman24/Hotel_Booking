const {Router} = require('express');
const router = Router();

const {Load_Data} = require('../controller/Load_Data_in_API');
router.get('/gethoteldata',Load_Data);

module.exports = router;
