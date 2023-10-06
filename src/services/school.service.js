const { School } = require("../models");

/**
 * Create School
 * @param {object} reqBody
 * @returns {Promise<School>}
 */
const createSchool = async (reqBody) => {
  return School.create(reqBody);
};

/**
 * Get School list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<School>}
 */
const getSchoolList = async (filter, options) => {
  // return School.find()
  return School.find({ $or: [ {school_courses:"engineering"}] })
};

/**
 * Delete School
 * @param {ObjectId} SchoolId
 * @returns {Promise<School>}
 */
const deleteSchool = async (SchoolId) => {
  return School.findByIdAndDelete(SchoolId);
};

/**
 * school details update by id
 * @param {ObjectId} userId
 * @param {object} updateBody
 * @returns {Promise<School>}
 */

const updateSchoolDetails=async (schoolId,updateBody)=>{
  return  School.findByIdAndUpdate(schoolId,{$set:updateBody})
}

module.exports = {
    createSchool,
    getSchoolList,
    deleteSchool,
    updateSchoolDetails
};
