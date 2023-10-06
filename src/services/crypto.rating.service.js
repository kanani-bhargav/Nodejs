const { Crypto_rating } = require("../models");

const get_crypto_rating_by_name = async(crypto_rating_name) => {
    return Crypto_rating.findOne({crypto_rating_name})
}

const create_crypto_rating = async(reqbody) => {
    return Crypto_rating.create(reqbody);
}

const get_crypto_rating_list = async() => {
    return Crypto_rating.find();
}

const get_crypto_rating_by_id = async(crypto_rating_id) => {
    return Crypto_rating.findById(crypto_rating_id);
}

const update_crypto_rating = async(crypto_rating_id,reqbody) => {
    return Crypto_rating.findByIdAndUpdate(crypto_rating_id,{$set:reqbody});
}

const delete_crypto_rating = async(crypto_rating_id) => {
    return Crypto_rating.findByIdAndDelete(crypto_rating_id);
}

module.exports = {
    get_crypto_rating_by_name,
    create_crypto_rating,
    get_crypto_rating_list,
    get_crypto_rating_by_id,
    update_crypto_rating,
    delete_crypto_rating
}