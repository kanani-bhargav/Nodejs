const { Supplier } = require("../models");

const get_supplier_by_name = async(supplier_name) => {
    return Supplier.findOne({supplier_name})
}

const create_supplier = async(reqbody) => {
    return Supplier.create(reqbody);
}

const get_supplier_list = async() => {
    return Supplier.find();
}

const get_supplier_by_id = async(supplier_id) => {
    return Supplier.findById(supplier_id);
}

const update_supplier = async(supplier_id,reqbody) => {
    return Supplier.findByIdAndUpdate(supplier_id,{$set:reqbody});
}

const delete_supplier = async(supplier_id) => {
    return Supplier.findByIdAndDelete(supplier_id);
}

module.exports = {
    get_supplier_by_name,
    create_supplier,
    get_supplier_list,
    get_supplier_by_id,
    update_supplier,
    delete_supplier
}