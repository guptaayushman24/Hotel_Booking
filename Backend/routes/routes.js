const {Router} = require('express');
const router = Router();

const {getAlldata} = require('../controller/Get_alldata');
const {filterReviewScore} = require('../controller/Filter_Controller');
const {filterOtherFacility} = require('../controller/Other_Facility')
router.get('/getalldata',getAlldata);
router.post('/reviewscore',filterReviewScore);
router.post('/reviewotherfacility',filterOtherFacility);


module.exports = router;
