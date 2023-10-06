const { crypto_type_Service } = require("../services");

// Create crypto type
const create_crypto_type = async(req,res) => {
    try {
        const reqbody = req.body;
        const crypto_type_exist = await crypto_type_Service.get_crypto_type_by_name(reqbody.crypto_type_name);
        if(crypto_type_exist){
            throw new Error("Crypto type on this name already exist -!- ");
        }
        const crypto_type = await crypto_type_Service.create_crypto_type(reqbody);
        if(!crypto_type){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Crypto type created successfully ^-^ ",
            data:crypto_type
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

// Update crypto type
const update_crypto_type = async(req,res) => {
    try {
        const crypto_type_id = req.params.crypto_typeId;
        const reqbody = req.body;
        const crypto_type_exist = await crypto_type_Service.get_crypto_type_by_id(crypto_type_id);
        if(!crypto_type_exist){
            throw new Error("Crypto type does not exist -!- ");
        }
        const crypto_type_update = await crypto_type_Service.update_crypto_type(crypto_type_id,reqbody);
        if(!crypto_type_update){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Crypto type updated successfully ^-^ ",
            data:reqbody
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

// Delete crypto type
const delete_crypto_type = async(req,res) => {
    try {
        const crypto_type_id = req.params.crypto_typeId;
        const crypto_type_exist = await crypto_type_Service.get_crypto_type_by_id(crypto_type_id);
        if(!crypto_type_exist){
            throw new Error("Crypto type does not exist -!- ");
        }
        const crypto_type_delete = await crypto_type_Service.delete_crypto_type(crypto_type_id);
        if(!crypto_type_delete){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Crypto type deleted successfully ^-^ ",
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

// Crypto type list
const get_crypto_type_list = async(req,res) => {
    try {
        const crypto_type_list = await crypto_type_Service.get_crypto_type_list();
        if(!crypto_type_list){
          throw new Error("Crypto type list data not found -!- ");
        }
        res.status(200).json({
          success: true,
          message: "Get crypto type list dispatch successfully ^-^ ",
          data: crypto_type_list,
        });
      } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
      }
}

module.exports = {
    create_crypto_type,
    get_crypto_type_list,
    update_crypto_type,
    delete_crypto_type
}