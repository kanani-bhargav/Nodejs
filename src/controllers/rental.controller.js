const { rental_Service } = require("../services");

const create_rental = async(req,res) => {
    try {
        const reqbody = req.body;
        const rental_exist = await rental_Service.get_rental_by_item(reqbody.rental_item);
        if(rental_exist){
            throw new Error("Rental on this name already exist -!- ");
        }
        const rental = await rental_Service.create_rental(reqbody);
        if(!rental){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Rental created successfully ^-^ ",
            data:rental
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

const update_rental = async(req,res) => {
    try {
        const rental_id = req.params.rentalId;
        const reqbody = req.body;
        const rental_exist = await rental_Service.get_rental_by_id(rental_id);
        if(!rental_exist){
            throw new Error("Rental does not exist -!- ");
        }
        const rental_update = await rental_Service.update_rental(rental_id,reqbody);
        if(!rental_update){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Rental updated successfully ^-^ ",
            data:reqbody
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

const delete_rental = async(req,res) => {
    try {
        const rental_id = req.params.rentalId;
        const rental_exist = await rental_Service.get_rental_by_id(rental_id);
        if(!rental_exist){
            throw new Error("Rental does not exist -!- ");
        }
        const rental_delete = await rental_Service.delete_rental(rental_id);
        if(!rental_delete){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Rental deleted successfully ^-^ ",
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

const get_rental_list = async(req,res) => {
    try {
        const rental_list = await rental_Service.get_rental_list();
        if(!rental_list){
          throw new Error("Rental list data not found -!- ");
        }
        res.status(200).json({
          success: true,
          message: "Get rental list dispatch successfully ^-^ ",
          data: rental_list,
        });
      } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
      }
}

module.exports = {
    create_rental,
    get_rental_list,
    update_rental,
    delete_rental
}