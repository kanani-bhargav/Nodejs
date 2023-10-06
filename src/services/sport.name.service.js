const { Sport_name } = require("../models");

// Find sport name
const get_sport_by_name = async(sport_name) => {
    return Sport_name.findOne({sport_name})
}
// Create sport
const create_sport_name = async(reqbody) => {
    return Sport_name.create(reqbody);
}
// Sport list
const get_sport_list = async() => {
    return Sport_name.find();
}
// Get sport by id
const get_sport_by_id = async(sport_name_id) => {
    return Sport_name.findById(sport_name_id);
}
// Update sport
const update_sport = async(sport_name_id,reqbody) => {
    return Sport_name.findByIdAndUpdate(sport_name_id,{$set:reqbody});
}
// Delete sport
const delete_sport = async(sport_name_id) => {
    return Sport_name.findByIdAndDelete(sport_name_id);
}

module.exports = {
    get_sport_by_name,
    create_sport_name,
    get_sport_list,
    get_sport_by_id,
    update_sport,
    delete_sport
}