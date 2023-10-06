const { Crypto_calendar } = require("../models");

const get_crypto_calendar_by_name = async(crypto_calendar_name) => {
    return Crypto_calendar.findOne({crypto_calendar_name})
}

const create_crypto_calendar = async(reqbody) => {
    return Crypto_calendar.create(reqbody);
}

const get_crypto_calendar_list = async() => {
    return Crypto_calendar.find();
}

const get_crypto_calendar_by_id = async(crypto_calendar_id) => {
    return Crypto_calendar.findById(crypto_calendar_id);
}

const update_crypto_calendar = async(crypto_calendar_id,reqbody) => {
    return Crypto_calendar.findByIdAndUpdate(crypto_calendar_id,{$set:reqbody});
}

const delete_crypto_calendar = async(crypto_calendar_id) => {
    return Crypto_calendar.findByIdAndDelete(crypto_calendar_id);
}

module.exports = {
    get_crypto_calendar_by_name,
    create_crypto_calendar,
    get_crypto_calendar_list,
    get_crypto_calendar_by_id,
    update_crypto_calendar,
    delete_crypto_calendar
}