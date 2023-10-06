const { vehicle_Service } = require("../services");

const create_vehicle = async(req,res) => {
    try {
        const reqbody = req.body;
        const vehicle_exist = await vehicle_Service.get_vehicle_by_model(reqbody.vehicle_model);
        if(vehicle_exist){
            throw new Error("Vehicle on this name already exist -!- ");
        }
        const vehicle = await vehicle_Service.create_vehicle(reqbody);
        if(!vehicle){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Vehicle created successfully ^-^ ",
            data:vehicle
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

const update_vehicle = async(req,res) => {
    try {
        const vehicle_id = req.params.vehicleId;
        const reqbody = req.body;
        const vehicle_exist = await vehicle_Service.get_vehicle_by_id(vehicle_id);
        if(!vehicle_exist){
            throw new Error("Vehicle does not exist -!- ");
        }
        const vehicle_update = await vehicle_Service.update_vehicle(vehicle_id,reqbody);
        if(!vehicle_update){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Vehicle updated successfully ^-^ ",
            data:reqbody
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

const delete_vehicle = async(req,res) => {
    try {
        const vehicle_id = req.params.vehicleId;
        const vehicle_exist = await vehicle_Service.get_vehicle_by_id(vehicle_id);
        if(!vehicle_exist){
            throw new Error("Vehicle does not exist -!- ");
        }
        const vehicle_delete = await vehicle_Service.delete_vehicle(vehicle_id);
        if(!vehicle_delete){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Vehicle deleted successfully ^-^ ",
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

const get_vehicle_list = async(req,res) => {
    try {
        const vehicle_list = await vehicle_Service.get_vehicle_list();
        if(!vehicle_list){
          throw new Error("Vehicle list data not found -!- ");
        }
        res.status(200).json({
          success: true,
          message: "Get vehicle list dispatch successfully ^-^ ",
          data: vehicle_list,
        });
      } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
      }
}

module.exports = {
    create_vehicle,
    get_vehicle_list,
    update_vehicle,
    delete_vehicle
}