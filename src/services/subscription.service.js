const { Subscription } = require("../models");

const get_subscription_by_name = async(subscription_name) => {
    return Subscription.findOne({subscription_name})
}

const create_subscription = async(reqbody) => {
    return Subscription.create(reqbody);
}

const get_subscription_list = async() => {
    return Subscription.find();
}

const get_subscription_by_id = async(subscription_id) => {
    return Subscription.findById(subscription_id);
}

const update_subscription = async(subscription_id,reqbody) => {
    return Subscription.findByIdAndUpdate(subscription_id,{$set:reqbody});
}

const delete_subscription = async(subscription_id) => {
    return Subscription.findByIdAndDelete(subscription_id);
}

module.exports = {
    get_subscription_by_name,
    create_subscription,
    get_subscription_list,
    get_subscription_by_id,
    update_subscription,
    delete_subscription
}