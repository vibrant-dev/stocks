import Joi from 'joi'

const UserSignUpSchema = Joi.object().keys({
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  password: Joi.string().required(),
  email: Joi.string().required(),
  username: Joi.string().required(),
  mobile_number: Joi.string(),
})

export default UserSignUpSchema
