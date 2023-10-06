const { sport_news_Service } = require("../services");

// Create sport news
const create_sport_news = async(req,res) => {
    try {
        const reqbody = req.body;
        const sport_news_exist = await sport_news_Service.get_sport_news_by_name(reqbody.sport_news_name);
        if(sport_news_exist){
            throw new Error("Sport news on this name already exist -!- ");
        }
        const sport_news = await sport_news_Service.create_sport_news(reqbody);
        if(!sport_news){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Sport news created successfully ^-^ ",
            data:sport_news
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

// Update sport news
const update_sport_news = async(req,res) => {
    try {
        const sport_news_id = req.params.sport_newsId;
        const reqbody = req.body;
        const sport_news_exist = await sport_news_Service.get_sport_news_by_id(sport_news_id);
        if(!sport_news_exist){
            throw new Error("Sport news does not exist -!- ");
        }
        const sport_news_update = await sport_news_Service.update_sport_news(sport_news_id,reqbody);
        if(!sport_news_update){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Sport news updated successfully ^-^ ",
            data:reqbody
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

// Delete sport news
const delete_sport_news = async(req,res) => {
    try {
        const sport_news_id = req.params.sport_newsId;
        const sport_news_exist = await sport_news_Service.get_sport_news_by_id(sport_news_id);
        if(!sport_news_exist){
            throw new Error("Sport news does not exist -!- ");
        }
        const sport_news_delete = await sport_news_Service.delete_sport_news(sport_news_id);
        if(!sport_news_delete){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Sport news deleted successfully ^-^ ",
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

// Sport news list
const get_sport_news_list = async(req,res) => {
    try {
        const sport_news_list = await sport_news_Service.get_sport_news_list();
        if(!sport_news_list){
          throw new Error("Sport news list data not found -!- ");
        }
        res.status(200).json({
          success: true,
          message: "Get sport news list dispatch successfully ^-^ ",
          data: sport_news_list,
        });
      } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
      }
}

module.exports = {
    create_sport_news,
    get_sport_news_list,
    update_sport_news,
    delete_sport_news
}