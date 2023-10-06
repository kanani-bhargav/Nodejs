const { buyer_Service } = require("../services");
// Create buyer
const create_buyer = async(req,res) => {
    try {
        const reqbody = req.body;
        const buyer_exist = await buyer_Service.get_buyer_by_name(reqbody.buyer_name);
        if(buyer_exist){
            throw new Error("Buyer by this name already exist -!- ");
        }
        const buyer = await buyer_Service.create_buyer(reqbody);
        if(!buyer){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Buyer created successfully ^-^ ",
            data:buyer
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}
// Update buyer
const update_buyer = async(req,res) => {
    try {
        const buyer_id = req.params.buyerId;
        const reqbody = req.body;
        const buyer_exist = await buyer_Service.get_buyer_by_id(buyer_id);
        if(!buyer_exist){
            throw new Error("Buyer does not exist -!- ");
        }
        const buyer_update = await buyer_Service.update_buyer(buyer_id,reqbody);
        if(!buyer_update){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Buyer updated successfully ^-^ ",
            data:reqbody
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}
// Delete buyer
const delete_buyer = async(req,res) => {
    try {
        const buyer_id = req.params.buyerId;
        const buyer_exist = await buyer_Service.get_buyer_by_id(buyer_id);
        if(!buyer_exist){
            throw new Error("Buyer does not exist -!- ");
        }
        const buyer_delete = await buyer_Service.delete_buyer(buyer_id);
        if(!buyer_delete){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Buyer deleted successfully ^-^ ",
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}
// Get buyer list
const get_buyer_list = async(req,res) => {
    try {
        const buyer_list = await buyer_Service.get_buyer_list();
        if(!buyer_list){
          throw new Error("Buyer list data not found -!- ");
        }
        res.status(200).json({
          success: true,
          message: "Get buyer list dispatch successfully ^-^ ",
          data: buyer_list,
        });
      } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
      }
}
// Exporting contoller object
module.exports = {
    create_buyer,
    get_buyer_list,
    update_buyer,
    delete_buyer
}