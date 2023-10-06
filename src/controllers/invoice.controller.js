const { invoice_Service } = require("../services");

const create_invoice = async(req,res) => {
    try {
        const reqbody = req.body;
        const invoice_exist = await invoice_Service.get_invoice_by_no(reqbody.invoice_no);
        if(invoice_exist){
            throw new Error("Invoice on this number already exist -!- ");
        }
        const invoice = await invoice_Service.create_invoice(reqbody);
        if(!invoice){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Invoice created successfully ^-^ ",
            data:invoice
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

const update_invoice = async(req,res) => {
    try {
        const invoice_id = req.params.invoiceId;
        const reqbody = req.body;
        const invoice_exist = await invoice_Service.get_invoice_by_id(invoice_id);
        if(!invoice_exist){
            throw new Error("Invoice does not exist -!- ");
        }
        const invoice_update = await invoice_Service.update_invoice(invoice_id,reqbody);
        if(!invoice_update){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Invoice updated successfully ^-^ ",
            data:reqbody
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

const delete_invoice = async(req,res) => {
    try {
        const invoice_id = req.params.invoiceId;
        const invoice_exist = await invoice_Service.get_invoice_by_id(invoice_id);
        if(!invoice_exist){
            throw new Error("Invoice does not exist -!- ");
        }
        const invoice_delete = await invoice_Service.delete_invoice(invoice_id);
        if(!invoice_delete){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Invoice deleted successfully ^-^ ",
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

const get_invoice_list = async(req,res) => {
    try {
        const invoice_list = await invoice_Service.get_invoice_list();
        if(!invoice_list){
          throw new Error("Invoice list data not found -!- ");
        }
        res.status(200).json({
          success: true,
          message: "Get invoice list dispatch successfully ^-^ ",
          data: invoice_list,
        });
      } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
      }
}

module.exports = {
    create_invoice,
    get_invoice_list,
    update_invoice,
    delete_invoice
}