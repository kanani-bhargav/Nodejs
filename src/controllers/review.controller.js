const { review_Service } = require("../services");

// Create Review
const create_review = async(req,res) => {
    try {
        const reqbody = req.body;
        const review_exist = await review_Service.get_review_by_topic(reqbody.review_topic);
        if(review_exist){
            throw new Error("Review on this topic already exist -!- ");
        }
        const review = await review_Service.create_review(reqbody);
        if(!review){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Review created successfully ^-^ ",
            data:review
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

const update_review = async(req,res) => {
    try {
        const review_id = req.params.reviewId;
        const reqbody = req.body;
        const review_exist = await review_Service.get_review_by_id(review_id);
        if(!review_exist){
            throw new Error("Review does not exist -!- ");
        }
        const review_update = await review_Service.update_review(review_id,reqbody);
        if(!review_update){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Review updated successfully ^-^ ",
            data:reqbody
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

const delete_review = async(req,res) => {
    try {
        const review_id = req.params.reviewId;
        const review_exist = await review_Service.get_review_by_id(review_id);
        if(!review_exist){
            throw new Error("Review does not exist -!- ");
        }
        const review_delete = await review_Service.delete_review(review_id);
        if(!review_delete){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Review deleted successfully ^-^ ",
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

const get_review_list = async(req,res) => {
    try {
        const review_list = await review_Service.get_review_list();
        if(!review_list){
          throw new Error("Review list data not found -!- ");
        }
        res.status(200).json({
          success: true,
          message: "Get review list dispatch successfully ^-^ ",
          data: review_list,
        });
      } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
      }
}

module.exports = {
    create_review,
    get_review_list,
    update_review,
    delete_review
}