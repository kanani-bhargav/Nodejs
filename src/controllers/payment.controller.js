const { payment_Service } = require("../services");

const create_payment = async(req,res) => {
    try {
        const reqbody = req.body;
        const payment_exist = await payment_Service.get_payment_by_payer(reqbody.payer);
        if(payment_exist){
            throw new Error("Payment already exist -!- ");
        }
        const payment = await payment_Service.create_payment(reqbody);
        if(!payment){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Payment created successfully ^-^ ",
            data:payment
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

const update_payment = async(req,res) => {
    try {
        const payment_id = req.params.paymentId;
        const reqbody = req.body;
        const payment_exist = await payment_Service.get_payment_by_id(payment_id);
        if(!payment_exist){
            throw new Error("Payment does not exist -!- ");
        }
        const payment_update = await payment_Service.update_payment(payment_id,reqbody);
        if(!payment_update){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Payment updated successfully ^-^ ",
            data:reqbody
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

const delete_payment = async(req,res) => {
    try {
        const payment_id = req.params.paymentId;
        const payment_exist = await payment_Service.get_payment_by_id(payment_id);
        if(!payment_exist){
            throw new Error("Payment does not exist -!- ");
        }
        const payment_delete = await payment_Service.delete_payment(payment_id);
        if(!payment_delete){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Payment deleted successfully ^-^ ",
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

const get_payment_list = async(req,res) => {
    try {
        const payment_list = await payment_Service.get_payment_list();
        if(!payment_list){
          throw new Error("Payment list data not found -!- ");
        }
        res.status(200).json({
          success: true,
          message: "Get payment list dispatch successfully ^-^ ",
          data: payment_list,
        });
      } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
      }
}

module.exports = {
    create_payment,
    get_payment_list,
    update_payment,
    delete_payment
}