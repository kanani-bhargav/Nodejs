const { Sport_category } = require("../models");

const get_sport_category_by_name = async(sport_category_name) => {
    return Sport_category.findOne({sport_category_name})
}

const create_sport_category = async(reqbody) => {
    return Sport_category.create(reqbody);
}

const get_sport_category_list = async() => {
    return Sport_category.find();
}

const get_sport_category_by_id = async(sport_category_id) => {
    return Sport_category.findById(sport_category_id);
}

const update_sport_category = async(sport_category_id,reqbody) => {
    return Sport_category.findByIdAndUpdate(sport_category_id,{$set:reqbody});
}

const delete_sport_category = async(sport_category_id) => {
    return Sport_category.findByIdAndDelete(sport_category_id);
}

module.exports = {
    get_sport_category_by_name,
    create_sport_category,
    get_sport_category_list,
    get_sport_category_by_id,
    update_sport_category,
    delete_sport_category
}