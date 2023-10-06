const { sport_event_Service } = require("../services");

// Create sport event
const create_sport_event = async(req,res) => {
    try {
        const reqbody = req.body;
        const sport_event_exist = await sport_event_Service.get_sport_event_by_name(reqbody.sport_event_name);
        if(sport_event_exist){
            throw new Error("Sport event on this name already exist -!- ");
        }
        const sport_event = await sport_event_Service.create_sport_event(reqbody);
        if(!sport_event){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Sport event created successfully ^-^ ",
            data:sport_event
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

// Update sport event
const update_sport_event = async(req,res) => {
    try {
        const sport_event_id = req.params.sport_eventId;
        const reqbody = req.body;
        const sport_event_exist = await sport_event_Service.get_sport_event_by_id(sport_event_id);
        if(!sport_event_exist){
            throw new Error("Sport event does not exist -!- ");
        }
        const sport_event_update = await sport_event_Service.update_sport_event(sport_event_id,reqbody);
        if(!sport_event_update){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Sport event updated successfully ^-^ ",
            data:reqbody
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

// Delete sport event
const delete_sport_event = async(req,res) => {
    try {
        const sport_event_id = req.params.sport_eventId;
        const sport_event_exist = await sport_event_Service.get_sport_event_by_id(sport_event_id);
        if(!sport_event_exist){
            throw new Error("Sport event does not exist -!- ");
        }
        const sport_event_delete = await sport_event_Service.delete_sport_event(sport_event_id);
        if(!sport_event_delete){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Sport event deleted successfully ^-^ ",
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

// Sport event list
const get_sport_event_list = async(req,res) => {
    try {
        const sport_event_list = await sport_event_Service.get_sport_event_list();
        if(!sport_event_list){
          throw new Error("Sport event list data not found -!- ");
        }
        res.status(200).json({
          success: true,
          message: "Get sport event list dispatch successfully ^-^ ",
          data: sport_event_list,
        });
      } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
      }
}

module.exports = {
    create_sport_event,
    get_sport_event_list,
    update_sport_event,
    delete_sport_event
}