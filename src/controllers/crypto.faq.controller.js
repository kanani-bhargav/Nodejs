const { crypto_faq_Service } = require("../services");

// Create crypto faq
const create_crypto_faq = async(req,res) => {
    try {
        const reqbody = req.body;
        const crypto_faq_exist = await crypto_faq_Service.get_crypto_faq_by_name(reqbody.crypto_faq_name);
        if(crypto_faq_exist){
            throw new Error("Crypto faq on this name already exist -!- ");
        }
        const crypto_faq = await crypto_faq_Service.create_crypto_faq(reqbody);
        if(!crypto_faq){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Crypto faq created successfully ^-^ ",
            data:crypto_faq
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

// Update crypto faq
const update_crypto_faq = async(req,res) => {
    try {
        const crypto_faq_id = req.params.crypto_faqId;
        const reqbody = req.body;
        const crypto_faq_exist = await crypto_faq_Service.get_crypto_faq_by_id(crypto_faq_id);
        if(!crypto_faq_exist){
            throw new Error("Crypto faq does not exist -!- ");
        }
        const crypto_faq_update = await crypto_faq_Service.update_crypto_faq(crypto_faq_id,reqbody);
        if(!crypto_faq_update){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Crypto faq updated successfully ^-^ ",
            data:reqbody
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

// Delete crypto faq
const delete_crypto_faq = async(req,res) => {
    try {
        const crypto_faq_id = req.params.crypto_faqId;
        const crypto_faq_exist = await crypto_faq_Service.get_crypto_faq_by_id(crypto_faq_id);
        if(!crypto_faq_exist){
            throw new Error("Crypto faq does not exist -!- ");
        }
        const crypto_faq_delete = await crypto_faq_Service.delete_crypto_faq(crypto_faq_id);
        if(!crypto_faq_delete){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Crypto faq deleted successfully ^-^ ",
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

// Crypto faq list
const get_crypto_faq_list = async(req,res) => {
    try {
        const crypto_faq_list = await crypto_faq_Service.get_crypto_faq_list();
        if(!crypto_faq_list){
          throw new Error("Crypto faq list data not found -!- ");
        }
        res.status(200).json({
          success: true,
          message: "Get crypto_faq list dispatch successfully ^-^ ",
          data: crypto_faq_list,
        });
      } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
      }
}

module.exports = {
    create_crypto_faq,
    get_crypto_faq_list,
    update_crypto_faq,
    delete_crypto_faq
}