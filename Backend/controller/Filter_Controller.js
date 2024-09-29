const Hotel = require('../schema/Hotel_Data');
async function filterReviewScore(req, res) {
    try {
        const body = req.body.ReviewScore;
        if (body == 'Very Good') {
            const filterd_data = await Hotel.find({
                'ReviewScore': {
                    $eq: "Very Good"
                }
            })
            return res.json({ filterd_data });
        }
        else if (body == 'Good') {
            const filterd_data = await Hotel.find({
                'ReviewScore': {
                    $eq: "Good"
                
                }
            })
            return res.json({ filterd_data });
        }

        else if (body == 'Excellent') {
            const filterd_data = await Hotel.find({
                'ReviewScore': {
                    $eq: "Excellent"
                }
            })
            return res.json({ filterd_data });
        }
        else if ('Wonderful'){
            const filterd_data = await Hotel.find({
                'ReviewScore': {
                    $eq: "Wonderful"
                }
            })
            return res.json({ filterd_data });

        }
        else{
            return res.json({'message':'Please check the input'});
        }


    }
    catch (err) {
        return res.status(500).json({ 'message': 'Error in filtering the review score' });
    }
}
module.exports = {
    filterReviewScore
}