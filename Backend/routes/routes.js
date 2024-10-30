const {Router} = require('express');
const router = Router();
const {getAlldata} = require('../controller/Get_alldata');
const {filterReviewScore} = require('../controller/Filter_Controller');
const {filterOtherFacility} = require('../controller/Other_Facility')
const {filterRoomViews} = require('../controller/Room_Views');
const {stripepayment} = require('../controller/stripe');
const {signup} = require('../controller/User_Signup');
const {usersignin} = require('../controller/User_Signin');
const {orderhistory,displayorderhistory} = require('../controller/Order_History');
const {postblog} = require('../controller/Blog_Controller')
router.get('/getalldata',getAlldata);
router.post('/reviewscore',filterReviewScore);
router.post('/otherfacility',filterOtherFacility);
router.post('/filterroomview',filterRoomViews);
router.post('/payment',stripepayment)

router.post('/signupapi',signup);
router.post('/signinapi',usersignin);
router.post('/orderhistory',orderhistory);
router.post('/orderhistorydetail',displayorderhistory);
router.post('/blogpost',postblog);
module.exports = router;
