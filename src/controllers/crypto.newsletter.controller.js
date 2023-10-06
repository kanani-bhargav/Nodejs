const { crypto_newsletter_Service } = require("../services");

// Create crypto newsletter
const create_crypto_newsletter = async(req,res) => {
    try {
        const reqbody = req.body;
        const crypto_newsletter_exist = await crypto_newsletter_Service.get_crypto_newsletter_by_topic(reqbody.crypto_newsletter_topic);
        if(crypto_newsletter_exist){
            throw new Error("Crypto newsletter on this topic already exist -!- ");
        }
        const crypto_newsletter = await crypto_newsletter_Service.create_crypto_newsletter(reqbody);
        if(!crypto_newsletter){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Crypto newsletter created successfully ^-^ ",
            data:crypto_newsletter
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

// Update crypto newsletter
const update_crypto_newsletter = async(req,res) => {
    try {
        const crypto_newsletter_id = req.params.crypto_newsletterId;
        const reqbody = req.body;
        const crypto_newsletter_exist = await crypto_newsletter_Service.get_crypto_newsletter_by_id(crypto_newsletter_id);
        if(!crypto_newsletter_exist){
            throw new Error("Crypto newsletter does not exist -!- ");
        }
        const crypto_newsletter_update = await crypto_newsletter_Service.update_crypto_newsletter(crypto_newsletter_id,reqbody);
        if(!crypto_newsletter_update){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Crypto newsletter updated successfully ^-^ ",
            data:reqbody
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

// Delete crypto newsletter
const delete_crypto_newsletter = async(req,res) => {
    try {
        const crypto_newsletter_id = req.params.crypto_newsletterId;
        const crypto_newsletter_exist = await crypto_newsletter_Service.get_crypto_newsletter_by_id(crypto_newsletter_id);
        if(!crypto_newsletter_exist){
            throw new Error("Crypto newsletter does not exist -!- ");
        }
        const crypto_newsletter_delete = await crypto_newsletter_Service.delete_crypto_newsletter(crypto_newsletter_id);
        if(!crypto_newsletter_delete){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Crypto newsletter deleted successfully ^-^ ",
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

// Crypto newsletter list
const get_crypto_newsletter_list = async(req,res) => {
    try {
        const crypto_newsletter_list = await crypto_newsletter_Service.get_crypto_newsletter_list();
        if(!crypto_newsletter_list){
          throw new Error("Crypto newsletter list data not found -!- ");
        }
        res.status(200).json({
          success: true,
          message: "Get crypto newsletter list dispatch successfully ^-^ ",
          data: crypto_newsletter_list,
        });
      } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
      }
}

module.exports = {
    create_crypto_newsletter,
    get_crypto_newsletter_list,
    update_crypto_newsletter,
    delete_crypto_newsletter
}