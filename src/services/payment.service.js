const { Payment } = require("../models");

const get_payment_by_payer = async(payer) => {
    return Payment.findOne({payer})
}

const create_payment = async(reqbody) => {
    return Payment.create(reqbody);
}

const get_payment_list = async() => {
    return Payment.find();
}

const get_payment_by_id = async(payment_id) => {
    return Payment.findById(payment_id);
}

const update_payment = async(payment_id,reqbody) => {
    return Payment.findByIdAndUpdate(payment_id,{$set:reqbody});
}

const delete_payment = async(payment_id) => {
    return Payment.findByIdAndDelete(payment_id);
}

module.exports = {
    get_payment_by_payer,
    create_payment,
    get_payment_list,
    get_payment_by_id,
    update_payment,
    delete_payment
}