const { Comment } = require("../models");

const get_comment_by_topic = async(comment_topic) => {
    return Comment.findOne({comment_topic})
}

const create_comment = async(reqbody) => {
    return Comment.create(reqbody);
}

const get_comment_list = async() => {
    return Comment.find();
}

const get_comment_by_id = async(comment_id) => {
    return Comment.findById(comment_id);
}

const update_comment = async(comment_id,reqbody) => {
    return Comment.findByIdAndUpdate(comment_id,{$set:reqbody});
}

const delete_comment = async(comment_id) => {
    return Comment.findByIdAndDelete(comment_id);
}

module.exports = {
    get_comment_by_topic,
    create_comment,
    get_comment_list,
    get_comment_by_id,
    update_comment,
    delete_comment
}