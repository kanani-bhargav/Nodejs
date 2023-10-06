const { event_Service } = require("../services");

const create_event = async(req,res) => {
    try {
        const reqbody = req.body;
        const event_exist = await event_Service.get_event_by_name(reqbody.event_name);
        if(event_exist){
            throw new Error("Event on this name already exist -!- ");
        }
        const event = await event_Service.create_event(reqbody);
        if(!event){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Event created successfully ^-^ ",
            data:event
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

const update_event = async(req,res) => {
    try {
        const event_id = req.params.eventId;
        const reqbody = req.body;
        const event_exist = await event_Service.get_event_by_id(event_id);
        if(!event_exist){
            throw new Error("Event does not exist -!- ");
        }
        const event_update = await event_Service.update_event(event_id,reqbody);
        if(!event_update){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Event updated successfully ^-^ ",
            data:reqbody
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

const delete_event = async(req,res) => {
    try {
        const event_id = req.params.eventId;
        const event_exist = await event_Service.get_event_by_id(event_id);
        if(!event_exist){
            throw new Error("Event does not exist -!- ");
        }
        const event_delete = await event_Service.delete_event(event_id);
        if(!event_delete){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Event deleted successfully ^-^ ",
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

const get_event_list = async(req,res) => {
    try {
        const event_list = await event_Service.get_event_list();
        if(!event_list){
          throw new Error("Event list data not found -!- ");
        }
        res.status(200).json({
          success: true,
          message: "Get event list dispatch successfully ^-^ ",
          data: event_list,
        });
      } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
      }
}

module.exports = {
    create_event,
    get_event_list,
    update_event,
    delete_event
}