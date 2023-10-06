const { supplier_Service } = require("../services");

const create_supplier = async(req,res) => {
    try {
        const reqbody = req.body;
        const supplier_exist = await supplier_Service.get_supplier_by_name(reqbody.supplier_name);
        if(supplier_exist){
            throw new Error("Supplier by this name already exist -!- ");
        }
        const supplier = await supplier_Service.create_supplier(reqbody);
        if(!supplier){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Supplier created successfully ^-^ ",
            data:supplier
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

const update_supplier = async(req,res) => {
    try {
        const supplier_id = req.params.supplierId;
        const reqbody = req.body;
        const supplier_exist = await supplier_Service.get_supplier_by_id(supplier_id);
        if(!supplier_exist){
            throw new Error("Supplier does not exist -!- ");
        }
        const supplier_update = await supplier_Service.update_supplier(supplier_id,reqbody);
        if(!supplier_update){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Supplier updated successfully ^-^ ",
            data:reqbody
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

const delete_supplier = async(req,res) => {
    try {
        const supplier_id = req.params.supplierId;
        const supplier_exist = await supplier_Service.get_supplier_by_id(supplier_id);
        if(!supplier_exist){
            throw new Error("Supplier does not exist -!- ");
        }
        const supplier_delete = await supplier_Service.delete_supplier(supplier_id);
        if(!supplier_delete){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Supplier deleted successfully ^-^ ",
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

const get_supplier_list = async(req,res) => {
    try {
        const supplier_list = await supplier_Service.get_supplier_list();
        if(!supplier_list){
          throw new Error("Supplier list data not found -!- ");
        }
        res.status(200).json({
          success: true,
          message: "Get supplier list dispatch successfully ^-^ ",
          data: supplier_list,
        });
      } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
      }
}

module.exports = {
    create_supplier,
    get_supplier_list,
    update_supplier,
    delete_supplier
}