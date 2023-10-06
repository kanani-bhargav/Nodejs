const { crypto_link_Service } = require("../services");

// Create crypto link
const create_crypto_link = async(req,res) => {
    try {
        const reqbody = req.body;
        const crypto_link_exist = await crypto_link_Service.get_crypto_link_by_name(reqbody.crypto_link_name);
        if(crypto_link_exist){
            throw new Error("Crypto link on this name already exist -!- ");
        }
        const crypto_link = await crypto_link_Service.create_crypto_link(reqbody);
        if(!crypto_link){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Crypto link created successfully ^-^ ",
            data:crypto_link
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

// Update crypto link
const update_crypto_link = async(req,res) => {
    try {
        const crypto_link_id = req.params.crypto_linkId;
        const reqbody = req.body;
        const crypto_link_exist = await crypto_link_Service.get_crypto_link_by_id(crypto_link_id);
        if(!crypto_link_exist){
            throw new Error("Crypto link does not exist -!- ");
        }
        const crypto_link_update = await crypto_link_Service.update_crypto_link(crypto_link_id,reqbody);
        if(!crypto_link_update){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Crypto link updated successfully ^-^ ",
            data:reqbody
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

// Delete crypto link
const delete_crypto_link = async(req,res) => {
    try {
        const crypto_link_id = req.params.crypto_linkId;
        const crypto_link_exist = await crypto_link_Service.get_crypto_link_by_id(crypto_link_id);
        if(!crypto_link_exist){
            throw new Error("Crypto link does not exist -!- ");
        }
        const crypto_link_delete = await crypto_link_Service.delete_crypto_link(crypto_link_id);
        if(!crypto_link_delete){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Crypto link deleted successfully ^-^ ",
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

// Crypto link list
const get_crypto_link_list = async(req,res) => {
    try {
        const crypto_link_list = await crypto_link_Service.get_crypto_link_list();
        if(!crypto_link_list){
          throw new Error("Crypto link list data not found -!- ");
        }
        res.status(200).json({
          success: true,
          message: "Get crypto link list dispatch successfully ^-^ ",
          data: crypto_link_list,
        });
      } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
      }
}

module.exports = {
    create_crypto_link,
    get_crypto_link_list,
    update_crypto_link,
    delete_crypto_link
}