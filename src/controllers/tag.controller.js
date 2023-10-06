const { tag_Service } = require("../services");
// Create tag
const create_tag = async(req,res) => {
    try {
        const reqbody = req.body;
        const tag_exist = await tag_Service.get_tag_by_name(reqbody.tag_name);
        if(tag_exist){
            throw new Error("Tag on this name already exist -!- ");
        }
        const tag = await tag_Service.create_tag(reqbody);
        if(!tag){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Tag created successfully ^-^ ",
            data:tag
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}
// Update tag
const update_tag = async(req,res) => {
    try {
        const tag_id = req.params.tagId;
        const reqbody = req.body;
        const tag_exist = await tag_Service.get_tag_by_id(tag_id);
        if(!tag_exist){
            throw new Error("Tag does not exist -!- ");
        }
        const tag_update = await tag_Service.update_tag(tag_id,reqbody);
        if(!tag_update){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Tag updated successfully ^-^ ",
            data:reqbody
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}
// Delete tag
const delete_tag = async(req,res) => {
    try {
        const tag_id = req.params.tagId;
        const tag_exist = await tag_Service.get_tag_by_id(tag_id);
        if(!tag_exist){
            throw new Error("Tag does not exist -!- ");
        }
        const tag_delete = await tag_Service.delete_tag(tag_id);
        if(!tag_delete){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Tag deleted successfully ^-^ ",
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}
// Get tag list
const get_tag_list = async(req,res) => {
    try {
        const tag_list = await tag_Service.get_tag_list();
        if(!tag_list){
          throw new Error("Tag list data not found -!- ");
        }
        res.status(200).json({
          success: true,
          message: "Get tag list dispatch successfully ^-^ ",
          data: tag_list,
        });
      } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
      }
}
// Expoting controller object
module.exports = {
    create_tag,
    get_tag_list,
    update_tag,
    delete_tag
}