const { Crypto_link } = require("../models");

const get_crypto_link_by_name = async(crypto_link_name) => {
    return Crypto_link.findOne({crypto_link_name})
}

const create_crypto_link = async(reqbody) => {
    return Crypto_link.create(reqbody);
}

const get_crypto_link_list = async() => {
    return Crypto_link.find();
}

const get_crypto_link_by_id = async(crypto_link_id) => {
    return Crypto_link.findById(crypto_link_id);
}

const update_crypto_link = async(crypto_link_id,reqbody) => {
    return Crypto_link.findByIdAndUpdate(crypto_link_id,{$set:reqbody});
}

const delete_crypto_link = async(crypto_link_id) => {
    return Crypto_link.findByIdAndDelete(crypto_link_id);
}

module.exports = {
    get_crypto_link_by_name,
    create_crypto_link,
    get_crypto_link_list,
    get_crypto_link_by_id,
    update_crypto_link,
    delete_crypto_link
}