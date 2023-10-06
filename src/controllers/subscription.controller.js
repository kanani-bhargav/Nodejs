const { subscription_Service } = require("../services");

const create_subscription = async(req,res) => {
    try {
        const reqbody = req.body;
        const subscription_exist = await subscription_Service.get_subscription_by_name(reqbody.subscription_name);
        if(subscription_exist){
            throw new Error("Subscription on this name already exist -!- ");
        }
        const subscription = await subscription_Service.create_subscription(reqbody);
        if(!subscription){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Subscription created successfully ^-^ ",
            data:subscription
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

const update_subscription = async(req,res) => {
    try {
        const subscription_id = req.params.subscriptionId;
        const reqbody = req.body;
        const subscription_exist = await subscription_Service.get_subscription_by_id(subscription_id);
        if(!subscription_exist){
            throw new Error("Subscription does not exist -!- ");
        }
        const subscription_update = await subscription_Service.update_subscription(subscription_id,reqbody);
        if(!subscription_update){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Subscription updated successfully ^-^ ",
            data:reqbody
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

const delete_subscription = async(req,res) => {
    try {
        const subscription_id = req.params.subscriptionId;
        const subscription_exist = await subscription_Service.get_subscription_by_id(subscription_id);
        if(!subscription_exist){
            throw new Error("Subscription does not exist -!- ");
        }
        const subscription_delete = await subscription_Service.delete_subscription(subscription_id);
        if(!subscription_delete){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Subscription deleted successfully ^-^ ",
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

const get_subscription_list = async(req,res) => {
    try {
        const subscription_list = await subscription_Service.get_subscription_list();
        if(!subscription_list){
          throw new Error("Subscription list data not found -!- ");
        }
        res.status(200).json({
          success: true,
          message: "Get subscription list dispatch successfully ^-^ ",
          data: subscription_list,
        });
      } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
      }
}

module.exports = {
    create_subscription,
    get_subscription_list,
    update_subscription,
    delete_subscription
}