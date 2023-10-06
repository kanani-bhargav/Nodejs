const { comment_Service } = require("../services");

const create_comment = async(req,res) => {
    try {
        const reqbody = req.body;
        const comment_exist = await comment_Service.get_comment_by_topic(reqbody.comment_topic);
        if(comment_exist){
            throw new Error("Comment on this topic already exist -!- ");
        }
        const comment = await comment_Service.create_comment(reqbody);
        if(!comment){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Comment created successfully ^-^ ",
            data:comment
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

const update_comment = async(req,res) => {
    try {
        const comment_id = req.params.commentId;
        const reqbody = req.body;
        const comment_exist = await comment_Service.get_comment_by_id(comment_id);
        if(!comment_exist){
            throw new Error("Comment does not exist -!- ");
        }
        const comment_update = await comment_Service.update_comment(comment_id,reqbody);
        if(!comment_update){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Comment updated successfully ^-^ ",
            data:reqbody
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

const delete_comment = async(req,res) => {
    try {
        const comment_id = req.params.commentId;
        const comment_exist = await comment_Service.get_comment_by_id(comment_id);
        if(!comment_exist){
            throw new Error("Comment does not exist -!- ");
        }
        const comment_delete = await comment_Service.delete_comment(comment_id);
        if(!comment_delete){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Comment deleted successfully ^-^ ",
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

const get_comment_list = async(req,res) => {
    try {
        const comment_list = await comment_Service.get_comment_list();
        if(!comment_list){
          throw new Error("Comment list data not found -!- ");
        }
        res.status(200).json({
          success: true,
          message: "Get comment list dispatch successfully ^-^ ",
          data: comment_list,
        });
      } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
      }
}

module.exports = {
    create_comment,
    get_comment_list,
    update_comment,
    delete_comment
}