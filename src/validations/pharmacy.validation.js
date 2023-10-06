const Joi = require("joi");

/** create createPharmacy */
const createPharmacy = {
  body: Joi.object().keys({
    pharmacy_name: Joi.string().required().trim(),
    pharmacy_location: Joi.string().required().trim(),
    medicine_name: Joi.string().required().trim(),
  }),
};

/** GEt Pharmacy list */
const getPharmacyList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get Pharmacy details by id */
const getPharmacyDetails = {
  params: Joi.object().keys({
    pharmacyId: Joi.string().required().trim(),
  }),
};

/**pharmacy details update by id */
const updatePharmacyDetails={
  params:Joi.object().keys({
    pharmacyId:Joi.string().required().trim(),
  }),
  body: Joi.object().keys({
    pharmacy_name: Joi.string().required().trim(),
    pharmacy_location: Joi.string().required().trim(),
    medicine_name: Joi.string().required().trim(),
  }),
}


module.exports = {
  createPharmacy,
  getPharmacyList,
  getPharmacyDetails,
  updatePharmacyDetails
};
