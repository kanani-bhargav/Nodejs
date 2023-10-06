const { crypto_Service } = require("../services");

// Create crypto
const create_crypto = async(req,res) => {
    try {
        const reqbody = req.body;
        const crypto_exist = await crypto_Service.get_crypto_by_name(reqbody.crypto_name);
        if(crypto_exist){
            throw new Error("Crypto on this name already exist -!- ");
        }
        const crypto = await crypto_Service.create_crypto(reqbody);
        if(!crypto){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Crypto created successfully ^-^ ",
            data:crypto
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

// Update crypto
const update_crypto = async(req,res) => {
    try {
        const crypto_id = req.params.cryptoId;
        const reqbody = req.body;
        const crypto_exist = await crypto_Service.get_crypto_by_id(crypto_id);
        if(!crypto_exist){
            throw new Error("Crypto does not exist -!- ");
        }
        const crypto_update = await crypto_Service.update_crypto(crypto_id,reqbody);
        if(!crypto_update){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Crypto updated successfully ^-^ ",
            data:reqbody
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

// Delete crypto
const delete_crypto = async(req,res) => {
    try {
        const crypto_id = req.params.cryptoId;
        const crypto_exist = await crypto_Service.get_crypto_by_id(crypto_id);
        if(!crypto_exist){
            throw new Error("Crypto does not exist -!- ");
        }
        const crypto_delete = await crypto_Service.delete_crypto(crypto_id);
        if(!crypto_delete){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Crypto deleted successfully ^-^ ",
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

// Crypto list
const get_crypto_list = async(req,res) => {
    try {
        const crypto_list = await crypto_Service.get_crypto_list();
        if(!crypto_list){
          throw new Error("Crypto list data not found -!- ");
        }
        res.status(200).json({
          success: true,
          message: "Get crypto list dispatch successfully ^-^ ",
          data: crypto_list,
        });
      } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
      }
}

module.exports = {
    create_crypto,
    get_crypto_list,
    update_crypto,
    delete_crypto
}