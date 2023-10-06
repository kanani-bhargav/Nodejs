const { forum_Service } = require("../services");

const create_forum = async(req,res) => {
    try {
        const reqbody = req.body;
        const forum_exist = await forum_Service.get_forum_by_topic(reqbody.forum_topic);
        if(forum_exist){
            throw new Error("Forum on this name already exist -!- ");
        }
        const forum = await forum_Service.create_forum(reqbody);
        if(!forum){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Forum created successfully ^-^ ",
            data:forum
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

const update_forum = async(req,res) => {
    try {
        const forum_id = req.params.forumId;
        const reqbody = req.body;
        const forum_exist = await forum_Service.get_forum_by_id(forum_id);
        if(!forum_exist){
            throw new Error("Forum does not exist -!- ");
        }
        const forum_update = await forum_Service.update_forum(forum_id,reqbody);
        if(!forum_update){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Forum updated successfully ^-^ ",
            data:reqbody
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

const delete_forum = async(req,res) => {
    try {
        const forum_id = req.params.forumId;
        const forum_exist = await forum_Service.get_forum_by_id(forum_id);
        if(!forum_exist){
            throw new Error("Forum does not exist -!- ");
        }
        const forum_delete = await forum_Service.delete_forum(forum_id);
        if(!forum_delete){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Forum deleted successfully ^-^ ",
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

const get_forum_list = async(req,res) => {
    try {
        const forum_list = await forum_Service.get_forum_list();
        if(!forum_list){
          throw new Error("Forum list data not found -!- ");
        }
        res.status(200).json({
          success: true,
          message: "Get forum list dispatch successfully ^-^ ",
          data: forum_list,
        });
      } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
      }
}

module.exports = {
    create_forum,
    get_forum_list,
    update_forum,
    delete_forum
}