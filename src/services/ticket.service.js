const { Ticket } = require("../models");

const get_ticket_by_number = async(ticket_number) => {
    return Ticket.findOne({ticket_number})
}

const create_ticket = async(reqbody) => {
    return Ticket.create(reqbody);
}

const get_ticket_list = async() => {
    return Ticket.find().populate("event_name");
}

const get_ticket_by_id = async(ticket_id) => {
    return Ticket.findById(ticket_id);
}

const update_ticket = async(ticket_id,reqbody) => {
    return Ticket.findByIdAndUpdate(ticket_id,{$set:reqbody});
}

const delete_ticket = async(ticket_id) => {
    return Ticket.findByIdAndDelete(ticket_id);
}

module.exports = {
    get_ticket_by_number,
    create_ticket,
    get_ticket_list,
    get_ticket_by_id,
    update_ticket,
    delete_ticket
}