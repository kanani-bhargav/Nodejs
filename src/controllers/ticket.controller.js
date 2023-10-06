const { ticket_Service } = require("../services");

const create_ticket = async(req,res) => {
    try {
        const reqbody = req.body;
        const ticket_exist = await ticket_Service.get_ticket_by_number(reqbody.ticket_number);
        if(ticket_exist){
            throw new Error("Ticket on this name already exist -!- ");
        }
        const ticket = await ticket_Service.create_ticket(reqbody);
        if(!ticket){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Ticket created successfully ^-^ ",
            data:ticket
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

const update_ticket = async(req,res) => {
    try {
        const ticket_id = req.params.ticketId;
        const reqbody = req.body;
        const ticket_exist = await ticket_Service.get_ticket_by_id(ticket_id);
        if(!ticket_exist){
            throw new Error("Ticket does not exist -!- ");
        }
        const ticket_update = await ticket_Service.update_ticket(ticket_id,reqbody);
        if(!ticket_update){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Ticket updated successfully ^-^ ",
            data:reqbody
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

const delete_ticket = async(req,res) => {
    try {
        const ticket_id = req.params.ticketId;
        const ticket_exist = await ticket_Service.get_ticket_by_id(ticket_id);
        if(!ticket_exist){
            throw new Error("Ticket does not exist -!- ");
        }
        const ticket_delete = await ticket_Service.delete_ticket(ticket_id);
        if(!ticket_delete){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Ticket deleted successfully ^-^ ",
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

const get_ticket_list = async(req,res) => {
    try {
        const ticket_list = await ticket_Service.get_ticket_list();
        if(!ticket_list){
          throw new Error("Ticket list data not found -!- ");
        }
        res.status(200).json({
          success: true,
          message: "Get ticket list dispatch successfully ^-^ ",
          data: ticket_list,
        });
      } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
      }
}

module.exports = {
    create_ticket,
    get_ticket_list,
    update_ticket,
    delete_ticket
}