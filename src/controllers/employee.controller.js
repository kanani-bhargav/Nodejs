const { employee_Service } = require("../services");

const create_employee = async(req,res) => {
    try {
        const reqbody = req.body;
        const employee_exist = await employee_Service.get_employee_by_email(reqbody.employee_email);
        if(employee_exist){
            throw new Error("Employee by this email already exist -!- ");
        }
        const employee = await employee_Service.create_employee(reqbody);
        if(!employee){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Employee created successfully ^-^ ",
            data:employee
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

const update_employee = async(req,res) => {
    try {
        const employee_id = req.params.employeeId;
        const reqbody = req.body;
        const employee_exist = await employee_Service.get_employee_by_id(employee_id);
        if(!employee_exist){
            throw new Error("Employee does not exist -!- ");
        }
        const employee_update = await employee_Service.update_employee(employee_id,reqbody);
        if(!employee_update){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Employee updated successfully ^-^ ",
            data:reqbody
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

const delete_employee = async(req,res) => {
    try {
        const employee_id = req.params.employeeId;
        const employee_exist = await employee_Service.get_employee_by_id(employee_id);
        if(!employee_exist){
            throw new Error("Employee does not exist -!- ");
        }
        const employee_delete = await employee_Service.delete_employee(employee_id);
        if(!employee_delete){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Employee deleted successfully ^-^ ",
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

const get_employee_list = async(req,res) => {
    try {
        const employee_list = await employee_Service.get_employee_list();
        if(!employee_list){
          throw new Error("Employee list data not found -!- ");
        }
        res.status(200).json({
          success: true,
          message: "Get employee list dispatch successfully ^-^ ",
          data: employee_list,
        });
      } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
      }
}

module.exports = {
    create_employee,
    get_employee_list,
    update_employee,
    delete_employee
}