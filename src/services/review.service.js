const { Review } = require("../models");

const get_review_by_topic = async(review_topic) => {
    return Review.findOne({review_topic})
}

const create_review = async(reqbody) => {
    return Review.create(reqbody);
}

const get_review_list = async() => {
    return Review.find();
}

const get_review_by_id = async(review_id) => {
    return Review.findById(review_id);
}

const update_review = async(review_id,reqbody) => {
    return Review.findByIdAndUpdate(review_id,{$set:reqbody});
}

const delete_review = async(review_id) => {
    return Review.findByIdAndDelete(review_id);
}

module.exports = {
    get_review_by_topic,
    create_review,
    get_review_list,
    get_review_by_id,
    update_review,
    delete_review
}