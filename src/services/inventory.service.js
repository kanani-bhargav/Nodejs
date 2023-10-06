const { Inventory } = require("../models");

const get_inventory_by_name = async(item_name) => {
    return Inventory.findOne({item_name})
}

const create_inventory = async(reqbody) => {
    return Inventory.create(reqbody);
}

const get_inventory_list = async() => {
    return Inventory.find();
}

const get_inventory_by_id = async(inventory_id) => {
    return Inventory.findById(inventory_id);
}

const update_inventory = async(inventory_id,reqbody) => {
    return Inventory.findByIdAndUpdate(inventory_id,{$set:reqbody});
}

const delete_inventory = async(inventory_id) => {
    return Inventory.findByIdAndDelete(inventory_id);
}

module.exports = {
    get_inventory_by_name,
    create_inventory,
    get_inventory_list,
    get_inventory_by_id,
    update_inventory,
    delete_inventory
}