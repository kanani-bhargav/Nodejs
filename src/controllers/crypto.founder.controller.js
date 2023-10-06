const { crypto_founder_Service } = require("../services");

// Create crypto founder
const create_crypto_founder = async(req,res) => {
    try {
        const reqbody = req.body;
        const crypto_founder_exist = await crypto_founder_Service.get_crypto_founder_by_name(reqbody.crypto_founder_name);
        if(crypto_founder_exist){
            throw new Error("Crypto founder on this name already exist -!- ");
        }
        const crypto_founder = await crypto_founder_Service.create_crypto_founder(reqbody);
        if(!crypto_founder){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Crypto founder created successfully ^-^ ",
            data:crypto_founder
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

// Update crypto founder
const update_crypto_founder = async(req,res) => {
    try {
        const crypto_founder_id = req.params.crypto_founderId;
        const reqbody = req.body;
        const crypto_founder_exist = await crypto_founder_Service.get_crypto_founder_by_id(crypto_founder_id);
        if(!crypto_founder_exist){
            throw new Error("Crypto founder does not exist -!- ");
        }
        const crypto_founder_update = await crypto_founder_Service.update_crypto_founder(crypto_founder_id,reqbody);
        if(!crypto_founder_update){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Crypto founder updated successfully ^-^ ",
            data:reqbody
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

// Delete crypto founder
const delete_crypto_founder = async(req,res) => {
    try {
        const crypto_founder_id = req.params.crypto_founderId;
        const crypto_founder_exist = await crypto_founder_Service.get_crypto_founder_by_id(crypto_founder_id);
        if(!crypto_founder_exist){
            throw new Error("Crypto founder does not exist -!- ");
        }
        const crypto_founder_delete = await crypto_founder_Service.delete_crypto_founder(crypto_founder_id);
        if(!crypto_founder_delete){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Crypto founder deleted successfully ^-^ ",
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

// Crypto founder list
const get_crypto_founder_list = async(req,res) => {
    try {
        const crypto_founder_list = await crypto_founder_Service.get_crypto_founder_list();
        if(!crypto_founder_list){
          throw new Error("Crypto founder list data not found -!- ");
        }
        res.status(200).json({
          success: true,
          message: "Get crypto founder list dispatch successfully ^-^ ",
          data: crypto_founder_list,
        });
      } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
      }
}

module.exports = {
    create_crypto_founder,
    get_crypto_founder_list,
    update_crypto_founder,
    delete_crypto_founder
}