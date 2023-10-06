const { Sport_team } = require("../models");

const get_sport_team_by_name = async(sport_team_name) => {
    return Sport_team.findOne({sport_team_name})
}

const create_sport_team = async(reqbody) => {
    return Sport_team.create(reqbody);
}

const get_sport_team_list = async() => {
    return Sport_team.find();
}

const get_sport_team_by_id = async(sport_team_id) => {
    return Sport_team.findById(sport_team_id);
}

const update_sport_team = async(sport_team_id,reqbody) => {
    return Sport_team.findByIdAndUpdate(sport_team_id,{$set:reqbody});
}

const delete_sport_team = async(sport_team_id) => {
    return Sport_team.findByIdAndDelete(sport_team_id);
}

module.exports = {
    get_sport_team_by_name,
    create_sport_team,
    get_sport_team_list,
    get_sport_team_by_id,
    update_sport_team,
    delete_sport_team
}