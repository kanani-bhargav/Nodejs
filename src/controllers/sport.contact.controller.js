const { sport_contact_Service } = require("../services");

// Create sport contact
const create_sport_contact = async(req,res) => {
    try {
        const reqbody = req.body;
        const sport_contact_exist = await sport_contact_Service.get_sport_contact_by_path(reqbody.sport_contact_name);
        if(sport_contact_exist){
            throw new Error("Sport contact on this path already exist -!- ");
        }
        const sport_contact = await sport_contact_Service.create_sport_contact(reqbody);
        if(!sport_contact){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Sport contact created successfully ^-^ ",
            data:sport_contact
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

// Update sport contact
const update_sport_contact = async(req,res) => {
    try {
        const sport_contact_id = req.params.sport_contactId;
        const reqbody = req.body;
        const sport_contact_exist = await sport_contact_Service.get_sport_contact_by_id(sport_contact_id);
        if(!sport_contact_exist){
            throw new Error("Sport contact does not exist -!- ");
        }
        const sport_contact_update = await sport_contact_Service.update_sport_contact(sport_contact_id,reqbody);
        if(!sport_contact_update){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Sport contact updated successfully ^-^ ",
            data:reqbody
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

// Delete sport contact
const delete_sport_contact = async(req,res) => {
    try {
        const sport_contact_id = req.params.sport_contactId;
        const sport_contact_exist = await sport_contact_Service.get_sport_contact_by_id(sport_contact_id);
        if(!sport_contact_exist){
            throw new Error("Sport contact does not exist -!- ");
        }
        const sport_contact_delete = await sport_contact_Service.delete_sport_contact(sport_contact_id);
        if(!sport_contact_delete){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Sport contact deleted successfully ^-^ ",
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

// Sport contact list
const get_sport_contact_list = async(req,res) => {
    try {
        const sport_contact_list = await sport_contact_Service.get_sport_contact_list();
        if(!sport_contact_list){
          throw new Error("Sport contact list data not found -!- ");
        }
        res.status(200).json({
          success: true,
          message: "Get sport contact list dispatch successfully ^-^ ",
          data: sport_contact_list,
        });
      } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
      }
}

module.exports = {
    create_sport_contact,
    get_sport_contact_list,
    update_sport_contact,
    delete_sport_contact
}