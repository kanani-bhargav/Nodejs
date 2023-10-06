const { Crypto_founder } = require("../models");

const get_crypto_founder_by_name = async(crypto_founder_name) => {
    return Crypto_founder.findOne({crypto_founder_name})
}

const create_crypto_founder = async(reqbody) => {
    return Crypto_founder.create(reqbody);
}

const get_crypto_founder_list = async() => {
    return Crypto_founder.find();
}

const get_crypto_founder_by_id = async(crypto_founder_id) => {
    return Crypto_founder.findById(crypto_founder_id);
}

const update_crypto_founder = async(crypto_founder_id,reqbody) => {
    return Crypto_founder.findByIdAndUpdate(crypto_founder_id,{$set:reqbody});
}

const delete_crypto_founder = async(crypto_founder_id) => {
    return Crypto_founder.findByIdAndDelete(crypto_founder_id);
}

module.exports = {
    get_crypto_founder_by_name,
    create_crypto_founder,
    get_crypto_founder_list,
    get_crypto_founder_by_id,
    update_crypto_founder,
    delete_crypto_founder
}