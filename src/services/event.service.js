const { Event } = require("../models");

const get_event_by_name = async(event_name) => {
    return Event.findOne({event_name})
}

const create_event = async(reqbody) => {
    return Event.create(reqbody);
}

const get_event_list = async() => {
    return Event.find();
}

const get_event_by_id = async(event_id) => {
    return Event.findById(event_id);
}

const update_event = async(event_id,reqbody) => {
    return Event.findByIdAndUpdate(event_id,{$set:reqbody});
}

const delete_event = async(event_id) => {
    return Event.findByIdAndDelete(event_id);
}

module.exports = {
    get_event_by_name,
    create_event,
    get_event_list,
    get_event_by_id,
    update_event,
    delete_event
}