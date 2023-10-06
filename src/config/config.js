const dotenv = require("dotenv");
const Joi = require("joi");

dotenv.config();

const envVarsSchema = Joi.object({
  MONGODB_URL: Joi.string().trim().description("mogodb url"),
  PORT: Joi.number().integer().default(3000),
  JWT_SECRET_KEY: Joi.string().trim().description("jwt secret key"),
  BASE_URL: Joi.string().trim().description("base url"),
}).unknown();

const { value: envVars, error } = envVarsSchema
  .prefs({ errors: { label: "key" } })
  .validate(process.env);

  if (error) {
    console.log("Config Error: ", error);
    process.exit(1);
  }

module.exports = {
  mongoDB: {
    url: envVars.MONGODB_URL,
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
  port: envVars.PORT,
  jwt: {
    secret_key: envVars.JWT_SECRET_KEY,
  },
  base_url:envVars.BASE_URL
};
