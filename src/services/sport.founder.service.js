const { Sport_founder } = require("../models");

// Sport founder by name
const get_sport_founder_by_name = async(sport_founder_name) => {
    return Sport_founder.findOne({sport_founder_name})
}
// Create sport founder
const create_sport_founder = async(reqbody) => {
    return Sport_founder.create(reqbody);
}
// Sport founder list
const get_sport_founder_list = async() => {
    return Sport_founder.find().populate("sport");
}
// Sport founder by id
const get_sport_founder_by_id = async(sport_founder_id) => {
    return Sport_founder.findById(sport_founder_id);
}
// Update sport founder
const update_sport_founder = async(sport_founder_id,reqbody) => {
    return Sport_founder.findByIdAndUpdate(sport_founder_id,{$set:reqbody});
}
// Delete sport founder
const delete_sport_founder = async(sport_founder_id) => {
    return Sport_founder.findByIdAndDelete(sport_founder_id);
}

module.exports = {
    get_sport_founder_by_name,
    create_sport_founder,
    get_sport_founder_list,
    get_sport_founder_by_id,
    update_sport_founder,
    delete_sport_founder
}