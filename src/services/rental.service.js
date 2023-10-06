const { Rental } = require("../models");

const get_rental_by_item = async(rental_item) => {
    return Rental.findOne({rental_item})
}

const create_rental = async(reqbody) => {
    return Rental.create(reqbody);
}

const get_rental_list = async() => {
    return Rental.find();
}

const get_rental_by_id = async(rental_id) => {
    return Rental.findById(rental_id);
}

const update_rental = async(rental_id,reqbody) => {
    return Rental.findByIdAndUpdate(rental_id,{$set:reqbody});
}

const delete_rental = async(rental_id) => {
    return Rental.findByIdAndDelete(rental_id);
}

module.exports = {
    get_rental_by_item,
    create_rental,
    get_rental_list,
    get_rental_by_id,
    update_rental,
    delete_rental
}