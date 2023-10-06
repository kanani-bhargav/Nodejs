const { crypto_news_Service } = require("../services");

// Create crypto news
const create_crypto_news = async(req,res) => {
    try {
        const reqbody = req.body;
        const crypto_news_exist = await crypto_news_Service.get_crypto_news_by_name(reqbody.crypto_news_name);
        if(crypto_news_exist){
            throw new Error("Crypto news on this name already exist -!- ");
        }
        const crypto_news = await crypto_news_Service.create_crypto_news(reqbody);
        if(!crypto_news){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Crypto news created successfully ^-^ ",
            data:crypto_news
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

// Update crypto news
const update_crypto_news = async(req,res) => {
    try {
        const crypto_news_id = req.params.crypto_newsId;
        const reqbody = req.body;
        const crypto_news_exist = await crypto_news_Service.get_crypto_news_by_id(crypto_news_id);
        if(!crypto_news_exist){
            throw new Error("Crypto news does not exist -!- ");
        }
        const crypto_news_update = await crypto_news_Service.update_crypto_news(crypto_news_id,reqbody);
        if(!crypto_news_update){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Crypto news updated successfully ^-^ ",
            data:reqbody
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

// Delete crypto news
const delete_crypto_news = async(req,res) => {
    try {
        const crypto_news_id = req.params.crypto_newsId;
        const crypto_news_exist = await crypto_news_Service.get_crypto_news_by_id(crypto_news_id);
        if(!crypto_news_exist){
            throw new Error("Crypto news does not exist -!- ");
        }
        const crypto_news_delete = await crypto_news_Service.delete_crypto_news(crypto_news_id);
        if(!crypto_news_delete){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Crypto news deleted successfully ^-^ ",
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

// Crypto news list
const get_crypto_news_list = async(req,res) => {
    try {
        const crypto_news_list = await crypto_news_Service.get_crypto_news_list();
        if(!crypto_news_list){
          throw new Error("Crypto news list data not found -!- ");
        }
        res.status(200).json({
          success: true,
          message: "Get crypto news list dispatch successfully ^-^ ",
          data: crypto_news_list,
        });
      } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
      }
}

module.exports = {
    create_crypto_news,
    get_crypto_news_list,
    update_crypto_news,
    delete_crypto_news
}