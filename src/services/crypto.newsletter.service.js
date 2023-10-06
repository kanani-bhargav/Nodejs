const { Crypto_newsletter } = require("../models");

const get_crypto_newsletter_by_topic = async(crypto_newsletter_topic) => {
    return Crypto_newsletter.findOne({crypto_newsletter_topic})
}

const create_crypto_newsletter = async(reqbody) => {
    return Crypto_newsletter.create(reqbody);
}

const get_crypto_newsletter_list = async() => {
    return Crypto_newsletter.find();
}

const get_crypto_newsletter_by_id = async(crypto_newsletter_id) => {
    return Crypto_newsletter.findById(crypto_newsletter_id);
}

const update_crypto_newsletter = async(crypto_newsletter_id,reqbody) => {
    return Crypto_newsletter.findByIdAndUpdate(crypto_newsletter_id,{$set:reqbody});
}

const delete_crypto_newsletter = async(crypto_newsletter_id) => {
    return Crypto_newsletter.findByIdAndDelete(crypto_newsletter_id);
}

module.exports = {
    get_crypto_newsletter_by_topic,
    create_crypto_newsletter,
    get_crypto_newsletter_list,
    get_crypto_newsletter_by_id,
    update_crypto_newsletter,
    delete_crypto_newsletter
}