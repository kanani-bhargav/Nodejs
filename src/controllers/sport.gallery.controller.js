const { sport_gallery_Service } = require("../services");

// Create sport gallery
const create_sport_gallery = async(req,res) => {
    try {
        const reqbody = req.body;
        const sport_gallery_exist = await sport_gallery_Service.get_sport_gallery_by_no(reqbody.sport_gallery_name);
        if(sport_gallery_exist){
            throw new Error("Sport gallery on this no already exist -!- ");
        }
        const sport_gallery = await sport_gallery_Service.create_sport_gallery(reqbody);
        if(!sport_gallery){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Sport gallery created successfully ^-^ ",
            data:sport_gallery
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

// Update sport gallery
const update_sport_gallery = async(req,res) => {
    try {
        const sport_gallery_id = req.params.sport_galleryId;
        const reqbody = req.body;
        const sport_gallery_exist = await sport_gallery_Service.get_sport_gallery_by_id(sport_gallery_id);
        if(!sport_gallery_exist){
            throw new Error("Sport gallery does not exist -!- ");
        }
        const sport_gallery_update = await sport_gallery_Service.update_sport_gallery(sport_gallery_id,reqbody);
        if(!sport_gallery_update){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Sport gallery updated successfully ^-^ ",
            data:reqbody
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

// Delete sport gallery
const delete_sport_gallery = async(req,res) => {
    try {
        const sport_gallery_id = req.params.sport_galleryId;
        const sport_gallery_exist = await sport_gallery_Service.get_sport_gallery_by_id(sport_gallery_id);
        if(!sport_gallery_exist){
            throw new Error("Sport gallery does not exist -!- ");
        }
        const sport_gallery_delete = await sport_gallery_Service.delete_sport_gallery(sport_gallery_id);
        if(!sport_gallery_delete){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Sport gallery deleted successfully ^-^ ",
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

// Sport gallery list
const get_sport_gallery_list = async(req,res) => {
    try {
        const sport_gallery_list = await sport_gallery_Service.get_sport_gallery_list();
        if(!sport_gallery_list){
          throw new Error("Sport gallery list data not found -!- ");
        }
        res.status(200).json({
          success: true,
          message: "Get sport gallery list dispatch successfully ^-^ ",
          data: sport_gallery_list,
        });
      } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
      }
}

module.exports = {
    create_sport_gallery,
    get_sport_gallery_list,
    update_sport_gallery,
    delete_sport_gallery
}