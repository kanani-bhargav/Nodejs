const { poll_Service } = require("../services");

const create_poll = async(req,res) => {
    try {
        const reqbody = req.body;
        const poll_exist = await poll_Service.get_poll_by_question(reqbody.poll_question);
        if(poll_exist){
            throw new Error("Poll on this name already exist -!- ");
        }
        const poll = await poll_Service.create_poll(reqbody);
        if(!poll){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Poll created successfully ^-^ ",
            data:poll
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

const update_poll = async(req,res) => {
    try {
        const poll_id = req.params.pollId;
        const reqbody = req.body;
        const poll_exist = await poll_Service.get_poll_by_id(poll_id);
        if(!poll_exist){
            throw new Error("Poll does not exist -!- ");
        }
        const poll_update = await poll_Service.update_poll(poll_id,reqbody);
        if(!poll_update){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Poll updated successfully ^-^ ",
            data:reqbody
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

const delete_poll = async(req,res) => {
    try {
        const poll_id = req.params.pollId;
        const poll_exist = await poll_Service.get_poll_by_id(poll_id);
        if(!poll_exist){
            throw new Error("Poll does not exist -!- ");
        }
        const poll_delete = await poll_Service.delete_poll(poll_id);
        if(!poll_delete){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Poll deleted successfully ^-^ ",
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

const get_poll_list = async(req,res) => {
    try {
        const poll_list = await poll_Service.get_poll_list();
        if(!poll_list){
          throw new Error("Poll list data not found -!- ");
        }
        res.status(200).json({
          success: true,
          message: "Get poll list dispatch successfully ^-^ ",
          data: poll_list,
        });
      } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
      }
}

module.exports = {
    create_poll,
    get_poll_list,
    update_poll,
    delete_poll
}