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
const {postblog,displayallblog} = require('../controller/Blog_Controller');
const {checkuser} = require('../controller/Find_User');
const { updateuserpassword } = require('../controller/Change_Password');
const {deleteallorder} = require('../controller/Delete_Order_History')
router.get('/getalldata',getAlldata);
router.post('/reviewscore',filterReviewScore);
router.post('/otherfacility',filterOtherFacility);
router.post('/filterroomview',filterRoomViews);

router.post('/payment',stripepayment)
router.post('/signupapi',signup);
router.post('/signinapi',usersignin);
router.post('/orderhistory',orderhistory);
router.post('/orderhistorydetail',displayorderhistory);
router.post('/checkuser',checkuser)
router.post('/blogpost',postblog);
router.get('/allblogs',displayallblog)
router.put('/updatepassword',updateuserpassword);
router.delete('/deleteallorderhistory/:useremail',deleteallorder)
module.exports = router;
