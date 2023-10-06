const { Crypto_type } = require("../models");

const get_crypto_type_by_name = async(crypto_type_name) => {
    return Crypto_type.findOne({crypto_type_name})
}

const create_crypto_type = async(reqbody) => {
    return Crypto_type.create(reqbody);
}

const get_crypto_type_list = async() => {
    return Crypto_type.find();
}

const get_crypto_type_by_id = async(crypto_type_id) => {
    return Crypto_type.findById(crypto_type_id);
}

const update_crypto_type = async(crypto_type_id,reqbody) => {
    return Crypto_type.findByIdAndUpdate(crypto_type_id,{$set:reqbody});
}

const delete_crypto_type = async(crypto_type_id) => {
    return Crypto_type.findByIdAndDelete(crypto_type_id);
}

module.exports = {
    get_crypto_type_by_name,
    create_crypto_type,
    get_crypto_type_list,
    get_crypto_type_by_id,
    update_crypto_type,
    delete_crypto_type
}