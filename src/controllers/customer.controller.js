const { customer_Service } = require("../services");

const create_customer = async(req,res) => {
    try {
        const reqbody = req.body;
        const customer_exist = await customer_Service.get_customer_by_code(reqbody.customer_code);
        if(customer_exist){
            throw new Error("Customers on this topic already exist -!- ");
        }
        const customer = await customer_Service.create_customer(reqbody);
        if(!customer){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Customers created successfully ^-^ ",
            data:customer
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

const update_customer = async(req,res) => {
    try {
        const customer_id = req.params.customerId;
        const reqbody = req.body;
        const customer_exist = await customer_Service.get_customer_by_id(customer_id);
        if(!customer_exist){
            throw new Error("Customers does not exist -!- ");
        }
        const customer_update = await customer_Service.update_customer(customer_id,reqbody);
        if(!customer_update){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Customers updated successfully ^-^ ",
            data:reqbody
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

const delete_customer = async(req,res) => {
    try {
        const customer_id = req.params.customerId;
        const customer_exist = await customer_Service.get_customer_by_id(customer_id);
        if(!customer_exist){
            throw new Error("Customers does not exist -!- ");
        }
        const customer_delete = await customer_Service.delete_customer(customer_id);
        if(!customer_delete){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Customers deleted successfully ^-^ ",
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

const get_customer_list = async(req,res) => {
    try {
        const customer_list = await customer_Service.get_customer_list();
        if(!customer_list){
          throw new Error("Customers list data not found -!- ");
        }
        res.status(200).json({
          success: true,
          message: "Get customer list dispatch successfully ^-^ ",
          data: customer_list,
        });
      } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
      }
}

module.exports = {
    create_customer,
    get_customer_list,
    update_customer,
    delete_customer
}