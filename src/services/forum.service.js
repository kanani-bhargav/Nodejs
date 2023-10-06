const { Forum } = require("../models");

const get_forum_by_topic = async(forum_topic) => {
    return Forum.findOne({forum_topic})
}

const create_forum = async(reqbody) => {
    return Forum.create(reqbody);
}

const get_forum_list = async() => {
    return Forum.find();
}

const get_forum_by_id = async(forum_id) => {
    return Forum.findById(forum_id);
}

const update_forum = async(forum_id,reqbody) => {
    return Forum.findByIdAndUpdate(forum_id,{$set:reqbody});
}

const delete_forum = async(forum_id) => {
    return Forum.findByIdAndDelete(forum_id);
}

module.exports = {
    get_forum_by_topic,
    create_forum,
    get_forum_list,
    get_forum_by_id,
    update_forum,
    delete_forum
}