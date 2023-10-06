const { crypto_calendar_Service } = require("../services");

// Create crypto calendar
const create_crypto_calendar = async(req,res) => {
    try {
        const reqbody = req.body;
        const crypto_calendar_exist = await crypto_calendar_Service.get_crypto_calendar_by_name(reqbody.crypto_calendar_name);
        if(crypto_calendar_exist){
            throw new Error("Crypto calendar on this name already exist -!- ");
        }
        const crypto_calendar = await crypto_calendar_Service.create_crypto_calendar(reqbody);
        if(!crypto_calendar){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Crypto calendar created successfully ^-^ ",
            data:crypto_calendar
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

// Update crypto calendar
const update_crypto_calendar = async(req,res) => {
    try {
        const crypto_calendar_id = req.params.crypto_calendarId;
        const reqbody = req.body;
        const crypto_calendar_exist = await crypto_calendar_Service.get_crypto_calendar_by_id(crypto_calendar_id);
        if(!crypto_calendar_exist){
            throw new Error("Crypto calendar does not exist -!- ");
        }
        const crypto_calendar_update = await crypto_calendar_Service.update_crypto_calendar(crypto_calendar_id,reqbody);
        if(!crypto_calendar_update){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Crypto calendar updated successfully ^-^ ",
            data:reqbody
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

// Delete crypto calendar
const delete_crypto_calendar = async(req,res) => {
    try {
        const crypto_calendar_id = req.params.crypto_calendarId;
        const crypto_calendar_exist = await crypto_calendar_Service.get_crypto_calendar_by_id(crypto_calendar_id);
        if(!crypto_calendar_exist){
            throw new Error("Crypto calendar does not exist -!- ");
        }
        const crypto_calendar_delete = await crypto_calendar_Service.delete_crypto_calendar(crypto_calendar_id);
        if(!crypto_calendar_delete){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Crypto calendar deleted successfully ^-^ ",
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

// Crypto calendar list
const get_crypto_calendar_list = async(req,res) => {
    try {
        const crypto_calendar_list = await crypto_calendar_Service.get_crypto_calendar_list();
        if(!crypto_calendar_list){
          throw new Error("Crypto calendar list data not found -!- ");
        }
        res.status(200).json({
          success: true,
          message: "Get crypto calendar list dispatch successfully ^-^ ",
          data: crypto_calendar_list,
        });
      } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
      }
}

module.exports = {
    create_crypto_calendar,
    get_crypto_calendar_list,
    update_crypto_calendar,
    delete_crypto_calendar
}