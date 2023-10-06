const { Tag } = require("../models");
// Get tag by name
const get_tag_by_name = async(tag_name) => {
    return Tag.findOne({tag_name})
}
// Create tag
const create_tag = async(reqbody) => {
    return Tag.create(reqbody);
}
// Get tag list
const get_tag_list = async() => {
    return Tag.find();
}
// Get tag by id
const get_tag_by_id = async(tag_id) => {
    return Tag.findById(tag_id);
}
// Update tag by id
const update_tag = async(tag_id,reqbody) => {
    return Tag.findByIdAndUpdate(tag_id,{$set:reqbody});
}
// Delete tag
const delete_tag = async(tag_id) => {
    return Tag.findByIdAndDelete(tag_id);
}
// Exporting services object
module.exports = {
    get_tag_by_name,
    create_tag,
    get_tag_list,
    get_tag_by_id,
    update_tag,
    delete_tag
}
