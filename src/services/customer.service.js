const { Customer } = require("../models");

const get_customer_by_code = async(customer_code) => {
    return Customer.findOne({customer_code})
}

const create_customer = async(reqbody) => {
    return Customer.create(reqbody);
}

const get_customer_list = async() => {
    return Customer.find();
}

const get_customer_by_id = async(customer_id) => {
    return Customer.findById(customer_id);
}

const update_customer = async(customer_id,reqbody) => {
    return Customer.findByIdAndUpdate(customer_id,{$set:reqbody});
}

const delete_customer = async(customer_id) => {
    return Customer.findByIdAndDelete(customer_id);
}

module.exports = {
    get_customer_by_code,
    create_customer,
    get_customer_list,
    get_customer_by_id,
    update_customer,
    delete_customer
}