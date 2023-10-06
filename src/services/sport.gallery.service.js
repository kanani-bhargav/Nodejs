const { Sport_gallery } = require("../models");

// Get sport gallery by no
const get_sport_gallery_by_no = async(sport_gallery_no) => {
    return Sport_gallery.findOne({sport_gallery_no})
}

const create_sport_gallery = async(reqbody) => {
    return Sport_gallery.create(reqbody);
}

const get_sport_gallery_list = async() => {
    return Sport_gallery.find();
}

const get_sport_gallery_by_id = async(sport_gallery_id) => {
    return Sport_gallery.findById(sport_gallery_id);
}

const update_sport_gallery = async(sport_gallery_id,reqbody) => {
    return Sport_gallery.findByIdAndUpdate(sport_gallery_id,{$set:reqbody});
}

const delete_sport_gallery = async(sport_gallery_id) => {
    return Sport_gallery.findByIdAndDelete(sport_gallery_id);
}

module.exports = {
    get_sport_gallery_by_no,
    create_sport_gallery,
    get_sport_gallery_list,
    get_sport_gallery_by_id,
    update_sport_gallery,
    delete_sport_gallery
}