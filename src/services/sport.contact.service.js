const { Sport_contact } = require("../models");

// Get sport contact by path
const get_sport_contact_by_path = async(sport_contact_path) => {
    return Sport_contact.findOne({sport_contact_path})
}
// Create sport contact
const create_sport_contact = async(reqbody) => {
    return Sport_contact.create(reqbody);
}
// Sport contact list
const get_sport_contact_list = async() => {
    return Sport_contact.find();
}
// Get sport contact by id
const get_sport_contact_by_id = async(sport_contact_id) => {
    return Sport_contact.findById(sport_contact_id);
}
// Update sport contact
const update_sport_contact = async(sport_contact_id,reqbody) => {
    return Sport_contact.findByIdAndUpdate(sport_contact_id,{$set:reqbody});
}
// Delete sport contact
const delete_sport_contact = async(sport_contact_id) => {
    return Sport_contact.findByIdAndDelete(sport_contact_id);
}

module.exports = {
    get_sport_contact_by_path,
    create_sport_contact,
    get_sport_contact_list,
    get_sport_contact_by_id,
    update_sport_contact,
    delete_sport_contact
}