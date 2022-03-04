"use strict";

const axios = require('axios');

/**
 * 
 * Toda a lógica deve estar dentro do método ou ser chamada dentro 
 * função handler.
 * 
 * @param event payload recebido da AWS
 * @returns deve sempre retornar um objeto no seguinte formato
 * {
 *  statusCode: Integer,
 *  headers: Object,
 *  body: String,
 * }
 */
module.exports.handler = async (event) => {
  // Obtem o CEP via queryParams.
  if (!event.multiValueQueryStringParameters.cep || !event.multiValueQueryStringParameters.cep.length) {
    throw new Error('Cep is required!');
  }

  // Chama uma API para obter o CEP.
  const reponseRequest = await axios.get(`https://viacep.com.br/ws/${event.multiValueQueryStringParameters.cep[0]}/json/`);
  // Verifica se a resposta é válida.
  if (!reponseRequest || !reponseRequest.data) {
    throw new Error('invalid response!');
  }

  // Monta o corpo da resposta
  const response = {
    zipcode: reponseRequest.data.cep,
    country: 'Brazil',
    province: reponseRequest.data.uf,
    city: reponseRequest.data.localidade,
    district: reponseRequest.data.bairro,
    street: reponseRequest.data.logradouro
  }

  // Envia a reposta ao API Gateway da AWS.
  // A resposta sempre precisa estar neste padrão.
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*"
    },
    body: JSON.stringify(response),
  };
};
