const { Crypto_faq } = require("../models");

const get_crypto_faq_by_name = async(crypto_faq_name) => {
    return Crypto_faq.findOne({crypto_faq_name})
}

const create_crypto_faq = async(reqbody) => {
    return Crypto_faq.create(reqbody);
}

const get_crypto_faq_list = async() => {
    return Crypto_faq.find();
}

const get_crypto_faq_by_id = async(crypto_faq_id) => {
    return Crypto_faq.findById(crypto_faq_id);
}

const update_crypto_faq = async(crypto_faq_id,reqbody) => {
    return Crypto_faq.findByIdAndUpdate(crypto_faq_id,{$set:reqbody});
}

const delete_crypto_faq = async(crypto_faq_id) => {
    return Crypto_faq.findByIdAndDelete(crypto_faq_id);
}

module.exports = {
    get_crypto_faq_by_name,
    create_crypto_faq,
    get_crypto_faq_list,
    get_crypto_faq_by_id,
    update_crypto_faq,
    delete_crypto_faq
}