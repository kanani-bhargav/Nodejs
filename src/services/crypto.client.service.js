const { Crypto_client } = require("../models");

const get_crypto_client_by_name = async(crypto_client_name) => {
    return Crypto_client.findOne({crypto_client_name})
}

const create_crypto_client = async(reqbody) => {
    return Crypto_client.create(reqbody);
}

const get_crypto_client_list = async() => {
    return Crypto_client.find();
}

const get_crypto_client_by_id = async(crypto_client_id) => {
    return Crypto_client.findById(crypto_client_id);
}

const update_crypto_client = async(crypto_client_id,reqbody) => {
    return Crypto_client.findByIdAndUpdate(crypto_client_id,{$set:reqbody});
}

const delete_crypto_client = async(crypto_client_id) => {
    return Crypto_client.findByIdAndDelete(crypto_client_id);
}

module.exports = {
    get_crypto_client_by_name,
    create_crypto_client,
    get_crypto_client_list,
    get_crypto_client_by_id,
    update_crypto_client,
    delete_crypto_client
}