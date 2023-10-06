const { Crypto_potential } = require("../models");

const get_crypto_potential_by_name = async(crypto_potential_name) => {
    return Crypto_potential.findOne({crypto_potential_name})
}

const create_crypto_potential = async(reqbody) => {
    return Crypto_potential.create(reqbody);
}

const get_crypto_potential_list = async() => {
    return Crypto_potential.find();
}

const get_crypto_potential_by_id = async(crypto_potential_id) => {
    return Crypto_potential.findById(crypto_potential_id);
}

const update_crypto_potential = async(crypto_potential_id,reqbody) => {
    return Crypto_potential.findByIdAndUpdate(crypto_potential_id,{$set:reqbody});
}

const delete_crypto_potential = async(crypto_potential_id) => {
    return Crypto_potential.findByIdAndDelete(crypto_potential_id);
}

module.exports = {
    get_crypto_potential_by_name,
    create_crypto_potential,
    get_crypto_potential_list,
    get_crypto_potential_by_id,
    update_crypto_potential,
    delete_crypto_potential
}