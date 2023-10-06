const Joi = require("joi");

/** create createPayment */
const createPayment = {
  body: Joi.object().keys({
    order: Joi.string().required().trim(),
    user: Joi.string().required().trim(),
    payment_method: Joi.string().required().trim(),
    transaction_id: Joi.string().required().trim(),
    payment_status: Joi.string().required().trim(),
}),
};

/** GEt Payment list */
const getPaymentList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get Payment details by id */
const getPaymentDetails = {
  params: Joi.object().keys({
    paymentId: Joi.string().required().trim(),
  }),
};

/**payment details update by id */
const updatePaymentDetails={
  params:Joi.object().keys({
    paymentId:Joi.string().required().trim(),
  }),
  body: Joi.object().keys({
    payment_method: Joi.string().required().trim(),
    transaction_id: Joi.string().required().trim(),
    payment_status: Joi.string().required().trim(),
  }),
}


module.exports = {
  createPayment,
  getPaymentList,
  getPaymentDetails,
  updatePaymentDetails
};
