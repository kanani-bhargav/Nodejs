const { Employee } = require("../models");

const get_employee_by_email = async(employee_email) => {
    return Employee.findOne({employee_email})
}

const create_employee = async(reqbody) => {
    return Employee.create(reqbody);
}

const get_employee_list = async() => {
    return Employee.find();
}

const get_employee_by_id = async(employee_id) => {
    return Employee.findById(employee_id);
}

const update_employee = async(employee_id,reqbody) => {
    return Employee.findByIdAndUpdate(employee_id,{$set:reqbody});
}

const delete_employee = async(employee_id) => {
    return Employee.findByIdAndDelete(employee_id);
}

module.exports = {
    get_employee_by_email,
    create_employee,
    get_employee_list,
    get_employee_by_id,
    update_employee,
    delete_employee
}