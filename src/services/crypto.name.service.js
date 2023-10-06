const { Crypto } = require("../models");

const get_crypto_by_name = async(crypto) => {
    return Crypto.findOne({crypto})
}

const create_crypto = async(reqbody) => {
    return Crypto.create(reqbody);
}

const get_crypto_list = async() => {
    return Crypto.find();
}

const get_crypto_by_id = async(crypto_id) => {
    return Crypto.findById(crypto_id);
}

const update_crypto = async(crypto_id,reqbody) => {
    return Crypto.findByIdAndUpdate(crypto_id,{$set:reqbody});
}

const delete_crypto = async(crypto_id) => {
    return Crypto.findByIdAndDelete(crypto_id);
}

module.exports = {
    get_crypto_by_name,
    create_crypto,
    get_crypto_list,
    get_crypto_by_id,
    update_crypto,
    delete_crypto
}