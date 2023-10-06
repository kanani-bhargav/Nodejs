const { blog_Service } = require("../services");
// Create blog
const create_blog = async(req,res) => {
    try {
        const reqbody = req.body;
        const blog_exist = await blog_Service.get_blog_by_title(reqbody.blog_title);
        if(blog_exist){
            throw new Error("Blog on this title already exist -!- ");
        }
        const blog = await blog_Service.create_blog(reqbody);
        if(!blog){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Blog created successfully ^-^ ",
            data:blog
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}
// Update blog
const update_blog = async(req,res) => {
    try {
        const blog_id = req.params.blogId;
        const reqbody = req.body;
        const blog_exist = await blog_Service.get_blog_by_id(blog_id);
        if(!blog_exist){
            throw new Error("Blog does not exist -!- ");
        }
        const blog_update = await blog_Service.update_blog(blog_id,reqbody);
        if(!blog_update){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Blog updated successfully ^-^ ",
            data:reqbody
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}
// Delete blog
const delete_blog = async(req,res) => {
    try {
        const blog_id = req.params.blogId;
        const blog_exist = await blog_Service.get_blog_by_id(blog_id);
        if(!blog_exist){
            throw new Error("Blog does not exist -!- ");
        }
        const blog_delete = await blog_Service.delete_blog(blog_id);
        if(!blog_delete){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Blog deleted successfully ^-^ ",
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}
// Get blog list
const get_blog_list = async(req,res) => {
    try {
        const blog_list = await blog_Service.get_blog_list();
        if(!blog_list){
          throw new Error("Blog list data not found -!- ");
        }
        res.status(200).json({
          success: true,
          message: "Get blog list dispatch successfully ^-^ ",
          data: blog_list,
        });
      } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
      }
}
// Exporting controller object
module.exports = {
    create_blog,
    get_blog_list,
    update_blog,
    delete_blog
}