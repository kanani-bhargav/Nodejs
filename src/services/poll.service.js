const { Poll } = require("../models");

const get_poll_by_question = async(poll_question) => {
    return Poll.findOne({poll_question})
}

const create_poll = async(reqbody) => {
    return Poll.create(reqbody);
}

const get_poll_list = async() => {
    return Poll.find();
}

const get_poll_by_id = async(poll_id) => {
    return Poll.findById(poll_id);
}

const update_poll = async(poll_id,reqbody) => {
    return Poll.findByIdAndUpdate(poll_id,{$set:reqbody});
}

const delete_poll = async(poll_id) => {
    return Poll.findByIdAndDelete(poll_id);
}

module.exports = {
    get_poll_by_question,
    create_poll,
    get_poll_list,
    get_poll_by_id,
    update_poll,
    delete_poll
}