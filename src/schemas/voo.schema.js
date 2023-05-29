import Joi from "joi"

export const passagemSchema = Joi.object({
    destino: Joi.string().max(100).required(),
    saida: Joi.string().max(100).required(),
    partida: Joi.string().max(100).required(),
    chegada: Joi.string().max(100).required(),
    preco: Joi.number().precision(2).required(),
});
