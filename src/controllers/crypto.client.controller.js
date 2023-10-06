const { crypto_client_Service } = require("../services");

// Create crypto client
const create_crypto_client = async(req,res) => {
    try {
        const reqbody = req.body;
        const crypto_client_exist = await crypto_client_Service.get_crypto_client_by_name(reqbody.crypto_client_name);
        if(crypto_client_exist){
            throw new Error("Crypto client on this name already exist -!- ");
        }
        const crypto_client = await crypto_client_Service.create_crypto_client(reqbody);
        if(!crypto_client){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Crypto client created successfully ^-^ ",
            data:crypto_client
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

// Update crypto client
const update_crypto_client = async(req,res) => {
    try {
        const crypto_client_id = req.params.crypto_clientId;
        const reqbody = req.body;
        const crypto_client_exist = await crypto_client_Service.get_crypto_client_by_id(crypto_client_id);
        if(!crypto_client_exist){
            throw new Error("Crypto client does not exist -!- ");
        }
        const crypto_client_update = await crypto_client_Service.update_crypto_client(crypto_client_id,reqbody);
        if(!crypto_client_update){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Crypto client updated successfully ^-^ ",
            data:reqbody
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

// Delete crypto client
const delete_crypto_client = async(req,res) => {
    try {
        const crypto_client_id = req.params.crypto_clientId;
        const crypto_client_exist = await crypto_client_Service.get_crypto_client_by_id(crypto_client_id);
        if(!crypto_client_exist){
            throw new Error("Crypto client does not exist -!- ");
        }
        const crypto_client_delete = await crypto_client_Service.delete_crypto_client(crypto_client_id);
        if(!crypto_client_delete){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Crypto client deleted successfully ^-^ ",
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

// Crypto client list
const get_crypto_client_list = async(req,res) => {
    try {
        const crypto_client_list = await crypto_client_Service.get_crypto_client_list();
        if(!crypto_client_list){
          throw new Error("Crypto client list data not found -!- ");
        }
        res.status(200).json({
          success: true,
          message: "Get crypto client list dispatch successfully ^-^ ",
          data: crypto_client_list,
        });
      } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
      }
}

module.exports = {
    create_crypto_client,
    get_crypto_client_list,
    update_crypto_client,
    delete_crypto_client
}