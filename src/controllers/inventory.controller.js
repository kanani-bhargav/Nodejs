const { inventory_Service } = require("../services");

const create_inventory = async(req,res) => {
    try {
        const reqbody = req.body;
        const inventory_exist = await inventory_Service.get_inventory_by_name(reqbody.item_name);
        if(inventory_exist){
            throw new Error("Inventory on this name already exist -!- ");
        }
        const inventory = await inventory_Service.create_inventory(reqbody);
        if(!inventory){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Inventory created successfully ^-^ ",
            data:inventory
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

const update_inventory = async(req,res) => {
    try {
        const inventory_id = req.params.inventoryId;
        const reqbody = req.body;
        const inventory_exist = await inventory_Service.get_inventory_by_id(inventory_id);
        if(!inventory_exist){
            throw new Error("Inventory does not exist -!- ");
        }
        const inventory_update = await inventory_Service.update_inventory(inventory_id,reqbody);
        if(!inventory_update){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Inventory updated successfully ^-^ ",
            data:reqbody
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

const delete_inventory = async(req,res) => {
    try {
        const inventory_id = req.params.inventoryId;
        const inventory_exist = await inventory_Service.get_inventory_by_id(inventory_id);
        if(!inventory_exist){
            throw new Error("Inventory does not exist -!- ");
        }
        const inventory_delete = await inventory_Service.delete_inventory(inventory_id);
        if(!inventory_delete){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Inventory deleted successfully ^-^ ",
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

const get_inventory_list = async(req,res) => {
    try {
        const inventory_list = await inventory_Service.get_inventory_list();
        if(!inventory_list){
          throw new Error("Inventory list data not found -!- ");
        }
        res.status(200).json({
          success: true,
          message: "Get inventory list dispatch successfully ^-^ ",
          data: inventory_list,
        });
      } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
      }
}

module.exports = {
    create_inventory,
    get_inventory_list,
    update_inventory,
    delete_inventory
}