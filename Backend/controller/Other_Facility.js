const Hotel = require('../schema/Hotel_Data');
async function filterOtherFacility(req, res){
    try {
        const body = req.body.OtherFacility;
        if (body == 'Spa') {
            const filterd_data = await Hotel.find({
                'OtherFacility': {
                    $eq: "Spa"
                }
            })
            return res.json({ filterd_data });
        }
        else if (body == 'Swimming Pool') {
            const filterd_data = await Hotel.find({
                'OtherFacility': {
                    $eq: "Swimming Pool"

                }
            })
            return res.json({ filterd_data });
        }

        else if (body == 'Wifi') {
            const filterd_data = await Hotel.find({
                'OtherFacility': {
                    $eq: "Wifi"
                }
            })
            return res.json({ filterd_data });
        }
        else {
            return res.json({ 'message': 'Please check the input' });
        }


    }
    catch (err) {
        return res.status(500).json({ 'message': 'Error in filtering the other facility'});
    }
}
module.exports = {
    filterOtherFacility
}