const { Invoice } = require("../models");

const get_invoice_by_no = async(invoice_no) => {
    return Invoice.findOne({invoice_no})
}

const create_invoice = async(reqbody) => {
    return Invoice.create(reqbody);
}

const get_invoice_list = async() => {
    return Invoice.find();
}

const get_invoice_by_id = async(invoice_id) => {
    return Invoice.findById(invoice_id);
}

const update_invoice = async(invoice_id,reqbody) => {
    return Invoice.findByIdAndUpdate(invoice_id,{$set:reqbody});
}

const delete_invoice = async(invoice_id) => {
    return Invoice.findByIdAndDelete(invoice_id);
}

module.exports = {
    get_invoice_by_no,
    create_invoice,
    get_invoice_list,
    get_invoice_by_id,
    update_invoice,
    delete_invoice
}