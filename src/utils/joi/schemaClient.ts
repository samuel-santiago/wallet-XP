import Joi from "joi";

export const schemaClient = Joi.object().keys({
  codCliente: Joi.string().required().not().empty(),
  Valor: Joi.number().positive().precision(2).required()
  }); 

  // const schemaClient = Joi.object().keys({
//   email: Joi.string().email().required().messages({
//   'string.email': 'O "email" esta inválido',
//   'any.required': 'O campo "email" é obrigatorio',
//   }),
//   senha: Joi.string().min(8).required().messages({
//   'string.min': 'O campo "senha" precisa de no mínimo 8 caracteres',
//   'any.required': 'O campo "senha" é obrigatorio',
//   }),
