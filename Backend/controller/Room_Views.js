const Hotel = require('../schema/Hotel_Data');
async function filterRoomViews(req, res){
    try {
        const body = req.body.RoomViews;
        if (body == 'City View') {
            const filterd_data = await Hotel.find({
                'RoomViews': {
                    $eq: "City View"
                }
            })
            return res.json({ filterd_data });
        }
        else if (body == 'Garden View') {
            const filterd_data = await Hotel.find({
                'RoomViews': {
                    $eq: "Garden View"

                }
            })
            return res.json({ filterd_data });
        }
        else if (body == 'Pool View') {
            const filterd_data = await Hotel.find({
                'RoomViews': {
                    $eq: "Pool View"
                }
            })
            return res.json({ filterd_data });
        }

        else if (body == 'Sea View') {
            const filterd_data = await Hotel.find({
                'RoomViews': {
                    $eq: "Sea View"

                }
            })
            return res.json({ filterd_data });
        }

       
        else {
            return res.json({ 'message': 'Please check the input' });
        }


    }
    catch (err) {
        return res.status(500).json({ 'message': 'Error in filtering the Room Views'});
    }
}
module.exports = {
    filterRoomViews
}