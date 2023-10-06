const { Vehicle } = require("../models");

const get_vehicle_by_model = async(vehicle_modelf) => {
    return Vehicle.findOne({vehicle_modelf})
}

const create_vehicle = async(reqbody) => {
    return Vehicle.create(reqbody);
}

const get_vehicle_list = async() => {
    return Vehicle.find();
}

const get_vehicle_by_id = async(vehicle_id) => {
    return Vehicle.findById(vehicle_id);
}

const update_vehicle = async(vehicle_id,reqbody) => {
    return Vehicle.findByIdAndUpdate(vehicle_id,{$set:reqbody});
}

const delete_vehicle = async(vehicle_id) => {
    return Vehicle.findByIdAndDelete(vehicle_id);
}

module.exports = {
    get_vehicle_by_model,
    create_vehicle,
    get_vehicle_list,
    get_vehicle_by_id,
    update_vehicle,
    delete_vehicle
}