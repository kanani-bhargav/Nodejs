const { Survey } = require("../models");

const get_survey_by_title = async(survey_title) => {
    return Survey.findOne({survey_title})
}

const create_survey = async(reqbody) => {
    return Survey.create(reqbody);
}

const get_survey_list = async() => {
    return Survey.find();
}

const get_survey_by_id = async(survey_id) => {
    return Survey.findById(survey_id);
}

const update_survey = async(survey_id,reqbody) => {
    return Survey.findByIdAndUpdate(survey_id,{$set:reqbody});
}

const delete_survey = async(survey_id) => {
    return Survey.findByIdAndDelete(survey_id);
}

module.exports = {
    get_survey_by_title,
    create_survey,
    get_survey_list,
    get_survey_by_id,
    update_survey,
    delete_survey
}