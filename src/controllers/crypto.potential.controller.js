const { crypto_potential_Service } = require("../services");

// Create crypto potential
const create_crypto_potential = async(req,res) => {
    try {
        const reqbody = req.body;
        const crypto_potential_exist = await crypto_potential_Service.get_crypto_potential_by_name(reqbody.crypto_potential_name);
        if(crypto_potential_exist){
            throw new Error("Crypto potential on this name already exist -!- ");
        }
        const crypto_potential = await crypto_potential_Service.create_crypto_potential(reqbody);
        if(!crypto_potential){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Crypto potential created successfully ^-^ ",
            data:crypto_potential
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

// Update crypto potential
const update_crypto_potential = async(req,res) => {
    try {
        const crypto_potential_id = req.params.crypto_potentialId;
        const reqbody = req.body;
        const crypto_potential_exist = await crypto_potential_Service.get_crypto_potential_by_id(crypto_potential_id);
        if(!crypto_potential_exist){
            throw new Error("Crypto potential does not exist -!- ");
        }
        const crypto_potential_update = await crypto_potential_Service.update_crypto_potential(crypto_potential_id,reqbody);
        if(!crypto_potential_update){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Crypto potential updated successfully ^-^ ",
            data:reqbody
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

// Delete crypto potential
const delete_crypto_potential = async(req,res) => {
    try {
        const crypto_potential_id = req.params.crypto_potentialId;
        const crypto_potential_exist = await crypto_potential_Service.get_crypto_potential_by_id(crypto_potential_id);
        if(!crypto_potential_exist){
            throw new Error("Crypto potential does not exist -!- ");
        }
        const crypto_potential_delete = await crypto_potential_Service.delete_crypto_potential(crypto_potential_id);
        if(!crypto_potential_delete){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Crypto potential deleted successfully ^-^ ",
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

// Crypto potential list
const get_crypto_potential_list = async(req,res) => {
    try {
        const crypto_potential_list = await crypto_potential_Service.get_crypto_potential_list();
        if(!crypto_potential_list){
          throw new Error("Crypto potential list data not found -!- ");
        }
        res.status(200).json({
          success: true,
          message: "Get crypto_potential list dispatch successfully ^-^ ",
          data: crypto_potential_list,
        });
      } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
      }
}

module.exports = {
    create_crypto_potential,
    get_crypto_potential_list,
    update_crypto_potential,
    delete_crypto_potential
}