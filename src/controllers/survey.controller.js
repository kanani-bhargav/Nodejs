const { survey_Service } = require("../services");

const create_survey = async(req,res) => {
    try {
        const reqbody = req.body;
        const survey_exist = await survey_Service.get_survey_by_title(reqbody.survey_title);
        if(survey_exist){
            throw new Error("Survey on this name already exist -!- ");
        }
        const survey = await survey_Service.create_survey(reqbody);
        if(!survey){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Survey created successfully ^-^ ",
            data:survey
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

const update_survey = async(req,res) => {
    try {
        const survey_id = req.params.surveyId;
        const reqbody = req.body;
        const survey_exist = await survey_Service.get_survey_by_id(survey_id);
        if(!survey_exist){
            throw new Error("Survey does not exist -!- ");
        }
        const survey_update = await survey_Service.update_survey(survey_id,reqbody);
        if(!survey_update){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Survey updated successfully ^-^ ",
            data:reqbody
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

const delete_survey = async(req,res) => {
    try {
        const survey_id = req.params.surveyId;
        const survey_exist = await survey_Service.get_survey_by_id(survey_id);
        if(!survey_exist){
            throw new Error("Survey does not exist -!- ");
        }
        const survey_delete = await survey_Service.delete_survey(survey_id);
        if(!survey_delete){
            throw new Error("Something went wrong, try again later -!- ");
        }
        res.status(200).json({
            succcess:true,
            message:"Survey deleted successfully ^-^ ",
        })
    } catch (error) {
        res.status(400).json({
            succcess:false,
            message: error.message,
        })
    }
}

const get_survey_list = async(req,res) => {
    try {
        const survey_list = await survey_Service.get_survey_list();
        if(!survey_list){
          throw new Error("Survey list data not found -!- ");
        }
        res.status(200).json({
          success: true,
          message: "Get survey list dispatch successfully ^-^ ",
          data: survey_list,
        });
      } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
      }
}

module.exports = {
    create_survey,
    get_survey_list,
    update_survey,
    delete_survey
}