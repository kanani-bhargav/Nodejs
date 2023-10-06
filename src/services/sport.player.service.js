const { Sport_player } = require("../models");

const get_sport_player_by_name = async(sport_player_name) => {
    return Sport_player.findOne({sport_player_name})
}

const create_sport_player = async(reqbody) => {
    return Sport_player.create(reqbody);
}

const get_sport_player_list = async() => {
    return Sport_player.find();
}

const get_sport_player_by_id = async(sport_player_id) => {
    return Sport_player.findById(sport_player_id);
}

const update_sport_player = async(sport_player_id,reqbody) => {
    return Sport_player.findByIdAndUpdate(sport_player_id,{$set:reqbody});
}

const delete_sport_player = async(sport_player_id) => {
    return Sport_player.findByIdAndDelete(sport_player_id);
}

module.exports = {
    get_sport_player_by_name,
    create_sport_player,
    get_sport_player_list,
    get_sport_player_by_id,
    update_sport_player,
    delete_sport_player
}