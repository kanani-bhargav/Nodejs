const { Buyer } = require("../models");

const get_buyer_by_name = async(buyer_name) => {
    return Buyer.findOne({buyer_name})
}

const create_buyer = async(reqbody) => {
    return Buyer.create(reqbody);
}

const get_buyer_list = async() => {
    return Buyer.find();
}

const get_buyer_by_id = async(buyer_id) => {
    return Buyer.findById(buyer_id);
}

const update_buyer = async(buyer_id,reqbody) => {
    return Buyer.findByIdAndUpdate(buyer_id,{$set:reqbody});
}

const delete_buyer = async(buyer_id) => {
    return Buyer.findByIdAndDelete(buyer_id);
}

module.exports = {
    get_buyer_by_name,
    create_buyer,
    get_buyer_list,
    get_buyer_by_id,
    update_buyer,
    delete_buyer
}