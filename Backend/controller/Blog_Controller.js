const mongoose = require('mongoose');
const BlogSchema = require('../schema/Blogs_Schema');
// For posting the Blog
async function postblog(req, res) {
    try {
        const userblog = req.body;
        if (userblog.Title == '' && userblog.Blog == '') {
            return res.status(203).json({ 'msg': 'Both Title and Blog is required' });
        }
        if (userblog.Title == '') {
            return res.status(201).json({ 'msg': 'Title is required' });
        }
        if (userblog.Blog == '') {
            return res.status(202).json({ 'msg': 'Blog is required' });
        }
        const user = await BlogSchema(userblog).save();

        return res.status(200).json(user);

    }
    catch (err) {

        return res.status(500).json({ 'msg': err.message });
    }
}

// For displaying the Blog
async function displayallblog(req, res) {
    try {
        const data = await BlogSchema.find();
        return res.json(data);
    }
    catch (err) {
        return res.status(500).json({ 'msg': err.message });
    }
}
module.exports = {
    postblog,
    displayallblog
}