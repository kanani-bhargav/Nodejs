const { Blog } = require("../models");
// Get blog by title
const get_blog_by_title = async(blog_title) => {
    return Blog.findOne({blog_title})
}
// Create blog
const create_blog = async(reqbody) => {
    return Blog.create(reqbody);
}
// Get blog list
const get_blog_list = async() => {
    return Blog.find();
}
// Get blog by id
const get_blog_by_id = async(blog_id) => {
    return Blog.findById(blog_id);
}
// Update blog
const update_blog = async(blog_id,reqbody) => {
    return Blog.findByIdAndUpdate(blog_id,{$set:reqbody});
}
// Delete blog
const delete_blog = async(blog_id) => {
    return Blog.findByIdAndDelete(blog_id);
}
// Exporting services object
module.exports = {
    get_blog_by_title,
    create_blog,
    get_blog_list,
    get_blog_by_id,
    update_blog,
    delete_blog
}