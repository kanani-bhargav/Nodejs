const { Crypto_news } = require("../models");

const get_crypto_news_by_name = async(crypto_news_name) => {
    return Crypto_news.findOne({crypto_news_name})
}

const create_crypto_news = async(reqbody) => {
    return Crypto_news.create(reqbody);
}

const get_crypto_news_list = async() => {
    return Crypto_news.find();
}

const get_crypto_news_by_id = async(crypto_news_id) => {
    return Crypto_news.findById(crypto_news_id);
}

const update_crypto_news = async(crypto_news_id,reqbody) => {
    return Crypto_news.findByIdAndUpdate(crypto_news_id,{$set:reqbody});
}

const delete_crypto_news = async(crypto_news_id) => {
    return Crypto_news.findByIdAndDelete(crypto_news_id);
}

module.exports = {
    get_crypto_news_by_name,
    create_crypto_news,
    get_crypto_news_list,
    get_crypto_news_by_id,
    update_crypto_news,
    delete_crypto_news
}