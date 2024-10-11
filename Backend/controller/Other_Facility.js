// const Hotel = require('../schema/Hotel_Data');
// async function filterOtherFacility(req, res){
//     try {
//         const body = req.body.OtherFacility;
//         console.log(req.body);
//         if (body == 'Spa') {
//             const filterd_data = await Hotel.find({
//                 'OtherFacility': {
//                     $eq: "Spa"
//                 }
//             })
//             return res.json({ filterd_data });
//         }
//         else if (body == 'Swimming Pool') {
//             const filterd_data = await Hotel.find({
//                 'OtherFacility': {
//                     $eq: "Swimming Pool"

//                 }
//             })
//             return res.json({ filterd_data });
//         }

//         else if (body == 'Wifi') {
//             const filterd_data = await Hotel.find({
//                 'OtherFacility': {
//                     $eq: "Wifi"
//                 }
//             })
//             return res.json({ filterd_data });
//         }
//         else {
//             return res.json({ 'message': 'Please check the input' });
//         }


//     }
//     catch (err) {
//         return res.status(500).json({ 'message': 'Error in filtering the other facility'});
//     }
// }
// module.exports = {
//     filterOtherFacility
// }




const Hotel = require('../schema/Hotel_Data');

async function filterOtherFacility(req, res) {
    try {
        const { OtherFacility } = req.body;  // Destructure OtherFacility from the request body
        console.log("Request Body:", req.body);

        // Check if OtherFacility exists and is not empty
        if (!OtherFacility) {
            return res.status(400).json({ message: 'OtherFacility field is required' });
        }

        // Valid facility options
        const validFacilities = ['Spa', 'Swimming Pool', 'Wifi'];

        // Check if the input is a valid facility
        if (!validFacilities.includes(OtherFacility)) {
            return res.status(400).json({ message: 'Invalid OtherFacility input' });
        }

        // Fetch hotels that match the facility
        const filterd_data = await Hotel.find({
            'OtherFacility': { $eq: OtherFacility }
        });

        // Return filtered data
        return res.status(200).json({ filterd_data });
        
    } catch (err) {
        console.error("Error in filtering the other facility:", err);
        return res.status(500).json({ message: 'Error in filtering the other facility' });
    }
}

module.exports = {
    filterOtherFacility
};
