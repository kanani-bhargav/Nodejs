const { sport_coach_Service } = require("../services");

// Create sport coach
const create_sport_coach = async(req,res) => {
    try {
        const reqbody = req.body;
        const sport_coach_exist = await sport_coach_Service.get_sport_coach_by_name(reqbody.sport_coach_name);
        if(sport_coach_exist){
            throw new Error("Sport coach on this name already exist -!- ");
        }
        const sport_coach = await sport_coach_Service.create_sport_coach(reqbody);
        if(!sport_coach){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Sport coach created successfully ^-^ ",
            data:sport_coach
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

// Update sport coach
const update_sport_coach = async(req,res) => {
    try {
        const sport_coach_id = req.params.sport_coachId;
        const reqbody = req.body;
        const sport_coach_exist = await sport_coach_Service.get_sport_coach_by_id(sport_coach_id);
        if(!sport_coach_exist){
            throw new Error("Sport coach does not exist -!- ");
        }
        const sport_coach_update = await sport_coach_Service.update_sport_coach(sport_coach_id,reqbody);
        if(!sport_coach_update){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Sport coach updated successfully ^-^ ",
            data:reqbody
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

// Delete sport coach
const delete_sport_coach = async(req,res) => {
    try {
        const sport_coach_id = req.params.sport_coachId;
        const sport_coach_exist = await sport_coach_Service.get_sport_coach_by_id(sport_coach_id);
        if(!sport_coach_exist){
            throw new Error("Sport coach does not exist -!- ");
        }
        const sport_coach_delete = await sport_coach_Service.delete_sport_coach(sport_coach_id);
        if(!sport_coach_delete){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Sport coach deleted successfully ^-^ ",
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

// Sport coach list
const get_sport_coach_list = async(req,res) => {
    try {
        const sport_coach_list = await sport_coach_Service.get_sport_coach_list();
        if(!sport_coach_list){
          throw new Error("Sport coach list data not found -!- ");
        }
        res.status(200).json({
          success: true,
          message: "Get sport coach list dispatch successfully ^-^ ",
          data: sport_coach_list,
        });
      } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
      }
}

module.exports = {
    create_sport_coach,
    get_sport_coach_list,
    update_sport_coach,
    delete_sport_coach
}