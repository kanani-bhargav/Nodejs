const { crypto_rating_Service } = require("../services");

// Create crypto rating
const create_crypto_rating = async(req,res) => {
    try {
        const reqbody = req.body;
        const crypto_rating_exist = await crypto_rating_Service.get_crypto_rating_by_name(reqbody.crypto_rating_name);
        if(crypto_rating_exist){
            throw new Error("Crypto rating on this name already exist -!- ");
        }
        const crypto_rating = await crypto_rating_Service.create_crypto_rating(reqbody);
        if(!crypto_rating){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Crypto rating created successfully ^-^ ",
            data:crypto_rating
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

// Update crypto rating
const update_crypto_rating = async(req,res) => {
    try {
        const crypto_rating_id = req.params.crypto_ratingId;
        const reqbody = req.body;
        const crypto_rating_exist = await crypto_rating_Service.get_crypto_rating_by_id(crypto_rating_id);
        if(!crypto_rating_exist){
            throw new Error("Crypto rating does not exist -!- ");
        }
        const crypto_rating_update = await crypto_rating_Service.update_crypto_rating(crypto_rating_id,reqbody);
        if(!crypto_rating_update){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Crypto rating updated successfully ^-^ ",
            data:reqbody
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

// Delete crypto rating
const delete_crypto_rating = async(req,res) => {
    try {
        const crypto_rating_id = req.params.crypto_ratingId;
        const crypto_rating_exist = await crypto_rating_Service.get_crypto_rating_by_id(crypto_rating_id);
        if(!crypto_rating_exist){
            throw new Error("Crypto rating does not exist -!- ");
        }
        const crypto_rating_delete = await crypto_rating_Service.delete_crypto_rating(crypto_rating_id);
        if(!crypto_rating_delete){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Crypto rating deleted successfully ^-^ ",
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

// Crypto rating list
const get_crypto_rating_list = async(req,res) => {
    try {
        const crypto_rating_list = await crypto_rating_Service.get_crypto_rating_list();
        if(!crypto_rating_list){
          throw new Error("Crypto rating list data not found -!- ");
        }
        res.status(200).json({
          success: true,
          message: "Get crypto rating list dispatch successfully ^-^ ",
          data: crypto_rating_list,
        });
      } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
      }
}

module.exports = {
    create_crypto_rating,
    get_crypto_rating_list,
    update_crypto_rating,
    delete_crypto_rating
}